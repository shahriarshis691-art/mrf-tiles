import ScrollReveal from "@/components/ScrollReveal";
import FeaturedBrandCarousel from "@/components/FeaturedBrandCarousel";
import { BRANDS } from "@/lib/brands";

export default function CollectionSection() {
  return (
    <section
      id="brands"
      aria-label="Featured Brands"
      className="relative w-full overflow-x-hidden bg-[#F5F1E8] px-4 py-12 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="fadeInUp">
          <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Featured Brands
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-[0.06em] text-[#0F0F0F] sm:text-[2.4rem] lg:text-[2.75rem]">
              Our House of Brands
            </h2>
            <span className="mx-auto mt-4 block h-px w-10 bg-gold sm:w-12" />
            <p className="mt-5 line-clamp-2 text-xs leading-relaxed tracking-[0.04em] text-neutral-600 sm:line-clamp-none sm:text-sm">
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
