import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { GeistSerif } from "geist/font/serif";
import "./globals.css";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/sections/Footer";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site";

const siteDescription =
  "A. Mahin is an independent product engineer and builder working across product thinking, interface design and practical software engineering.";

export const metadata: Metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
  title: {
    default: "A. Mahin — Independent Product Engineer",
    template: "%s — A. Mahin",
  },
  description: siteDescription,
  applicationName: "icrmahin",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "icrmahin",
    title: "A. Mahin — Independent Product Engineer",
    description: siteDescription,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Mahin — Independent Product Engineer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#15191B",
  colorScheme: "dark light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "A. Mahin",
      alternateName: "icrmahin",
      jobTitle: "Independent Product Engineer",
      description: siteDescription,
      sameAs: ["https://github.com/icrmahin"],
      ...(siteUrl ? { url: siteUrl } : {}),
      knowsAbout: [
        "Product engineering",
        "Product design",
        "Interface design",
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "Supabase",
      ],
    },
    {
      "@type": "WebSite",
      name: "icrmahin",
      description: siteDescription,
      inLanguage: "en",
      ...(siteUrl ? { url: siteUrl } : {}),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "min-h-full",
        "antialiased",
        GeistSans.variable,
        GeistMono.variable,
        GeistSerif.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
