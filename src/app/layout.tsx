import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Noto_Sans_Devanagari } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { RouteProgress } from "@/components/layout/route-progress";
import { LogoLoader } from "@/components/motion/logo-loader";
import { siteConfig } from "@/content/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Financial Education & Workshops`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "financial education",
    "mutual funds",
    "corporate workshops",
    "investment awareness",
    "Sachin Gupta",
    "Smart Alpha",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/brand/smart-alpha-logo.png", width: 2182, height: 721 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/brand/smart-alpha-logo.png",
    apple: "/brand/smart-alpha-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${hindi.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppProviders>
          <LogoLoader />
          <RouteProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </AppProviders>
      </body>
    </html>
  );
}
