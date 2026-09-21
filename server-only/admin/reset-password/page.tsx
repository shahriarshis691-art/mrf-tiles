import AuthForm from '@/components/admin/AuthForm';
import {serverDb,configured} from '@/lib/supabase/server';
import {redirect} from 'next/navigation';
export default async function Reset(){if(!configured())redirect('/admin/login');const db=await serverDb();const {data:{user}}=await db.auth.getUser();if(!user)redirect('/admin/login');return <AuthForm mode="reset"/>;}
