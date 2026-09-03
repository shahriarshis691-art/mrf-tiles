import Navbar from "@/components/Navbar";
import PageEnter from "@/components/PageEnter";
import ScrollReveal from "@/components/ScrollReveal";
import { OUTLETS } from "@/components/outlet-data";
import { contactHref } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata({
  title: "Galaxy Tiles & Ceramic — Official Provider of KHADIM",
  description:
    "Galaxy Tiles & Ceramic is the official provider of KHADIM in Rangpur. 15+ years of curated porcelain slabs, vitrified surfaces, and architectural solutions for luxury residences and commercial projects.",
  path: "/partners/galaxy-tiles-ceramic",
  image: "/images/hero-display-centre.jpg",
  imageAlt:
    "Galaxy Tiles & Ceramic showroom featuring curated KHADIM porcelain surfaces",
});

const GALLERY_ITEMS = [
  {
    src: "/images/projects/architectural-tile-experience.jpg",
    alt: "Architectural tile experience featuring KHADIM porcelain slabs",
    label: "Architectural Experience",
  },
  {
    src: "/images/projects/luxury-villa.jpg",
    alt: "Luxury villa interior with KHADIM porcelain flooring",
    label: "Luxury Residences",
  },
  {
    src: "/images/projects/premium-hospitality-interior.jpg",
    alt: "Premium hospitality interior with KHADIM porcelain surfaces",
    label: "Hospitality Spaces",
  },
  {
    src: "/images/projects/urban-commercial-space.jpg",
    alt: "Urban commercial space with KHADIM architectural porcelain",
    label: "Commercial Architecture",
  },
  {
    src: "/images/projects/modern-residence.jpg",
    alt: "Modern residence featuring KHADIM marble-look porcelain",
    label: "Modern Residences",
  },
  {
    src: "/images/projects/minimalist-living-space.jpg",
    alt: "Minimalist living space with KHADIM stone-inspired tiles",
    label: "Minimalist Interiors",
  },
] as const;

const LEGACY_POINTS = [
  {
    title: "15+ Years of Curation",
    body: "More than a decade of sourcing, testing, and curating the world's finest porcelain and vitrified surfaces for Bangladesh's most ambitious projects.",
  },
  {
    title: "Architectural Solutions",
    body: "Engineered specifications, format expertise, and on-site consultancy for residential, hospitality, and commercial architecture.",
  },
  {
    title: "Curated Porcelain & Vitrified Surfaces",
    body: "Hand-selected slabs and tiles from KHADIM's signature collections — calibrated for performance, longevity, and timeless aesthetics.",
  },
] as const;

const secondaryButtonClass =
  "inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-8 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-fit";

const goldButtonClass =
  "inline-flex min-h-[44px] items-center justify-center border border-[#0A3826] bg-[#0A3826] px-8 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-black hover:border-black hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3826] focus-visible:ring-offset-2 sm:w-fit";

