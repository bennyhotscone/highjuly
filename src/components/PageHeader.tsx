import { Container } from "./Container";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-hj-border bg-hj-cream pt-[5rem] sm:pt-[5.5rem]">
      <Container className="py-14 sm:py-20">
        <h1 className="font-serif text-5xl font-semibold tracking-tight text-hj-ink sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-hj-ink/85">
            {description}
          </p>
        )}
      </Container>
    </header>
  );
}
