'use client';
import {useState} from 'react';
import {browserDb} from '@/lib/supabase/browser';
export default function AuthForm({mode}:{mode:'login'|'forgot'|'reset'|'mfa'}) {
 const [message,setMessage]=useState('');const [busy,setBusy]=useState(false);const [factor,setFactor]=useState('');const [qr,setQr]=useState('');
 async function setupMfa(){setBusy(true);setMessage('');try{const db=browserDb();const {data,error}=await db.auth.mfa.listFactors();if(error)throw error;
 const verified=data.totp.find(f=>f.status==='verified');if(verified){setFactor(verified.id);return;}
 for(const f of data.totp.filter(f=>f.status==='unverified'))await db.auth.mfa.unenroll({factorId:f.id});
 const enrolled=await db.auth.mfa.enroll({factorType:'totp',friendlyName:'MRF Owner'});if(enrolled.error)throw enrolled.error;setFactor(enrolled.data.id);setQr(enrolled.data.totp.qr_code);
 }catch(e){setMessage(e instanceof Error?e.message:'Unable to set up MFA.');}finally{setBusy(false);}}
 async function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();setBusy(true);setMessage('');const values=new FormData(event.currentTarget);const db=browserDb();
 try{
 if(mode==='login'){const {error}=await db.auth.signInWithPassword({email:String(values.get('email')),password:String(values.get('password'))});if(error)throw new Error('Unable to sign in. Check your credentials.');window.location.assign('/admin/mfa');}
 if(mode==='forgot'){await db.auth.resetPasswordForEmail(String(values.get('email')),{redirectTo:`${window.location.origin}/admin/reset-password`});setMessage('If that account exists, a recovery email will arrive shortly.');}
 if(mode==='reset'){const {error}=await db.auth.updateUser({password:String(values.get('password'))});if(error)throw error;await db.auth.signOut();window.location.assign('/admin/login');}
 if(mode==='mfa'){const {error}=await db.auth.mfa.challengeAndVerify({factorId:factor,code:String(values.get('code'))});if(error)throw error;window.location.assign('/admin');}
 }catch(e){setMessage(e instanceof Error?e.message:'Please try again.');}finally{setBusy(false);}}
 return <div className="mx-auto max-w-md border border-neutral-200 bg-white p-8"><p className="mb-3 text-xs uppercase tracking-widest text-gold">MRF Galaxy · Owner access</p><h1 className="mb-6 text-3xl">{mode==='login'?'Sign in':mode==='forgot'?'Recover your account':mode==='reset'?'Set a new password':'Two-factor authentication'}</h1>
 {mode==='mfa'&&!factor&&<button className="admin-button" disabled={busy} onClick={setupMfa}>Continue with authenticator</button>}
 {qr&&<div className="my-4"><p className="text-sm">Scan with your authenticator app, then enter its six-digit code.</p>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={qr} width={200} height={200} alt="Authenticator enrollment QR code" /></div>}
 <form onSubmit={submit} className="space-y-5">
 {(mode==='login'||mode==='forgot')&&<label className="admin-label">Email<input name="email" type="email" autoComplete="username" required /></label>}
 {(mode==='login'||mode==='reset')&&<label className="admin-label">Password<input name="password" type="password" autoComplete={mode==='login'?'current-password':'new-password'} minLength={mode==='reset'?12:undefined} required /></label>}
 {mode==='mfa'&&factor&&<label className="admin-label">Authenticator code<input name="code" inputMode="numeric" pattern="[0-9]{6}" autoComplete="one-time-code" required /></label>}
 {(mode!=='mfa'||factor)&&<button className="admin-button" disabled={busy}>{busy?'Please wait…':mode==='forgot'?'Send recovery email':'Continue'}</button>}
 </form><p role="status" className="mt-5 text-sm">{message}</p>{mode==='login'&&<a className="mt-4 block text-sm underline" href="/admin/forgot-password">Forgot password?</a>}<a href="/" className="mt-6 block text-sm text-neutral-500">Back to website</a></div>;
}
