import React from 'react'
import Image from 'next/image'
import BtnTransArr from './BtnTransArr'
import localFont from "next/font/local";

const neue_power_bold = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Bold.ttf",
    display: "swap",
});

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='py-4 flex items-center justify-between sticky top-0 bg-black mt-8 z-50'>
        <div className='flex items-center justify-center w-48 h-7'>
            <Image  src='./assets/images/logo.svg' width={100} height={50} alt='samuel belawu' className='w-full'/>
        </div>
        <ul className='flex items-center justify-center gap-10'>
            <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold`}>work</li>
            <li className={`${neue_power_bold.className} capitalize text-base/4 font-bold`}>about</li>
        </ul>
        <BtnTransArr content='get in touch'/>
    </nav>
  )
}

export default Navbar;