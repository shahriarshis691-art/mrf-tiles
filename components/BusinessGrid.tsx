import Link from "next/link";
import { COMPANIES, type Company } from "@/data/companies";

type BusinessGridProps = {
  companies?: Company[];
  heading?: string;
  intro?: string;
  compact?: boolean;
};

export default function BusinessGrid({
  companies = COMPANIES,
  heading = "Our Group Portfolio",
  intro = "Four focused subsidiaries spanning fashion, horology, ceramics, and enterprise technology — engineered for excellence in their category.",
  compact = false,
}: BusinessGridProps) {
  return (
    <section
      aria-labelledby="business-grid-heading"
      className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
            Group Showcase
          </p>
          <h2
            id="business-grid-heading"
            className="mt-3 font-serif text-[1.6rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2rem] lg:text-[2.2rem]"
          >
            {heading}
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
          <p className="mt-5 text-[12px] leading-relaxed text-neutral-600 sm:text-sm">
            {intro}
          </p>
        </header>

        <ul
          className={`mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 ${
            compact ? "lg:grid-cols-2" : "lg:grid-cols-4"
          } lg:gap-6`}
        >
          {companies.map((company) => (
            <li key={company.slug} className="group">
              <Link
                href={company.href}
                className="relative block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                aria-label={`Learn more about ${company.name}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute -inset-px bg-gradient-to-br ${company.accent.border} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <article className="relative flex h-full flex-col border border-neutral-200 bg-white p-6 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] sm:p-7">
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-flex h-9 min-w-[2.25rem] items-center justify-center bg-gradient-to-br ${company.accent.surface} px-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${company.accent.text}`}
                    >
                      {company.badge}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      {company.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[1.25rem] font-semibold uppercase tracking-[0.14em] text-neutral-900 sm:text-[1.4rem]">
                    {company.name}
                  </h3>

                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                    {company.tagline}
                  </p>

                  <p className="mt-4 text-[12px] leading-relaxed text-neutral-600 sm:text-[13px]">
                    {company.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {company.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={`border border-neutral-200 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-700`}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Subsidiary
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                    >
                      Explore
                      <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
