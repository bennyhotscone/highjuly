import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { merchProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official High July merchandise.",
};

export default function MerchPage() {
  return (
    <div className="bg-hj-cream">
      <PageHeader
        title="Merch"
        description="Official High July apparel and campaign goods."
      />
      <Container wide className="pb-24 pt-4 sm:pb-32">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {merchProducts.map((product) => (
            <ProductCard
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
