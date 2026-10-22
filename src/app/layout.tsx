import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b132b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kchat.app"),
  title: {
    default: "K Chat: Make Messaging Smarter",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "K Chat",
    "Make Messaging Smarter",
    "AI Chat App",
    "Real-Time Messaging",
    "Smart Reply",
    "Thread Summary",
    "Context Search",
    "Scam Guard",
    "K Chat Extension",
    "Android Chat",
    "Privacy Conscious AI",
  ],
  authors: [{ name: siteConfig.developerName }],
  creator: siteConfig.developerName,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "K Chat: Make Messaging Smarter",
    description: siteConfig.description,
    url: "https://kchat.app",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/KChatLogo.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} Logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Chat: Make Messaging Smarter",
    description: siteConfig.description,
    images: ["/images/KChatLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
