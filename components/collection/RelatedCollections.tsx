import Image from "next/image";
import Link from "next/link";
import ImageWash, { imageLiftClass } from "../ImageWash";
import type { CatalogProduct } from "./collection-data";

type RelatedCollectionsProps = {
  products: CatalogProduct[];
};

export default function RelatedCollections({ products }: RelatedCollectionsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-collections-heading" className="mt-20 sm:mt-24">
      <header className="text-center">
        <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
          YOU MAY ALSO LIKE
        </p>
        <h2
          id="related-collections-heading"
          className="mt-4 text-[1.35rem] font-semibold uppercase tracking-[0.22em] text-zinc-950 sm:text-[1.5rem]"
        >
          Related Collections
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-gold/70" />
      </header>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/collection/${product.id}`}
            className="group flex aspect-[1/1.7] w-full flex-col overflow-hidden border border-zinc-200 bg-white transition-colors duration-500 hover:border-gold/60"
          >
            <div className="flex flex-[0.38] flex-col justify-center px-5 py-6 sm:px-6 sm:py-7">
              <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#B89A62] sm:text-[9px]">
                {product.look.toUpperCase()}
              </p>
              <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-zinc-950 sm:text-[14px]">
                {product.label}
              </h3>
              <p className="mt-4 max-w-[18rem] text-[10px] leading-relaxed tracking-[0.02em] text-zinc-800 sm:text-[11px]">
                {product.description}
              </p>
            </div>

            <div className="relative min-h-0 flex-[0.52] overflow-hidden">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`h-full w-full object-cover ${imageLiftClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
              />
              <ImageWash />
            </div>

            <div className="flex min-h-[2.75rem] flex-[0.1] items-center justify-between border-t border-zinc-200 px-5 py-3 text-[8px] font-medium uppercase tracking-[0.28em] text-zinc-800 sm:px-6 sm:text-[9px]">
              <span>MRF TILES</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                EXPLORE →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
