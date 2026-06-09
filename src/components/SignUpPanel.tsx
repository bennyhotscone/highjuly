"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

export function SignUpPanel() {
  const [email, setEmail] = useState("");

  return (
    <div className="hj-card flex h-full flex-col">
      <div className="bg-hj-green px-6 py-5 sm:px-8 sm:py-6">
        <p className="hj-label text-hj-yellow">Join the campaign</p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Sign up</h2>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-hj-ink-muted">
          Get July updates, merch drops, and supporter links straight to your inbox.
        </p>

        <form
          className="mt-6 flex flex-1 flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/#support";
          }}
        >
          <label htmlFor="signup-email" className="text-sm font-semibold text-hj-ink">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border-2 border-hj-border bg-hj-cream px-4 py-3.5 text-base text-hj-ink outline-none transition-all placeholder:text-hj-ink-muted/60 focus:border-hj-green focus:ring-4 focus:ring-hj-green/10"
          />
          <Button type="submit" variant="yellow" size="lg" fullWidth className="mt-4">
            Sign up free
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-hj-ink-muted">
          Want to contribute now?{" "}
          <Link href="/#support" className="font-semibold text-hj-green hover:underline">
            Support the campaign →
          </Link>
        </p>
      </div>
    </div>
  );
}
