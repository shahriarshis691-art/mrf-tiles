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
      className="bg-[#F9F9FB] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="fadeInUp">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-500">
              CURATED WORLD-CLASS PARTNERSHIPS
            </p>
            <h2
              id="sanitary-heading"
              className="mt-6 font-serif text-[2rem] font-bold uppercase leading-[1.05] tracking-[0.08em] text-[#0F0F0F] sm:text-[2.5rem] lg:text-[3rem]"
            >
              <span className="text-[#0F0F0F]">GALAXY TILES &amp; CERAMIC, RANGPUR</span>
              <span className="mt-3 block font-sans text-[12px] font-medium uppercase tracking-[0.32em] text-neutral-700 sm:text-[13px]">
                GALAXY TILES &amp; CERAMIC PROVIDES WORLD-CLASS LUXURY
              </span>
            </h2>
            <span className="mx-auto mt-6 block h-px w-14 bg-gold" />
            <p className="mt-7 text-[13px] leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-sm">
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
          <div className="mt-14 text-center sm:mt-16">
            <Link
              href={contactHref("Sanitary consultation")}
              className="inline-flex h-14 items-center justify-center border border-[#0F0F0F] bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.16em] text-[#0F0F0F] transition-colors duration-300 hover:bg-[#0F0F0F] hover:text-white"
            >
              Request Sanitary Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
