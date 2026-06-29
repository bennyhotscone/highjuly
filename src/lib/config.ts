/** Public config — safe for client components (NEXT_PUBLIC_* only). */
export const publicConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.highjuly.com",
  shopifyStoreUrl: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL ?? "",
  stripePaymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "",
} as const;

export function shopHref(): string {
  return publicConfig.shopifyStoreUrl || "/merch";
}

export function shopIsExternal(): boolean {
  return Boolean(publicConfig.shopifyStoreUrl);
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

export function getProductShopUrl(product: MerchProductLike): string | null {
  if (product.status !== "store") return null;
  if (product.shopUrl) return product.shopUrl;
  if (publicConfig.shopifyStoreUrl) return publicConfig.shopifyStoreUrl;
  return null;
}

export function getProductHref(product: MerchProductLike): string {
  const shopUrl = getProductShopUrl(product);
  if (shopUrl) return shopUrl;
  if (product.status === "coming-soon") return "/#signup";
  return "/merch";
}

export function productLinkIsExternal(product: MerchProductLike): boolean {
  const url = getProductShopUrl(product);
  return Boolean(url?.startsWith("http"));
}

export function productCta(product: MerchProductLike): string {
  if (getProductShopUrl(product)) return "Shop now →";
  if (product.status === "coming-soon") return "Get drop alerts →";
  return "View product →";
}
