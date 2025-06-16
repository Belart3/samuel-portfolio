import localFont from 'next/font/local';
import React from 'react'

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const HeaderTextMarquee = () => {
  return (
    <div className="overflow-hidden flex flex-row cursor-pointer w-full absolute left-0 bottom-6 lg:bottom-5">
        <h1 className={`${neue_power_trial.className} text-[74px]/[96px] md:text-[96px]/[120px] lg:text-[120px]/[145px] text-white tracking-[2.96px] md:tracking-[3.84px] lg:tracking-[4.8px] font-normal text-wrap text-start align-bottom select-none min-w-full animate-infinite-scroll shrink-0 group-hover:[animation-play-state:paused] me-4`}>
          Designing Scroll-Stopping Websites That Convert.   
        </h1>
        <h1 aria-hidden="true" className={`${neue_power_trial.className} text-[74px]/[96px] md:text-[96px]/[120px] lg:text-[120px]/[145px] text-white tracking-[2.96px] md:tracking-[3.84px] lg:tracking-[4.8px] font-normal text-wrap text-start align-bottom select-none min-w-full animate-infinite-scroll shrink-0 group-hover:[animation-play-state:paused]`}>
          Designing Scroll-Stopping Websites That Convert.  
        </h1>
  </div>
  )
}

export default HeaderTextMarquee