import Image from "next/image";

export function FullBleedImage({
  src,
  aspect = "cinematic",
  priority = false,
}: {
  src: string;
  aspect?: "cinematic" | "tall" | "square";
  priority?: boolean;
}) {
  const aspectClass =
    aspect === "tall"
      ? "aspect-[3/4] sm:aspect-[16/10]"
      : aspect === "square"
        ? "aspect-square sm:aspect-[16/9]"
        : "aspect-[4/5] sm:aspect-[21/9]";

  return (
    <section className={`relative w-full overflow-hidden ${aspectClass}`}>
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        quality={90}
        priority={priority}
      />
    </section>
  );
}
