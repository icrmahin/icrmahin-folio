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
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixel.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable} ${GeistSerif.variable} ${GeistSerifRegular.variable} ${GeistSerifSquare.variable} ${GeistSerifTriangle.variable} ${GeistSerifHeart.variable} h-full antialiased`}
    >
      <body className="mx-auto flex min-h-screen w-full flex-col  ">
        <Navigation />
        <main className="w-full flex-1">{children}</main>
      </body>
    </html>
  );
}
