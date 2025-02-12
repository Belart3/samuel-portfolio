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

function BtnTransArr({content}: Props) {
  return (
    <button className={` ${neue_power.className} p-5 flex gap-2 items-center justify-center bg-transparent border rounded-[32px] border-B300 capitalize text-base/4 font-bold text-white w-max min-w-max tracking-[0.64px]`}>
        {content}
        <Image height={24} width={24} src='./assets/images/arrow-up-right-white.svg' alt='arrow-up'/>
    </button>
  )
}

export default BtnTransArr