"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden hide-scrollbar`}
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
