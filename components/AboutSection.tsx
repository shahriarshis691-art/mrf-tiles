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
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] items-stretch gap-3 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-6 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16 xl:gap-24">
        <ScrollReveal variant="slideInLeft" className="h-full">
          <div className="relative h-full min-h-[24rem] w-full overflow-hidden border border-neutral-200/60 bg-neutral-100 md:min-h-[30rem] lg:min-h-[36rem]">
            <Image
              src="/images/hero-display-centre.jpg"
              alt="MRF Galaxy experience showroom with premium tile displays"
              fill
              quality={90}
              sizes="(max-width: 639px) 34vw, (max-width: 1023px) 50vw, 50vw"
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
              className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-[#0F0F0F] sm:text-[2.5rem] lg:text-[2.85rem]"
            >
              Crafting Spaces
              <br />
              With Purpose
            </h2>

            <span className="mt-5 block h-px w-12 bg-neutral-900" />

            <p className="mt-7 max-w-lg text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
              MRF Galaxy Tiles &amp; Sanitary brings together premium porcelain
              surfaces, refined sanitary solutions, and architectural expertise
              to transform residential and commercial environments across
              Bangladesh.
            </p>

            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
              From large-format slabs to bespoke bathroom installations, every
              project reflects our commitment to material quality, timeless
              design, and lasting craftsmanship.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-10 sm:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-sans text-[1.75rem] font-semibold tracking-wide text-[#0F0F0F] sm:text-[2rem]">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 break-words text-[9px] font-medium tracking-[0.2em] text-neutral-600 sm:text-[10px]">
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
