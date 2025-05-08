import localFont from 'next/font/local';
import React from 'react'

const neue_power = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap" ,
});

type Props = {
    title: string,
}

function SectionTitle({title}: Props) {
  return (
    <div className="flex items-center justify-between w-full">
      <p className={`${neue_power.className} text-[#666666] text-[16px]/[16px] md:text-[20px]/[20px] tracking-[0.64px] md:tracking-[0.8px] font-medium text-start ps-5 relative before:content-[''] before:block before:size-[8px] before:bg-[#666666] before:rounded-full before:left-0 before:absolute before:top-1/2 before:-translate-y-1/2`}>
          {title}
      </p>
    </div>
  )
}

export default SectionTitle