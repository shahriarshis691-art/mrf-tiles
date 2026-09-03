import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[#F8F8F8] px-4 py-12 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8 lg:gap-16 xl:gap-24">
          {/* Left: Typography */}
          <ScrollReveal variant="slideInLeft" className="w-full md:w-1/2">
            <div className="flex h-full w-full flex-col p-3 md:p-4 lg:max-w-lg lg:p-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-[10px] md:text-[11px]">
                Leadership &amp; Vision
              </p>

              <h2
                id="founder-heading"
                className="mt-2 font-serif text-2xl font-bold uppercase leading-[1.15] tracking-[0.15em] text-neutral-950 md:mt-5 md:text-[2rem] lg:text-[2.5rem] xl:text-[2.85rem]"
              >
                Message from the Founder
              </h2>

              <span className="mt-3 block h-px w-10 bg-neutral-300 md:mt-5 md:w-12" />

              <blockquote className="mt-4 line-clamp-4 text-xs leading-[1.45] text-neutral-600 md:mt-8 md:line-clamp-none md:text-base md:leading-relaxed lg:text-lg">
                &ldquo;At MRF Galaxy, our vision has always been to redefine modern
                architectural spaces across Bangladesh. We blend world-class
                porcelain craftsmanship with timeless design, ensuring every
                home and commercial space reflects uncompromised quality,
                durability, and elegance.&rdquo;
              </blockquote>

              <p className="mt-auto pt-4 text-[10px] font-medium uppercase tracking-[0.1em] text-neutral-900 md:mt-8 md:pt-0 md:text-[11px] md:tracking-[0.2em]">
                Founder &amp; Managing Director
                <br />
                MRF Galaxy Tiles &amp; Sanitary
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Image Card */}
          <ScrollReveal variant="slideInRight" delay={0.15} className="w-full md:w-1/2">
            <div className="relative h-full w-full overflow-hidden border border-neutral-200/60 bg-neutral-100 transition-transform duration-500 ease-out hover:scale-[1.02]">
              <div className="relative h-64 w-full bg-neutral-100 md:aspect-[3/4] md:h-[36rem] md:max-h-none">
                <Image
                  src="/founder-image/founder.jpg"
                  alt="Founder and Managing Director of MRF Galaxy Tiles & Sanitary"
                  fill
                  quality={90}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
