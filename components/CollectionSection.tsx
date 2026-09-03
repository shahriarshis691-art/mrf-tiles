import ScrollReveal from "@/components/ScrollReveal";
import FeaturedBrandCarousel from "@/components/FeaturedBrandCarousel";
import RoomCategoriesCarousel from "@/components/RoomCategoriesCarousel";
import { BRANDS } from "@/lib/brands";
import { ROOM_CATEGORIES, ROOM_FILTERS } from "@/lib/roomCategories";

export default function CollectionSection() {
  return (
    <>
      <section
        id="brands"
        aria-label="Featured Brands"
        className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#EBE1D4] via-[#E4D5C2] to-[#DDD0BD] px-4 pt-6 pb-4 md:pt-10 md:pb-6"
      >
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal variant="fadeInUp">
            <header className="mx-auto text-center">
              <p className="mt-0 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-2">
                Featured Brands
              </p>
              <h2 className="font-serif font-bold uppercase tracking-[0.15em] text-neutral-950 text-2xl sm:text-[2.4rem] lg:text-[2.75rem]">
                Our House of Brands
              </h2>
              <span className="mx-auto my-3 block h-[1px] w-12 bg-neutral-800/40" />
              <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-neutral-700 md:text-base mb-10">
                Explore the curated tile, sanitary and brassware brands that define
                MRF Galaxy&apos;s signature interiors.
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.1} className="mb-6 md:mb-8">
            <FeaturedBrandCarousel brands={BRANDS} />
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-label="Premium Tiles Collection"
        className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#EFF1F3] via-[#E7E9EC] to-[#DEE0E4] px-4 py-10 md:py-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal variant="fadeInUp" delay={0.2}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-serif font-bold text-neutral-950 uppercase tracking-[0.12em] text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-tight mt-0 mb-2 md:mb-3">
                Explore Premium Tiles Collection
              </h2>
              <nav className="flex items-center gap-6" aria-label="Room filters">
                {ROOM_FILTERS.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    className={`text-xs font-medium tracking-widest uppercase ${
                      filter.active
                        ? "border-b-2 border-neutral-900 pb-1 text-neutral-950"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-6 md:mt-8">
              <RoomCategoriesCarousel categories={ROOM_CATEGORIES} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
