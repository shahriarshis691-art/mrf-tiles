import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { BRANDS, type Brand } from "@/lib/brands";

export default function CollectionSection() {
  return (
    <section
      id="brands"
      aria-label="Featured Brands"
      className="relative w-full bg-[#F5F1E8] px-4 py-16 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="fadeInUp">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-500">
              Featured Brands
            </p>
            <h2 className="mt-4 font-serif text-[1.85rem] font-semibold leading-[1.05] tracking-[0.06em] text-[#0F0F0F] sm:text-[2.4rem] lg:text-[2.75rem]">
              Our House of Brands
            </h2>
            <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
            <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-sm">
              Explore the curated tile, sanitary and brassware brands that define
              MRF Galaxy&apos;s signature interiors.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.1}>
          <div className="flex gap-5 overflow-x-auto sm:gap-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
            {BRANDS.map((brand: Brand) => (
              <Link
                key={brand.slug}
                href={brand.href}
                aria-label={`Explore ${brand.name} brand products`}
                className="group block w-[78vw] shrink-0 sm:w-64 lg:w-auto lg:min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1E8]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={brand.cardImage}
                      alt={brand.cardAlt}
                      fill
                      quality={90}
                      sizes="(max-width: 639px) 78vw, (max-width: 1023px) 16rem, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>

                  <div className="px-5 py-6 text-center sm:px-6 sm:py-7">
                    <h3 className="font-serif text-[1.15rem] font-bold uppercase leading-[1.05] tracking-[0.18em] text-[#0F0F0F] sm:text-[1.35rem]">
                      {brand.name}
                    </h3>
                    <span className="mx-auto mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                    <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.32em] text-neutral-500 sm:text-[11px]">
                      {brand.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center text-[10px] font-medium uppercase tracking-[0.32em] text-neutral-700 transition-colors duration-300 group-hover:text-gold">
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
    </section>
  );
}
