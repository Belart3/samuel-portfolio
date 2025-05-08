"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';
import Hamburger from 'hamburger-react';
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
    <nav className='px-4 py-3 md:px-7 md:py-4 lg:py-4 lg:px-10 flex items-center justify-between w-full bg-transparent border-b border-[#E6E6E6]'>
        <div className='flex items-center justify-center w-48 h-7'>
          <Link href={'/'}>
            <Image  src='./assets/images/logo.svg' width={100} height={50} alt='samuel belawu' className='w-full'/>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-10">
          <ul className='items-center justify-center gap-10 hidden md:flex'>
              <Link href={'/work'}>
                <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold text-black`}>work</li>
              </Link>
              <Link href={'/about'}>
                <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold text-black`}>about</li>
              </Link>
          </ul>
          <div className='hidden md:flex'>
            <button className={` ${geist.className} p-5 flex gap-2 items-center justify-center bg-black rounded-[32px] uppercase text-[16px]/[16px] font-semibold text-white min-w-max tracking-[0.64px] relative group overflow-hidden z-10`}>
                get in touch
                <Image height={24} width={24} src='./assets/images/arrow-up-right-white.svg' alt='arrow-up'/>
                <div className="absolute top-0 left-0 h-full w-0 rounded-[32px] bg-[] transition-all ease-linear group-hover:w-full ring-offset-0 -z-[2]"></div>
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div className='flex flex-col relative md:hidden'>
          <button className='flex md:hidden text-white cursor-pointer' onClick={toggleMenu}>
            <Hamburger color="black" />
          </button>
          {
            menu ? (
              <div className='h-[100px] bg-[#B3B3B3] w-screen absolute -right-[20px] top-full flex md:hidden z-50 p-5'>
                <ul className='gap-5 flex flex-col  md:hidden h-full w-full'>
                  <Link href={'/work'}>
                    <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold text-[#B3B3B3]`}>work</li>
                  </Link>
                  <Link href={'/about'}>
                    <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold text-[#B3B3B3]`}>about</li>
                  </Link>
                </ul>
              </div>
            ) :  null
          }
        </div>
    </nav>
  )
}

export default Navbar;