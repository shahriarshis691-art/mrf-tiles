import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { BRANDS, type Brand } from "@/lib/brands";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Tile Brands",
  description:
    "Explore the premium tile brands curated by MRF Galaxy for refined residential and commercial interiors.",
  path: "/brands",
  image: "/images/projects/architectural-tile-experience.jpg",
  imageAlt: "Premium porcelain slab showroom display",
});

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar dark />

      <main
        id="main"
        className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal variant="fadeInUp">
            <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-stone-400">
                Partner Brands
              </p>
              <h1 className="mt-4 font-serif text-[1.85rem] font-semibold leading-[1.05] tracking-[0.06em] text-white sm:text-[2.4rem] lg:text-[2.75rem]">
                Our House of Brands
              </h1>
              <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
              <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-stone-300 sm:text-sm">
                Explore the curated tile, sanitary and brassware brands that
                define MRF Galaxy&apos;s signature interiors.
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.1}>
            <div className="grid grid-flow-col auto-cols-[78vw] grid-rows-1 gap-5 overflow-x-auto sm:auto-cols-[16rem] sm:gap-6 lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible lg:gap-6">
              {BRANDS.map((brand: Brand) => (
                <Link
                  key={brand.slug}
                  href={brand.href}
                  aria-label={`Explore ${brand.name} brand products`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={brand.cardImage}
                        alt={brand.cardAlt}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </div>

                    <div className="px-5 py-6 text-center sm:px-6 sm:py-7">
                      <h2 className="font-serif text-[1.15rem] font-bold uppercase leading-[1.05] tracking-[0.18em] text-white sm:text-[1.35rem]">
                        {brand.name}
                      </h2>
                      <span className="mx-auto mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                      <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.32em] text-stone-400 sm:text-[11px]">
                        {brand.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center text-[10px] font-medium uppercase tracking-[0.32em] text-stone-300 transition-colors duration-300 group-hover:text-gold">
                        View Products
                        <span
                          aria-hidden="true"
                          className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
