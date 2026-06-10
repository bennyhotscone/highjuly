"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AGE_STORAGE_KEY, setAgeVerified } from "@/lib/age";
import { AGE_GATE_NOTICE, siteImages } from "@/lib/data";
import { Logo } from "./Logo";

export function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    setVerified(localStorage.getItem(AGE_STORAGE_KEY) === "true");
  }, []);

  useEffect(() => {
    document.body.style.overflow = verified === false || denied ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [verified, denied]);

  if (verified === null) return null;
  if (verified) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-hj-ink p-6">
      <Image
        src={siteImages.hero}
        alt=""
        fill
        className="object-cover opacity-25"
        priority
      />
      <div className="relative w-full max-w-md bg-hj-cream p-10 shadow-2xl sm:p-12">
        {denied ? (
          <div className="text-center">
            <p className="font-serif text-2xl font-semibold text-hj-ink">Access denied</p>
            <p className="mt-4 text-sm text-hj-ink-muted">
              You must be 18 or older to view this site.
            </p>
            <button
              type="button"
              onClick={() => setDenied(false)}
              className="mt-8 text-sm font-medium text-hj-green hover:underline"
            >
              Go back
            </button>
          </div>
        ) : (
          <>
            <Logo height={56} className="mx-auto" />
            <p className="mt-6 text-center text-xs font-medium tracking-wide text-hj-ink-muted">18+ only</p>
            <h1 className="mt-3 text-center text-2xl font-bold text-hj-ink">
              Confirm your age
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-hj-ink-muted">{AGE_GATE_NOTICE}</p>
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setAgeVerified();
                  setVerified(true);
                }}
                className="rounded-sm bg-hj-green py-3.5 text-sm font-medium text-white transition-colors hover:bg-hj-green-deep"
              >
                I am 18 or older
              </button>
              <button
                type="button"
                onClick={() => setDenied(true)}
                className="py-3 text-sm text-hj-ink-muted transition-colors hover:text-hj-ink"
              >
                I am under 18
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
