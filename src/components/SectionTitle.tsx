import React from 'react'
import { Geist } from 'next/font/google';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

type Props = {
    title: string,
}

function SectionTitle({title}: Props) {
  return (
    <div className="flex items-center justify-between w-full">
      <p className={`${geist.className} text-[#B3B3B3] text-[16px]/[16px] md:text-[20px]/[20px] 2xl:text-[1.2vw]/[1.2vw] tracking-[0.64px] md:tracking-[0.8px] font-medium text-start`}>
          {title}
      </p>
    </div>
  )
}

export default SectionTitle