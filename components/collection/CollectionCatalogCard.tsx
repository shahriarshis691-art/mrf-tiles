import Image from "next/image";
import Link from "next/link";
import ImageWash, { imageLiftClass } from "../ImageWash";
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
      className="group block overflow-hidden border border-zinc-200 bg-white transition-colors duration-300 hover:border-gold/40"
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${imageLiftClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
          <ImageWash />
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="text-[11px] font-semibold tracking-[0.26em] text-zinc-950 sm:text-xs">
            {product.label}
          </h3>
          <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
          <p className="mt-3 text-[12px] leading-relaxed text-zinc-800 sm:text-[13px]">
            {product.description}
          </p>
          <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <div>
              <dt className="sr-only">Look</dt>
              <dd className="text-[9px] font-medium tracking-[0.2em] text-gold">
                {product.look.toUpperCase()}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Format</dt>
              <dd className="text-[9px] font-medium tracking-[0.16em] text-zinc-800">
                {product.format}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
}
