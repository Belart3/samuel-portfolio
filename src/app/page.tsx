"use client"
import Image from "next/image";
import localFont from "next/font/local";
import SectionTitle from "@/components/SectionTitle";
import React, { useRef, useState } from 'react';
import skills from "@/data/skills.json"
import AccordionComponent from "@/components/AccordionComponent";
import titles from "@/data/projectTitles.json"
import BtnTransArr from "@/components/BtnTransArr";
import { Geist } from "next/font/google";
import Link from "next/link";

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});
const geist = Geist({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="h-[calc(100vh-90px)] p-4 md:p-7 lg:p-10 w-full relative flex flex-col justify-end items-start bg-[#B3B3B3] bg-contain bg-bottom bg-no-repeat mb-16 md:mb-[104px] bg-[url('/assets/images/hero-image.png')]">
        <h1 className={`${neue_power_trial.className} text-[40px]/[40px] md:text-[56px]/[56px] lg:text-[80px]/[80px] text-white tracking-[3.84px] font-medium text-wrap text-start align-bottom`}>
          Designing Interfaces That Make You Go, “Wow! That Was Easy.”
        </h1>
        <p className={`${geist.className} absolute top-[60px] md:top-[200px] text-white w-40 text-end right-[16px] md:right-[28px] lg:right-10 text-[20px]/[26px] md:text-[28px]/[36px] font-normal tracking-[0px]`}>
          Transform your bold ideas into flawless designs.
        </p>
        <div className="absolute flex flex-col justify-center items-start left-[16px] md:left-[28px] lg:left-10 top-[216px] md:top-[200px]">
          <Image src="/assets/images/globe.svg" alt="hero image" width={32} height={32} className="size-8 md:size-10"/>
          <p className={`${geist.className} top-[60px] text-white text-start text-[20px]/[26px] md:text-[28px]/[36px] font-normal tracking-[0px]`}>
            Freelance <br />
            UI/UX Designer
          </p>
        </div>
      </header>
      <main className="flex flex-col gap-[104px] md:gap-[168px] mb-16 md:mb-[104px]">
        <div className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16" >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 w-full max-w[]">
            <p className={`${geist.className} text-[20px]/[26px] md:text-[28px]/[36px] tracking-[0.8px] md:tracking-[1.12px] font-normal text-black w-full xl:w-[75%]`}>
              Here’s where I let my work do the talking (because bragging isn’t my thing—okay, maybe a little). Go ahead, take a look—you might just find your next favorite designer.
            </p>
            <div className="w-full md:w-fit">
              <BtnTransArr content={"view all my work"} />
            </div>
          </div>
          <div className="flex flex-col">
            {titles.map((title, index) => (
              <div className="py-10 px-4 md:py-16 md:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 md:gap-4 border-y border-[#E6E6E6]" key={index}>
                <h2 className={`${neue_power_trial.className} text-[32px]/[32px] tracking[1.28px] md:text-[44px]/[44px] font-medium tracking-[1.76px] text-start text-black uppercase`}>{title.title}</h2>
                <p className={`${geist.className} text-[16px]/[24px] md:text-[18px]/[27px] text-[#666666] font-normal`}>{title.task}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16">
          <SectionTitle title="Who’s Running the Show? (It’s Me)" />

          <div className="flex flex-col w-full h-fit lg:h-[900px]">
            <div className="flex flex-col lg:flex-wrap content-start justify-between items-start w-full h-full max-h-full gap-10 lg:gap-0">
              <div className="
                flex flex-col justify-between items-start w-[80%]
                lg:w-[40%] gap-8 order-1"
              >
                <p className={`${geist.className} text-black text-start text-lg/[27px] font-normal tracking-[0px]`}>
                  Hi, I’m Samuel Belawu, a UI/UX designer crafting websites and designs that don’t just look good—they work. When I’m not designing, I’m either chasing wins in Apex, scoring goals in eFootball, lifting weights at the gym.
                </p>
                <Link href="/about">
                  <BtnTransArr content="learn more about me"/>
                </Link>
              </div>

              <div className="bg-[url('/assets/images/my-image.png')] h-[450px] md:h-[900px] lg:h-full w-full lg:w-1/2 lg:max-w-[50%] bg-no-repeat bg-cover bg-center order-2 lg:order-3"></div>

              <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-3 order-3 lg:order-2 w-full lg:w-1/2 self-end">
                {
                  titles.map((title, index) => (
                    <p className={`${neue_power_trial.className} capitalize text-[32px]/[38px] tracking-[1.28px] relative before:h-[6px] before:w-[6px] before:bg-B400 before:absolute before:rounded-full before:top-1/2 before:left-[-12px] font-medium text-black`} key={index}>
                      {title.title}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16">
          <SectionTitle title="Here’s What I Do (And Do Well)" />

          <div className="flex flex-col">
            {
              skills.map((skill, index) => (
                <AccordionComponent title={skill.title} content="" key={index} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}
