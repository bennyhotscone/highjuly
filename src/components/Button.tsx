import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-hj-green text-white hover:bg-hj-green-deep",
  secondary:
    "bg-hj-ink text-white hover:bg-hj-green-deep",
  outline:
    "border border-hj-ink/20 bg-transparent text-hj-ink hover:border-hj-green hover:text-hj-green",
  text: "text-hj-green underline-offset-4 hover:underline p-0",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const base =
    variant === "text"
      ? "inline-flex items-center gap-2 font-medium transition-colors"
      : "inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hj-green";

  const combined = `${base} ${variants[variant]} ${variant !== "text" ? sizes[size] : ""} ${className}`;

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
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
