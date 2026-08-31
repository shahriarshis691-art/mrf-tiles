import Image from "next/image";
import Link from "next/link";
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
      className="group flex aspect-[1/1.7] w-full flex-col overflow-hidden border border-[#C9BF9E]/40 bg-[#F6F2EC] transition-colors duration-500 hover:border-[#B89A62]/60"
    >
      <div className="flex flex-[0.38] flex-col justify-center px-5 py-6 sm:px-6 sm:py-7">
        <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#B89A62] sm:text-[9px]">
          {collection.eyebrow}
        </p>
        <h3 className="mt-3 text-[13px] font-normal uppercase tracking-[0.18em] text-[#2D2A13] sm:text-[14px]">
          {collection.title}
        </h3>
        <p className="mt-4 max-w-[18rem] text-[10px] font-light leading-relaxed tracking-[0.02em] text-[#4A473F] sm:text-[11px]">
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
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${collection.imagePosition ?? "object-center"}`}
        />
      </div>

      <div className="flex flex-[0.1] min-h-[2.75rem] items-center justify-between border-t border-[#C9BF9E]/30 px-5 py-3 text-[8px] font-medium uppercase tracking-[0.28em] text-[#4A473F]/80 sm:px-6 sm:text-[9px]">
        <span>MRF TILES</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          EXPLORE →
        </span>
      </div>
    </Link>
  );
}
