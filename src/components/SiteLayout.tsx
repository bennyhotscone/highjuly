import { AgeGate } from "./AgeGate";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <AgeGate>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </AgeGate>
  );
}
