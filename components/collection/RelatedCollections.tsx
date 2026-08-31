import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "./collection-data";

type RelatedCollectionsProps = {
  products: CatalogProduct[];
};

export default function RelatedCollections({ products }: RelatedCollectionsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-collections-heading" className="mt-20 sm:mt-24">
      <header className="text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
          You May Also Like
        </p>
        <h2
          id="related-collections-heading"
          className="mt-4 text-[1.35rem] font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] sm:text-[1.5rem]"
        >
          Related Collections
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
      </header>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/collection/${product.id}`}
            className="group flex aspect-[1/1.7] w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/60 bg-white transition-all duration-500 ease-out hover:border-neutral-900 hover:shadow-lg hover:shadow-neutral-900/[0.06]"
          >
            <div className="flex flex-[0.38] flex-col justify-center px-5 py-6 sm:px-6 sm:py-7">
              <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-[9px]">
                {product.look.toUpperCase()}
              </p>
              <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] sm:text-[14px]">
                {product.label}
              </h3>
              <p className="mt-4 max-w-[18rem] text-[10px] leading-relaxed tracking-[0.02em] text-neutral-600 sm:text-[11px]">
                {product.description}
              </p>
            </div>

            <div className="relative min-h-0 flex-[0.52] overflow-hidden">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${product.imagePosition ?? "object-center"}`}
              />
            </div>

            <div className="flex min-h-[2.75rem] flex-[0.1] items-center justify-between border-t border-neutral-200 px-5 py-3 text-[8px] font-medium uppercase tracking-[0.2em] text-neutral-600 sm:px-6 sm:text-[9px]">
              <span>MRF TILES</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
