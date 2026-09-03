import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandSpotlight() {
  return (
    <section className="w-full my-0">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12 px-4 md:px-8">
        <ScrollReveal variant="fadeInUp">
          <div className="relative w-full">
            <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/hero-display-centre.jpg"
                alt="MRF Galaxy showroom interior with premium tile and sanitary displays"
                fill
                priority={false}
                quality={90}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute bottom-4 right-4 md:-right-10 md:top-1/2 md:-translate-y-1/2 flex w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-xl border border-neutral-200 flex-col items-center justify-center p-3 text-center z-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Trusted
              </span>
              <span className="mt-1 text-2xl md:text-3xl font-bold text-black leading-none">
                15+
              </span>
              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-600">
                Years
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.15}>
          <div className="space-y-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              OFFICIAL PARTNER · ARCHITECTURAL SURFACES
            </p>

            <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              GALAXY TILES &amp; CERAMIC Official provider of KHADIM
            </h2>

            <span className="block h-px w-10 bg-neutral-900" />

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl">
              GALAXY TILES &amp; CERAMIC is the official provider of KHADIM, bringing world-class porcelain tiles, vitrified surfaces, and refined sanitary solutions. Engineered for exceptional durability and timeless architectural aesthetics, our curated KHADIM collections provide unmatched surface perfection for luxury residences, commercial spaces, and bespoke interior projects.
            </p>

            <a
              href="#contact"
              className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors"
            >
              KNOW MORE
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
