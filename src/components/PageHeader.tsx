import { Container } from "./Container";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-hj-border bg-white pt-20 shadow-sm sm:pt-24">
      <Container className="py-12 sm:py-16">
        <h1 className="text-4xl font-bold tracking-tight text-hj-ink sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-hj-ink-muted">{description}</p>
        )}
      </Container>
    </header>
  );
}
