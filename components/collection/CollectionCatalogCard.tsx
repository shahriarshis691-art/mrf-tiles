import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "./collection-data";

type CollectionCatalogCardProps = {
  product: CatalogProduct;
  priority?: boolean;
};

export default function CollectionCatalogCard({
  product,
  priority = false,
}: CollectionCatalogCardProps) {
  return (
    <Link
      href={`/collection/${product.id}`}
      className="group block overflow-hidden border border-white/[0.08] bg-[#0a0a0a] transition-colors duration-300 hover:border-gold/30"
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#050505]/10 transition-colors duration-500 group-hover:bg-[#050505]/35" />
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="text-[11px] font-medium tracking-[0.26em] text-white/95 sm:text-xs">
            {product.label}
          </h3>
          <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
          <p className="mt-3 text-[12px] font-light leading-relaxed text-white/45 sm:text-[13px]">
            {product.description}
          </p>
          <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <div>
              <dt className="sr-only">Look</dt>
              <dd className="text-[9px] font-medium tracking-[0.2em] text-gold/70">
                {product.look.toUpperCase()}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Format</dt>
              <dd className="text-[9px] font-medium tracking-[0.16em] text-white/35">
                {product.format}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
}
