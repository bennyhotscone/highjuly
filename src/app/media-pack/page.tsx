import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { mediaPack } from "@/lib/data";

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
            Logo
          </p>
          <div className="mt-6 inline-flex items-center justify-center bg-hj-green px-12 py-10">
            <span className="font-serif text-3xl font-semibold text-white">High July</span>
          </div>
        </div>

        <Button href="/#support" className="mt-4">
          Support page
        </Button>
      </Container>
    </div>
  );
}
