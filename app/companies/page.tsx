import Navbar from "@/components/Navbar";
import BusinessGrid from "@/components/BusinessGrid";
import PageEnter from "@/components/PageEnter";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANIES } from "@/data/companies";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Group Portfolio",
  description:
    "Explore the SHATHI Group portfolio — four focused subsidiaries across fashion, horology, ceramics, and enterprise technology.",
  path: "/companies",
  image: "/images/hero-display-centre.jpg",
  imageAlt: "SHATHI Group corporate portfolio showcase",
});

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main">
        <PageEnter>
          <section
            aria-label="Group portfolio hero"
            className="relative h-[46vh] min-h-[28rem] w-full overflow-hidden bg-zinc-950 sm:h-[58vh] sm:min-h-0 lg:h-[62vh]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_50%)]"
            />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-300 sm:text-[11px]">
                  Group Showcase
                </p>
                <h1 className="mt-3 font-serif text-[2rem] font-semibold uppercase tracking-[0.18em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Four Subsidiaries.
                  <br className="hidden sm:block" />
                  One Standard of Excellence.
                </h1>
                <span className="mt-5 block h-px w-12 bg-white/60" />
                <p className="mt-5 max-w-2xl text-[12px] leading-relaxed text-stone-200 sm:text-sm">
                  A focused portfolio across fashion, horology, ceramics, and
                  enterprise technology — each subsidiary engineered for
                  category leadership.
                </p>
              </div>
            </div>
          </section>
        </PageEnter>

        <BusinessGrid />

        <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <header className="mx-auto max-w-3xl text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                  Group Snapshot
                </p>
                <h2 className="mt-3 font-serif text-[1.6rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2rem] lg:text-[2.2rem]">
                  Sectors at a Glance
                </h2>
                <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
              </header>
            </ScrollReveal>

            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {COMPANIES.map((company) => (
                <ScrollReveal
                  key={company.slug}
                  variant="fadeInUp"
                  className="border-t border-neutral-200 pt-5"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    {company.category}
                  </dt>
                  <dd className="mt-3 font-serif text-[1.1rem] font-semibold uppercase tracking-[0.14em] text-neutral-900">
                    {company.name}
                  </dd>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                    {company.tagline}
                  </p>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </section>
      </main>
    </div>
  );
}
