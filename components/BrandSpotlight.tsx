import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandSpotlight() {
  return (
    <section className="w-full my-0">
      <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 md:gap-12 w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
        <ScrollReveal variant="fadeInUp">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-visible">
            <Image
              src="/images/hero-display-centre.jpg"
              alt="MRF Galaxy showroom interior with premium tile and sanitary displays"
              fill
              priority={false}
              quality={90}
              sizes="(max-width: 1023px) 50vw, 50vw"
              className="w-full h-full object-cover rounded-none"
            />

            <div className="absolute -right-6 sm:-right-8 md:-right-10 top-1/2 -translate-y-1/2 z-20 flex w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full bg-white text-black shadow-xl flex-col items-center justify-center border border-neutral-100 animate-float">
              <span className="text-[8px] sm:text-[10px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Trusted
              </span>
              <span className="mt-1 text-xs sm:text-base md:text-3xl font-bold text-black leading-none">
                15+
              </span>
              <span className="mt-1 text-[8px] sm:text-[10px] md:text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-600">
                Years
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.15}>
          <div>
            <p className="text-[9px] sm:text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1.5 md:mb-3">
              OFFICIAL PARTNER · ARCHITECTURAL SURFACES
            </p>

            <h2 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight mb-2 md:mb-4">
              GALAXY TILES &amp; CERAMIC Official provider of KHADIM
            </h2>

            <span className="block w-8 sm:w-12 h-[1.5px] bg-neutral-900 mb-2 md:mb-4" />

            <p className="text-[10px] sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed mb-3 md:mb-6 line-clamp-4 md:line-clamp-none">
              GALAXY TILES &amp; CERAMIC is the official provider of KHADIM, bringing world-class porcelain tiles, vitrified surfaces, and refined sanitary solutions. Engineered for exceptional durability and timeless architectural aesthetics, our curated KHADIM collections provide unmatched surface perfection for luxury residences, commercial spaces, and bespoke interior projects.
            </p>

            <a
              href="#contact"
              className="inline-block bg-black text-white px-3 py-1.5 sm:px-6 sm:py-3 text-[9px] sm:text-xs font-semibold tracking-widest uppercase rounded-none hover:bg-neutral-800 transition-colors"
            >
              KNOW MORE
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}