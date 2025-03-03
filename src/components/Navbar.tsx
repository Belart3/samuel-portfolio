import React from 'react'
import Image from 'next/image'
import BtnWhiteArr from './BtnWhiteArr'
import localFont from "next/font/local";
import Link from 'next/link';

const neue_power_bold = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Bold.ttf",
    display: "swap",
});

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='py-4 flex items-center justify-between sticky top-0 bg-black z-50 w-full'>
        <div className='flex items-center justify-center w-48 h-7'>
          <Link href={'/'}>
            <Image  src='./assets/images/logo.svg' width={100} height={50} alt='samuel belawu' className='w-full'/>
          </Link>
        </div>
        <ul className='items-center justify-center gap-10 hidden md:flex'>
            <Link href={'/work'}>
              <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold`}>work</li>
            </Link>
            <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold`}>about</li>
        </ul>
        <div className='hidden md:flex'>
        <BtnWhiteArr content='get in touch'/>
        </div>
    </nav>
  )
}

export default Navbar;