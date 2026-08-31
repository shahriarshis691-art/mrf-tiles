import Image from "next/image";
import Link from "next/link";
import ImageWash, { imageLiftClass } from "../ImageWash";
import type { EditorialCollection } from "./collection-data";

type CollectionCardProps = {
  collection: EditorialCollection;
  priority?: boolean;
};

export default function CollectionCard({
  collection,
  priority = false,
}: CollectionCardProps) {
  return (
    <Link
      href={collection.href}
      className="group flex aspect-[1/1.7] w-full flex-col overflow-hidden border border-zinc-200 bg-white transition-colors duration-500 hover:border-gold/60"
    >
      <div className="flex flex-[0.38] flex-col justify-center px-5 py-6 sm:px-6 sm:py-7">
        <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-gold sm:text-[9px]">
          {collection.eyebrow}
        </p>
        <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-zinc-950 sm:text-[14px]">
          {collection.title}
        </h3>
        <p className="mt-4 max-w-[18rem] text-[10px] leading-relaxed tracking-[0.02em] text-zinc-800 sm:text-[11px]">
          {collection.description}
        </p>
      </div>

      <div className="relative min-h-0 flex-[0.52] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.alt}
          fill
          priority={priority}
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`h-full w-full object-cover ${imageLiftClass} transition-transform duration-700 ease-out group-hover:scale-[1.03] ${collection.imagePosition ?? "object-center"}`}
        />
        <ImageWash />
      </div>

      <div className="flex flex-[0.1] min-h-[2.75rem] items-center justify-between border-t border-zinc-200 px-5 py-3 text-[8px] font-medium uppercase tracking-[0.28em] text-zinc-800 sm:px-6 sm:text-[9px]">
        <span>MRF TILES</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          EXPLORE →
        </span>
      </div>
    </Link>
  );
}
