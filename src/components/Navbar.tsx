"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import BtnWhiteArr from './BtnWhiteArr'
import localFont from "next/font/local";
import Link from 'next/link';
import Hamburger from 'hamburger-react';

const neue_power_bold = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Bold.ttf",
    display: "swap",
});

type Props = {}

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
    console.log(menu)
  }
  return (
    <nav className='py-3 lg:py-4 flex items-center justify-between sticky left-0 top-0 z-50 w-full bg-black mt-0 md:mt-4 lg:mt-6'>
        <div className='flex items-center justify-center w-48 h-7'>
          <Link href={'/'}>
            <Image  src='./assets/images/logo.svg' width={100} height={50} alt='samuel belawu' className='w-full'/>
          </Link>
        </div>
        <ul className='items-center justify-center gap-10 hidden md:flex'>
            <Link href={'/work'}>
              <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold text-[#B3B3B3]`}>work</li>
            </Link>
            <Link href={'/about'}>
              <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold text-[#B3B3B3]`}>about</li>
            </Link>
        </ul>
        <div className='hidden md:flex'>
          <BtnWhiteArr content='get in touch'/>
        </div>
        <div className='flex flex-col relative md:hidden'>
          <button className='flex md:hidden text-white cursor-pointer' onClick={toggleMenu}>
            <Hamburger />
          </button>
          {
            menu ? (
              <div className='h-[100px] bg-black w-screen absolute -right-[20px] top-full flex md:hidden z-50 p-5'>
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