import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "High July",
    template: "%s | High July",
  },
  description:
    "High July is a creator-led culture campaign for the month of July. Official merch, content, and direct supporter funding.",
  openGraph: {
    title: "High July",
    description: "A creator-led culture campaign for the month of July.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
