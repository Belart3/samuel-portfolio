"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="/nutrient-viewer/nutrient-viewer.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`antialiased overflow-x-hidden hide-scrollbar scroll-smooth`}
      >
      <div className="relative">
        <FloatingNav />
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
