import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy · CopyKat",
  description:
    "How CopyKat handles clipboard data, permissions, website visits, and support messages.",
  alternates: {
    canonical: "https://copykat.dev/privacy/",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
