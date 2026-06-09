"use client";

import Link from "next/link";
import { AGE_STORAGE_KEY } from "@/lib/age";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-hj-green-deep text-white">
      <Container wide className="flex flex-col gap-12 py-14 sm:flex-row sm:justify-between sm:py-16">
        <div>
          <Logo size="sm" className="rounded-lg bg-white/10 px-2 py-1" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Creator-led culture campaign for the month of July.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-white/80">
          <Link href="/#signup" className="hover:text-white">Sign up</Link>
          <Link href="/merch" className="hover:text-white">Store</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/media-pack" className="hover:text-white">Media pack</Link>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem(AGE_STORAGE_KEY);
              window.location.reload();
            }}
            className="hover:text-white"
          >
            Re-verify age
          </button>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container wide className="py-6 text-xs text-white/50">
          © {new Date().getFullYear()} High July · 18+
        </Container>
      </div>
    </footer>
  );
}
