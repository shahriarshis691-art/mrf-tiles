"use client";

type HeroSlide = {
  src?: string;
  alt?: string;
  heading?: string;
  subtitle?: string;
};

const fallbackImage = "/hero images/heroimage.png";

const stats = [
  { value: "100+", label: "Success projects" },
  { value: "300+", label: "Materials" },
  { value: "100+", label: "Happy customers" },
];

export default function Hero({ slides }: { slides?: HeroSlide[] }) {
  const heroImage = slides?.find((slide) => slide.src)?.src ?? fallbackImage;

  return (
    <section
      className="relative isolate min-h-[700px] overflow-hidden bg-[#0b0b0b] text-white md:min-h-[780px]"
      aria-label="Luxury showroom hero section"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${heroImage}")` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.78)_0%,rgba(7,7,7,0.6)_26%,rgba(7,7,7,0.32)_62%,rgba(7,7,7,0.62)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[700px] max-w-[1440px] items-end justify-between px-4 pb-6 pt-24 sm:px-6 md:min-h-[780px] md:px-8 md:pb-10 lg:px-14">
        <div className="max-w-[620px]">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.38em] text-white/75">
            MRF Galaxy Tiles &amp; Sanitary
          </p>
          <h1 className="max-w-[620px] text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl md:text-6xl lg:text-[5.2rem]">
            Transform Your Space,
            <span className="mt-2 block">Transform Your Life</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Premium tiles, sanitary ware, and tailored interiors that elevate the way you live, work, and welcome every moment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/downloads/MRF-Galaxy-Tiles.apk"
              download="MRF-Galaxy-Tiles.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7b57a] bg-[#d7b57a] px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#181713] shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e1c281]"
            >
              Download App (Android APK)
            </a>
          </div>
        </div>

        <div className="ml-auto mt-8 flex flex-wrap items-center justify-end gap-4 rounded-full border border-white/15 bg-white/6 px-4 py-3 backdrop-blur-[2px] shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:gap-8 md:px-6 md:py-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="text-lg font-semibold tracking-[-0.06em] text-white sm:text-xl md:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
