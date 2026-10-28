import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "screenShift — Responsive Mobile Simulator & Web Testing Extension",
  description:
    "Test responsive designs across 40+ realistic devices in one click. Preview localhost and live URLs with realistic bezels, touch simulation, and live inspect tools.",
  verification: {
    google: "644nDAdFwbmSq0PCsVXIMZ-Osvmb7BlhPkNSz5nDzDI",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth contrast-125`}>
      <head>
        {/* Chrome Extension Metadata */}
        <meta name="chrome-extension-name" content="ScreenShift" />
        <meta name="chrome-extension-version" content="1.0.0" />
        <meta name="chrome-extension-description" content="ScreenShift - Responsive Mobile Simulator & Web Testing Extension" />
        <meta name="google-site-verification" content="644nDAdFwbmSq0PCsVXIMZ-Osvmb7BlhPkNSz5nDzDI" />
      </head>
      <body className="min-h-screen bg-[#FDF2F8] text-[#4A1D36] antialiased selection:bg-[#E8A0BF]/30 selection:text-[#9D4E7C] flex flex-col justify-between">
        {/* Global Base UI Scroll Progress & Top Scroll Button */}
        <ScrollProgress />

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
