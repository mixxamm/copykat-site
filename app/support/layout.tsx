import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support · CopyKat",
  description:
    "Get help with CopyKat installation, permissions, shortcuts, and unexpected behaviour.",
  alternates: {
    canonical: "https://copykat.dev/support/",
  },
};

export default function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
