import Link from "next/link";
import { brandLogos, type LogoVariant } from "@/lib/data";

export function Logo({
  variant = "primary",
  href = "/",
  className = "",
  height = 48,
}: {
  variant?: LogoVariant;
  href?: string;
  className?: string;
  height?: number;
}) {
  return (
    <Link href={href} aria-label="High July home" className={`inline-flex items-center ${className}`}>
      <img
        src={brandLogos[variant]}
        alt="High July"
        className="hj-logo block w-auto max-w-none"
        style={{ height }}
      />
    </Link>
  );
}
