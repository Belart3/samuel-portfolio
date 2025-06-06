"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';
import { Slant as Hamburger } from 'hamburger-react'
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const neue_power_bold = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Bold.ttf",
    display: "swap",
});



const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <nav className='px-4 py-3 md:px-7 md:py-4 lg:py-6 lg:px-10 absolute top-0 left-0 flex items-center justify-between w-full bg-transparent z-50'>
        <div className='flex items-center justify-between w-full'>
          <Link href={'/'} >
            <p className={`${neue_power_bold.className} text-[16px]/[24px] md:text-[20px]/[30px] lg:text-[24px]/[36px] font-bold text-white uppercase tracking-[1.28px] md:tracking-[1.6px] lg:tracking-[1.92px]`}>
              SAMUEL BELAWU
            </p>
          </Link>
          <Link href={'/work'} className='hidden lg:flex'>
            <p className={`${neue_power_bold.className} uppercase text-[24px]/[36px] font-bold text-white`}>work</p>
          </Link>
          <Link href={'/about'} className='hidden lg:flex'>
            <p className={`${neue_power_bold.className} uppercase text-[24px]/[36px] font-bold text-white`}>about</p>
          </Link>
          <Link href={'/about'} className='hidden lg:flex'>
            <p className={`${neue_power_bold.className} uppercase text-[24px]/[36px] font-bold text-white`}>contact</p>
          </Link>
        </div>
        <button className='flex justify-center items-center rounded-full shrink-0 lg:hidden size-14 bg-black cursor-pointer' onClick={toggleMenu}>
          <Hamburger color="white" />
        </button>
    </nav>
  )
}

export default Navbar;