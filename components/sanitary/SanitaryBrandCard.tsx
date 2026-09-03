import Image from "next/image";
import Link from "next/link";
import type { SanitaryBrand } from "@/lib/sanitaryBrands";

type SanitaryBrandCardProps = {
  brand: SanitaryBrand;
};

export default function SanitaryBrandCard({
  brand,
}: SanitaryBrandCardProps) {
  return (
    <Link
      href={brand.href}
      aria-label={`Explore ${brand.name} sanitary collections`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col border border-neutral-200/60 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)]">
        <div className="relative w-full overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-neutral-100">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            quality={90}
            sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        <div className="px-5 py-6 text-center sm:px-6 sm:py-7">
          <h3 className="font-serif text-[1.25rem] font-bold uppercase leading-[1.15] tracking-[0.15em] text-neutral-950 sm:text-[1.4rem]">
            {brand.name}
          </h3>
          <span className="mx-auto mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[11px]">
            {brand.tagline}
          </p>
          <span className="mt-5 inline-flex items-center text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900">
            Explore Sanitary Collections
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
  );
}
