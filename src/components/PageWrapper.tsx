"use client"
import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

interface WrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<WrapperProps> = ({ children}) => {
  return (
    <div className=" mx-5 lg:mx-10 relative  cursor-crosshair">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PageWrapper