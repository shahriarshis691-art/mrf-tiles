import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[#F8F8F8] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-stretch sm:gap-8 lg:gap-16 xl:gap-24">
          {/* Left: Typography */}
          <ScrollReveal variant="slideInLeft" className="w-full sm:w-1/2">
            <div className="flex h-full w-full flex-col p-3 sm:p-4 lg:max-w-lg lg:p-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500 sm:text-[9px] sm:tracking-widest md:text-[11px] md:tracking-[0.2em]">
                Leadership &amp; Vision
              </p>

              <h2
                id="founder-heading"
                className="mt-3 font-sans text-[1.5rem] font-semibold uppercase leading-[1.05] tracking-[0.04em] text-neutral-900 sm:mt-2 sm:text-base sm:tracking-wider md:mt-5 md:text-[2rem] md:tracking-[0.06em] lg:text-[2.5rem] xl:text-[2.85rem]"
              >
                Message from the Founder
              </h2>

              <span className="mt-4 block h-px w-10 bg-neutral-300 md:mt-5 md:w-12" />

              <blockquote className="mt-6 text-[13px] leading-relaxed text-neutral-600 sm:mt-4 sm:text-[10px] md:mt-8 md:text-base lg:text-lg">
                &ldquo;At MRF Galaxy, our vision has always been to redefine modern
                architectural spaces across Bangladesh. We blend world-class
                porcelain craftsmanship with timeless design, ensuring every
                home and commercial space reflects uncompromised quality,
                durability, and elegance.&rdquo;
              </blockquote>

              <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-900 sm:mt-auto sm:pt-4 sm:text-[8px] sm:tracking-wider md:mt-8 md:pt-0 md:text-[11px] md:tracking-[0.2em]">
                Founder &amp; Managing Director
                <br />
                MRF Galaxy Tiles &amp; Sanitary
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Image Card */}
          <ScrollReveal variant="slideInRight" delay={0.15} className="w-full sm:w-1/2">
            <div className="relative h-full w-full overflow-hidden border border-neutral-200/60 bg-neutral-100 transition-transform duration-500 ease-out hover:scale-[1.02]">
              <div className="relative h-full min-h-[20rem] w-full bg-neutral-100 sm:min-h-[18rem] md:aspect-[3/4] md:h-[36rem] md:min-h-0">
                <Image
                  src="/founder-image/founder.png"
                  alt="Founder and Managing Director of MRF Galaxy Tiles & Sanitary"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 50vw, 50vw"
                  className="object-cover object-center"
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
