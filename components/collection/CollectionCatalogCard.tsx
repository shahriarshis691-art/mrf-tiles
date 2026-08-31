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
      className="group block overflow-hidden rounded-2xl border border-neutral-200/60 bg-white transition-all duration-500 ease-out hover:border-neutral-900 hover:shadow-lg hover:shadow-neutral-900/[0.06]"
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priority}
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${product.imagePosition ?? "object-center"}`}
          />
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#0F0F0F] sm:text-xs">
            {product.label}
          </h3>
          <span className="mt-3 block h-px w-0 bg-neutral-900 transition-all duration-500 group-hover:w-8" />
          <p className="mt-3 text-[12px] leading-relaxed text-neutral-600 sm:text-[13px]">
            {product.description}
          </p>
          <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <div>
              <dt className="sr-only">Look</dt>
              <dd className="text-[9px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                {product.look.toUpperCase()}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Format</dt>
              <dd className="text-[9px] font-medium tracking-[0.16em] text-neutral-600">
                {product.format}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
}
