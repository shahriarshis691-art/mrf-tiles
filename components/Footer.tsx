import Link from "next/link";
import Logo from "./Logo";
import { OUTLETS } from "./outlet-data";

const FOOTER_LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/#collection", label: "COLLECTION" },
  { href: "/collection", label: "CATALOG" },
  { href: "/sanitary", label: "SANITARY" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-[16rem] text-[12px] leading-relaxed text-neutral-600">
              Premium tiles and sanitary solutions for spaces designed with
              elegance and lasting quality.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              Navigation
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11px] min-h-[44px] inline-flex items-center font-medium tracking-[0.2em] text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              Our Outlets
            </p>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {OUTLETS.map((outlet) => (
                <div key={outlet.name}>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-900">
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
                  <a
                    href={`tel:${outlet.phone}`}
                    className="mt-2 inline-flex min-h-[44px] items-center text-[12px] text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    {outlet.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${outlet.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-flex min-h-[44px] items-center text-[12px] text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-wide text-neutral-600">
            &copy; 2026 MRF Galaxy Tiles &amp; Sanitary. All rights reserved.
          </p>
          <p className="text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
            Elegance in every detail
          </p>
        </div>
      </div>
    </footer>
  );
}
