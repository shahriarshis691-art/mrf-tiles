import AuthForm from '@/components/admin/AuthForm';
import {configured} from '@/lib/supabase/server';
export default function Login(){return configured()?<AuthForm mode="login"/>:<main id="main" className="mx-auto max-w-lg"><h1 className="text-3xl">Admin setup required</h1><p className="mt-4">Connect Supabase and provision the owner account using the project’s ADMIN-SETUP guide. The public website remains available.</p></main>;}
