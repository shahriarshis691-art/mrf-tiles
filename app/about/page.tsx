import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/lib/contact";
import { OUTLETS } from "@/components/outlet-data";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "MRF Galaxy Tiles & Sanitary is Rangpur's luxury showroom for premium imported tiles, porcelain slabs, and designer sanitary solutions.",
  path: "/about",
  image: "/images/hero-display-centre.jpg",
  imageAlt: "MRF Galaxy tiles display centre in Rangpur",
});

type Product = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type Value = {
  label: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    title: "Porcelain Floor Slabs",
    description:
      "Large-format porcelain slabs engineered for superior strength and timeless architectural appeal across residential and commercial floors.",
    image: "/images/collection/modern-dark.jpg",
    alt: "Dark large-format porcelain slab flooring installation",
  },
  {
    title: "Luxury Bathroom Wall Tiles",
    description:
      "Designer wall tiles in marble, stone, and concrete finishes that transform bathrooms into refined sanctuaries of modern luxury.",
    image: "/images/projects/modern-sanitary-space.jpg",
    alt: "Modern bathroom with premium luxury wall tiles and sanitary fixtures",
  },
  {
    title: "Designer Sanitary Ware",
    description:
      "Curated basins, water closets, bathtubs, and faucets sourced from leading international brands to complement every surface collection.",
    image: "/images/sanitary/luxury-water-closets.jpg",
    alt: "Premium designer water closets and sanitary ware display",
  },
  {
    title: "Kitchen Surfaces",
    description:
      "High-performance porcelain and ceramic surfaces for countertops, backsplashes, and islands — where durability meets sophisticated design.",
    image: "/images/projects/contemporary-kitchen.jpg",
    alt: "Contemporary kitchen with premium porcelain surface countertops",
  },
  {
    title: "Architectural Design Consultation",
    description:
      "End-to-end advisory services guiding residential and commercial projects from material selection through flawless installation planning.",
    image: "/images/projects/architectural-tile-experience.jpg",
    alt: "Architectural design consultation in premium showroom environment",
  },
];

const VALUES: Value[] = [
  {
    label: "Quality",
    description:
      "We source only internationally certified materials and oversee every detail to ensure uncompromising standards in every surface we deliver.",
  },
  {
    label: "Innovation",
    description:
      "We continuously explore emerging trends and advanced manufacturing to bring you surfaces that lead design and performance.",
  },
  {
    label: "Durability",
    description:
      "Every product is selected for its ability to endure — resisting wear, weather, and time while preserving its aesthetic integrity.",
  },
  {
    label: "Client Satisfaction",
    description:
      "Your vision is our priority. We provide personalized consultation and dedicated support to make every project uniquely yours.",
  },
];

