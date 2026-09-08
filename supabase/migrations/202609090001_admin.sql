-- Apply with Supabase CLI migrations. No public signup grants administrator access.
create schema if not exists private;
revoke all on schema private from public;
create table public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade, active boolean not null default true);
alter table public.admin_users enable row level security;
grant select on public.admin_users to authenticated;
create policy own_membership on public.admin_users for select to authenticated using (user_id = auth.uid());
create function private.is_admin() returns boolean language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.admin_users where user_id=auth.uid() and active)
 and coalesce(auth.jwt()->>'aal','')='aal2';
$$;
grant usage on schema private to authenticated;
grant execute on function private.is_admin() to authenticated;

create table public.media_assets (
 id uuid primary key default gen_random_uuid(), path text unique not null, alt text not null default '',
 width integer not null check(width>0), height integer not null check(height>0), bytes integer not null check(bytes>0),
 created_at timestamptz not null default now()
);
create table public.content (
 id text primary key, kind text not null check(kind in ('brand','room','sanitary-category','hero')),
 name text not null, description text not null default '', image_id uuid references public.media_assets(id) on delete restrict,
 legacy_image text, payload jsonb not null default '{}', sort_order integer not null default 0,
 published boolean not null default false, version integer not null default 1
);
create table public.products (
 id uuid primary key default gen_random_uuid(), legacy_key text unique, slug text not null,
 channel text not null check(channel in ('brand','collection','sanitary','room')),
 name text not null, description text not null default '', brand_id text references public.content(id) on delete restrict,
 category_id text references public.content(id) on delete restrict,
 status text not null default 'draft' check(status in ('draft','published','archived')),
 image_id uuid references public.media_assets(id) on delete restrict, legacy_image text,
 specs jsonb not null default '[]', payload jsonb not null default '{}',
 version integer not null default 1, updated_at timestamptz not null default now(), unique(channel,slug)
);
create table public.product_images (
 id uuid primary key default gen_random_uuid(), product_id uuid not null references public.products(id) on delete cascade,
 image_id uuid not null references public.media_assets(id) on delete restrict, sort_order integer not null default 0,
 unique(product_id,image_id)
);
create table public.product_variants (
 id uuid primary key default gen_random_uuid(), product_id uuid not null references public.products(id) on delete cascade,
 sku text unique not null, label text not null default 'Default', price_paisa bigint check(price_paisa>=0),
 price_confirmed boolean not null default false, unit text not null default 'piece',
 stock_status text not null default 'unknown' check(stock_status in ('unknown','in_stock','out_of_stock','preorder'))
);
create table public.outlets (id text primary key, name text not null);
create table public.inventory_levels (
 variant_id uuid references public.product_variants(id) on delete restrict,
 outlet_id text references public.outlets(id), quantity integer not null default 0 check(quantity>=0),
 low_stock_threshold integer not null default 5 check(low_stock_threshold>=0), primary key(variant_id,outlet_id)
);
create table public.inventory_movements (
 id uuid primary key default gen_random_uuid(), variant_id uuid not null references public.product_variants(id) on delete restrict,
 outlet_id text not null references public.outlets(id), delta integer not null check(delta<>0), reason text not null,
 actor uuid references auth.users(id), request_id uuid unique not null, created_at timestamptz not null default now()
);
create table public.audit_logs (
 id bigint generated always as identity primary key, actor uuid, action text not null, entity text not null,
 before_data jsonb, after_data jsonb, created_at timestamptz not null default now()
);
create function private.audit_change() returns trigger language plpgsql security definer set search_path='' as $$
begin
 insert into public.audit_logs(actor,action,entity,before_data,after_data)
 values(auth.uid(),TG_OP,TG_TABLE_NAME,case when TG_OP<>'INSERT' then to_jsonb(OLD) end,case when TG_OP<>'DELETE' then to_jsonb(NEW) end);
 if TG_OP='DELETE' then return OLD; end if; return NEW;
