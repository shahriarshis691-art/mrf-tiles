import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[#F8F8F8] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left: Typography */}
          <ScrollReveal variant="slideInLeft">
            <div className="max-w-lg">
              <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                Leadership &amp; Vision
              </p>

              <h2
                id="founder-heading"
                className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-neutral-900 sm:text-[2.5rem] lg:text-[2.85rem]"
              >
                Message from the Founder
              </h2>

              <span className="mt-5 block h-px w-12 bg-neutral-300" />

              <blockquote className="mt-8 text-base md:text-lg text-neutral-600 leading-relaxed">
                “At MRF Galaxy, our vision has always been to redefine modern architectural spaces across Bangladesh. We blend world-class porcelain craftsmanship with timeless design, ensuring every home and commercial space reflects uncompromised quality, durability, and elegance.”
              </blockquote>

              <p className="mt-8 text-[11px] font-medium tracking-[0.2em] text-neutral-900 uppercase">
                Founder &amp; Managing Director
                <br />
                MRF Galaxy Tiles &amp; Sanitary
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Image Card */}
          <ScrollReveal variant="slideInRight" delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-sm shadow-neutral-900/[0.04] transition-transform duration-500 ease-out hover:scale-[1.02]">
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-[36rem]">
                <Image
                  src="/founder-image/founder.png"
                  alt="Founder and Managing Director of MRF Galaxy Tiles & Sanitary"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
