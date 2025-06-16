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
      <body
        className={`antialiased overflow-x-hidden hide-scrollbar scroll-smooth`}
      >
      <div className="relative">
        <Navbar />
        {children}
        <Footer />
        <FloatingNav />
      </div>
      </body>
    </html>
  );
}
