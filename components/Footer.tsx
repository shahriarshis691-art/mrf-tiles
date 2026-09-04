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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Logo className="h-7 w-auto" />
            <p
              className="mt-5 max-w-[16rem] text-xs leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              A focused group across fashion, horology, ceramics, and enterprise
              technology — engineered for category excellence.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["Fashion", "Horology", "Ceramics", "Tech Solutions"].map(
                (sector) => (
                  <li
                    key={sector}
                    className="border border-white/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  >
                    {sector}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white uppercase">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs min-h-[44px] inline-flex items-center font-medium tracking-[0.2em] transition-opacity duration-300 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3826]"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white uppercase">
              Our Outlets
            </p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {OUTLETS.map((outlet) => (
                <div key={outlet.name}>
                  <p className="text-xs font-semibold tracking-[0.16em] text-white">
                    {outlet.name}
                  </p>
                  <address className="mt-1 not-italic">
                    <p
                      className="text-xs leading-relaxed"
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
                    className="mt-2 inline-flex min-h-[44px] items-center text-xs text-white transition-opacity duration-300 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3826]"
                  >
                    {outlet.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${outlet.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-flex min-h-[44px] items-center text-xs transition-opacity duration-300 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3826]"
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
            className="text-xs tracking-wide"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            &copy; 2026 MRF Galaxy Tiles &amp; Sanitary. All rights reserved.
          </p>
          <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-white">
            Elegance in every detail
          </p>
        </div>
      </div>
    </footer>
  );
}
