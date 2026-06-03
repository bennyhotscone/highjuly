import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  status: "coming-soon" | "store";
}

export function ProductCard({ name, description, image, status }: ProductCardProps) {
  return (
    <Link href="/merch" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-hj-cream-dark">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      </div>
      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl font-semibold text-hj-ink">{name}</h3>
          <span className="shrink-0 text-xs text-hj-ink-muted">
            {status === "coming-soon" ? "Soon" : "Available"}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-hj-ink/80">
          {description}
        </p>
      </div>
    </Link>
  );
}
