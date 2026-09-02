import ScrollReveal from "@/components/ScrollReveal";
import FeaturedBrandCarousel from "@/components/FeaturedBrandCarousel";
import { BRANDS } from "@/lib/brands";

export default function CollectionSection() {
  return (
    <section
      id="brands"
      aria-label="Featured Brands"
      className="relative w-full overflow-x-hidden bg-[#F5F1E8] px-4 py-16 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="fadeInUp">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-500">
              Featured Brands
            </p>
            <h2 className="mt-4 font-serif text-[1.85rem] font-semibold leading-[1.05] tracking-[0.06em] text-[#0F0F0F] sm:text-[2.4rem] lg:text-[2.75rem]">
              Our House of Brands
            </h2>
            <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
            <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-sm">
              Explore the curated tile, sanitary and brassware brands that define
              MRF Galaxy&apos;s signature interiors.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.1}>
          <FeaturedBrandCarousel brands={BRANDS} />
        </ScrollReveal>
      </div>
    </section>
  );
}