const STATS = [
  { value: "15+", label: "YEARS OF EXCELLENCE" },
  { value: "500+", label: "PROJECTS COMPLETED" },
  { value: "2", label: "LUXURY SHOWROOMS" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-100">
      <Navbar dark />
      <main id="main">
        {/* Hero / Header Banner */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative flex min-h-screen items-center justify-center"
        >
          <Image
            src="/images/hero-display-centre.jpg"
            alt=""
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover object-center opacity-12"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,90,18,0.06)_0%,transparent_60%)]" />
          <ScrollReveal variant="fadeIn" delay={0.15}>
            <div className="relative z-10 text-center px-6">
              <p className="text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
                Est. 2010 • Rangpur, Bangladesh
              </p>
              <h1
                id="about-hero-heading"
                className="mt-6 font-serif text-[2.25rem] font-bold tracking-[0.03em] text-white sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] leading-[1.02]"
              >
                ABOUT MRF GALAXY TILES
                <br />
                &amp; SANITARY
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-[13px] leading-relaxed text-neutral-400 sm:text-sm">
                Rangpur&apos;s premier destination for premium imported tiles,
                architectural porcelain slabs, and designer sanitary solutions —
                curated for spaces that endure and inspire.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Brand Overview */}
        <section
          aria-labelledby="brand-overview-heading"
          className="px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32"
        >
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <header className="mx-auto max-w-4xl text-center">
                <p className="text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                  Our Foundation
                </p>
                <h2
                  id="brand-overview-heading"
                  className="mt-5 font-serif text-[2rem] font-bold text-white sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.05]"
                >
                  Brand Overview
                </h2>
                <span className="mt-5 block h-px w-12 bg-gold/40 mx-auto" />
              </header>
            </ScrollReveal>

            <ScrollReveal variant="fadeInUp" delay={0.15}>
              <div className="mx-auto mt-12 max-w-3xl">
                <p className="text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                  MRF GALAXY TILES &amp; SANITARY stands as Rangpur&apos;s leading luxury
                  showroom, dedicated to bringing premium imported tiles,
                  architectural porcelain slabs, and designer sanitary solutions
                  to discerning homeowners, architects, and interior designers.
                  Since 2010, we have partnered with internationally acclaimed
                  manufacturers to curate collections that merge exceptional
                  material quality with forward-thinking design.
                </p>
                <p className="mt-6 text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                  Our expertise spans large-format flooring, statement wall
                  surfaces, bespoke bathroom installations, and complete kitchen
                  transformations. Every product is selected for its ability to
                  elevate architectural spaces while withstanding the test of
                  time.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeInUp" delay={0.25}>
              <dl className="mx-auto mt-16 grid grid-cols-2 gap-8 max-w-3xl sm:grid-cols-3 sm:gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <dt className="font-serif text-[2.5rem] font-bold text-white sm:text-[3rem]">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-[9px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </section>

        {/* Heritage & Craftsmanship */}
        <section
          aria-labelledby="heritage-heading"
          className="relative bg-neutral-900 px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32"
        >
          <Image
            src="/images/projects/architectural-tile-experience.jpg"
            alt=""
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_40%] opacity-8"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-neutral-900/75"
          />
          <div className="mx-auto max-w-[1440px] relative z-10">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
              <ScrollReveal variant="slideInLeft">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                    Our Heritage
                  </p>
                  <h2
                    id="heritage-heading"
                    className="mt-5 font-serif text-[2rem] font-bold text-white sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.05]"
                  >
                    Heritage &amp;
                    <br />
                    Craftsmanship
                  </h2>
                  <span className="mt-5 block h-px w-12 bg-gold/40" />
                  <p className="mt-7 max-w-md text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                    Our commitment is rooted in architectural aesthetics — the
                    belief that surfaces shape the soul of a space. We partner
                    with artisans and manufacturers who share our dedication to
                    high durability, modern living, and timeless design
                    standards.
                  </p>
                  <p className="mt-5 max-w-md text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                    Every slab and fixture entering our showroom is selected not
                    merely for its beauty, but for its ability to endure —
                    resisting wear, weather, and changing trends while preserving
                    elegance for generations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideInRight" delay={0.15}>
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {[
                    { label: "15+", sub: "Years of Excellence" },
                    { label: "500+", sub: "Projects Completed" },
                    { label: "2", sub: "Premium Outlets" },
                    { label: "100+", sub: "Premium Brands" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border border-white/5 bg-white/[0.03] p-6 text-center"
                    >
                      <dt className="font-serif text-[2.5rem] font-bold text-white sm:text-[3rem]">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-[9px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
                        {item.sub}
                      </dd>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Products & Services */}
        <section
          aria-labelledby="products-heading"
          className="px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32"
        >
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <header className="mx-auto max-w-3xl text-center">
                <p className="text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                  What We Offer
                </p>
                <h2
                  id="products-heading"
                  className="mt-5 font-serif text-[2rem] font-bold text-white sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.05]"
                >
                  Products &amp; Services
                </h2>
                <span className="mt-5 block h-px w-12 bg-gold/40 mx-auto" />
                <p className="mt-6 text-[13px] leading-relaxed text-neutral-400 sm:text-[15px]">
                  From large-format porcelain slabs to bespoke sanitary
                  installations, we provide end-to-end solutions for residential
                  and commercial architectural projects.
                </p>
              </header>
            </ScrollReveal>

            <ScrollReveal variant="fadeInUp" delay={0.15}>
              <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {PRODUCTS.map((product) => (
                  <article
                    key={product.title}
                    className="group flex flex-col bg-neutral-900 border border-white/5"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        quality={90}
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-[1.125rem] font-bold text-white">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-[12px] leading-relaxed text-neutral-400">
                        {product.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Showroom Experience */}
        <section
          aria-labelledby="showroom-heading"
          className="relative bg-neutral-900 px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32"
        >
          <Image
            src="/images/projects/mrf-experience-showroom.jpg"
            alt=""
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center opacity-10"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-neutral-950/80"
          />

          <div className="mx-auto max-w-[1440px] relative z-10">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
              <ScrollReveal variant="slideInLeft">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                    Visit Our Showroom
                  </p>
                  <h2
                    id="showroom-heading"
                    className="mt-5 font-serif text-[2rem] font-bold text-white sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.05]"
                  >
                    Showroom Experience
                    <br />
                    in Rangpur
                  </h2>
                  <span className="mt-5 block h-px w-12 bg-gold/40" />
                  <p className="mt-7 max-w-md text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                    Step into our curated experience centers in Rangpur, where
                    premium collections are presented in realistic living
                    environments. Our personalized consultation service ensures
                    every material selection, from floor to ceiling, aligns with
                    your architectural vision.
                  </p>
                  <p className="mt-5 max-w-md text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                    We provide dedicated architectural support for residential
                    and commercial projects across Rangpur Division, from
                    concept through installation and beyond.
                  </p>

                  <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">
                    <Link
                      href={contactHref("Showroom visit")}
                      className="inline-flex h-14 min-h-[44px] items-center justify-center border border-gold bg-gold px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-950 transition-colors duration-300 hover:bg-gold/90 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    >
                      Visit Our Showroom
                    </Link>
                    <a
                      href={`https://wa.me/${OUTLETS[0].whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 min-h-[44px] items-center justify-center border border-white/20 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    >
                      Contact Our Consultants
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideInRight" delay={0.15}>
                <div className="grid gap-6 sm:gap-8">
                  {OUTLETS.map((outlet) => (
                    <div
                      key={outlet.name}
                      className="border-l-2 border-gold/30 pl-6"
                    >
                      <p className="text-[10px] font-medium tracking-[0.2em] text-gold uppercase">
                        {outlet.tag}
                      </p>
                      <p className="mt-1 text-[13px] font-semibold text-white sm:text-sm">
                        {outlet.name}
                      </p>
                      <address className="mt-2 not-italic">
                        <p className="max-w-xs text-[12px] leading-relaxed text-neutral-400">
                          {outlet.address.slice(1).map((line, index) => (
                            <span key={line}>
                              {line}
                              {index < outlet.address.length - 2 ? <br /> : null}
                            </span>
                          ))}
                        </p>
                      </address>
                      <a
                        href={`tel:${outlet.phone}`}
                        className="mt-3 inline-flex items-center text-[12px] font-medium text-neutral-200 transition-colors hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                      >
                        {outlet.phoneDisplay}
                      </a>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section
          aria-labelledby="values-heading"
          className="px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32"
        >
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <header className="mx-auto max-w-3xl text-center">
                <p className="text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                  Our Principles
                </p>
                <h2
                  id="values-heading"
                  className="mt-5 font-serif text-[2rem] font-bold text-white sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.05]"
                >
                  Core Values
                </h2>
                <span className="mt-5 block h-px w-12 bg-gold/40 mx-auto" />
              </header>
            </ScrollReveal>

            <ScrollReveal variant="fadeInUp" delay={0.15}>
              <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {VALUES.map((value) => (
                  <div
                    key={value.label}
                    className="border border-white/5 bg-neutral-900 p-8 text-center"
                  >
                    <h3 className="font-serif text-[1.25rem] font-bold text-white">
                      {value.label}
                    </h3>
                    <span className="mt-4 block h-px w-8 bg-gold/40 mx-auto" />
                    <p className="mt-5 text-[12px] leading-relaxed text-neutral-400">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section
          aria-label="Call to action"
          className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-40"
        >
          <Image
            src="/images/projects/modern-sanitary-space.jpg"
            alt=""
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center opacity-15"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-neutral-950/80"
          />
          <div className="mx-auto max-w-[1440px] relative z-10 text-center">
            <ScrollReveal variant="fadeInUp">
              <h2 className="font-serif text-[1.75rem] font-bold text-white sm:text-[2.25rem] md:text-[2.75rem] leading-[1.1]">
                Ready to Transform Your Space?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-relaxed text-neutral-300 sm:text-[15px]">
                Whether you&apos;re envisioning a luxury residential renovation or a
                commercial architectural project, our consultants are ready to
                guide you from material selection to flawless execution.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeInUp" delay={0.15}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">
                <Link
                  href={contactHref("Project consultation")}
                  className="inline-flex h-14 min-h-[44px] items-center justify-center border border-gold bg-gold px-12 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-950 transition-colors duration-300 hover:bg-gold/90 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  Contact Our Consultants
                </Link>
                <a
                  href={OUTLETS[0].mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 min-h-[44px] items-center justify-center border border-white/30 bg-transparent px-12 text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  Visit Our Showroom
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
