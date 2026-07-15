import { CampaignImage } from "@/components/CampaignImage";
import { getProductHref, productLinkIsExternal, shopHref } from "@/lib/config";
import Link from "next/link";
import { merchProducts, storeImages } from "@/lib/data";
import { Button } from "./Button";

export function StorePanel() {
  const featured = merchProducts.slice(0, 3);

  return (
    <div className="hj-card flex h-full flex-col">
      <div className="relative h-36 sm:h-44">
        <CampaignImage
          src={storeImages.hero}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hj-green/90 via-hj-green/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <p className="hj-label text-hj-yellow">Official merch</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Shop the store</h2>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-hj-ink-muted">
          Tees, hoodies, caps, and campaign goods — released through the season.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {featured.map((product) => {
            const href = getProductHref(product);
            const thumbClass =
              "group relative aspect-[3/4] overflow-hidden rounded-xl bg-hj-cream-dark ring-1 ring-black/5";
            const image = (
              <CampaignImage
                src={product.image}
                alt={product.name}
                fill
                className={`object-cover ${href ? "transition-transform duration-500 group-hover:scale-105" : ""}`}
              />
            );

            if (!href) {
              return (
                <div key={product.id} className={thumbClass}>
                  {image}
                </div>
              );
            }

            if (productLinkIsExternal(product)) {
              return (
                <a key={product.id} href={href} className={thumbClass}>
                  {image}
                </a>
              );
            }

            return (
              <Link key={product.id} href={href} className={thumbClass}>
                {image}
              </Link>
            );
          })}
        </div>

        <Button href={shopHref()} variant="primary" size="lg" fullWidth className="mt-6">
          Browse all products
        </Button>

        <p className="mt-4 text-center text-xs font-medium text-hj-ink-muted">
          {merchProducts.length} products · New drops through July
        </p>
      </div>
    </div>
  );
}
