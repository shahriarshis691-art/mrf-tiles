import {redirect} from 'next/navigation';
import {requireAdmin} from '@/lib/admin/auth';
import {configured} from '@/lib/supabase/server';
import AdminDashboard from '@/components/admin/AdminDashboard';
export default async function AdminPage({searchParams}:{searchParams:Promise<{q?:string;page?:string}>}){
 if(!configured())redirect('/admin/login');
 let auth;try{auth=await requireAdmin(false);}catch{redirect('/admin/login');}
 const {db}=auth;const {data:aal}=await db.auth.mfa.getAuthenticatorAssuranceLevel();if(aal?.currentLevel!=='aal2')redirect('/admin/mfa');
 const query=await searchParams;const page=Math.max(1,Math.min(100000,Number(query.page)||1));const q=(query.q||'').slice(0,100);
 let request=db.from('products').select('*,product_variants(*),product_images(image_id,sort_order)',{count:'exact'}).order('updated_at',{ascending:false}).range((page-1)*20,page*20-1);
 if(q)request=request.ilike('name',`%${q.replace(/[%_]/g,'')}%`);
 const [products,content,media,outlets,levels,movements,audit]=await Promise.all([request,db.from('content').select('*').order('sort_order'),db.from('media_assets').select('*').order('created_at',{ascending:false}).limit(500),db.from('outlets').select('*'),db.from('inventory_levels').select('*'),db.from('inventory_movements').select('*').order('created_at',{ascending:false}).limit(50),db.from('audit_logs').select('id,action,entity,created_at,actor').order('created_at',{ascending:false}).limit(50)]);
 if([products,content,media,outlets,levels,movements,audit].some(r=>r.error))return <main id="main"><h1>Database setup is incomplete</h1><p>Apply the admin migrations and check the Supabase configuration.</p></main>;
 return <AdminDashboard products={products.data||[]} content={content.data||[]} media={media.data||[]} outlets={outlets.data||[]} levels={levels.data||[]} movements={movements.data||[]} audit={audit.data||[]} count={products.count||0} page={page} query={q}/>;
}
