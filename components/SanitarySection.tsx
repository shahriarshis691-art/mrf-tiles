import Link from "next/link";
import SanitaryBrandCarousel from "./sanitary/SanitaryBrandCarousel";
import { SANITARY_BRANDS } from "@/lib/sanitaryBrands";
import { contactHref } from "@/lib/contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function SanitarySection() {
  return (
    <section
      id="sanitary"
      aria-labelledby="sanitary-heading"
      className="bg-[#F9F9FB] px-4 pt-0 sm:pt-0 lg:pt-0 pb-12 sm:pb-14 lg:pb-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="fadeInUp">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              CURATED WORLD-CLASS PARTNERSHIPS
            </p>
            <h2
              id="sanitary-heading"
              className="mt-4 font-serif text-2xl font-bold uppercase leading-tight tracking-[0.08em] text-[#0F0F0F] sm:text-[2.5rem] lg:text-[3rem]"
            >
              <span className="text-[#0F0F0F]">GALAXY TILES &amp; CERAMIC, RANGPUR</span>
              <span className="mt-2 block font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-700 sm:text-[12px] sm:tracking-[0.32em]">
                GALAXY TILES &amp; CERAMIC PROVIDES WORLD-CLASS LUXURY
              </span>
            </h2>
            <span className="mx-auto mt-5 block h-px w-10 bg-gold sm:w-14" />
            <p className="mt-5 line-clamp-2 text-xs leading-relaxed tracking-[0.04em] text-neutral-600 sm:line-clamp-none sm:text-sm">
              Galaxy Tiles &amp; Ceramic, Rangpur partners with the world&apos;s premier sanitary brands to
              deliver bespoke bath and architectural fittings — combining
              meticulous engineering, refined aesthetics, and enduring quality
              for luxury residences across Bangladesh.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.15}>
          <SanitaryBrandCarousel brands={SANITARY_BRANDS} />
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.3}>
          <div className="mt-10 text-center sm:mt-12">
            <Link
              href={contactHref("Sanitary consultation")}
              className="inline-flex h-12 items-center justify-center border border-[#0F0F0F] bg-transparent px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0F0F0F] transition-colors duration-300 hover:bg-[#0F0F0F] hover:text-white"
            >
              Request Sanitary Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
