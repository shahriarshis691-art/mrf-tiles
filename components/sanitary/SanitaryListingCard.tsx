import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/lib/contact";
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
    <article className="group overflow-hidden border border-neutral-200/60 bg-white transition-all duration-500 ease-out hover:border-neutral-900">
      <div className="relative aspect-[4/5] overflow-hidden w-full h-full bg-neutral-100">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority={priority}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#0F0F0F] sm:text-xs uppercase">
            {item.label}
          </h3>
          <p className="shrink-0 text-[12px] font-medium tracking-wide text-neutral-900 sm:text-[13px]">
            {formatPriceBdt(item.priceBdt)}
          </p>
        </div>

        <span className="mt-3 block h-px w-0 bg-neutral-900 transition-all duration-500 group-hover:w-8" />

        <p className="mt-3 text-[12px] leading-relaxed text-neutral-600 sm:text-[13px]">
          {item.description}
        </p>

        <p className="mt-3 text-[11px] leading-relaxed text-neutral-600 sm:text-[12px]">
          {item.details}
        </p>

        <dl className="mt-5 space-y-2 border-t border-neutral-200 pt-4">
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Material
            </dt>
            <dd className="text-right text-[10px] text-neutral-600">
              {item.material}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Size
            </dt>
            <dd className="text-right text-[10px] text-neutral-600">
              {item.dimensions}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[9px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Finish
            </dt>
            <dd className="text-right text-[10px] font-medium text-neutral-900">
              {item.finish}
            </dd>
          </div>
        </dl>

        <Link
          href={contactHref(item.label)}
          className="mt-5 inline-flex text-[9px] font-semibold tracking-[0.2em] text-neutral-900 transition-colors hover:text-neutral-500 uppercase"
        >
          Enquire about {item.label}
        </Link>
      </div>
    </article>
  );
}
