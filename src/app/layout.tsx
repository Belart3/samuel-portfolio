"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import React from "react";

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

    
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.075,
    });

    return () => {
      scroll.destroy(); // Cleanup
    };
  }, []);
  
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden hide-scrollbar scroll-smooth`}
      >
      <div className="relative" data-scroll-container ref={scrollRef}>
        <Navbar open={open} setOpen={setOpen} handleToggle={handleToggle} />
        {children}
        <Footer />
        <FloatingNav open={open} setOpen={setOpen} handleToggle={handleToggle} />
      </div>
      </body>
    </html>
  );
}
