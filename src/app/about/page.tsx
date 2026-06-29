import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FullBleedImage } from "@/components/FullBleedImage";
import { PageHeader } from "@/components/PageHeader";
import { siteImages } from "@/lib/data";
import { supportHref, supportIsExternal } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "About High July.",
};

export default function AboutPage() {
  return (
    <div className="bg-hj-cream">
      <PageHeader
        title="About"
        description="A founder-led campaign and brand with a single annual focus: July."
      />

      <FullBleedImage src={siteImages.aboutBanner} aspect="cinematic" objectPosition="50% 22%" />

      <Container className="py-20 sm:py-28">
        <article className="mx-auto max-w-3xl">
          <p className="text-2xl font-bold leading-snug text-hj-ink sm:text-3xl">
            High July was built to run a dedicated culture campaign through the
            month of July each year.
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-hj-ink-muted">
            <p>
              The project is founder-led and operates independently. Each July,
              the campaign publishes new material, opens merch releases, and runs
              a direct supporter program.
            </p>
            <p>
              Official goods are sold through this site and linked stores.
              Supporter contributions fund production, fulfillment, and content.
              Contributions are not charitable donations and are not tax deductible.
            </p>
            <p>
              High July is intended for adults 18 and over. We sell apparel and
              campaign goods only.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={supportHref()} external={supportIsExternal()}>
              Support
            </Button>
            <Button href="/media-pack" variant="outline">
              Media pack
            </Button>
          </div>
        </article>
      </Container>

      <div className="relative aspect-[21/9] max-h-[70vh] w-full overflow-hidden">
        <Image src={siteImages.about} alt="" fill className="object-cover" sizes="100vw" />
      </div>
    </div>
  );
}
