import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { brandLogoDownloads, brandLogos, mediaPack } from "@/lib/data";
import { supportHref, supportIsExternal } from "@/lib/config";

export const metadata: Metadata = {
  title: "Media Pack",
  description: "Press materials for High July.",
};

function Block({
  label,
  content,
  multiline,
}: {
  label: string;
  content: string;
  multiline?: boolean;
}) {
  return (
    <div className="border-b border-hj-border py-10 sm:py-12">
      <p className="text-xs font-medium uppercase tracking-wider text-hj-ink-muted">
        {label}
      </p>
      <p
        className={`mt-4 max-w-3xl text-base leading-relaxed text-hj-ink ${
          multiline ? "whitespace-pre-line" : ""
        }`}
      >
        {content}
      </p>
      <button
        type="button"
        className="mt-6 text-sm font-medium text-hj-green hover:underline"
      >
        Download
      </button>
    </div>
  );
}

const logoVariants = [
  { key: "primary", label: "Primary mark" },
  { key: "bong", label: "Bong" },
  { key: "pipe", label: "Pipe" },
  { key: "joint", label: "Joint" },
  { key: "blunt", label: "Blunt" },
  { key: "mushroom", label: "Mushroom" },
  { key: "munchies", label: "Munchies" },
  { key: "pineapple", label: "Pineapple" },
  { key: "pizza", label: "Pizza" },
  { key: "sleep", label: "Sleep" },
] as const;

export default function MediaPackPage() {
  return (
    <div className="bg-hj-cream">
      <PageHeader
        title="Media pack"
        description="Bios, copy, and brand assets for press and partners."
      />
      <Container className="pb-24 sm:pb-32">
        <Block label="Short bio" content={mediaPack.shortBio} />
        <Block label="Long bio" content={mediaPack.longBio} />
        <Block label="Press blurb" content={mediaPack.pressBlurb} />
        <Block label="Instagram" content={mediaPack.instagramBio} />
        <Block label="Launch post" content={mediaPack.launchPost} multiline />

        <div className="border-b border-hj-border py-10 sm:py-12">
          <p className="text-xs font-medium uppercase tracking-wider text-hj-ink-muted">
            Brand colours
          </p>
          <div className="mt-6 flex flex-wrap gap-8">
            {mediaPack.brandColors.map((c) => (
              <div key={c.hex} className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-sm ${c.class}`} />
                <div>
                  <p className="text-sm font-medium text-hj-ink">{c.name}</p>
                  <p className="font-mono text-xs text-hj-ink-muted">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 sm:py-12">
          <p className="text-xs font-medium uppercase tracking-wider text-hj-ink-muted">
            Logos
          </p>
          <p className="mt-3 max-w-2xl text-sm text-hj-ink-muted">
            Primary gold mark plus nine campaign variants. Use the primary lockup in headers and press.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {logoVariants.map((logo) => (
              <div
                key={logo.key}
                className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div
                  className={`relative mx-auto flex h-36 w-full items-center justify-center rounded-xl p-4 ${
                    logo.key === "primary" ? "bg-hj-green" : "bg-black"
                  }`}
                >
                  <img
                    src={brandLogos[logo.key]}
                    alt={logo.label}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-hj-ink">{logo.label}</p>
                <a
                  href={brandLogoDownloads[logo.key] ?? brandLogos[logo.key]}
                  download={`high-july-${logo.key}.png`}
                  className="mt-2 text-xs font-medium text-hj-green hover:underline"
                >
                  Download PNG
                </a>
              </div>
            ))}
          </div>
        </div>

        <Button href={supportHref()} className="mt-4" external={supportIsExternal()}>
          Support page
        </Button>
      </Container>
    </div>
  );
}
