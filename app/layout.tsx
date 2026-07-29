import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const display = Geist({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mixxamm.github.io/copykat-site/";
const iconUrl =
  "https://raw.githubusercontent.com/mixxamm/CopyKat/main/CopyKat/Assets.xcassets/AppIcon.appiconset/icon_512x512.png";
const title = "CopyKat: Everything you copied, one shortcut away";
const description =
  "A fast, native clipboard manager for macOS. Search text, images, files, and pinned snippets without leaving the keyboard.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mixxamm.github.io"),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: iconUrl,
    shortcut: iconUrl,
    apple: iconUrl,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: iconUrl,
        width: 512,
        height: 512,
        alt: "CopyKat: Everything you copied, one shortcut away",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [iconUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