end $$;
-- Owner permissions require MFA at database level, including direct API calls.
do $$ declare t text; begin
 foreach t in array array['media_assets','content','products','product_images','product_variants','outlets'] loop
 execute format('alter table public.%I enable row level security',t);
 execute format('grant select,insert,update,delete on public.%I to authenticated',t);
 execute format('create policy owner_all on public.%I for all to authenticated using (private.is_admin()) with check (private.is_admin())',t);
 execute format('create trigger audit_change after insert or update or delete on public.%I for each row execute function private.audit_change()',t);
 end loop;
 foreach t in array array['inventory_levels','inventory_movements','audit_logs'] loop
 execute format('alter table public.%I enable row level security',t);
 execute format('grant select on public.%I to authenticated',t);
 execute format('create policy owner_read on public.%I for select to authenticated using (private.is_admin())',t);
 end loop;
end $$;
grant select on public.content,public.products,public.product_variants,public.product_images,public.media_assets to anon;
create policy published_content on public.content for select to anon,authenticated using(published);
create policy published_products on public.products for select to anon,authenticated using(status='published');
create policy published_variants on public.product_variants for select to anon,authenticated using(exists(select 1 from public.products p where p.id=product_id and p.status='published'));
create policy published_gallery on public.product_images for select to anon,authenticated using(exists(select 1 from public.products p where p.id=product_id and p.status='published'));
create policy published_media on public.media_assets for select to anon,authenticated using(
 exists(select 1 from public.content c where c.image_id=media_assets.id and c.published)
 or exists(select 1 from public.products p where p.image_id=media_assets.id and p.status='published')
 or exists(select 1 from public.product_images i join public.products p on p.id=i.product_id where i.image_id=media_assets.id and p.status='published')
);

create function public.adjust_stock(p_variant uuid,p_outlet text,p_delta integer,p_reason text,p_request uuid)
returns void language plpgsql security definer set search_path='' as $$
declare prior public.inventory_movements; begin
 if not private.is_admin() then raise exception 'Forbidden'; end if;
 if p_delta=0 or length(trim(p_reason))<3 then raise exception 'A quantity and reason are required'; end if;
 -- Serialize retries and adjustments for this inventory row.
 perform pg_advisory_xact_lock(hashtextextended(p_variant::text||p_outlet,0));
 select * into prior from public.inventory_movements where request_id=p_request;
 if found then
 if prior.variant_id<>p_variant or prior.outlet_id<>p_outlet or prior.delta<>p_delta or prior.reason<>p_reason then raise exception 'Idempotency key conflict'; end if;
 return; end if;
 insert into public.inventory_levels(variant_id,outlet_id) values(p_variant,p_outlet) on conflict do nothing;
 update public.inventory_levels set quantity=quantity+p_delta where variant_id=p_variant and outlet_id=p_outlet;
 insert into public.inventory_movements(variant_id,outlet_id,delta,reason,actor,request_id) values(p_variant,p_outlet,p_delta,p_reason,auth.uid(),p_request);
end $$;
revoke all on function public.adjust_stock(uuid,text,integer,text,uuid) from public;
grant execute on function public.adjust_stock(uuid,text,integer,text,uuid) to authenticated;

