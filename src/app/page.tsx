"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import localFont from "next/font/local";
import BtnWhiteArr from "@/components/BtnWhiteArr";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import tasks from "@/data/tasks.json"
import titles from "@/data/projectTitles.json"
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode } from 'swiper/modules';
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import BtnTransArr from "@/components/BtnTransArr";

export const neue_power_regular = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const base_neue = localFont({
    src: "../../public/assets/fonts/base_neue/BaseNeueTrial-Regular.ttf",
    display: "swap",
});

export default function Home() {
  const [swiperActive, setSwipeActive] = useState(false);
  return (
    <PageWrapper >
      <header className="h-dvh md:max-h-[845px] relative flex flex-col items-center justify-between pt-8">
        <Navbar />
          {/* fixed page fraction */}
        <div className="flex items-center justify-center gap-1 w-fit absolute top-[170px] left-0">
          <p className={`${base_neue.className} text-B200 text-base capitalize`}>
            01/04 - Scroll
          </p>
          <Image src="./assets/images/arrow-down-grey.svg" height={24} width={24} alt="arrow down"/>
        </div>
        <div className="flex flex-col mx-0 md:mx-auto mb-6 w-full md:w-[90%]">
          <motion.h2  // Start off-screen
            // animate={{ x: [0, 30], opacity: 1 }} // Slide in
            // transition={{ type: "spring", ease: "linear" , duration: 5 }}
            className={`${neue_power_regular.className} text-[clamp(1rem,6vw,58px)]/[58px] lg:text-[clamp(1rem,6vw,96px)]/[100px] bg-clip-text bg-gradient-to-r from-black via-white to-black text-transparent text-end tracking-[3.84px] font-medium text-wrap`}>
            Designing Interfaces
          </motion.h2>
          <motion.h2 
            // animate={{ x: [0, -5], opacity: 1 }}
            // transition={{ type: "spring", ease: "linear" , duration: 10 }}
            className={`${neue_power_regular.className} text-[clamp(1rem,6vw,58px)]/[58px]  lg:text-[clamp(1rem,6vw,96px)]/[96px]  bg-clip-text bg-gradient-to-r from-black via-white to-black text-transparent text-center tracking-[3.84px] font-medium`}>
            That Make You Go,
          </motion.h2>
          <motion.h2 
          // animate={{ x: [0, -60], opacity: 1 }}
          // transition={{ type: "spring", ease: "linear" , duration: 10 }}
          className={`${neue_power_regular.className} text-[clamp(1rem,6vw,58px)]/[58px]  lg:text-[clamp(1rem,6vw,96px)]/[96px]  bg-clip-text bg-gradient-to-r from-black via-white to-black text-transparent text-start tracking-[3.84px] font-medium`}>
            “Wow! That Was Easy.”
          </motion.h2>
        </div>
        <div className="w-full md:w-3/5 mx-auto">
          <p className={`${base_neue.className} text-B50 text-end text-lg/[27px] font-normal`}>
            Turn your wild ideas into pixel-perfect realities. Whether it’s SaaS platforms, Web3 apps, or a landing page that actually converts, I make sure your users stay happy (and your bounce rates stay low).
          </p>
        </div>
        <motion.div 
        initial={{ y: 0, opacity: 0 }} 
        animate={{ y: 50, opacity: 1 }} // Slide in
        transition={{ type: "spring", ease: "linear" , duration: 3, repeat: Infinity }}
        className="hidden md:flex h-20 w-20 rounded-full border border-white left-1/2 items-center justify-center">
          <Image src="./assets/images/arrow-down-white.svg" height={28} width={28} alt="arrow down"/>
        </motion.div>
      </header>
      <main className="mt-[104px] border-t border-B400">
        {/* section 02/04 */}
        <SectionWrapper className="" >
          <SectionTitle title="My Greatest Hits (No Auto-Tune Required)" fraction="02/04" />
          <div className="flex flex-col lg:flex-row items-start justify-center gap-4 w-full lg:w-4/5 max-w[]">
            <p className={`${neue_power_regular.className} text-[28px]/[28px] lg:text-[32px]/[38px] tracking-[1.12px] md:tracking-[1.28px] font-medium`}>
              Here’s where I let my work do the talking (because bragging isn’t my thing—okay, maybe a little). Go ahead, take a look—you might just find your next favorite designer.
            </p>
            <div className="hidden md:block">
              <BtnTransArr content={"view all my work"} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[1%]">
            <div className="h-[800px] lg:h-[600px] w-full lg:w-[32%] bg-B50"></div>
            <div className="h-[800px] lg:h-[600px] w-full lg:w-[32%] bg-B50"></div>
            <div className="h-[800px] lg:h-[600px] w-full lg:w-[32%] bg-B50"></div>
          </div>
          <div className="block md:hidden">
            <BtnTransArr content={"view all my work"} />
          </div>
        </SectionWrapper>

        {/* section 03/04 */}
        <SectionWrapper className="">
          <SectionTitle title="Who’s Running the Show? (It’s Me)" fraction="03/04"/>
          <div className="flex flex-col w-full h-fit lg:h-[900px]">
            <div className="flex flex-col lg:flex-wrap content-start justify-between items-start w-full h-full max-h-full gap-10 lg:gap-0">
              <div className="
                flex flex-col justify-between items-start w-[80%]
                lg:w-[40%] gap-8 order-1"
              >
                <p className={`${base_neue.className} text-B50 text-start text-lg/[27px] font-normal`}>
                  Hi, I’m Samuel Belawu, a UI/UX designer crafting websites and designs that don’t just look good—they work. When I’m not designing, I’m either chasing wins in Apex, scoring goals in eFootball, lifting weights at the gym.
                </p>
                <BtnTransArr content="learn more about me"/>
              </div>
              <div className="bg-[url('/assets/images/my-image.png')] h-[900px] lg:h-full w-full lg:w-1/2 lg:max-w-[50%] bg-no-repeat bg-cover bg-center order-2 lg:order-3"></div>
              <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-3 order-3 lg:order-2 w-full lg:w-1/2 self-end">
                {
                  titles.map((title) => (
                    <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] relative before:h-[6px] before:w-[6px] before:bg-B400 before:absolute before:rounded-full before:top-1/2 before:left-[-12px] `} key={title.id}>
                      {title.title}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* section 04/04 */}
        <SectionWrapper >
          <SectionTitle title="Here’s What I Do (And Do Well)" fraction="04/04"/>
          {/* visible only on tablet and mobile screens */}
          <div className="flex flex-row flex-wrap gap-y-5 justify-between lg:hidden">
            {
              tasks.map((task) => (
                <div className="w-[49%] flex flex-col items-start gap-8" key={task.id} >
                  <div className="h-[400px] w-full bg-B50"></div>
                  <div className="flex flex-col items-start gap-4">
                    <h3 className={`${neue_power_regular.className} tracking-[0.8px] text-[20px]/[24px] font-medium`}>{task.title}</h3>
                    <p className={`${base_neue.className} text-[16px]/[24px] font-normal tracking-[0.64px] text-B200`}>
                      {task.paragraph}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* visible only on large screns */}
          <div className="w-full hidden lg:flex">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              onTouchStart={() => setSwipeActive(!swiperActive)}
              onTouchEnd={() => setSwipeActive(false)}
              className={` ${swiperActive ? 'cursor-grabbing' : 'cursor-grab'} mySwiper w-full select-none` }
            >
            {
              tasks.map((task) => (
                <SwiperSlide className="w-[400px] flex flex-col items-start " key={task.id} >
                  <div className="h-[450px] bg-B50"></div>
                  <div className="flex flex-col items-start gap-4 mt-3">
                    <h3 className={`${neue_power_regular.className} tracking-[0.8px]`}>{task.title}</h3>
                    <p className={`${base_neue.className} tracking-[0.64px] text-B200`}>
                      {task.paragraph}
                    </p>
                  </div>
                </SwiperSlide>
              ))
            }
            </Swiper>
          </div>
        </SectionWrapper>
      </main>
      {/* footer */}
      <Footer />
    </PageWrapper>
  );
}
