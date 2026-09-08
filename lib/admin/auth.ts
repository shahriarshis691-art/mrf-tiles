import 'server-only';
import { serverDb } from '@/lib/supabase/server';
export async function requireAdmin(mfa = true) {
  const db = await serverDb();
  const {data:{user},error}=await db.auth.getUser();
  if(error || !user) throw new Error('Please sign in.');
  const {data:member}=await db.from('admin_users').select('active').eq('user_id',user.id).eq('active',true).maybeSingle();
  if(!member) throw new Error('Owner access is required.');
  if(mfa) {
    const {data,error}=await db.auth.mfa.getAuthenticatorAssuranceLevel();
    if(error || data?.currentLevel!=='aal2') throw new Error('Complete two-factor authentication.');
  }
  return {db,user};
}
