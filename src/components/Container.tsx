export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-10 lg:px-14 ${
        wide ? "max-w-[90rem]" : "max-w-6xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
