import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ["latin"] });

type Props = {
    content: string
}

const BtnTransArr = ({content}: Props) => {
  return (
    <button className={` ${geist.className} flex gap-2 items-center justify-center bg-transparent border border-B300 rounded-full px-5 py-4 md:py-5 capitalize text-[16px]/[16px]text-black w-full min-w-max max-w-[300px] tracking-[0.64px] font-medium`} >
        {content}
        <Image height={24} width={24} src='./assets/images/arrow-up-right-black.svg' alt='arrow-up'/>
    </button>
  )
}

export default BtnTransArr