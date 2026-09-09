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
      <main id="main" className="mx-auto max-w-[1440px] px-3 pb-28 pt-28 sm:px-6 md:px-14 md:pt-44">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Experience MRF Galaxy</p>
          <h1 className="mt-6 font-serif text-4xl font-bold md:text-6xl">Visit Our Outlets</h1>
          <p className="mt-6 text-sm leading-7 text-neutral-400">
            Discover premium tiles, architectural surfaces, and designer sanitary
            collections in person at our Rangpur showrooms.
          </p>
        </header>
        <div className="space-y-16">
          {OUTLETS.map((outlet, index) => (
            <section key={outlet.name} id={index === 0 ? "flagship" : "studio"}
              aria-labelledby={`outlet-${index}`} className="grid scroll-mt-28 grid-cols-2 overflow-hidden border border-white/10 bg-neutral-900">
              <div className="relative min-h-[320px] min-w-0 md:min-h-[480px]">
                <Image src={outlet.image} alt={outlet.alt} fill sizes="50vw" className="object-cover object-center" />
              </div>
              <div className="min-w-0 break-words px-3 py-5 sm:p-6 md:p-12">
                <p className="text-[9px] uppercase tracking-[0.15em] text-gold md:text-[10px] md:tracking-[0.25em]">{outlet.tag}</p>
                <h2 id={`outlet-${index}`} className="mt-3 font-serif text-lg font-bold leading-tight sm:text-2xl md:mt-5 md:text-3xl">{outlet.name}</h2>
                <address className="mt-4 text-[11px] not-italic leading-relaxed text-neutral-300 sm:text-xs md:mt-6 md:text-sm md:leading-7">
                  {outlet.address.map((line) => <p key={line}>{line}</p>)}
                </address>
                <dl className="mt-5 space-y-4 text-[11px] leading-relaxed sm:text-xs md:mt-8 md:space-y-5 md:text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400 md:text-xs">Opening hours</dt>
                    <dd className="mt-2">Please call to confirm opening hours before your visit.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400 md:text-xs">Phone</dt>
                    <dd className="mt-2"><a href={`tel:${outlet.phone}`} className="text-gold hover:underline">{outlet.phoneDisplay}</a></dd>
                  </div>
                </dl>
                <a href={outlet.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 max-w-full items-center border border-gold px-3 py-3 text-[10px] uppercase leading-relaxed tracking-[0.08em] text-gold transition-colors hover:bg-gold hover:text-zinc-950 md:mt-8 md:px-6 md:py-4 md:text-xs md:tracking-[0.15em]">
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
