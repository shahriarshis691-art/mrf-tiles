'use server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import sharp from 'sharp';
import { requireAdmin } from './auth';
import { contentInput, productInput, stockInput } from './validation';
import { storageService } from '@/lib/supabase/server';

function refresh() { revalidatePath('/', 'layout'); revalidatePath('/sitemap.xml'); }
async function run<T>(fn:()=>Promise<T>) {
 try { const data=await fn(); refresh(); return {ok:true as const,data}; }
 catch(error){ return {ok:false as const,error:error instanceof Error ? error.message : 'Operation failed.'}; }
}
export async function saveProduct(input:unknown) {
 return run(async()=>{
  const {db}=await requireAdmin(); const p=productInput.parse(input);
  const existing=p.id ? await db.from('products').select('payload').eq('id',p.id).single() : null;
  if(existing?.error) throw new Error('Product not found.');
  const {data,error}=await db.rpc('save_product',{p_id:p.id,p_version:p.version,p_data:{...p,payload:{...existing?.data?.payload,...p.payload}},p_variant:p});
  if(error) throw new Error(error.message); return data;
 });
}
export async function deleteProduct(id:string) {
 return run(async()=>{ const {db}=await requireAdmin(); z.string().uuid().parse(id);
 const {data,error}=await db.from('products').delete().eq('id',id).eq('status','archived').select('id');
 if(error) throw new Error('Cannot delete a product with inventory history. Keep it archived.');
 if(!data?.length) throw new Error('Archive the product before permanently deleting it.'); });
}
export async function saveContent(input:unknown,isNew:boolean) {
 return run(async()=>{const {db}=await requireAdmin();const c=contentInput.parse(input);
 const query=isNew ? db.from('content').insert(c) : db.from('content').update({...c,version:c.version+1}).eq('id',c.id).eq('version',c.version);
 const {data,error}=await query.select('id');if(error) throw new Error(error.message);if(!data?.length) throw new Error('Content changed; reload before saving.');});
}
export async function deleteContent(id:string) {
 return run(async()=>{const {db}=await requireAdmin(); const {error}=await db.from('content').delete().eq('id',id).eq('published',false);if(error) throw new Error('This content is referenced by products. Unpublish it instead.');});
}
export async function adjustStock(input:unknown) {
 return run(async()=>{const {db}=await requireAdmin();const s=stockInput.parse(input);
 const {error}=await db.rpc('adjust_stock',{p_variant:s.variant,p_outlet:s.outlet,p_delta:s.delta,p_reason:s.reason,p_request:s.request});if(error) throw new Error(error.message);});
}
export async function startUpload(filename:string) {
 return run(async()=>{ const {db,user}=await requireAdmin();
 const ext=filename.toLowerCase().split('.').pop();if(!ext || !['jpg','jpeg','png','webp'].includes(ext)) throw new Error('Choose a JPEG, PNG or WebP image.');
 const path=`${user.id}/${crypto.randomUUID()}.${ext}`;
 const {data,error}=await db.storage.from('admin-staging').createSignedUploadUrl(path);
 if(error) throw new Error(error.message);return {path,token:data.token}; });
}
export async function finishUpload(path:string,alt:string) {
 return run(async()=>{const {db,user}=await requireAdmin();
 if(!new RegExp(`^${user.id}/[0-9a-f-]+\\.(jpg|jpeg|png|webp)$`).test(path)) throw new Error('Invalid upload path.');
 z.string().trim().min(3).max(300).parse(alt);
 const service=storageService();const {data:blob,error}=await service.storage.from('admin-staging').download(path);
 if(error || !blob) throw new Error('Upload not found.');
 const outputPath=`images/${crypto.randomUUID()}.webp`;
 try {
 if(blob.size>10*1024*1024) throw new Error('Maximum file size is 10 MB.');
 const buffer=Buffer.from(await blob.arrayBuffer());
 const decoder=sharp(buffer,{limitInputPixels:40000000,animated:false}); const meta=await decoder.metadata();
 if(!['jpeg','png','webp'].includes(meta.format || '') || (meta.pages || 1)>1) throw new Error('Only still JPEG, PNG and WebP images are supported.');
 const {data,info}=await decoder.rotate().resize({width:2400,height:2400,fit:'inside',withoutEnlargement:true}).webp({quality:88}).toBuffer({resolveWithObject:true});
 const uploaded=await service.storage.from('website-assets').upload(outputPath,data,{contentType:'image/webp',upsert:false,cacheControl:'31536000'});
 if(uploaded.error) throw new Error(uploaded.error.message);
 const inserted=await db.from('media_assets').insert({path:outputPath,alt,width:info.width,height:info.height,bytes:data.length}).select().single();
 if(inserted.error){await service.storage.from('website-assets').remove([outputPath]);throw new Error(inserted.error.message);}
 return inserted.data;
 } finally {await service.storage.from('admin-staging').remove([path]);}
 });
}
export async function deleteMedia(id:string) {
 return run(async()=>{const {db}=await requireAdmin();z.string().uuid().parse(id);
 const {data,error}=await db.from('media_assets').delete().eq('id',id).select('path').single();
 if(error) throw new Error('Image is still in use. Replace or detach it before deleting.');
 const service=storageService(); const removed=await service.storage.from('website-assets').remove([data.path]);
 if(!removed.error) await service.from('storage_cleanup').delete().eq('path',data.path);
 });
}
export async function saveGallery(productId:string,imageIds:string[]) {
 return run(async()=>{const {db}=await requireAdmin();z.string().uuid().parse(productId);z.array(z.string().uuid()).max(12).parse(imageIds);
 const {error}=await db.rpc('save_gallery',{p_product:productId,p_images:imageIds});if(error) throw new Error(error.message);});
}
