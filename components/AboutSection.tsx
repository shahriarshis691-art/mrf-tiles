import Image from "next/image";
import ImageWash, { imageLiftClass } from "./ImageWash";
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
      className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <ScrollReveal variant="slideInLeft">
          <div className="relative aspect-[4/5] overflow-hidden border border-zinc-200 bg-white sm:aspect-[5/6] lg:aspect-auto lg:min-h-[36rem]">
            <Image
              src="/images/hero-display-centre.jpg"
              alt="MRF Galaxy experience showroom with premium tile displays"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover ${imageLiftClass}`}
            />
            <ImageWash />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideInRight" delay={0.15}>
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
              OUR STORY
            </p>

            <h2
              id="about-heading"
              className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-zinc-950 sm:text-[2.5rem] lg:text-[2.85rem]"
            >
              Crafting Spaces
              <br />
              With Purpose
            </h2>

            <span className="mt-5 block h-px w-12 bg-gold/70" />

            <p className="mt-7 max-w-lg text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              MRF Galaxy Tiles &amp; Sanitary brings together premium porcelain
              surfaces, refined sanitary solutions, and architectural expertise
              to transform residential and commercial environments across
              Bangladesh.
            </p>

            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              From large-format slabs to bespoke bathroom installations, every
              project reflects our commitment to material quality, timeless
              design, and lasting craftsmanship.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-10 sm:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-sans text-[1.75rem] font-semibold tracking-wide text-gold sm:text-[2rem]">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[9px] font-medium tracking-[0.22em] text-zinc-800 sm:text-[10px]">
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
