import Link from "next/link";
import CollectionCard from "./CollectionCard";
import { EDITORIAL_COLLECTIONS } from "./collection-data";

export default function CollectionSection() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <header className="text-center">
          <h2
            id="collection-heading"
            className="text-[11px] font-semibold lowercase tracking-[0.22em] text-zinc-950"
          >
            collection
          </h2>
          <Link
            href="/collection"
            className="mt-6 inline-block text-[9px] font-medium uppercase tracking-[0.28em] text-[#B89A62] transition-colors hover:text-[#2D2A13]"
          >
            View Full Catalog →
          </Link>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {EDITORIAL_COLLECTIONS.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
