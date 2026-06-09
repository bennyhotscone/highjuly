import Link from "next/link";
import { brandLogos, type LogoVariant } from "@/lib/data";

const heightsPx: Record<"sm" | "md" | "lg", number> = {
  sm: 44,
  md: 52,
  lg: 80,
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
  const h = heightsPx[size];

  return (
    <Link
      href={href}
      aria-label="High July home"
      className={`block w-fit shrink-0 overflow-visible ${className}`}
      style={{ lineHeight: 0 }}
    >
      <img
        src={`${brandLogos[variant]}?v=11`}
        alt="High July"
        className="hj-logo block w-auto max-w-none"
        style={{ height: h }}
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
    <img
      src={brandLogos[variant === "icon" ? "icon" : variant]}
      alt=""
      className={`rounded-full object-cover ${className}`}
    />
  );
}
