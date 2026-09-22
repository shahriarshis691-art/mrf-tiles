import Link from "next/link";
import Logo from "./Logo";
import { OUTLETS } from "./outlet-data";

const FOOTER_LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/brands", label: "BRANDS" },
  { href: "/sanitary", label: "SANITARY" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/companies", label: "GROUP" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10"
      style={{ backgroundColor: "#0A3826" }}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-14">
        <div className="grid grid-cols-4 gap-2 sm:gap-5 lg:gap-10">
          <div className="min-w-0">
            <Logo className="h-7 w-auto" />
          </div>

          <div className="min-w-0">
            <p className="text-[7px] sm:text-[10px] font-semibold tracking-[0.06em] sm:tracking-[0.2em] text-white uppercase">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[7px] sm:text-xs min-h-[44px] inline-flex items-center font-medium tracking-[0.05em] sm:tracking-[0.2em] transition-opacity duration-300 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3826]"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 min-w-0">
            <p className="text-[7px] sm:text-[10px] font-semibold tracking-[0.06em] sm:tracking-[0.2em] text-white uppercase">
              Our Outlets
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-6">
              {OUTLETS.map((outlet) => (
                <div key={outlet.name} className="min-w-0">
                  <p className="text-[8px] sm:text-xs font-semibold tracking-[0.04em] sm:tracking-[0.16em] text-white">
                    {outlet.name}
                  </p>
                  <address className="mt-1 not-italic">
                    <p
                      className="text-[8px] sm:text-xs leading-relaxed"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
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
                    className="mt-2 inline-flex min-h-[44px] items-center text-[7px] sm:text-xs text-white transition-opacity duration-300 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3826]"
                  >
                    {outlet.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${outlet.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-0 sm:ml-3 inline-flex min-h-[44px] items-center text-[7px] sm:text-xs transition-opacity duration-300 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3826]"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p
            className="text-[8px] sm:text-xs tracking-wide"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            &copy; 2026 MRF Galaxy Tiles &amp; Sanitary. All rights reserved.
          </p>
          <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-white">
            Elegance in every detail
          </p>
        </div>
        <div className="mt-4 flex flex-row flex-wrap items-center gap-x-2 gap-y-1 pb-20 text-[8px] sm:text-[11px] leading-relaxed tracking-wide text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:pb-0">
          <span>Developed by <span className="font-medium text-white/90">Shahriar Shis</span></span>
          <span aria-hidden="true" className="hidden text-white/30 sm:inline">|</span>
          <a
            href="mailto:shahriarshis691@gmail.com"
            className="inline-flex min-h-11 items-center break-all transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            shahriarshis691@gmail.com
          </a>
          <span aria-hidden="true" className="hidden text-white/30 sm:inline">|</span>
          <a
            href="tel:+8801979614216"
            className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            +880 1979-614216
          </a>
        </div>
      </div>
    </footer>
  );
}

