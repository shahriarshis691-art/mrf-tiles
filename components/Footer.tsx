import Link from "next/link";
import Logo from "./Logo";
import { OUTLETS } from "./outlet-data";

const FOOTER_LINKS = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#collection", label: "COLLECTION" },
  { href: "/collection", label: "CATALOG" },
  { href: "/#sanitary", label: "SANITARY" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505]">
      <div className="mx-6 h-px bg-gold/35 sm:mx-10 lg:mx-14" />

      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-[16rem] text-[12px] font-light leading-relaxed text-white/45">
              Premium tiles and sanitary solutions for spaces designed with
              elegance and lasting quality.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.24em] text-gold">
              NAVIGATION
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11px] font-medium tracking-[0.2em] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <p className="text-[10px] font-medium tracking-[0.24em] text-gold">
              OUR OUTLETS
            </p>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {OUTLETS.map((outlet) => (
                <div key={outlet.name}>
                  <p className="text-[11px] font-medium tracking-[0.16em] text-white/80">
                    {outlet.name}
                  </p>
                  <address className="mt-2 not-italic">
                    <p className="text-[12px] font-light leading-relaxed text-white/45">
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
                    className="mt-2 inline-block text-[12px] font-light text-gold/80 transition-colors hover:text-gold"
                  >
                    {outlet.phoneDisplay}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] font-light tracking-wide text-white/35">
            &copy; {year} MRF Galaxy Tiles &amp; Sanitary. All rights reserved.
          </p>
          <p className="text-[10px] font-light tracking-[0.16em] text-white/30">
            ELEGANCE IN EVERY DETAIL
          </p>
        </div>
      </div>
    </footer>
  );
}
