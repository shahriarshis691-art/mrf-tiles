import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const base = process.env.AUDIT_BASE_URL || 'http://localhost:3100';
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const files = ['app', 'components', 'lib', 'data'].flatMap(walk).filter(f => /\.[cm]?[jt]sx?$/.test(f));
const config = ts.readConfigFile('tsconfig.json', ts.sys.readFile).config;
const options = ts.parseJsonConfigFileContent(config, ts.sys, process.cwd()).options;
const graph = new Map();
const missingAssets = [];
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const parsed = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const edges = [];
  function visit(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      const resolved = ts.resolveModuleName(node.moduleSpecifier.text, file, options, ts.sys).resolvedModule;
      if (resolved && !resolved.isExternalLibraryImport) edges.push(path.resolve(resolved.resolvedFileName));
    }
    if (ts.isStringLiteral(node) && /^\/(?!\/).*\.(jpg|jpeg|png|webp|svg|gif|ico|avif)$/i.test(node.text) && !fs.existsSync(path.join('public', node.text))) missingAssets.push({file, asset:node.text});
    ts.forEachChild(node, visit);
  }
  visit(parsed);
  graph.set(path.resolve(file), edges);
}
const cycles = [], visited = new Set(), active = [];
function traverse(file) {
  if (active.includes(file)) {cycles.push([...active.slice(active.indexOf(file)), file].map(f => path.relative(process.cwd(), f))); return;}
  if (visited.has(file)) return;
  active.push(file);
  for (const edge of graph.get(file) || []) traverse(edge);
  active.pop();visited.add(file);
}
for (const file of graph.keys()) traverse(file);
const reachable = new Set();
function mark(file) {if(reachable.has(file)) return; reachable.add(file);for(const edge of graph.get(file)||[])mark(edge);}
for(const file of graph.keys()) if(path.relative(process.cwd(),file).startsWith(`app${path.sep}`))mark(file);
const unusedComponents = [...graph.keys()].filter(f => path.relative(process.cwd(),f).startsWith(`components${path.sep}`) && !reachable.has(f)).map(f=>path.relative(process.cwd(),f));
const decode = s => s.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])]));
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
const xml = await sitemapResponse.text();
const sitemapUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>decode(m[1]));
const paths = new Set(sitemapUrls.map(u=>new URL(u).pathname));
const pending = [...paths, '/admin', '/admin/login','/admin/forgot-password','/admin/reset-password','/admin/mfa'];
const pages = new Map(), assets = new Set(), links = [], failures = [], external = new Set();
while(pending.length) {
  const batch = pending.splice(0,8).filter(p=>!pages.has(p));
  await Promise.all(batch.map(async route => {
    const response = await fetch(new URL(route,base));
    const html = await response.text();
    const info = {status:response.status,finalPath:new URL(response.url).pathname,title:html.match(/<title>(.*?)<\/title>/s)?.[1],ids:[...html.matchAll(/\bid="([^"]*)"/g)].map(m=>decode(m[1]))};
    pages.set(route,info);
    if(response.status!==200)failures.push({route,status:response.status});
    if(!route.startsWith('/admin')) {
      for (const token of ['name="description"','property="og:title"','property="og:description"','property="og:image"','rel="canonical"','width=device-width, initial-scale=1']) if(!html.includes(token))failures.push({route,missing:token});
      const canonical=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>attrs(m[0])).find(a=>a.rel==='canonical')?.href;
      if(canonical && new URL(canonical).pathname!==route.split('?')[0])failures.push({route,canonical});
    }
    for(const match of html.matchAll(/<a\b[^>]*>/g)) {
      const a=attrs(match[0]);if(!a.href)continue;
      if(a.target==='_blank' && (!a.rel?.includes('noopener')||!a.rel?.includes('noreferrer')))failures.push({route,unsafeBlank:a.href});
      const url=new URL(a.href,new URL(route,base));
      if(url.origin===new URL(base).origin) {
        links.push({from:route,to:url.pathname,hash:url.hash});
        if(!pages.has(url.pathname)&&!pending.includes(url.pathname))pending.push(url.pathname);
      } else external.add(a.href);
    }
    for(const match of html.matchAll(/<img\b[^>]*>/g)) {const a=attrs(match[0]);if(a.src&&!a.src.startsWith('data:'))assets.add(a.src);if(a.srcset)for(const src of a.srcset.split(','))assets.add(src.trim().split(' ')[0]);}
  }));
}
for(const link of links) if(link.hash && !pages.get(link.to)?.ids.includes(decodeURIComponent(link.hash.slice(1))))failures.push({brokenAnchor:link});
const assetList=[...assets];let checkedAssets=0;
while(assetList.length) await Promise.all(assetList.splice(0,8).map(async asset=>{const r=await fetch(new URL(asset,base));await r.arrayBuffer();checkedAssets++;if(!r.ok||!r.headers.get('content-type')?.startsWith('image/'))failures.push({asset,status:r.status});}));
const robots = await (await fetch(`${base}/robots.txt`)).text();
for(const href of external) {
  const url=new URL(href);
  if(url.protocol==='tel:'&&!/^tel:\+\d{8,15}$/.test(href))failures.push({invalidPhone:href});
  else if(url.hostname==='wa.me'&&(url.protocol!=='https:'||!/^\/\d{8,15}$/.test(url.pathname)))failures.push({invalidWhatsApp:href});
  else if(url.protocol!=='tel:'&&url.protocol!=='mailto:'&&url.protocol!=='https:')failures.push({invalidExternalProtocol:href});
}
for(const icon of ['/favicon.ico','/icon.svg']) {const response=await fetch(`${base}${icon}`);if(!response.ok)failures.push({icon,status:response.status});}
const publicMetadataOrigin = sitemapUrls.length > 0 && sitemapUrls.every(value => {const u=new URL(value);return u.protocol==='https:'&&!['localhost','127.0.0.1','[::1]'].includes(u.hostname);});
const notFound = await fetch(`${base}/launch-audit-nonexistent-route`);
const manifest=JSON.parse(fs.readFileSync('.next/prerender-manifest.json','utf8'));
const missingSitemapRoutes=Object.keys(manifest.routes).filter(p=>!p.startsWith('/_')&&!/\.(txt|xml|svg|ico)$/.test(p)&&!paths.has(p));
const report={sourceFiles:files.length,cycles,unusedComponents,missingAssets,sitemapRoutes:sitemapUrls.length,sitemapOrigins:[...new Set(sitemapUrls.map(u=>new URL(u).origin))],publicMetadataOrigin,missingSitemapRoutes,pagesChecked:pages.size,imagesChecked:checkedAssets,externalLinks:[...external],notFoundStatus:notFound.status,robots,failures};
fs.mkdirSync('docs',{recursive:true});fs.writeFileSync('docs/launch-audit-results.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,externalLinks:[...new Set([...external].map(u=>u.split('?')[0]))]},null,2));
if(cycles.length||missingAssets.length||failures.length||missingSitemapRoutes.length||notFound.status!==404||!publicMetadataOrigin)process.exitCode=1;
