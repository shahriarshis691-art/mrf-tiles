import {NextResponse,type NextRequest} from 'next/server';
import {serverDb} from '@/lib/supabase/server';
export async function GET(request:NextRequest){
 const token_hash=request.nextUrl.searchParams.get('token_hash');
 const type=request.nextUrl.searchParams.get('type');
 if(token_hash&&(type==='recovery'||type==='invite')){
 const db=await serverDb();const {error}=await db.auth.verifyOtp({token_hash,type});
 if(!error)return NextResponse.redirect(new URL('/admin/reset-password',request.url));
 }
 return NextResponse.redirect(new URL('/admin/login',request.url));
}
