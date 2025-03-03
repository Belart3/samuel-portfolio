import { neue_power_regular } from '@/app/page'
import Image from 'next/image'
import React from 'react'

type Props = {
    content: string
}

const BtnTransArr = ({content}: Props) => {
  return (
    <button className={` ${neue_power_regular.className} flex gap-2 items-center justify-center bg-transparent border border-B300 rounded-full px-5 py-4 md:py-5 capitalize text-base/4 font-bold text-white w-max min-w-max tracking-[0.64px]`} >
        {content}
        <Image height={24} width={24} src='./assets/images/arrow-up-right-white.svg' alt='arrow-up'/>
    </button>
  )
}

export default BtnTransArr