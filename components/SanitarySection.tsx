import Link from "next/link";
import SanitaryCard from "./sanitary/SanitaryCard";
import { SANITARY_CATEGORIES } from "./sanitary/sanitary-data";
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
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Sanitary Solutions
            </p>
            <h2
              id="sanitary-heading"
              className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-[#0F0F0F] sm:text-[2.35rem]"
            >
              Premium Fixtures
            </h2>
            <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
            <p className="mt-6 text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
              From designer basins to spa-inspired bathing, MRF Galaxy offers
              sanitary selections that complement our tile collections with
              enduring quality and refined aesthetics.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.15}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
            {SANITARY_CATEGORIES.map((category, index) => (
              <SanitaryCard
                key={category.id}
                category={category}
                priority={index < 2}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.3}>
          <div className="mt-14 text-center sm:mt-16">
            <Link
              href={contactHref("Sanitary consultation")}
              className="inline-flex h-14 items-center justify-center border border-[#0F0F0F] bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-[#0F0F0F] transition-colors duration-300 hover:bg-[#0F0F0F] hover:text-white"
            >
              Request Sanitary Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
