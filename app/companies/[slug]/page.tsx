import Navbar from "@/components/Navbar";
import PageEnter from "@/components/PageEnter";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANIES, getAllCompanySlugs, getCompanyBySlug } from "@/data/companies";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCompanySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return { title: "Company Not Found" };

  return createPageMetadata({
    title: company.name,
    description: company.description,
    path: `/companies/${company.slug}`,
    image: "/images/hero-display-centre.jpg",
    imageAlt: `${company.name} — ${company.tagline}`,
  });
}

const outlineButtonClass =
  "inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-8 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-900 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-900 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-fit";

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const related = COMPANIES.filter((c) => c.slug !== company.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main">
        <PageEnter>
          <section
            aria-label={`${company.name} hero`}
            className="relative h-[46vh] min-h-[28rem] w-full overflow-hidden bg-zinc-950 sm:h-[58vh] sm:min-h-0 lg:h-[62vh]"
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-br ${company.accent.surface}`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/75"
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
                      <Link
                        href="/companies"
                        className="transition-colors hover:text-white"
                      >
                        Group Portfolio
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-white">
                      {company.name}
                    </li>
                  </ol>
                </nav>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-200 sm:text-[11px]">
                  {company.category}
                </p>
                <h1 className="mt-3 font-serif text-[2rem] font-semibold uppercase tracking-[0.18em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  {company.name}
                </h1>
                <span className="mt-5 block h-px w-12 bg-white/60" />
                <p className="mt-5 max-w-2xl text-[12px] leading-relaxed text-stone-200 sm:text-sm">
                  {company.tagline}.
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
                    Subsidiary Profile
                  </p>
                  <h2 className="mt-3 font-serif text-[1.7rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2.1rem] lg:text-[2.4rem]">
                    {company.tagline}
                  </h2>
                  <span className="mt-5 block h-px w-12 bg-neutral-300" />
                  <p className="mt-6 text-[13px] leading-relaxed text-neutral-700 sm:text-sm">
                    {company.description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeInUp" delay={0.1}>
                <div className="border border-neutral-200 bg-white p-6 sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    Highlights
                  </p>
                  <ul className="mt-5 space-y-3">
                    {company.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-3 border-t border-neutral-100 pt-3 first:border-t-0 first:pt-0"
                      >
                        <span
                          aria-hidden="true"
                          className={`inline-block h-2 w-2 ${company.accent.text}`}
                          style={{ background: "currentColor" }}
                        />
                        <span className="text-[13px] text-neutral-800">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <header className="mx-auto max-w-3xl text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                  Within the Group
                </p>
                <h2 className="mt-3 font-serif text-[1.5rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[1.9rem]">
                  Other Subsidiaries
                </h2>
                <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
              </header>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  href={other.href}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                >
                  <div className="border border-neutral-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)]">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      {other.category}
                    </p>
                    <h3 className="mt-3 font-serif text-base font-semibold uppercase tracking-[0.14em] text-neutral-900">
                      {other.name}
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-neutral-600">
                      {other.tagline}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal variant="fadeInUp">
              <div className="border border-neutral-200 bg-white px-6 py-12 sm:px-12 sm:py-14">
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                  Explore the Group
                </p>
                <h2 className="mt-3 font-serif text-[1.6rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2rem]">
                  Continue with the portfolio
                </h2>
                <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <Link href="/companies" className={outlineButtonClass}>
                    Back to Group Portfolio
                  </Link>
                  <Link href="/#contact" className={outlineButtonClass}>
                    Get In Touch
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
