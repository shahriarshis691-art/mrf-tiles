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
      className="bg-[#F5F1E8] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16 xl:gap-24">
        <ScrollReveal variant="slideInLeft" className="h-full">
          <div className="relative aspect-[4/3] h-auto min-h-0 w-full overflow-hidden border border-neutral-200/60 bg-neutral-100 md:aspect-auto md:h-full md:min-h-[30rem] lg:min-h-[36rem]">
            <Image
              src="/images/hero-display-centre.jpg"
              alt="MRF Galaxy experience showroom with premium tile displays"
              fill
              quality={90}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideInRight" delay={0.15}>
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Our Story
            </p>

            <h2
              id="about-heading"
              className="mt-5 font-sans text-[clamp(1.5rem,5vw,2rem)] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-[#0F0F0F] md:text-[2.5rem] lg:text-[2.85rem]"
            >
              Crafting Spaces
              <br />
              With Purpose
            </h2>

            <span className="mt-5 block h-px w-12 bg-neutral-900" />

            <p className="mt-7 max-w-lg text-[0.95rem] leading-[1.55] text-neutral-600 md:text-sm md:leading-relaxed">
              MRF Galaxy Tiles &amp; Sanitary brings together premium porcelain
              surfaces, refined sanitary solutions, and architectural expertise
              to transform residential and commercial environments across
              Bangladesh.
            </p>

            <p className="mt-5 max-w-lg text-[0.95rem] leading-[1.55] text-neutral-600 md:text-sm md:leading-relaxed">
              From large-format slabs to bespoke bathroom installations, every
              project reflects our commitment to material quality, timeless
              design, and lasting craftsmanship.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-3 border-t border-neutral-200 pt-8 text-center md:gap-8 md:pt-10 md:text-left">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-sans text-[1.75rem] font-semibold tracking-wide text-[#0F0F0F] sm:text-[2rem]">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[8px] font-medium leading-tight tracking-[0.08em] text-neutral-600 md:text-[10px] md:tracking-[0.2em]">
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
