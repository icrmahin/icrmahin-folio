import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistPixel } from "geist/font/pixel/variable";
import {
  GeistPixelCircle,
  GeistPixelGrid,
  GeistPixelLine,
  GeistPixelSquare,
  GeistPixelTriangle,
} from "geist/font/pixel";
import {
  GeistSerif,
  GeistSerifHeart,
  GeistSerifRegular,
  GeistSerifSquare,
  GeistSerifTriangle,
} from "geist/font/serif";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "../components/nav/Navigation";
import Footer from "../sections/Footer";
import SiteIntro from "../components/app/SiteIntro";
import ThemeProvider from "../components/theme/ThemeProvider";
import MinimalCursor from "../components/app/MinimalCursor";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "A. Mahin — Product Builder",
    template: "%s | A. Mahin",
  },
  description:
    "I design, build, and ship digital products through thoughtful design and practical engineering.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
};

export const viewport: Viewport = {
  themeColor: "#15191b",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        GeistSans.variable,
        GeistMono.variable,
        GeistPixel.variable,
        GeistPixelSquare.variable,
        GeistPixelGrid.variable,
        GeistPixelCircle.variable,
        GeistPixelTriangle.variable,
        GeistPixelLine.variable,
        GeistSerif.variable,
        GeistSerifRegular.variable,
        GeistSerifSquare.variable,
        GeistSerifTriangle.variable,
        GeistSerifHeart.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="custom-pointer mx-auto flex min-h-screen w-full flex-col pb-20 sm:pb-0">
        <ThemeProvider>
          <Navigation />
          <main className="w-full flex-1">
            <SiteIntro>{children}</SiteIntro>
          </main>
          <Footer />
          <MinimalCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
