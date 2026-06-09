import { CampaignImage } from "@/components/CampaignImage";
import Link from "next/link";
import { brandLogos, type LogoVariant } from "@/lib/data";

const heights: Record<"sm" | "md" | "lg", string> = {
  sm: "h-8",
  md: "h-10 sm:h-11",
  lg: "h-14 sm:h-16",
};

export function Logo({
  variant = "primary",
  href = "/",
  className = "",
  size = "md",
}: {
  variant?: LogoVariant;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const src = brandLogos[variant];

  return (
    <Link href={href} className={`relative block shrink-0 ${heights[size]} ${className}`}>
      <CampaignImage
        src={src}
        alt="High July"
        width={420}
        height={120}
        className="h-full w-auto object-contain object-left"
        priority
      />
    </Link>
  );
}

export function LogoMark({
  variant = "icon",
  className = "",
}: {
  variant?: Extract<LogoVariant, "icon" | "bong" | "pill" | "joint">;
  className?: string;
}) {
  return (
    <CampaignImage
      src={brandLogos[variant === "icon" ? "icon" : variant]}
      alt=""
      width={512}
      height={512}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
