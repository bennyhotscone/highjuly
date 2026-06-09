import Image, { type ImageProps } from "next/image";

/** Static campaign assets — served directly to avoid optimizer race on new files. */
export function CampaignImage({ alt = "", ...props }: ImageProps) {
  return <Image alt={alt} unoptimized {...props} />;
}
