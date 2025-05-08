import { Geist } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react'
import workImage from '@/data/workImages.json'

const neue_power_trial = localFont({
    src: "../../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap" ,
});

const geist = Geist({
    subsets: ["latin"],
    display: "swap",
});

const page = () => {
  return (
    <>
      <header className="mt-16 md:mt-20 mx-4 md:mx-7 lg:mx-10">
        <div className="flex flex-col w-full max-w-[900px] mx-auto gap-4 md:gap-6">
          <h1 className={`${neue_power_trial.className} text-[32px]/[40px] md:text-[56px]/[64px] text-black tracking-[1.28px] text-start`}>
            LuncPump’s Pitch Deck
          </h1>
          <div className="bg-[#E6E6E6] h-px w-full"></div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
            <div className="flex flex-col gap-2">
              <h2 className={`${geist.className} text-[14px]/[21px] md:text-[16px]/[24px] text-normal text-[#999999] text-start capitalize`}>
                client
              </h2>
              <p className={`${geist.className} text-[16px]/[24px] md:text-[18px]/[27px] text-normal text-black text-start capitalize`}>
                LuncPump.fun
              </p>
            </div>
            <p className={`${geist.className} text-[16px]/[24px] md:text-[18px]/[27px] text-normal text-black text-start capitalize`}>
              Massa laoreet nibh ligula sit phasellus leo et viverra fusce. Eget donec viverra ultrices non ut eu phasellus. Nam elit sed urna dui pellentesque aliquam sagittis ut. Nec enim dictum est laoreet tristique purus nulla egestas pulvinar. Sed ultrices sed adipiscing molestie bibendum egestas lobortis. Nisi vestibulum morbi a aenean morbi.
            </p>
          </div>
        </div>
      </header>  
      <main className="mt-16 md:mt-[104px] mb-[104px] md:mb-[168px] mx-4 md:mx-7 lg:mx-10">
        <div className="flex flex-col gap-1 md:gap-2">
          {
            workImage.map((image, index) => (
              <div className="bg-center bg-cover bg-no-repeat h-[250px] w-full max-w-[400px] md:h-[300px] md:max-w-[600px] lg:h-[600px] lg:max-w-[900px] mx-auto" style={{backgroundImage: `url(${image.image})`}} key={index}></div>
            ))
          }
        </div>
      </main>
    </>
  )
}

export default page