"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/sanitary", label: "SANITARY" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
];

const subscribeToScroll = (onStoreChange: () => void) => {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
};

const subscribeToNothing = () => () => {};
const getScrolledSnapshot = () => window.scrollY > 72;
const getUnscrolledSnapshot = () => false;

function isActive(pathname: string, href: string) {
  if (href === "/about") {
    return pathname === "/about";
  }
  if (href === "/projects") {
    return pathname.startsWith("/projects");
  }
  if (href === "/sanitary") {
    return pathname.startsWith("/sanitary");
  }
  if (href === "/collection") {
    return pathname.startsWith("/collection");
  }
  if (href === "/") {
    return pathname === "/";
  }
  return false;
}

type NavbarProps = {
  overHero?: boolean;
  dark?: boolean;
};

export default function Navbar({ overHero = false, dark = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const onHome = overHero && pathname === "/";
  const scrolled = useSyncExternalStore(
    onHome ? subscribeToScroll : subscribeToNothing,
    onHome ? getScrolledSnapshot : getUnscrolledSnapshot,
    getUnscrolledSnapshot,
  );
  const heroNav = dark ? true : onHome && !scrolled;
  const focusRingClass = heroNav
    ? "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    : "focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1";
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      firstMenuLinkRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const menuLinks = menuRef.current?.querySelectorAll<HTMLAnchorElement>(
        'a[href]',
      );
      if (!menuLinks || menuLinks.length === 0) return;

      const firstLink = menuLinks[0];
      const lastLink = menuLinks[menuLinks.length - 1];
      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault();
        lastLink.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        firstLink.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [closeMenu, open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        heroNav
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-zinc-200 bg-white"
      }`}
    >
      <div className="relative mx-auto flex h-[4.85rem] max-w-[1440px] items-center justify-between px-6 pr-16 sm:h-[5.25rem] sm:px-10 md:pr-10 lg:px-14">
        <Logo light={heroNav} />

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
                className={`relative min-h-[44px] inline-flex items-center pb-1.5 text-[10px] font-medium tracking-[0.24em] transition-colors lg:text-[11px] ${focusRingClass} ${
                  heroNav
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-neutral-900"
                      : "text-neutral-700 hover:text-neutral-900"
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
          ref={menuButtonRef}
          type="button"
          className={`absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center md:hidden sm:right-8 ${focusRingClass} ${
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
        <>
          <div
            aria-hidden="true"
            onMouseDown={closeMenu}
            className="fixed inset-x-0 bottom-0 top-[4.85rem] z-0 md:hidden sm:top-[5.25rem]"
          />
          <nav
            ref={menuRef}
            id="mobile-menu"
            className={`absolute inset-x-0 top-full z-10 border-b px-6 py-5 md:hidden ${
              heroNav
                ? "border-white/10 bg-zinc-950/95 backdrop-blur-md"
                : "border-zinc-200 bg-white"
            }`}
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map((link, index) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.label}>
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={link.href}
                      className={`text-[11px] min-h-[44px] inline-flex items-center font-medium tracking-[0.24em] ${focusRingClass} ${
                        heroNav
                          ? active
                            ? "text-gold"
                            : "text-white/80"
                          : active
                            ? "text-neutral-900"
                            : "text-neutral-700"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
