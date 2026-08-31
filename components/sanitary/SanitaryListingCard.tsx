import Image from "next/image";
import Link from "next/link";
import ImageWash, { imageLiftClass } from "../ImageWash";
import { formatPriceBdt, type SanitaryListingItem } from "./sanitary-data";

type SanitaryListingCardProps = {
  item: SanitaryListingItem;
  priority?: boolean;
};

export default function SanitaryListingCard({
  item,
  priority = false,
}: SanitaryListingCardProps) {
  return (
    <article className="group overflow-hidden border border-zinc-200 bg-white transition-colors duration-300 hover:border-gold/40">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover ${imageLiftClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
        />
        <ImageWash />
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[11px] font-semibold tracking-[0.22em] text-zinc-950 sm:text-xs">
            {item.label}
          </h3>
          <p className="shrink-0 text-[12px] font-medium tracking-wide text-gold sm:text-[13px]">
            {formatPriceBdt(item.priceBdt)}
          </p>
        </div>

        <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />

        <p className="mt-3 text-[12px] leading-relaxed text-zinc-800 sm:text-[13px]">
          {item.description}
        </p>

        <p className="mt-3 text-[11px] leading-relaxed text-zinc-800 sm:text-[12px]">
          {item.details}
        </p>

        <dl className="mt-5 space-y-2 border-t border-zinc-200 pt-4">
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-zinc-800">
              MATERIAL
            </dt>
            <dd className="text-right text-[10px] text-zinc-800">
              {item.material}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-zinc-800">
              SIZE
            </dt>
            <dd className="text-right text-[10px] text-zinc-800">
              {item.dimensions}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-zinc-800">
              FINISH
            </dt>
            <dd className="text-right text-[10px] font-medium text-gold">
              {item.finish}
            </dd>
          </div>
        </dl>

        <Link
          href="/#contact"
          className="mt-5 inline-flex text-[9px] font-semibold tracking-[0.22em] text-zinc-800 transition-colors hover:text-gold"
        >
          ENQUIRE NOW →
        </Link>
      </div>
    </article>
  );
}
