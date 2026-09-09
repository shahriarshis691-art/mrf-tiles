import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

function load(file) {
  const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
  const exports={};
  new Function('exports',code)(exports);
  return exports;
}
const keys=['NEXT_PUBLIC_SITE_URL','VERCEL','VERCEL_PROJECT_PRODUCTION_URL','NODE_ENV','NEXT_PUBLIC_SUPABASE_URL'];
const original=Object.fromEntries(keys.map(key=>[key,process.env[key]]));
try {
  for(const key of keys)delete process.env[key];
  const {getSiteUrl}=load('lib/site.ts');
  process.env.NODE_ENV='development';
  assert.equal(getSiteUrl(),'http://localhost:3000');
  process.env.NODE_ENV='production';
  assert.throws(getSiteUrl,/must be configured/);
  process.env.NEXT_PUBLIC_SITE_URL='https://example.com/subpage';
  assert.equal(getSiteUrl(),'https://example.com');
  process.env.NEXT_PUBLIC_SITE_URL='https://username:password@example.com';
  assert.throws(getSiteUrl,/without credentials/);
  process.env.NEXT_PUBLIC_SITE_URL='ftp://example.com';
  assert.throws(getSiteUrl,/HTTP\(S\)/);
  process.env.NEXT_PUBLIC_SITE_URL='http://localhost:3000';
  process.env.VERCEL='1';
  assert.throws(getSiteUrl,/must be configured/);
  process.env.VERCEL_PROJECT_PRODUCTION_URL='example.vercel.app';
  assert.equal(getSiteUrl(),'https://example.vercel.app');
  process.env.NEXT_PUBLIC_SITE_URL='https://example.com';
  assert.equal(getSiteUrl(),'https://example.com');
  process.env.NEXT_PUBLIC_SUPABASE_URL='https://audit-project.supabase.co';
  const config=load('next.config.ts').default;
  const rules=await config.headers();
  const csp=rules.flatMap(rule=>rule.headers).find(h=>h.key==='Content-Security-Policy').value;
  assert.ok(csp.includes('https://audit-project.supabase.co'));
  assert.ok(!csp.includes('https://*.supabase.co'));
  assert.ok(config.images.remotePatterns.some(p=>p instanceof URL&&p.href==='https://audit-project.supabase.co/storage/v1/object/public/website-assets/**'));
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  assert.equal(load('next.config.ts').default.images.remotePatterns.length,2);
  console.log('Site URL safeguards and scoped Supabase CSP/image configuration: passed');
} finally {
  for(const key of keys)if(original[key]===undefined)delete process.env[key];else process.env[key]=original[key];
}