export default function GalaxyTilesCeramicPage() {
  const primaryOutlet = OUTLETS[0];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main">
        <PageEnter>
          <section
            aria-label="Galaxy Tiles and Ceramic hero"
            className="relative h-[52vh] min-h-[30rem] w-full overflow-hidden bg-zinc-950 sm:h-[64vh] sm:min-h-0 lg:h-[72vh]"
          >
            <Image
              src="/images/hero-display-centre.jpg"
              alt="Galaxy Tiles and Ceramic showroom featuring KHADIM porcelain surfaces"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/80"
            />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
                <nav
                  aria-label="Breadcrumb"
                  className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-300"
                >
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/" className="transition-colors hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link href="/brands" className="transition-colors hover:text-white">
                        Brands
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-white">
                      Galaxy Tiles &amp; Ceramic
                    </li>
                  </ol>
                </nav>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-200 sm:text-[11px]">
                  Official Provider of KHADIM
                </p>
                <h1 className="mt-3 font-serif text-[2rem] font-semibold uppercase tracking-[0.18em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Galaxy Tiles &amp; Ceramic
                </h1>
                <span className="mt-5 block h-px w-12 bg-white/60" />
                <p className="mt-5 max-w-2xl text-[12px] leading-relaxed text-stone-200 sm:text-sm">
                  A 15-year partnership curating the world&apos;s most refined porcelain
                  and vitrified surfaces for luxury residences, hospitality, and
                  architectural projects across Bangladesh.
                </p>
              </div>
            </div>
          </section>
        </PageEnter>

        <section className="px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <ScrollReveal variant="fadeInUp">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                    Partner Profile
                  </p>
                  <h2 className="mt-3 font-serif text-[1.7rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2.1rem] lg:text-[2.4rem]">
                    Curated Architectural Excellence
                  </h2>
                  <span className="mt-5 block h-px w-12 bg-neutral-300" />
                  <p className="mt-6 text-[13px] leading-relaxed text-neutral-700 sm:text-sm">
                    Galaxy Tiles &amp; Ceramic is the official provider of KHADIM in
                    Rangpur — bringing world-class porcelain tiles, vitrified
                    surfaces, and refined sanitary solutions to Bangladesh&apos;s most
                    ambitious architectural projects.
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-neutral-700 sm:text-sm">
                    Each collection is calibrated for exceptional durability and
                    timeless architectural aesthetics, delivering unmatched surface
                    perfection across luxury residences, commercial spaces, and
                    bespoke interior projects.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeInUp" delay={0.1}>
                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
                  {LEGACY_POINTS.map((point) => (
                    <div
                      key={point.title}
                      className="border-t border-neutral-200 pt-5"
                    >
                      <dt className="font-serif text-base font-semibold uppercase tracking-[0.16em] text-neutral-900">
                        {point.title}
                      </dt>
                      <dd className="mt-3 text-[12px] leading-relaxed text-neutral-600 sm:text-[13px]">
                        {point.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section
          aria-label="Featured architectural surfaces"
          className="border-t border-neutral-200 bg-neutral-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
        >
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <header className="mx-auto max-w-3xl text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                  Featured Installations
                </p>
                <h2 className="mt-3 font-serif text-[1.7rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2.1rem] lg:text-[2.3rem]">
                  Architectural Surface Gallery
                </h2>
                <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
                <p className="mt-5 text-[12px] leading-relaxed text-neutral-600 sm:text-sm">
                  A curated selection of architectural installations powered by
                  Galaxy Tiles &amp; Ceramic in partnership with KHADIM.
                </p>
              </header>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {GALLERY_ITEMS.map((item, idx) => (
                <ScrollReveal
                  key={item.src}
                  variant="fadeInUp"
                  delay={(idx % 3) * 0.1}
                >
                  <figure className="group flex flex-col">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-neutral-200/60">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-700">
                      {item.label}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <div className="border border-neutral-200 bg-white px-6 py-12 sm:px-12 sm:py-14">
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                  Enquire Now
                </p>
                <h2 className="mt-3 font-serif text-[1.6rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2rem] lg:text-[2.2rem]">
                  Plan your project with KHADIM
                </h2>
                <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
                  Speak with our design team for samples, specification sheets,
                  and on-site consultation. Visit a flagship outlet or reach us
                  instantly on WhatsApp.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
                  {OUTLETS.map((outlet) => (
                    <div key={outlet.name}>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
                        {outlet.name}
                      </p>
                      <address className="mt-2 not-italic">
                        <p className="text-[12px] leading-relaxed text-neutral-600">
                          {outlet.address.slice(1).map((line, index) => (
                            <span key={line}>
                              {line}
                              {index < outlet.address.length - 2 ? <br /> : null}
                            </span>
                          ))}
                        </p>
                      </address>
                      <div className="mt-3 flex flex-col gap-1 text-[12px]">
                        <a
                          href={`tel:${outlet.phone}`}
                          className="inline-flex min-h-[36px] items-center text-neutral-900 transition-opacity duration-300 hover:opacity-70"
                        >
                          {outlet.phoneDisplay}
                        </a>
                        <a
                          href={`https://wa.me/${outlet.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[36px] items-center text-neutral-700 transition-opacity duration-300 hover:opacity-70"
                        >
                          WhatsApp · {outlet.phoneDisplay}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <Link
                    href={contactHref("Galaxy Tiles & Ceramic — KHADIM")}
                    className={goldButtonClass}
                  >
                    Enquire on WhatsApp
                  </Link>
                  <a
                    href={primaryOutlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryButtonClass}
                  >
                    Visit Flagship Showroom
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
