import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { MerchProductCard } from "@/components/MerchProductCard";
import { shopHref, shopIsExternal } from "@/lib/config";
import { merchProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official High July merchandise.",
};

export default function MerchPage() {
  const shopExternal = shopIsExternal();

  return (
    <div className="bg-hj-cream">
      <PageHeader
        title="Merch"
        description="Official High July apparel and campaign goods."
      />
      <Container wide className="pb-24 pt-4 sm:pb-32">
        {shopExternal ? (
          <div className="mb-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-hj-green/15 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="hj-label">Official store</p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-hj-ink-muted">
                Checkout, shipping, and order support run through our Shopify store.
              </p>
            </div>
            <Button href={shopHref()} variant="yellow" size="lg" external>
              Open Shopify store
            </Button>
          </div>
        ) : null}

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {merchProducts.map((product) => (
            <MerchProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              status={product.status}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
