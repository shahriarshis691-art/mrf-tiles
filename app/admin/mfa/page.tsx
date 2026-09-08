import AuthForm from '@/components/admin/AuthForm';
import {requireAdmin} from '@/lib/admin/auth';
import {redirect} from 'next/navigation';
export default async function MFA(){try{await requireAdmin(false);}catch{redirect('/admin/login');}return <AuthForm mode="mfa"/>;}
