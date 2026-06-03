import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FullBleedImage } from "@/components/FullBleedImage";
import { ProductCard } from "@/components/ProductCard";
import { campaignStats, merchProducts, siteImages } from "@/lib/data";

export default function HomePage() {
  const preview = merchProducts.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-svh">
        <Image
          src={siteImages.hero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
        <Container
          wide
          className="relative flex min-h-svh flex-col justify-end pb-16 pt-28 sm:pb-24 sm:pt-32"
        >
          <p className="text-sm font-medium text-white">2026 campaign</p>
          <h1 className="mt-4 max-w-[14ch] font-serif text-[clamp(3.25rem,10vw,7.5rem)] font-semibold leading-[1.02] tracking-tight text-white">
            High July
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white">
            A creator-led culture campaign for the month of July. Merch, content,
            and direct supporter funding.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/#support"
              className="rounded-sm bg-white px-7 py-3.5 text-[15px] font-medium text-hj-ink transition-colors hover:bg-hj-cream"
            >
              Support the campaign
            </Link>
            <Link
              href="/merch"
              className="text-[15px] font-medium text-white underline-offset-4 hover:underline"
            >
              Shop merch
            </Link>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-hj-cream">
        <Container wide className="grid gap-12 py-20 sm:grid-cols-2 sm:items-center sm:gap-16 sm:py-28 lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-hj-ink sm:text-5xl">
              Built for the month of July
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-hj-ink/85">
              High July is a founder-led campaign with its own content, official
              merchandise, and a direct supporter program. Each year the project runs
              through July with new releases and community activity.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-hj-ink/85">
              This is not a charity or government program. It is an independent
              culture campaign funded by merch and voluntary contributions.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="text">
                Read the full story →
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
            <Image
              src={siteImages.mission}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </Container>
      </section>

      <FullBleedImage src={siteImages.bandRolling} aspect="cinematic" />

      {/* Stats */}
      <section className="border-y border-hj-border bg-white">
        <Container wide className="py-14 sm:py-16">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {campaignStats.map((stat) => (
              <li key={stat.label}>
                <p className="font-serif text-4xl font-semibold text-hj-green sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-hj-ink/75">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Editorial split */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[50vh] lg:min-h-[640px]">
          <Image
            src={siteImages.support}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            quality={90}
          />
        </div>
        <div className="flex flex-col justify-center bg-hj-cream-dark px-6 py-16 sm:px-14 sm:py-24 lg:px-20">
          <h2 className="font-serif text-3xl font-semibold text-hj-ink sm:text-4xl">
            Official campaign materials
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-hj-ink/80">
            Apparel and goods released through the campaign store. New drops are
            announced on social and listed on the merch page.
          </p>
          <Link
            href="/merch"
            className="mt-8 inline-flex text-[15px] font-medium text-hj-green hover:underline"
          >
            View the store →
          </Link>
        </div>
      </section>

      <FullBleedImage src={siteImages.bandLounge} aspect="cinematic" />

      {/* Merch */}
      <section className="bg-hj-cream py-20 sm:py-28">
        <Container wide>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-4xl font-semibold text-hj-ink sm:text-5xl">
              Merch
            </h2>
            <Link
              href="/merch"
              className="text-[15px] font-medium text-hj-green hover:underline"
            >
              View all products
            </Link>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {preview.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                description={p.description}
                image={p.image}
                status={p.status}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-hj-border bg-white py-20 sm:py-28">
        <Container>
          <h2 className="font-serif text-4xl font-semibold text-hj-ink">Questions</h2>
          <div className="mt-12">
            <FAQ />
          </div>
        </Container>
      </section>

      {/* Support */}
      <section id="support" className="bg-hj-green">
        <Container wide className="py-20 text-center sm:py-28">
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
            Support the campaign
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/95">
            Voluntary contributions go to the creator and project costs — content,
            merch, and operations.
          </p>
          <a
            href="#"
            className="mt-10 inline-block rounded-sm bg-white px-8 py-3.5 text-[15px] font-medium text-hj-ink transition-colors hover:bg-hj-cream"
            aria-label="Contribute via Stripe (placeholder)"
          >
            Contribute
          </a>
          <p className="mt-5 text-xs text-white/75">
            Not a charitable donation. Not tax deductible.
          </p>
        </Container>
      </section>
    </>
  );
}
