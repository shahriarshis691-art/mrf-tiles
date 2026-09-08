import { z } from 'zod';
const id=z.string().uuid();
export const productInput=z.object({
 id:id.nullable(),version:z.number().int().positive(),
 name:z.string().trim().min(2).max(200),slug:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(160),
 channel:z.enum(['brand','collection','sanitary','room']), description:z.string().max(10000),
 brand_id:z.string().max(200).nullable(),category_id:z.string().max(200).nullable(),
 image_id:id.nullable(),status:z.enum(['draft','published','archived']),specs:z.array(z.string().max(500)).max(30),
 payload:z.object({look:z.string().max(200).optional(),format:z.string().max(200).optional(),material:z.string().max(200).optional(),finish:z.string().max(200).optional(),applications:z.array(z.string().max(100)).optional()}),
 sku:z.string().trim().min(1).max(100),price_paisa:z.number().int().min(0).max(100000000000).nullable(),
 price_confirmed:z.boolean(),unit:z.enum(['piece','box','sq_ft']),stock_status:z.enum(['unknown','in_stock','out_of_stock','preorder'])
}).refine(p=>!p.price_confirmed || p.price_paisa!==null,{message:'Enter a price before confirming it.'});
export const contentInput=z.object({id:z.string().regex(/^[a-z0-9-]+$/).max(200),version:z.number().int().positive(),kind:z.enum(['brand','room','sanitary-category','hero']),name:z.string().trim().min(2).max(200),description:z.string().max(3000),image_id:id.nullable(),published:z.boolean(),sort_order:z.number().int().min(0).max(10000)});
export const stockInput=z.object({variant:id,outlet:z.string().min(1).max(100),delta:z.number().int().min(-1000000).max(1000000).refine(x=>x!==0),reason:z.string().trim().min(3).max(500),request:id});

