"use client";

import Link from "next/link";

type HeroSlide = {
  src?: string;
  alt?: string;
  heading?: string;
  subtitle?: string;
};

const fallbackImage = "/hero images/hero-image-4k.jpg";

const categories = [
  { label: "TILES", href: "/collection" },
  { label: "BATHWARE", href: "/sanitary" },
  { label: "DIGITAL VISUALIZER", href: "/brands" },
  { label: "MRF SOLUTION", href: "/about" },
  { label: "DOWNLOADS", href: "/downloads/MRF-Galaxy-Tiles.apk" },
  { label: "PROFESSIONAL", href: "/projects" },
  { label: "CONTACT US", href: "/#contact" },
] as const;

const apkDownloadUrl = "/downloads/MRF-Galaxy-Tiles.apk";

const collectionItems = [
  "Khadim Ceramic",
  "Marcopolo",
  "Otto",
  "MRF Tiles",
];

export default function Hero({ slides }: { slides?: HeroSlide[] }) {
  const heroImage = slides?.find((slide) => slide.src)?.src ?? fallbackImage;

  return (
    <section
      className="relative isolate overflow-hidden bg-[#d7d0c9] text-white"
      aria-label="Luxury showroom hero section"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 scale-[1.06] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${heroImage}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            imageRendering: "auto",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,17,15,0.42),rgba(18,17,15,0.12)_36%,rgba(18,17,15,0.12)_60%,rgba(18,17,15,0.38))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_52%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1720px] px-2 sm:px-4 md:px-6 lg:px-8">
        <header className="grid h-[68px] grid-cols-[1fr_auto_1fr] items-center border-b border-white/35 bg-[#3e3b38]/30 px-3 backdrop-blur-[2px] sm:h-[78px] sm:px-5 md:h-[94px] md:px-8">
          <div className="flex items-center justify-self-start">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/80 transition-opacity hover:opacity-100 sm:text-[10px] md:text-[11px]"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/50 text-[8px]">
                ◌
              </span>
              Corporate
              <span className="text-[12px] text-white/70">⌄</span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-center md:gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-base font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] sm:h-9 sm:w-9 md:h-11 md:w-11">
              ◐
            </div>
            <div className="leading-none">
              <div
                className="text-[20px] font-semibold tracking-[-0.06em] text-white sm:text-[26px] md:text-[42px]"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                MRF Galaxy
              </div>
              <div className="mt-1 text-[6px] uppercase tracking-[0.2em] text-white/75 sm:text-[7px] md:text-[11px]">
                Tiles &amp; Bathware
              </div>
            </div>
          </div>

          <div className="flex items-center justify-self-end gap-2 sm:gap-2.5 md:gap-3">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2 py-1.5 text-[8px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:bg-white/15 sm:px-3 sm:py-2 sm:text-[9px] md:px-4 md:text-[11px]"
            >
              <span>Search</span>
              <span className="text-base leading-none">⌕</span>
            </Link>
            <Link
              href="/outlet"
              className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:bg-white/15 md:inline-flex md:text-[11px]"
            >
              <span>Where to Buy</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/35 bg-white/10 text-[11px]">
                ⊕
              </span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/10 text-base text-white/90 transition-colors hover:bg-white/15 sm:h-9 sm:w-9 md:h-11 md:w-11"
              aria-label="Open contact page"
            >
              ⌂
            </Link>
          </div>
        </header>

        <nav className="grid grid-cols-2 border-b border-white/25 bg-[#5b524e]/20 px-2 py-3 backdrop-blur-[1px] sm:grid-cols-3 md:grid-cols-7 md:px-4 md:py-4">
          {categories.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex min-h-[44px] items-center justify-center px-2 text-center transition-opacity hover:opacity-100 sm:min-h-[48px] md:min-h-[52px]"
            >
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-[10px] md:text-[11px] lg:text-[12px]">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="relative flex min-h-[540px] items-center justify-center pb-6 pt-10 sm:min-h-[620px] md:min-h-[760px] md:pt-16">
          <div className="relative z-10 flex w-full max-w-[1180px] flex-col items-center text-center">
            <h1 className="text-[2.7rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white sm:text-[4rem] md:text-[6.6rem] lg:text-[8.2rem]">
              Glyphstone
              <span className="mt-2 block">Collection</span>
            </h1>

            <div className="mt-5 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm sm:text-[10px] md:px-6 md:py-3 md:text-[11px]">
              Inspired By Petroglyphs
            </div>

            <a
              href={apkDownloadUrl}
              download
              className="mt-7 inline-flex h-[48px] items-center justify-center border border-black bg-black px-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_30px_rgba(0,0,0,0.20)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-[52px] sm:text-[11px] md:h-[60px] md:px-10 md:text-[12px]"
            >
              MRF Tiles APK
            </a>
          </div>

          <div className="absolute inset-x-0 bottom-0 mx-auto w-[94%] max-w-[1240px] px-1 sm:px-2 md:px-0">
            <div className="mb-3 flex flex-col items-center gap-3 text-white sm:flex-row sm:items-end sm:justify-between md:gap-6">
              <div className="text-[1.15rem] font-semibold tracking-[-0.06em] sm:text-[1.5rem] md:text-[2.2rem] lg:text-[2.7rem]">
                GLYPHSTONE
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:justify-end sm:gap-4 md:gap-5 lg:gap-8">
                {collectionItems.map((item, index) => (
                  <span
                    key={item}
                    className={`text-[0.8rem] font-medium uppercase tracking-[-0.04em] text-white/90 sm:text-[0.9rem] md:text-[1.25rem] lg:text-[1.7rem] ${
                      index === 0 ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-px w-full bg-white/70" />
          </div>
        </div>
      </div>

      <div className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 md:flex">
        <div className="flex items-center justify-center rounded-full border border-white/30 bg-[#171717]/80 px-2 py-3 text-[8px] font-medium uppercase tracking-[0.24em] text-white/85 shadow-[0_10px_26px_rgba(0,0,0,0.2)] [writing-mode:vertical-rl]">
          REQUEST CALL
        </div>
      </div>
      <div className="absolute right-4 top-[63%] z-20 hidden h-8 w-8 items-center justify-center rounded-full bg-[#d65a4b] text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(214,90,75,0.45)] md:flex">
        4
      </div>
    </section>
  );
}
