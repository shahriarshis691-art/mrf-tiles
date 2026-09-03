import Image from "next/image";
import Link from "next/link";
import { OUTLETS } from "./outlet-data";

export default function OutletsSection() {
  return (
    <section
      id="outlets"
      aria-label="Outlets"
      className="bg-gradient-to-b from-[#EFF1F3] via-[#E6E8EB] to-[#DEE1E5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {OUTLETS.map((outlet) => (
            <article
              key={outlet.name}
              className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-neutral-200"
            >
              <Image
                src={outlet.image}
                alt={outlet.alt}
                fill
                quality={90}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/35" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-bold uppercase leading-[1.15] tracking-[0.15em] max-w-sm mb-2">
                  {outlet.displayTitle ?? outlet.name}
                </h3>
                {outlet.displaySubtitle ? (
                  <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/85 mb-6">
                    {outlet.displaySubtitle}
                  </p>
                ) : null}
                <Link
                  href={outlet.displayHref ?? "/contact"}
                  className="bg-[#f5f2ed] hover:bg-white text-neutral-900 px-6 py-2.5 text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase rounded-none transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
                >
                  Visit Outlet
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}