import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SiteLayout } from "@/components/SiteLayout";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "High July",
    template: "%s | High July",
  },
  description:
    "High July is a creator-led culture campaign for the month of July. Official merch, content, and direct supporter funding.",
  icons: {
    icon: "/backgrounds/logo-icon.png",
    apple: "/backgrounds/logo-icon.png",
  },
  openGraph: {
    title: "High July",
    description: "A creator-led culture campaign for the month of July.",
    type: "website",
    images: ["/backgrounds/logo-primary.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased">
        <SiteLayout>{children}</SiteLayout>
        <Analytics />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xm3tntcjol");`}
        </Script>
      </body>
    </html>
  );
}
