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
    <article className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-4 border-t border-white/15 py-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-10 lg:gap-12 lg:py-12">
      <div className="min-w-0 border-l border-white/25 pl-3 sm:pl-5">
        <p className="text-[9px] font-medium tracking-[0.16em] text-neutral-400 uppercase sm:text-[10px] sm:tracking-[0.2em]">
          Branch {index + 1}
        </p>
        <p className="mt-2 text-[11px] font-semibold leading-snug text-stone-100 sm:text-sm">
          {outlet.locationLine}
        </p>
        <p className="mt-2 text-[10px] leading-relaxed tracking-[0.04em] text-neutral-300 sm:text-[11px] sm:tracking-[0.06em]">
          Branch Incharge:{" "}
          <a
            href={`tel:${outlet.phone}`}
            className="font-medium text-white transition-colors hover:text-neutral-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#282828]"
          >
            {outlet.phoneDisplay}
          </a>
        </p>
        <p className="mt-3 inline-block max-w-full border border-neutral-200 bg-white px-2 py-1 text-[8px] font-medium leading-snug tracking-[0.12em] text-neutral-700 sm:px-2.5 sm:text-[9px] sm:tracking-[0.18em]">
          {outlet.tag}
        </p>
      </div>

      <figure className="relative aspect-[5/4] w-full overflow-hidden bg-neutral-100">
        <Image
          src={outlet.image}
          alt={outlet.alt}
          fill
          quality={90}
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 55vw, (max-width: 1535px) 60vw, 864px"
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
      aria-labelledby="outlets-heading"
      className="relative overflow-hidden bg-[#282828] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal
          variant="slideInLeft"
          className="flex min-h-[clamp(18rem,30vw,28rem)] items-center"
        >
          <header className="max-w-md">
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
              01 / Outlets
            </p>
            <p className="mt-2 text-[10px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
              MRF Galaxy Tiles &amp; Sanitary
            </p>
            <h2
              id="outlets-heading"
              className="mt-6 text-[clamp(1.75rem,3.2vw,2.65rem)] font-normal leading-[1.12] tracking-[-0.01em] text-white"
            >
              A Space That <span className="font-bold">Inspires</span> Your{" "}
              <span className="font-bold">Luxury Home</span>
            </h2>
            <p className="mt-8 text-[13px] leading-relaxed text-neutral-300 sm:text-sm">
              Experience our curated collections in realistic showroom
              environments, designed to visualize grandeur for today and
              enduring elegance for tomorrow.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="slideInRight" delay={0.15}>
          <div className="mt-12 sm:mt-14">
            {OUTLETS.map((outlet, index) => (
              <BranchRow key={outlet.name} outlet={outlet} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
