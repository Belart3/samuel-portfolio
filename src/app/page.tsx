"use client"
import Image from "next/image";
import localFont from "next/font/local";
import SectionTitle from "@/components/SectionTitle";
import React, { useRef, useState, useEffect } from 'react';
import services from "@/data/skills.json";
import AccordionComponent from "@/components/AccordionComponent";
import { Geist } from "next/font/google";
import HeaderTextMarquee from "@/components/HeaderTextMarquee";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import designs from "@/data/designs.json";
import CountUp from 'react-countup';

// Extend the Window interface to include NutrientViewer
declare global {
  interface Window {
    NutrientViewer?: {
      load: (options: { container: HTMLElement; document: string }) => void;
      unload: (container: HTMLElement) => void;
    };
  }
}

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const geist = Geist({ subsets: ["latin"] });



export default function Home() {
  const workImages = [
    "/assets/images/git-global-work-image.png",
    "/assets/images/bcm-work-image.png",
    "/assets/images/jmg-work-image.png",
    "/images/bg4.jpg",
  ];

  const skills = [
    {
      "title" :'UI/UX Design'
    },
    {
      "title": 'Web Design'
    },
    {
      "title": 'Prototyping'
    },
    {
      "title": 'Figma'
    },
    {
      "title": 'Wireframing'
    },
    {
      "title": 'eCommerce Design'
    }
  ]

  const [showMore, setShowMore] = useState(false);
  const serviceShown = showMore ? services : services.slice(0, 3);

  return (
    <>
      <header className="h-screen xl:max-h-none !pt-0 p-4 md:p-7 lg:p-10 w-full flex flex-col justify-end items-start bg-[#B3B3B3] bg-cover sm:bg-contain bg-[position:60%_100px] sm:bg-bottom bg-no-repeat mb-16 md:mb-[104px] bg-[url('/assets/images/hero-image.png')] relative" id="#">
        <HeaderTextMarquee />
        <p className={`${geist.className} absolute top-[125px] md:top-[300px] lg:top-1/2 text-white w-[45%] md:w-[180px] lg:w-[450px] text-end right-[16px] md:right-[28px] lg:right-10 text-[20px]/[26px] md:text-[28px]/[36px] font-normal tracking-[0px]`}>
          Transform your bold ideas into flawless designs.
        </p>
        <div className="absolute flex flex-col justify-center items-start left-[16px] md:left-[28px] lg:left-10 top-1/2 md:top-[300px] lg:top-1/2 -translate-y-full md:translate-y-0">
          <Image src="/assets/images/globe.svg" alt="hero image" width={32} height={32} className="size-8 md:size-10"/>
          <p className={`${geist.className} top-[60px] text-white text-start text-[20px]/[26px] md:text-[28px]/[36px] font-normal tracking-[0px]`}>
            Freelance <br />
            UI/UX Designer
          </p>
        </div>
      </header>
      <main className="flex flex-col gap-[104px] md:gap-[168px] mb-16 md:mb-[104px]  max-w-screen-2xl mx-auto">
        <section className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16 scroll-mt-[104px] scroll-smooth" id="work" >
          <div className="flex flex-col lg:flex-row items-start justify-between w-full">
            <p className={`${geist.className} text-[20px]/[26px] md:text-[28px]/[36px] tracking-[0.8px] md:tracking-[1.12px] font-normal text-black w-full xl:w-[75%]`}>
              Here’s where I let my work do the talking (because bragging isn’t my thing—okay, maybe a little). Go ahead, take a look—you might just find your next favorite designer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-16 sm:gap-x-4 relative">
            {
              designs.map((design, index) => (
                <a href={design.url} target="_blank" key={index} className="group">
                  <div className="flex flex-col gap-3 !cursor-pointer" key={index}>
                    <div className="relative overflow-hidden h-[350px] md:h-[380px] w-full bg-contain bg-[#C8C8C8]">
                      <Image src={design.image} alt="Designs for clients who have trusted me with their project design" fill className={`${design.status !== 'live' ? 'group-hover:scale-0' : ''}lg:group-hover:scale-125 transition-all ease-linear duration-300`} />
                    </div>
                    <div className="flex items-center justify-between 2xl:h-[10%]">
                      <p className={`${geist.className} text-[16px]/[16px] md:text-[20px]/[20px] tracking-[-0.64px] md:tracking-[0.8px] font-normal text-black capitalize`}>
                      {design.project}
                      </p>
                      {
                        design.scope === "design" && design.status === 'live' ? 
                        <button className="lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-linear duration-300 flex items-center justify-center gap-2">
                          <p className={`${geist.className} text-[16px]/[16px] md:text-[20px]/[20px] tracking-[-0.64px] md:tracking-[0.8px] font-medium text-black capitalize`}>
                            Visit Site
                          </p>
                          <span>
                            <GoArrowUpRight className="text-black size-6 font-medium" /> 
                          </span>
                        </button>
                        : 
                        design.scope === "white paper" ? 
                          <button className="lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-linear duration-300 flex items-center justify-center gap-2">
                            <p className={`${geist.className} text-[16px]/[16px] md:text-[20px]/[20px] tracking-[-0.64px] md:tracking-[0.8px] font-medium text-black capitalize`}>
                              View PDF
                            </p>
                            <span>
                              <IoEyeOutline className="text-black size-6 font-medium" />
                            </span>
                          </button>
                        : ""
                      }
                    </div>
                  </div>
                </a>
              )
              )
            }
            
          </div>
        </section>

        <section className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16 scroll-mt-[104px]" id="about">
          <SectionTitle title="Who’s Running the Show? (It’s Me)" />
          <div className="flex flex-col w-full h-fit lg:h-[1000px] 2xl:h-screen 2xl:min-h-[800px]">
            <div className="flex flex-col gap-12 lg:gap-0 lg:flex lg:flex-wrap lg:justify-between h-full">
              <div className="flex flex-col items-start lg:ps-20 mb-8 md:mb-10 gap-4 lg:w-1/2 order-2">
                <p className={`${geist.className} text-black text-start text-[20px]/[26px] tracking-[-0.8px] md:text-[28px]/[36px] md:tracking-[-1.12px] font-normal`}>
                  Hi, I’m Samuel Belawu, a Freelance UI/UX Designer who builds websites that do more than just look pretty. My designs turn clicks into customers and browsers into loyal fans.
                </p>
                <p className={`${geist.className} text-black text-start text-[20px]/[26px] tracking-[-0.8px] md:text-[28px]/[36px] md:tracking-[-1.12px] font-normal`}>
                  I’m all about simple, clean interfaces that actually work. Whether you need a SaaS platform, an eCommerce store, or a landing page that sells, I’ve got you covered.
                </p>
                <p className={`${geist.className} text-black text-start text-[20px]/[26px] tracking-[-0.8px] md:text-[28px]/[36px] md:tracking-[-1.12px] font-normal`}>
                  When I’m not designing, I’m either scoring goals on eFootball or binge-watching rom-coms—because hey, love keeps the world spinning, right?
                </p>
              </div>

              <div className="h-[550px] md:h-[800px] lg:h-full w-full lg:w-1/2 max-w-[800px] order-2 lg:order-1 relative bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/assets/images/my-image.png')` }}>
              </div>

              <div className="flex gap-20 w-[95%] sm:w-fit order-3 lg:ms-20">
                <div className="flex flex-col gap-1">
                  <p className={`${neue_power_trial.className} text-black text-start text-[80px]/[80px] md:text-[100px]/[100px] lg:text-[120px]/[120px] tracking-[3.2px] md:tracking-[4px] lg:tracking-[4.8px] font-normal`}>
                    <span className={`${neue_power_trial.className} text-black text-start text-[40px]/[40px] md:text-[50px]/[50px] lg:text-[60px]/[60px] tracking-[1.6px] md:tracking-[2px] lg:tracking-[2.4px] font-normal`}>
                      +
                    </span>
                    <CountUp start={0} end={16} duration={5} enableScrollSpy scrollSpyOnce />
                  </p>
                  <p className={`${geist.className} text-[#666666] text-start text-[16px]/[24px] md:text-[18px]/[27px] tracking-[-0.64px] md:tracking-[-0.72px] font-normal capitalize`}>
                    Total Projects
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className={`${neue_power_trial.className} text-black text-start text-[80px]/[80px] md:text-[100px]/[100px] lg:text-[120px]/[120px] tracking-[3.2px] md:tracking-[4px] lg:tracking-[4.8px] font-normal`}>
                    <span className={`${neue_power_trial.className} text-black text-start text-[40px]/[40px] md:text-[50px]/[50px] lg:text-[60px]/[60px] tracking-[1.6px] md:tracking-[2px] lg:tracking-[2.4px] font-normal`}>
                      +
                    </span>
                    <CountUp start={0} end={3} duration={2} enableScrollSpy scrollSpyOnce />
                  </p>
                  <p className={`${geist.className} text-[#666666] text-start text-[18px]/[27px] tracking-[-0.72px] font-normal capitalize`}>
                    Years of Experience
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:w-1/2 order-3 lg:order-3 lg:ps-20">
                <SectionTitle title="My Superpowers (a.k.a. Skills)" />
                <div className="flex flex-row flex-wrap gap-x-[24px] gap-y-3 w-full ps-4 md:ps-7 lg:ps-0">
                  {
                    skills.map((skill, index) => (
                      <p className={`${geist.className} text-[28px]/[28px] tracking-[1.12px] relative before:first:hidden before:h-[6px] before:w-[6px] before:bg-B400 before:absolute before:rounded-full before:top-1/2 before:left-[-12px] before:translate-x-[-50%] font-normal text-black`} key={index}>
                        {skill.title}
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16">
          <SectionTitle title="Here’s What I Do (And Do Well)" />
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-16 w-full">
            <div className="flex flex-col w-full lg:w-1/2 gap-6 md:gap-8">
              <div>
                <p className={`${geist.className} text-[20px]/[26px] tracking-[-0.8px] text-black text-start font-normal md:text-[28px]/[36px] md:tracking-[-1.12px]`}>
                  From pixel-perfect websites to high-converting pages, 
                </p>
                <p className={`${geist.className} text-[20px]/[26px] tracking-[-0.8px] text-[#000000] text-start font-normal md:text-[28px]/[36px] md:tracking-[-1.12px]`}>
                  I make your brand impossible to ignore.
                </p>
              </div>
              <div className='relative w-fit'>
                <p className={`${geist.className} text-[20px]/[26px] tracking-[-0.8px] text-[#000000] text-start font-normal md:text-[28px]/[36px] md:tracking-[-1.12px]`}>
                  Here’s what I bring to the table:
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 transition-all ease-linear duration-300 h-fit">
              {
                serviceShown.map((skill, index) => (
                  <AccordionComponent title={skill.title} content={skill.content} key={index} />
                ))
              }
              <button className={`${geist.className} text-[16px]/[16px] tracking-[-0.64px] text-black text-start font-medium px-5 py-[17px] border border-[#B3B3B3] rounded-[32px] mt-10 capitalize w-fit mx-auto flex`} onClick={() => setShowMore(!showMore)}>
              {
                showMore ? 'see less services' : 'see all services'
              }
              {
                showMore === false ? 
                <div className={`${geist.className} text-[9px]/[13.5px] text-white font-normal tracking-[-0.36px] text-center flex items-center justify-center bg-black size-4 rounded-full justify-self-start relative top-[-6px]`}>
                  {services.length}
                </div> : 
                null
              }
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


