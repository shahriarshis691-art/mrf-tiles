"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#collection", label: "COLLECTION" },
  { href: "/sanitary", label: "SANITARY" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
];

function isActive(pathname: string, href: string) {
  if (href === "/projects") {
    return pathname.startsWith("/projects");
  }
  if (href === "/sanitary") {
    return pathname.startsWith("/sanitary");
  }
  if (href === "/#collection") {
    return pathname.startsWith("/collection");
  }
  if (href === "/") {
    return pathname === "/";
  }
  return false;
}

type NavbarProps = {
  overHero?: boolean;
};

export default function Navbar({ overHero = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = overHero && pathname === "/";
  const heroNav = onHome && !scrolled;

  useEffect(() => {
    if (!onHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        heroNav
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-zinc-200 bg-white"
      }`}
    >
      <div className="relative mx-auto flex h-[4.85rem] max-w-[1440px] items-center justify-between px-6 pr-16 sm:h-[5.25rem] sm:px-10 md:pr-10 lg:px-14">
        <Logo priority />

        <nav
          className="hidden items-center md:flex md:gap-6 lg:gap-10 xl:gap-12"
          aria-label="Primary"
        >
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-1.5 text-[10px] font-medium tracking-[0.24em] transition-colors lg:text-[11px] ${
                  heroNav
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-zinc-950"
                      : "text-zinc-800 hover:text-zinc-950"
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
          className={`absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center max-md:flex sm:right-8 ${
            heroNav ? "text-white" : "text-zinc-900"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
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

      {open ? (
        <nav
          id="mobile-menu"
          className={`absolute inset-x-0 top-full border-b px-6 py-5 md:hidden ${
            heroNav
              ? "border-white/10 bg-zinc-950/95 backdrop-blur-md"
              : "border-zinc-200 bg-white"
          }`}
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
                      heroNav
                        ? active
                          ? "text-gold"
                          : "text-white/80"
                        : active
                          ? "text-gold"
                          : "text-zinc-800"
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
