import 'server-only';
import {cache} from 'react';
import {connection} from 'next/server';
import {publicDb,configured} from '@/lib/supabase/server';
import {BRANDS,type Brand,type BrandProduct} from '@/lib/brands';
import {ROOM_CATEGORIES,type RoomCategory} from '@/lib/roomCategories';
import {CATALOG_PRODUCTS,type CatalogProduct} from '@/components/collection/collection-data';
import {SANITARY_PRODUCTS,type SanitaryProduct} from '@/lib/sanitaryData';
import {SANITARY_CATEGORIES,type SanitaryCategory} from '@/components/sanitary/sanitary-data';
import {getRoomProducts as staticRoomProducts,type RoomProduct} from '@/components/rooms/rooms-data';
import type {Content,Product,Media} from '@/lib/admin/types';
export const databaseCatalog=()=>process.env.CATALOG_SOURCE==='supabase';
const load=cache(async()=>{
 if(!configured())throw new Error('Database catalog enabled without Supabase configuration.');
 await connection(); // Request-time published catalog; newly added slugs need no deployment.
 const db=publicDb();
 async function pages(table:string,select:string){const rows:unknown[]=[];for(let start=0;;start+=500){const {data,error}=await db.from(table).select(select).order('id').range(start,start+499);if(error)throw new Error(`Catalog unavailable: ${table}`);rows.push(...data);if(data.length<500)break;}return rows;}
 const [content,products,media]=await Promise.all([pages('content','*'),pages('products','*,product_variants(*),product_images(image_id,sort_order)'),pages('media_assets','*')]);
 return {content:content as Content[],products:products as Product[],media:media as Media[]};
});
function asset(id:string|null,legacy:string|null,media:Media[]){const m=media.find(m=>m.id===id);return m?`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/website-assets/${m.path}`:legacy||'/images/sanitary/products/faucet-basin-chrome.jpg';}
export async function getBrands():Promise<Brand[]>{if(!databaseCatalog())return BRANDS;const d=await load();return d.content.filter(c=>c.kind==='brand').sort((a,b)=>a.sort_order-b.sort_order).map(c=>({slug:c.id,name:c.name,description:c.description,tagline:String(c.payload.tagline||'Selected for your space'),banner:asset(c.image_id,c.legacy_image,d.media),bannerAlt:c.name,cardImage:asset(c.image_id,c.legacy_image,d.media),cardAlt:c.name,href:`/brands/${c.id}`,products:d.products.filter(p=>p.brand_id===c.id).map(p=>toBrandProduct(p,d.media))}));}
function toBrandProduct(p:Product,media:Media[]):BrandProduct {const v=p.product_variants[0];return {id:p.slug,title:p.name,description:p.description,details:p.description,image:asset(p.image_id,p.legacy_image,media),alt:p.name,category:String(p.payload.category||p.channel),specifications:p.specs,priceBdt:v?.price_paisa!=null?v.price_paisa/100:null,illustrative:Boolean(p.payload.illustrative),priceSource:typeof p.payload.priceSource==='string'?p.payload.priceSource:undefined,approximate:!v?.price_confirmed,stockStatus:v?.stock_status||'unknown'};}
export async function getBrandBySlug(slug:string){return (await getBrands()).find(b=>b.slug===slug);}
export async function getAllBrandSlugs(){return (await getBrands()).map(b=>b.slug);}
export async function getRooms():Promise<RoomCategory[]>{if(!databaseCatalog())return ROOM_CATEGORIES;const d=await load();return d.content.filter(c=>c.kind==='room').sort((a,b)=>a.sort_order-b.sort_order).map(c=>({id:c.id,label:c.name,description:c.description,image:asset(c.image_id,c.legacy_image,d.media),alt:c.name,path:`/rooms/${c.id}`}));}
export async function getRoomCategoryBySlug(slug:string){return (await getRooms()).find(r=>r.id===slug);}
export async function getAllRoomSlugs(){return (await getRooms()).map(r=>r.id);}
export async function getRoomProducts(slug:string):Promise<RoomProduct[]>{if(!databaseCatalog())return staticRoomProducts(slug);const d=await load();return d.products.filter(p=>p.channel==='room'&&p.category_id===slug).map(p=>({id:p.slug,name:p.name,finish:String(p.payload.finish||''),size:String(p.payload.format||p.payload.size||''),material:String(p.payload.material||''),color:String(p.payload.color||''),image:asset(p.image_id,p.legacy_image,d.media),alt:p.name}));}
export async function getCollections():Promise<CatalogProduct[]>{if(!databaseCatalog())return CATALOG_PRODUCTS;const d=await load();return d.products.filter(p=>p.channel==='collection').map(p=>{const image=asset(p.image_id,p.legacy_image,d.media);return {id:p.slug,label:p.name,description:p.description,longDescription:p.description,image,alt:p.name,gallery:p.product_images.length?p.product_images.sort((a,b)=>a.sort_order-b.sort_order).map(i=>({src:asset(i.image_id,null,d.media),alt:p.name})):[{src:image,alt:p.name}],look:String(p.payload.look||''),format:String(p.payload.format||''),material:String(p.payload.material||''),finish:String(p.payload.finish||''),applications:Array.isArray(p.payload.applications)?p.payload.applications as string[]:[]};});}
export async function getProductBySlug(slug:string){return (await getCollections()).find(p=>p.id===slug);}
export async function getRelatedProducts(product:CatalogProduct,limit=3){return (await getCollections()).filter(p=>p.id!==product.id&&(p.look===product.look||p.material===product.material)).slice(0,limit);}
export async function getSanitaryCategories():Promise<SanitaryCategory[]>{if(!databaseCatalog())return SANITARY_CATEGORIES;const d=await load();return d.content.filter(c=>c.kind==='sanitary-category').sort((a,b)=>a.sort_order-b.sort_order).map(c=>({id:c.id,label:c.name,description:c.description,image:asset(c.image_id,c.legacy_image,d.media),alt:c.name}));}
export async function getSanitaryCategoryBySlug(slug:string){return (await getSanitaryCategories()).find(c=>c.id===slug);}
export async function getSanitaryProducts():Promise<SanitaryProduct[]>{if(!databaseCatalog())return SANITARY_PRODUCTS;const d=await load();return d.products.filter(p=>p.channel==='sanitary').map(p=>({id:p.slug,slug:p.slug,title:p.name,category:p.category_id||'',brand:p.brand_id||'MRF Galaxy',price:p.product_variants[0]?.price_paisa!=null?p.product_variants[0].price_paisa/100:null,description:p.description,image:asset(p.image_id,p.legacy_image,d.media),specs:p.specs}));}
export async function getSanitaryListingsByCategory(id:string){return (await getSanitaryProducts()).filter(p=>p.category===id);}
export async function getSanitaryProductById(id:string){return (await getSanitaryProducts()).find(p=>p.id===id);}
export async function getHeroSlides(){if(!databaseCatalog())return undefined;const d=await load();return d.content.filter(c=>c.kind==='hero').sort((a,b)=>a.sort_order-b.sort_order).map(c=>({src:asset(c.image_id,c.legacy_image,d.media),alt:c.name,heading:c.name,subtitle:c.description}));}