create function public.save_product(p_id uuid,p_version integer,p_data jsonb,p_variant jsonb)
returns uuid language plpgsql security invoker set search_path='' as $$
declare saved uuid; begin
 if not private.is_admin() then raise exception 'Forbidden'; end if;
 if p_id is null then
 insert into public.products(slug,channel,name,description,brand_id,category_id,status,image_id,specs,payload)
 values(p_data->>'slug',p_data->>'channel',p_data->>'name',p_data->>'description',nullif(p_data->>'brand_id',''),nullif(p_data->>'category_id',''),p_data->>'status',nullif(p_data->>'image_id','')::uuid,p_data->'specs',p_data->'payload') returning id into saved;
 else
 update public.products set name=p_data->>'name', description=p_data->>'description',
 brand_id=nullif(p_data->>'brand_id',''),category_id=nullif(p_data->>'category_id',''),status=p_data->>'status',
 image_id=nullif(p_data->>'image_id','')::uuid,specs=p_data->'specs',payload=p_data->'payload',version=version+1,updated_at=now()
 where id=p_id and version=p_version returning id into saved;
 if saved is null then raise exception 'This product changed. Reload before saving.'; end if;
 end if;
 insert into public.product_variants(product_id,sku,label,price_paisa,price_confirmed,unit,stock_status)
 values(saved,p_variant->>'sku','Default',(p_variant->>'price_paisa')::bigint,(p_variant->>'price_confirmed')::boolean,p_variant->>'unit',p_variant->>'stock_status')
 on conflict(sku) do update set price_paisa=excluded.price_paisa,price_confirmed=excluded.price_confirmed,unit=excluded.unit,stock_status=excluded.stock_status
 where product_variants.product_id=saved;
 if not found then raise exception 'SKU belongs to another product'; end if;
 return saved;
end $$;
revoke all on function public.save_product(uuid,integer,jsonb,jsonb) from public;
grant execute on function public.save_product(uuid,integer,jsonb,jsonb) to authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values
('website-assets','website-assets',true,10485760,array['image/webp']),
('admin-staging','admin-staging',false,10485760,array['image/jpeg','image/png','image/webp']) on conflict(id) do nothing;
-- No client write policy for website-assets: the validated server pipeline is the only publisher.
create policy owner_staging on storage.objects for all to authenticated
using(bucket_id='admin-staging' and private.is_admin()) with check(bucket_id='admin-staging' and private.is_admin());
-- Retryable storage cleanup after relational deletion; objects are removed via Storage API, never SQL.
create table public.storage_cleanup (path text primary key, created_at timestamptz default now());
alter table public.storage_cleanup enable row level security;
create function private.queue_media_cleanup() returns trigger language plpgsql security definer set search_path='' as $$
begin insert into public.storage_cleanup(path) values(OLD.path) on conflict do nothing; return OLD; end $$;
create trigger queue_media_cleanup after delete on public.media_assets for each row execute function private.queue_media_cleanup();

create function public.save_gallery(p_product uuid,p_images uuid[]) returns void language plpgsql security invoker set search_path='' as $$
begin
 if not private.is_admin() then raise exception 'Forbidden'; end if;
 if coalesce(array_length(p_images,1),0)>12 then raise exception 'Maximum 12 images'; end if;
 perform 1 from public.products where id=p_product for update;
 if not found then raise exception 'Product not found'; end if;
 delete from public.product_images where product_id=p_product;
 insert into public.product_images(product_id,image_id,sort_order) select p_product,img,ord::integer from unnest(p_images) with ordinality as t(img,ord);
end $$;
revoke all on function public.save_gallery(uuid,uuid[]) from public;
grant execute on function public.save_gallery(uuid,uuid[]) to authenticated;
-- Supabase can assign default grants; explicitly remove non-owner write privileges.
revoke all on public.admin_users,public.inventory_levels,public.inventory_movements,public.audit_logs,public.storage_cleanup from anon,authenticated;
grant select on public.admin_users,public.inventory_levels,public.inventory_movements,public.audit_logs to authenticated;
revoke all on public.outlets from anon;
revoke insert,update,delete,truncate,references,trigger on public.media_assets,public.content,public.products,public.product_images,public.product_variants from anon;
revoke truncate,references,trigger on public.media_assets,public.content,public.products,public.product_images,public.product_variants,public.outlets from authenticated;
revoke all on function private.audit_change(),private.queue_media_cleanup(),private.is_admin() from public;
grant execute on function private.is_admin() to authenticated;
create index products_brand on public.products(brand_id);
create index products_category on public.products(category_id);
create index products_status_channel on public.products(status,channel);
create index variants_product on public.product_variants(product_id);

