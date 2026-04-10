import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.novacore.app"),
  title: {
    default: "NovaCore | Premium Windows Optimization for Gamers",
    template: "%s | NovaCore",
  },
  description:
    "NovaCore is a premium Windows optimization suite for gamers and performance-focused users who want a cleaner, more responsive system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
