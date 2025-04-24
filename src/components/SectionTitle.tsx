import React from 'react'
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ["latin"] });

type Props = {
    title: string,
}

function SectionTitle({title}: Props) {
  return (
    <div className="flex items-center justify-between w-full">
      <p className={`${geist.className} text-[#666666] text-[18px]/[18px] md:text-[24px]/[24px] lg:text-[20px]/[20px] tracking-[0.72px] md:tracking-[0.96px] lg:tracking-[0.8px] font-medium text-start ps-5 relative before:content-[''] before:block before:w-[8px] before:h-[8px] before:bg-[#666666] before:rounded-full before:left-0 before:absolute before:top-1/2 before:-translate-y-1/2`}>
          {title}
      </p>
    </div>
  )
}

export default SectionTitle