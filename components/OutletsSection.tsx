import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { OUTLETS } from "./outlet-data";

function BranchRow({
  outlet,
  index,
}: {
  outlet: (typeof OUTLETS)[number];
  index: number;
}) {
  return (
    <article className="grid min-h-[14rem] grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-stretch gap-3 border-t border-white/15 py-5 md:items-center md:gap-8 md:py-10 lg:gap-12 lg:py-12">
      <div className="min-w-0 border-l border-white/25 pl-3 sm:pl-5 md:border-l-0 md:pl-0">
        <p className="text-[10px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
          Branch {index + 1}
        </p>
        <p className="mt-2 text-xs font-semibold leading-snug text-stone-100 sm:text-sm">
          {outlet.locationLine}
        </p>
        <p className="mt-2 text-xs leading-relaxed tracking-[0.04em] text-neutral-300 sm:text-sm">
          Branch Incharge:{" "}
          <a
            href={`tel:${outlet.phone}`}
            className="font-medium text-white transition-colors hover:text-neutral-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#282828]"
          >
            {outlet.phoneDisplay}
          </a>
        </p>
        <p className="mt-3 inline-block max-w-full border border-neutral-200 bg-white px-2 py-1 text-[10px] font-medium leading-snug tracking-[0.12em] text-neutral-700 sm:px-2.5">
          {outlet.tag}
        </p>
      </div>

      <figure className="relative h-48 w-full overflow-hidden bg-neutral-100 md:aspect-[5/4] md:h-auto">
        <Image
          src={outlet.image}
          alt={outlet.alt}
          fill
          quality={90}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 55vw, (max-width: 1535px) 60vw, 864px"
          className="object-cover object-center"
        />
      </figure>
    </article>
  );
}

export default function OutletsSection() {
  return (
    <section
      id="outlets"
      aria-label="Outlets"
      className="relative overflow-hidden bg-[#282828] px-4 py-12 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="slideInRight" delay={0.15}>
          <div>
            {OUTLETS.map((outlet, index) => (
              <BranchRow key={outlet.name} outlet={outlet} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
