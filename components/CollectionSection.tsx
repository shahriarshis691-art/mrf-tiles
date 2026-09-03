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
        className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#EBE1D4] via-[#E4D5C2] to-[#DDD0BD] px-4 py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal variant="fadeInUp">
            <header className="mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-2">
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
        className="relative w-full overflow-x-hidden px-4 py-16 md:py-24"
        style={{
          background:
            "linear-gradient(90deg, #E62A1B 0%, #B81D22 35%, #781318 70%, #400B0E 100%)",
        }}
      >
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal variant="fadeInUp" delay={0.2}>
            <div className="mt-0 md:mt-0">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h2 className="font-serif text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.15em] text-white sm:text-[2.4rem] lg:text-[2.75rem]">
                  Explore Premium Tiles Collection
                </h2>
                <nav className="flex items-center gap-6" aria-label="Room filters">
                  {ROOM_FILTERS.map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      className={`text-xs font-medium tracking-wider md:text-sm ${
                        filter.active
                          ? "border-b-2 border-white pb-1 text-white"
                          : "text-white/70 hover:text-white"
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
