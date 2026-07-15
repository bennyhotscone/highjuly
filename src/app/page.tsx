import Image from "next/image";
import { Button } from "@/components/Button";
import { CampaignSteps } from "@/components/CampaignSteps";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FullBleedImage } from "@/components/FullBleedImage";
import { ProductCard } from "@/components/ProductCard";
import { SignUpPanel } from "@/components/SignUpPanel";
import { StorePanel } from "@/components/StorePanel";
import { merchProducts, siteImages } from "@/lib/data";
import { shopHref, supportHref } from "@/lib/config";

export default function HomePage() {
  const preview = merchProducts.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-hj-green-deep">
        <Image
          src={siteImages.hero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hj-green-deep via-hj-green/60 to-hj-green/30" />

        <Container wide className="relative w-full pb-16 pt-28 sm:pb-24 sm:pt-32">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hj-yellow">
              2026 campaign
            </p>
            <h1 className="mt-4 text-[clamp(2.75rem,7.5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
              Get <span className="uppercase">high</span>
              <span className="block text-hj-yellow">this July</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Sign up for the campaign, shop official merch, or support the project
              all month long.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#signup" variant="yellow" size="xl">
                Sign up free
              </Button>
              <Button href={shopHref()} variant="outline-light" size="xl">
                Shop the store
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Dual panels */}
      <section id="signup" className="relative z-10 -mt-16 sm:-mt-20">
        <Container wide>
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <SignUpPanel />
            <StorePanel />
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="bg-hj-cream py-20 sm:py-28">
        <Container wide>
          <div className="max-w-xl">
            <p className="hj-label">How it works</p>
            <h2 className="hj-section-title mt-2">Four steps to join High July</h2>
          </div>
          <div className="mt-12">
            <CampaignSteps />
          </div>
        </Container>
      </section>

      <FullBleedImage src={siteImages.bandRolling} aspect="cinematic" />

      {/* Story */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[50vh] lg:min-h-[520px]">
          <Image
            src={siteImages.mission}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            quality={90}
          />
        </div>
        <div className="flex flex-col justify-center bg-white px-6 py-16 sm:px-14 sm:py-24">
          <p className="hj-label">The campaign</p>
          <h2 className="hj-section-title mt-2">Built for the month of July</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-hj-ink-muted">
            High July is a founder-led culture campaign with official merch, original
            content, and direct supporter funding.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="primary" size="md">
              About the campaign
            </Button>
            <Button href="/#support" variant="outline" size="md">
              Contribute
            </Button>
          </div>
        </div>
      </section>

      <FullBleedImage src={siteImages.bandLounge} aspect="cinematic" />

      {/* Merch */}
      <section className="bg-hj-cream py-20 sm:py-28">
        <Container wide>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="hj-label">Merch</p>
              <h2 className="hj-section-title mt-2">Official products</h2>
            </div>
            <Button href={shopHref()} variant="primary" size="md">
              View all products
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {preview.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                description={p.description}
                image={p.image}
                status={p.status}
                shopUrl={"shopUrl" in p ? p.shopUrl : undefined}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <Container wide className="max-w-3xl">
          <p className="hj-label">FAQ</p>
          <h2 className="hj-section-title mt-2">Common questions</h2>
          <div className="mt-10">
            <FAQ />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="support" className="relative overflow-hidden bg-hj-green-deep py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--hj-yellow)_0%,_transparent_45%)] opacity-10" />
        <Container wide className="relative text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to join?</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/85">
            Sign up for updates or shop official merch — both keep the campaign running.
          </p>
          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/#signup" variant="yellow" size="xl" className="sm:min-w-[180px]">
              Sign up
            </Button>
            <Button href={shopHref()} variant="outline-light" size="xl" className="sm:min-w-[180px]">
              Shop store
            </Button>
          </div>
          <Button href={supportHref()} variant="ghost" size="sm" className="mt-8 !text-hj-yellow hover:!bg-white/10">
            Contribute directly →
          </Button>
          <p className="mt-4 text-xs text-white/60">
            Not a charitable donation. Not tax deductible.
          </p>
        </Container>
      </section>
    </>
  );
}
