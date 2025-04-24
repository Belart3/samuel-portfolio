import React from 'react'
import localFont from "next/font/local";
import Image from 'next/image';

const neue_power = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Light.ttf",
    display: "swap",
});

type Props = {
    content: string,
}

function BtnWhiteArr({content}: Props) {
  return (
    <button
      className={` ${neue_power.className} p-5 flex gap-2 items-center justify-center bg-white w-full md:w-max rounded-[32px] capitalize text-base/4 font-bold text-black min-w-max tracking-[0.64px]`}>
        {content}
        <Image height={24} width={24} src='./assets/images/arrow-up-right-black.svg' alt='arrow-up'/>
    </button>
  )
}

export default BtnWhiteArr