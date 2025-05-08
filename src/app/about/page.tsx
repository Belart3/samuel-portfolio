"use client"
import React from 'react'
import localFont from 'next/font/local';
import SectionTitle from '@/components/SectionTitle';
import titles from "@/data/projectTitles.json"
import skills from "@/data/skills.json"
import SectionWrapper from '@/components/SectionWrapper';
import { Geist } from 'next/font/google';

const neue_power = localFont({
    src: "../../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap" ,
});

const geist = Geist({ subsets: ["latin"] });

const About = () => {
  return (
    <>
      <header className='flex flex-col mb-[104px] gap-12 md:gap-16 mt-[100px] mx-4 md:mx-7 lg:mx-10'>
        <div className="flex flex-col gap-8 md:gap-10">
          <h1 className={`${neue_power.className}  text-[32px]/[32px] md:text-[56px]/[56px] tracking-[1.28px] md:tracking-[2.24px] font-medium text-black`}>
            Having fun while <br/> impacting the world.
          </h1>
          <div className="bg-[url('/assets/images/about-header.png')] bg-cover bg-center bg-no-repeat h-[250px] md:h-[500px] lg:h-[700px] w-full"></div>
        </div>
      </header>
      <SectionWrapper className=''>
        <SectionTitle title='Who’s Running the Show? (It’s Me)' />
        <div className="flex flex-col justify-between gap-12 md:gap-16 lg:gap-[131px]">
          <h2 className={`${geist.className} text-[20px]/[26px] md:text-[32px]/[41px] tracking-[1.28px] font-normal text-black w-full`}>
            Hi, I’m Samuel Belawu, a UI/UX designer crafting websites and designs that don’t just look good—they work. When I’m not designing, I’m either chasing wins in Apex, scoring goals in eFootball, lifting weights at the gym.
          </h2>
          <div className="bg-[url('/assets/images/my-image.png')] h-[600px] md:h-[900px] lg:h-[600px] w-full bg-no-repeat bg-cover bg-center"></div>
        </div>
      </SectionWrapper>
      <SectionWrapper className=''>
        <SectionTitle title='Cool People & Companies That Trusted Me With Their Designs' />
        <div className="flex flex-row flex-wrap gap-x-[40px] gap-y-3 order-3 lg:order-2 w-full self-start justify-start">
          {
            titles.map((title, index) => (
              <p className={`${neue_power.className} capitalize text-[22px]/[22px] md:text-[32px]/[32px] tracking-[0.88px] md:tracking-[1.28px] relative before:h-[6px] before:w-[6px] before:bg-B400 first:before:hidden before:absolute font-medium before:rounded-full before:top-1/2 before:left-[-20px] text-black`} key={index}>
                {title.title}
              </p>
            ))
          }
        </div>
      </SectionWrapper>
      <SectionWrapper className=''>
        <SectionTitle title='Things I’m Really Good At (And Paid to Do)' />
        <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-3 order-3 lg:order-2 w-full self-start justify-start">
          {
            skills.map((skill, index) => (
              <p className={`${neue_power.className} capitalize text-[22px]/[22px] md:text-[32px]/[32px] tracking-[0.88px] md:tracking-[1.28px] relative before:h-[6px] before:w-[6px] before:bg-B400 first:before:hidden before:absolute font-medium before:rounded-full before:top-1/2 before:left-[-20px] text-black`} key={index}>
                {skill.title}
              </p>
            ))
          }
        </div>
      </SectionWrapper>
    </>
  )
}

export default About