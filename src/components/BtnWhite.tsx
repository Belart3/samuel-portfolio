import React from 'react'
import localFont from "next/font/local";

const base_neue = localFont({
    src: "../../public/assets/fonts/base_neue/BaseNeueTrial-Regular.ttf",
    display: "swap",
});

type Props = {
    content: string,
}

function BtnWhite({content}: Props) {
  return (
    <button className={` ${base_neue.className} px-5 py-[13px] flex gap-2 items-center justify-center bg-white rounded-[32px] capitalize font-normal text-[12px]/[18px] tracking-[0.48px] text-black w-max min-w-max`}>
        {content}
    </button>
  )
}

export default BtnWhite