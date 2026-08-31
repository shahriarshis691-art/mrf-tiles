"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#collection", label: "COLLECTION" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
];

function isActive(pathname: string, href: string) {
  if (href === "/projects") {
    return pathname.startsWith("/projects");
  }
  if (href === "/#collection") {
    return pathname.startsWith("/collection");
  }
  if (href === "/") {
    return pathname === "/";
  }
  return false;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`inset-x-0 top-0 z-50 ${
        isHome
          ? "absolute"
          : "fixed bg-[#050505]/85 backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex h-[4.85rem] max-w-[1440px] items-center justify-between px-6 pr-16 sm:h-[5.25rem] sm:px-10 md:pr-10 lg:px-14">
        <Logo />

        <nav
          className="hidden items-center md:flex md:gap-9 lg:gap-12 xl:gap-[3.4rem]"
          aria-label="Primary"
        >
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-1.5 text-[10px] font-medium tracking-[0.24em] transition-colors lg:text-[11px] ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-[3px] -bottom-0.5 h-px bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-white max-md:flex sm:right-8"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <rect x="1" y="8" width="16" height="2" transform="rotate(45 9 9)" />
              <rect x="1" y="8" width="16" height="2" transform="rotate(-45 9 9)" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" aria-hidden="true">
              <rect width="18" height="2" />
              <rect y="6" width="18" height="2" />
              <rect y="12" width="18" height="2" />
            </svg>
          )}
        </button>
      </div>

      <div className="mx-6 h-px bg-gold/35 sm:mx-10 lg:mx-14" />

      {open ? (
        <nav
          className="absolute inset-x-0 top-full border-b border-gold/20 bg-[#0b0d10]/95 px-6 py-5 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-[11px] font-medium tracking-[0.24em] ${
                      active ? "text-gold" : "text-white/80"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
