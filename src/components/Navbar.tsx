"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";

const links = [
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "About" },
  { href: "/media-pack", label: "Media pack" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const lightOnHero = isHome && !solid;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        solid
          ? "border-b border-hj-border bg-hj-cream/95 shadow-sm shadow-hj-ink/5 backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <Container wide className="flex h-[4.25rem] items-center justify-between sm:h-[5rem]">
        <Link
          href="/"
          className={`font-serif text-xl font-semibold tracking-tight sm:text-[1.35rem] ${
            lightOnHero ? "text-white" : "text-hj-ink"
          }`}
        >
          High July
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors ${
                lightOnHero
                  ? "text-white/90 hover:text-white"
                  : pathname === link.href
                    ? "font-medium text-hj-green"
                    : "text-hj-ink-muted hover:text-hj-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#support"
            className={`rounded-sm px-5 py-2.5 text-[15px] font-medium transition-colors ${
              lightOnHero
                ? "bg-white text-hj-ink hover:bg-hj-cream"
                : "bg-hj-green text-white hover:bg-hj-green-deep"
            }`}
          >
            Support
          </Link>
        </nav>

        <button
          type="button"
          className={`md:hidden ${lightOnHero ? "text-white" : "text-hj-ink"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-hj-border bg-hj-cream px-6 py-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg text-hj-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#support"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-sm bg-hj-green px-5 py-3 text-white"
          >
            Support
          </Link>
        </div>
      )}
    </header>
  );
}
