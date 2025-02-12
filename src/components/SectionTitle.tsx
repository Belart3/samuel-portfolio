import React from 'react'
import localFont from "next/font/local";

const base_neue = localFont({
    src: "../../public/assets/fonts/base_neue/BaseNeueTrial-Regular.ttf",
    display: "swap",
});

type Props = {
    fraction: string,
    title: string,
}

function SectionTitle({fraction, title}: Props) {
  return (
    <div className="flex items-center justify-between w-full pt-5">
      <p className={`${base_neue.className} text-B200 text-base capitalize`}>
          {fraction}
      </p>
      <p className={`${base_neue.className} text-B200 text-base capitalize`}>
          {title}
      </p>
    </div>
  )
}

export default SectionTitle