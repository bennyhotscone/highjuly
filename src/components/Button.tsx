import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "yellow" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-hj-green text-white shadow-[0_4px_14px_rgba(22,53,40,0.35)] hover:bg-hj-green-light hover:shadow-[0_6px_20px_rgba(22,53,40,0.4)] active:scale-[0.98]",
  secondary:
    "bg-hj-ink text-white shadow-[0_4px_14px_rgba(15,22,18,0.25)] hover:bg-hj-green-deep active:scale-[0.98]",
  yellow:
    "bg-hj-yellow text-hj-green shadow-[0_4px_14px_rgba(228,255,61,0.35)] hover:bg-hj-yellow-hover active:scale-[0.98]",
  outline:
    "border-2 border-hj-green bg-white text-hj-green shadow-sm hover:bg-hj-green hover:text-white active:scale-[0.98]",
  "outline-light":
    "border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-hj-ink active:scale-[0.98]",
  ghost: "text-hj-green hover:bg-hj-green/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-6 py-2.5 text-sm",
  lg: "min-h-12 px-8 py-3 text-base",
  xl: "min-h-14 px-10 py-4 text-base sm:text-lg",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hj-green";

function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = "",
) {
  return `${buttonBase} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const combined = `${buttonClassName(variant, size)} ${fullWidth ? "w-full" : ""} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} className={combined} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={href} className={combined}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={combined} disabled={disabled}>
      {children}
    </button>
  );
}
