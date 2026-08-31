import Link from "next/link";
import CollectionCard from "./CollectionCard";
import { EDITORIAL_COLLECTIONS } from "./collection-data";

export default function CollectionSection() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="bg-[#7D7263] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <header className="text-center">
          <p className="text-[11px] font-medium tracking-[0.22em] text-[#E5D5C5]">
            THE COLLECTION
          </p>
          <h2
            id="collection-heading"
            className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-[2.35rem]"
          >
            Curated Surfaces
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-[#E5D5C5]/80" />
          <Link
            href="/collection"
            className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#E5D5C5] transition-colors hover:text-white"
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
