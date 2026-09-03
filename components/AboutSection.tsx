import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const STATS = [
  { value: "15+", label: "YEARS OF EXCELLENCE" },
  { value: "500+", label: "PROJECTS COMPLETED" },
  { value: "2", label: "PREMIUM OUTLETS" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#F5F1E8] px-4 py-0 sm:py-0 lg:py-0 pb-6 md:pb-8 mb-0"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-2 items-stretch gap-4 md:gap-10 lg:gap-16 xl:gap-24">
        <ScrollReveal variant="slideInLeft" className="h-full">
          <div className="relative h-full min-h-0 w-full overflow-hidden border border-neutral-200/60 bg-neutral-100 md:h-full">
            <Image
              src="/images/hero-display-centre.jpg"
              alt="MRF Galaxy experience showroom with premium tile displays"
              fill
              quality={90}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="h-full object-cover object-center"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideInRight" delay={0.15} className="h-full">
          <div className="flex h-full flex-col py-0 md:block md:py-0">
            <h2
              id="about-heading"
              className="font-serif font-bold text-neutral-950 uppercase tracking-[0.12em] text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-tight mt-0 mb-2 md:mb-3"
            >
              Crafting Spaces
              <br />
              With Purpose
            </h2>

            <span className="mt-2 block h-px w-10 bg-neutral-900 md:mt-3 md:w-12" />

            <p className="mt-3 line-clamp-3 max-w-lg text-xs leading-relaxed text-neutral-600 md:mt-4 md:line-clamp-none md:text-sm md:leading-relaxed">
              MRF Galaxy Tiles &amp; Sanitary brings together premium porcelain
              surfaces, refined sanitary solutions, and architectural expertise
              to transform residential and commercial environments across
              Bangladesh.
            </p>

            <p className="mt-2 line-clamp-3 max-w-lg text-xs leading-relaxed text-neutral-600 md:mt-3 md:line-clamp-none md:text-sm md:leading-relaxed">
              From large-format slabs to bespoke bathroom installations, every
              project reflects our commitment to material quality, timeless
              design, and lasting craftsmanship.
            </p>

            <dl className="mt-4 mb-0 grid grid-cols-3 gap-2 border-t border-neutral-200 pt-3 text-center md:mt-5 md:gap-8 md:pt-4 md:text-left">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-sans text-[1.25rem] font-semibold tracking-wide text-[#0F0F0F] md:text-[2rem]">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[10px] font-medium leading-tight tracking-[0.08em] text-neutral-600 md:text-[10px] md:tracking-[0.2em]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
