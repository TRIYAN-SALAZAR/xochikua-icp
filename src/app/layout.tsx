import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";

import { siteConfig } from "./config/siteconfig";
import { Providers } from "./provider";
import { fontSans } from "@/app/config/fonts";

import "@/styles/globals.css";
import { Header } from "@/components/head/Header";
import { Footer } from "@/components/footer/foo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `${siteConfig.name} | %s`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/skl.png",
  },
  generator: "xochikua",
  applicationName: "xochikua",
  referrer: "origin-when-cross-origin",
  keywords: ["xochikua", "Blockchain", "Colaboración", "Internet computer", "sklconnect", "Im_JVallejo", "SKL", "Next.js"],
  authors: [{ name: "xochikua-team", url: "https://sklconnect.com" }],
  creator: 'Im_JVallejo',
  publisher: 'Im_JVallejo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}