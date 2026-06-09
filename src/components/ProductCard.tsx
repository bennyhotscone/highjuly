import { CampaignImage } from "@/components/CampaignImage";
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
      <div className="hj-card transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[4/5] overflow-hidden">
          <CampaignImage
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
              status === "store"
                ? "bg-hj-yellow text-hj-green"
                : "bg-white/95 text-hj-ink-muted"
            }`}
          >
            {status === "store" ? "In store" : "Soon"}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="font-bold text-hj-ink">{name}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-hj-ink-muted">{description}</p>
          <span className="mt-3 inline-flex text-sm font-semibold text-hj-green group-hover:underline">
            View product →
          </span>
        </div>
      </div>
    </Link>
  );
}
