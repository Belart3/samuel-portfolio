"use client"
import Image from "next/image";
import localFont from "next/font/local";
import SectionTitle from "@/components/SectionTitle";
import React, { useRef, useState, useEffect } from 'react';
import services from "@/data/skills.json";
import AccordionComponent from "@/components/AccordionComponent";
import titles from "@/data/projectTitles.json"
import BtnTransArr from "@/components/BtnTransArr";
import { Geist } from "next/font/google";
import Link from "next/link";
import HeaderTextMarquee from "@/components/HeaderTextMarquee";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import designs from "@/data/designs.json";
import CountUp from 'react-countup';

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const geist = Geist({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ 
    x: 0,
    y: 0 
  });
  console.log(mousePosition);
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
      <header className="h-screen !pt-0 p-4 md:p-7 lg:p-10 w-full flex flex-col justify-end items-start bg-[#B3B3B3] bg-contain bg-bottom bg-no-repeat mb-16 md:mb-[104px] bg-[url('/assets/images/hero-image.png')] relative">
        <HeaderTextMarquee />
        <p className={`${geist.className} absolute top-[60px] md:top-[200px] text-white w-40 md:w-[450px] text-end right-[16px] md:right-[28px] lg:right-10 text-[20px]/[26px] md:text-[28px]/[36px] 2xl:text-[50px] font-normal tracking-[0px]`}>
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
          <div className="flex flex-col lg:flex-row items-start justify-between w-full">
            <p className={`${geist.className} text-[20px]/[26px] md:text-[28px]/[36px] 2xl:text-[2vw]/[2vw] tracking-[0.8px] md:tracking-[1.12px] font-normal text-black w-full xl:w-[75%]`}>
              Here’s where I let my work do the talking (because bragging isn’t my thing—okay, maybe a little). Go ahead, take a look—you might just find your next favorite designer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-16 md:gap-x-4">
            {
              designs.map((design, index) => (
                <div className="flex flex-col gap-3 group !cursor-pointer" key={index}>
                  <div className="relative overflow-hidden h-[300px] sm:h-[400px] 2xl:h-[500px] w-full bg-contain bg-[#C8C8C8]">
                    <Image src={design.image} alt="Designs for clients who have trusted me with their project design" fill className="lg:hover:scale-125 transition-all ease-linear duration-300" />
                  </div>
                  <div className="flex items-center justify-between 2xl:h-[10%]">
                    <p className={`${geist.className} text-[16px]/[16px] md:text-[20px]/[20px] 2xl:text-[2vw] tracking-[-0.64px] md:tracking-[0.8px] font-normal text-black capitalize`}>
                    {design.project}
                    </p>
                    <a href={design.url}>
                      <button className="lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-linear duration-300 flex items-center justify-center gap-2">
                        <p className={`${geist.className} text-[16px]/[16px] md:text-[20px]/[20px] tracking-[-0.64px] md:tracking-[0.8px] font-medium text-black capitalize`}>
                          {
                            design.scope === "design" ? "Visit Site" : design.scope === "white paper" ? "View PDF" : "View Project"
                          }
                        </p>
                        <span>
                          {
                            design.scope === "design" ? 
                            <GoArrowUpRight className="text-black size-6 font-medium" /> 
                            : 
                            design.scope === "white paper" ? 
                            <IoEyeOutline className="text-black size-6 font-medium" />
                            : ""
                          }
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              )
              )
            }
          </div>
        </div>

        <div className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16">
          <SectionTitle title="Who’s Running the Show? (It’s Me)" />
          <div className="flex flex-col w-full h-fit lg:h-[1000px] 2xl:h-screen">
            <div className="flex flex-col gap-12 lg:gap-0 lg:flex lg:flex-wrap lg:justify-between h-full">
              <div className="flex flex-col items-start lg:ps-20 mb-8 md:mb-10 gap-4 lg:w-1/2 order-2">
                <p className={`${geist.className} text-black text-start text-[20px]/[26px] tracking-[-0.8px] md:text-[28px]/[36px] 2xl:text-[1.5vw]/[1.5vw] md:tracking-[-1.12px] font-normal`}>
                  Hi, I’m Samuel Belawu, a Freelance UI/UX Designer who builds websites that do more than just look pretty. My designs turn clicks into customers and browsers into loyal fans.
                </p>
                <p className={`${geist.className} text-black text-start text-[20px]/[26px] tracking-[-0.8px] md:text-[28px]/[36px] 2xl:text-[1.5vw]/[1.5vw] md:tracking-[-1.12px] font-normal`}>
                  I’m all about simple, clean interfaces that actually work. Whether you need a SaaS platform, an eCommerce store, or a landing page that sells, I’ve got you covered.
                </p>
                <p className={`${geist.className} text-black text-start text-[20px]/[26px] tracking-[-0.8px] md:text-[28px]/[36px] 2xl:text-[1.5vw]/[1.5vw] md:tracking-[-1.12px] font-normal`}>
                  When I’m not designing, I’m either scoring goals on eFootball or binge-watching rom-coms—because hey, love keeps the world spinning, right?
                </p>
              </div>

              <div className="h-[550px] md:h-[800px] lg:h-full w-full lg:w-1/2 max-w-[800px] order-2 lg:order-1 relative">
                <Image src='/assets/images/my-image.png' alt="Designs for clients who have trusted me with their project design" fill className="" />
              </div>

              <div className="flex gap-20 w-fit order-3 lg:ms-20">
                <div className="flex flex-col gap-1">
                  <p className={`${neue_power_trial.className} text-black text-start text-[120px]/[120px] 2xl:text-[5vw]/[5vw] tracking-[4.8px] font-normal`}>
                    <span className={`${neue_power_trial.className} text-black text-start text-[60px]/[60px] 2xl:text-[2vw]/[2vw] tracking-[2.4px] font-normal`}>
                      +
                    </span>
                    <CountUp start={0} end={16} duration={5} enableScrollSpy />
                  </p>
                  <p className={`${geist.className} text-[#666666] text-start text-[18px]/[27px]  tracking-[-0.72px] font-normal capitalize`}>
                    Total Projects
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className={`${neue_power_trial.className} text-black text-start text-[120px]/[120px] 2xl:text-[5vw]/[5vw] tracking-[4.8px] font-normal`}>
                    <span className={`${neue_power_trial.className} text-black text-start text-[60px]/[60px] 2xl:text-[2vw]/[2vw] tracking-[2.4px] font-normal`}>
                      +
                    </span>
                    <CountUp start={0} end={3} duration={2} enableScrollSpy />
                  </p>
                  <p className={`${geist.className} text-[#666666] text-start text-[18px]/[27px] tracking-[-0.72px] font-normal capitalize`}>
                    Years of Experience
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:w-1/2 order-3 lg:order-3 lg:ps-20">
                <SectionTitle title="My Superpowers (a.k.a. Skills)" />
                <div className="flex flex-row flex-wrap gap-x-[24px] gap-y-3 w-full">
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
        </div>

        <div className="mx-4 md:mx-7 lg:mx-10 flex flex-col gap-12 md:gap-16">
          <SectionTitle title="Here’s What I Do (And Do Well)" />
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-16 w-full">
            <div className="flex flex-col w-full lg:w-1/2 gap-6 md:gap-8">
              <p className={`${geist.className} teext-[20px]/[26px] tracking-[-0.8px] text-black text-start font-normal md:text-[28px]/[36px] 2xl:text-[1.5vw]/[1.5vw] md:tracking-[-1.12px]`}>
                From pixel-perfect websites to high-converting pages, I make your brand impossible to ignore.
              </p>
              <p className={`${geist.className} teext-[20px]/[26px] tracking-[-0.8px] text-black text-start font-normal md:text-[28px]/[36px] 2xl:text-[1.5vw]/[1.5vw] md:tracking-[-1.12px]`}>
                Here’s what I bring to the table:
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-4 transition-all ease-linear duration-300 h-fit">
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
                <div className={`${geist.className} text-[8px]/[12px] text-white font-normal tracking-[-0.32px] text-center flex items-center justify-center bg-black size-3 rounded-full justify-self-start relative top-[-6px]`}>
                  {services.length}
                </div> : 
                null
              }
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
