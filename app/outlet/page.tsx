import Image from "next/image";
import Navbar from "@/components/Navbar";
import { OUTLETS } from "@/components/outlet-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Visit Our Outlets",
  description: "Explore MRF Galaxy showrooms in Rangpur. Find outlet addresses, phone numbers, and directions for your visit.",
  path: "/outlet",
  image: "/images/hero-display-centre.jpg",
});

export default function OutletPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-100">
      <Navbar dark />
      <main id="main" className="mx-auto max-w-[1440px] px-14 pb-24 pt-44">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Experience MRF Galaxy</p>
          <h1 className="mt-6 font-serif text-6xl font-bold">Visit Our Outlets</h1>
          <p className="mt-6 text-sm leading-7 text-neutral-400">
            Discover premium tiles, architectural surfaces, and designer sanitary
            collections in person at our Rangpur showrooms.
          </p>
        </header>
        <div className="space-y-16">
          {OUTLETS.map((outlet, index) => (
            <section key={outlet.name} id={index === 0 ? "flagship" : "studio"}
              aria-labelledby={`outlet-${index}`} className="grid scroll-mt-28 grid-cols-2 overflow-hidden border border-white/10 bg-neutral-900">
              <div className="relative min-h-[480px]">
                <Image src={outlet.image} alt={outlet.alt} fill sizes="640px" className="object-cover" />
              </div>
              <div className="p-12">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{outlet.tag}</p>
                <h2 id={`outlet-${index}`} className="mt-5 font-serif text-3xl font-bold">{outlet.name}</h2>
                <address className="mt-6 text-sm not-italic leading-7 text-neutral-300">
                  {outlet.address.map((line) => <p key={line}>{line}</p>)}
                </address>
                <dl className="mt-8 space-y-5 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-neutral-400">Opening hours</dt>
                    <dd className="mt-2">Please call to confirm opening hours before your visit.</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-neutral-400">Phone</dt>
                    <dd className="mt-2"><a href={`tel:${outlet.phone}`} className="text-gold hover:underline">{outlet.phoneDisplay}</a></dd>
                  </div>
                </dl>
                <a href={outlet.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-8 inline-flex border border-gold px-6 py-4 text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-zinc-950">
                  Get directions on Google Maps
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
