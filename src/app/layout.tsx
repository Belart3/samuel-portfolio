"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open);
    document.body.style.overflow = open ? 'auto' : 'hidden';
  }
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden hide-scrollbar scroll-smooth`}
      >
      <div className="relative">
        <Navbar open={open} setOpen={setOpen} handleToggle={handleToggle} />
        {children}
        <Footer />
        <FloatingNav open={open} setOpen={setOpen} handleToggle={handleToggle} />
      </div>
      </body>
    </html>
  );
}
