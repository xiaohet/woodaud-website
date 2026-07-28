import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodaud.com"),
  title: "WOOD Audio Solutions — Audio software, DSP & embedded systems",
  description:
    "Independent audio technology studio building expressive software, embedded systems, and intelligent tools.",
  openGraph: {
    title: "WOOD Audio Solutions",
    description:
      "Sound, engineered from signal to system. Explore selected audio technology projects.",
    url: "https://woodaud.com",
    siteName: "WOOD Audio Solutions",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
