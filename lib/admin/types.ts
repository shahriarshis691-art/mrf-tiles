export type Media={id:string;path:string;alt:string;width:number;height:number};
export type Content={id:string;kind:string;name:string;description:string;image_id:string|null;legacy_image:string|null;payload:Record<string,unknown>;published:boolean;sort_order:number;version:number};
export type Variant={id:string;sku:string;label:string;price_paisa:number|null;price_confirmed:boolean;unit:string;stock_status:string};
export type Product={id:string;slug:string;channel:string;name:string;description:string;brand_id:string|null;category_id:string|null;image_id:string|null;legacy_image:string|null;specs:string[];payload:Record<string,unknown>;status:string;version:number;product_variants:Variant[];product_images:{image_id:string;sort_order:number}[]};
export type Level={variant_id:string;outlet_id:string;quantity:number;low_stock_threshold:number};
export type Movement={id:string;delta:number;reason:string;created_at:string;variant_id:string;outlet_id:string};
export type Audit={id:number;action:string;entity:string;created_at:string;actor:string|null};
