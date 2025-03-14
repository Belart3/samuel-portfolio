import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import React from 'react'
import localFont from 'next/font/local';
import SectionTitle from '@/components/SectionTitle';
import titles from "@/data/projectTitles.json"
import skills from "@/data/skills.json"
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';

const neue_power = localFont({
    src: "../../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap" ,
});

const About = () => {
  return (
    <PageWrapper>
      {/* <Navbar /> */}
      <header className='flex flex-col mb-[104px] gap-12 md:gap-16'>
        <SectionTitle fraction='03/04' title='about' />
        <div className="flex flex-col gap-8 md:gap-10">
          <h1 className={`${neue_power.className} text-[32px]/[32px] tracking-[1.28px] font-medium text-white`}>
            Having fun while <br/> impacting the world.
          </h1>
          <div className='bg-[#D9D9D9] h-[250px] md:h-[500px] lg:h-[700px] w-full'></div>
        </div>
      </header>
      <SectionWrapper className=''>
        <SectionTitle fraction='' title='Who’s Running the Show? (It’s Me)' />
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <h2 className={`${neue_power.className} text-[28px]/[28px] tracking-[1.12px] font-medium text-white w-full md:w-[75%] lg:w-[40%]`}>
            Hi, I’m Samuel Belawu, a UI/UX designer crafting websites and designs that don’t just look good—they work. When I’m not designing, I’m either chasing wins in Apex, scoring goals in eFootball, lifting weights at the gym.
          </h2>
          <div className="bg-[url('/assets/images/my-image.png')] h-[450px] md:h-[900px] w-full lg:w-1/2 lg:max-w-[50%] bg-no-repeat bg-cover bg-center"></div>
        </div>
      </SectionWrapper>
      <SectionWrapper className=''>
        <SectionTitle fraction='' title='Cool People & Companies That Trusted Me With Their Designs' />
        <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-3 order-3 lg:order-2 w-full lg:w-1/2 self-end justify-end">
          {
            titles.map((title) => (
              <p className={`${neue_power.className} capitalize text-[20px]/[20px] tracking-[0.8px] relative before:h-[6px] before:w-[6px] before:bg-B400 before:absolute before:rounded-full before:top-1/2 before:left-[-12px] text-white`} key={title.id}>
                {title.title}
              </p>
            ))
          }
        </div>
      </SectionWrapper>
      <SectionWrapper className=''>
        <SectionTitle fraction='' title='Things I’m Really Good At (And Paid to Do)' />
        <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-3 order-3 lg:order-2 w-full lg:w-1/2 self-end justify-end">
          {
            skills.map((skill) => (
              <p className={`${neue_power.className} capitalize text-[20px]/[20px] tracking-[0.8px] relative before:h-[6px] before:w-[6px] before:bg-B400 before:absolute before:rounded-full before:top-1/2 before:left-[-12px] text-white`} key={skill.id}>
                {skill.title}
              </p>
            ))
          }
        </div>
      </SectionWrapper>
      {/* <Footer /> */}
    </PageWrapper>
  )
}

export default About