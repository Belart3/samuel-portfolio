import React from 'react'
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ["latin"] });

type Props = {
    fraction: string,
    title: string,
}

function SectionTitle({fraction, title}: Props) {
  return (
    <div className="flex items-center justify-between w-full pt-5 border-t border-[#333333]">
      {
        fraction &&
        <p className={`${geist.className} text-B200 text-[12px]/[12px] tracking-[0.48px] md:tracking-[0.64px] md:text-base capitalize`}>
        {fraction}
        </p>
      }
      <p className={`${geist.className} text-B200 text-[12px]/[12px] tracking-[0.48px] md:tracking-[0.64px] md:text-base capitalize`}>
          {title}
      </p>
    </div>
  )
}

export default SectionTitle