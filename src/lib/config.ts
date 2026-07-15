/** Public config — safe for client components (NEXT_PUBLIC_* only). */
export const SHOPIFY_STORE_URL = "https://shop.highjuly.live";

export const publicConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.highjuly.com",
  shopifyStoreUrl: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || SHOPIFY_STORE_URL,
  stripePaymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "",
} as const;

export function shopHref(): string {
  return publicConfig.shopifyStoreUrl;
}

export function shopIsExternal(): boolean {
  return shopHref().startsWith("http");
}

export function supportHref(): string {
  return publicConfig.stripePaymentLink || "/#support";
}

export function supportIsExternal(): boolean {
  return Boolean(publicConfig.stripePaymentLink);
}

export type MerchProductLike = {
  status: "coming-soon" | "store";
  shopUrl?: string;
};

/** Only products with an explicit shopUrl are buyable links. */
export function getProductShopUrl(product: MerchProductLike): string | null {
  if (product.status !== "store") return null;
  return product.shopUrl || null;
}

export function getProductHref(product: MerchProductLike): string | null {
  return getProductShopUrl(product);
}

export function productLinkIsExternal(product: MerchProductLike): boolean {
  const url = getProductShopUrl(product);
  return Boolean(url?.startsWith("http"));
}

export function productCta(product: MerchProductLike): string {
  if (getProductShopUrl(product)) return "View product →";
  return "Coming soon";
}
