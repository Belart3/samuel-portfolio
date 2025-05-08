import localFont from 'next/font/local';
import React from 'react'

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const HeaderTextMarquee = () => {
  return (
    <div className="overflow-hidden flex flex-row cursor-pointer w-full absolute left-0 bottom-6 lg:bottom-10">
        <h1 className={`${neue_power_trial.className} text-[74px]/[90px] md:text-[96px]/[110px] lg:text-[120px]/[150px] text-white tracking-[3.84px] font-medium text-wrap text-start align-bottom select-none min-w-full animate-infinite-scroll shrink-0 group-hover:[animation-play-state:paused] 2xl:text-[15vw]/[20vw]`}>
          Designing Interfaces That Make You Go, “Wow! That Was Easy.”
        </h1>
        <h1 aria-hidden="true" className={`${neue_power_trial.className} text-[74px]/[74px] md:text-[96px]/[96px] lg:text-[120px]/[150px] text-white tracking-[3.84px] font-medium text-wrap text-start align-bottom select-none min-w-full animate-infinite-scroll shrink-0 group-hover:[animation-play-state:paused]  2xl:text-[15vw]/[20vw]`}>
          Designing Interfaces That Make You Go, “Wow! That Was Easy.”
        </h1>
  </div>
  )
}

export default HeaderTextMarquee