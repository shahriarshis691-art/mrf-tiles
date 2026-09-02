import Link from "next/link";
import Logo from "./Logo";
import { OUTLETS } from "./outlet-data";

const FOOTER_LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/brands", label: "BRANDS" },
  { href: "/sanitary", label: "SANITARY" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Logo className="h-7 w-auto" />
            <p className="mt-5 max-w-[16rem] text-xs leading-relaxed text-neutral-600">
              Premium tiles and sanitary solutions for spaces designed with
              elegance and lasting quality.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500 uppercase">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs min-h-[44px] inline-flex items-center font-medium tracking-[0.2em] text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500 uppercase">
              Our Outlets
            </p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {OUTLETS.map((outlet) => (
                <div key={outlet.name}>
                  <p className="text-xs font-semibold tracking-[0.16em] text-neutral-900">
                    {outlet.name}
                  </p>
                  <address className="mt-1 not-italic">
                    <p className="text-xs leading-relaxed text-neutral-600">
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
                    className="mt-2 inline-flex min-h-[44px] items-center text-xs text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    {outlet.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${outlet.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-flex min-h-[44px] items-center text-xs text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-neutral-600">
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
