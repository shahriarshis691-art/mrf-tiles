import AuthForm from '@/components/admin/AuthForm';
import {configured} from '@/lib/supabase/server';
import {redirect} from 'next/navigation';
export default function Forgot(){if(!configured())redirect('/admin/login');return <AuthForm mode="forgot"/>;}
