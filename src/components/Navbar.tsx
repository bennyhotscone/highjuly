"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { shopHref, shopIsExternal } from "@/lib/config";
import { Container } from "./Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/media-pack", label: "Media" },
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
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const onHero = isHome && !solid;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "border-b border-hj-border bg-white shadow-md"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <Container wide className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className={`font-black uppercase tracking-tight transition-colors ${
            onHero ? "text-white hover:text-white/90" : "text-hj-green hover:text-hj-green-light"
          }`}
        >
          High July
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                onHero
                  ? "text-white/90 hover:text-white"
                  : pathname === link.href
                    ? "text-hj-green"
                    : "text-hj-ink-muted hover:text-hj-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Button href="/#signup" variant="yellow" size="sm">
              Sign up
            </Button>
            <Button
              href={shopHref()}
              variant={onHero ? "outline-light" : "outline"}
              size="sm"
              external={shopIsExternal()}
            >
              Store
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className={`rounded-lg p-2 md:hidden ${onHero ? "text-white" : "text-hj-ink"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-hj-border bg-white px-6 py-5 shadow-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-medium text-hj-ink"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button href="/#signup" variant="yellow" size="md" fullWidth>
              Sign up
            </Button>
            <Button href={shopHref()} variant="outline" size="md" fullWidth external={shopIsExternal()}>
              Store
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
