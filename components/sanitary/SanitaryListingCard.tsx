import Image from "next/image";
import Link from "next/link";
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
    <article className="group overflow-hidden border border-white/[0.08] bg-[#0a0a0a] transition-colors duration-300 hover:border-gold/30">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#050505]/10 transition-colors duration-500 group-hover:bg-[#050505]/35" />
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[11px] font-medium tracking-[0.22em] text-white/95 sm:text-xs">
            {item.label}
          </h3>
          <p className="shrink-0 text-[12px] font-light tracking-wide text-gold sm:text-[13px]">
            {formatPriceBdt(item.priceBdt)}
          </p>
        </div>

        <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />

        <p className="mt-3 text-[12px] font-light leading-relaxed text-white/45 sm:text-[13px]">
          {item.description}
        </p>

        <p className="mt-3 text-[11px] font-light leading-relaxed text-white/35 sm:text-[12px]">
          {item.details}
        </p>

        <dl className="mt-5 space-y-2 border-t border-white/[0.08] pt-4">
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-white/35">
              MATERIAL
            </dt>
            <dd className="text-right text-[10px] font-light text-white/60">
              {item.material}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-white/35">
              SIZE
            </dt>
            <dd className="text-right text-[10px] font-light text-white/60">
              {item.dimensions}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-white/35">
              FINISH
            </dt>
            <dd className="text-right text-[10px] font-light text-gold/70">
              {item.finish}
            </dd>
          </div>
        </dl>

        <Link
          href="/#contact"
          className="mt-5 inline-flex text-[9px] font-medium tracking-[0.22em] text-white/45 transition-colors hover:text-gold"
        >
          ENQUIRE NOW →
        </Link>
      </div>
    </article>
  );
}
