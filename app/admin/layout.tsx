import type {Metadata} from 'next';
export const metadata:Metadata={title:'Owner Administration',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default function Layout({children}:{children:React.ReactNode}) {return <div className="admin-shell min-h-screen bg-neutral-50 px-5 py-12 text-neutral-900">{children}</div>;}
