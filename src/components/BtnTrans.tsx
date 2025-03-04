import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local';

const neue_power_regular = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

type Props = {
    content: string
}

const BtnTrans = ({content}: Props) => {
  return (
    <button className={` ${neue_power_regular.className} flex gap-2 items-center justify-center bg-transparent border border-B300 rounded-full px-5 py-[7px] md:py-5 capitalize text-[12px]/[18px] tracking-[0.48px] font-bold text-white w-max min-w-max`} >
        {content}
        <Image height={24} width={24} src='./assets/images/arrow-up-right-white.svg' alt='arrow-up'/>
    </button>
  )
}

export default BtnTrans