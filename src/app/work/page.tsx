"use client"
import SectionWrapper from '@/components/SectionWrapper'
import React, { useState } from 'react'
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import WorkFilters from '@/components/WorkFilters'
import filters from '@/data/workFilters.json'
import work from '@/data/work.json'

const neue_power_trial = localFont({
    src: "../../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap" ,
});

const geist = Geist({
    subsets: ["latin"],
    display: "swap",
});

const page = () => {
    const [workFilter, setWorkFilter] =  useState("web designs")
    const [selectedCategory, setSelectedCategory] = useState("web designs")
    
    const filteredProjects = (category: string) => {
        return work.filter(project => project.category == category)
    }
    const projects = filteredProjects(selectedCategory)
  return (
    <>
        <main className='mt-[100px]'>
            <SectionWrapper >
                <h1 className={`${neue_power_trial.className} text-[32px]/[32px] tracking-[1.28px] md:text-[56px]/[56px] md:tracking-[2.24px] font-medium text-black`}>
                    See What I’ve Been Up To <br /> (Besides Playing Apex).
                </h1>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-row gap-3 md:gap-4 lg:gap-6 w-full flex-wrap">
                        {
                            filters.map((filter) => (
                                <WorkFilters 
                                    filter={filter.filter} 
                                    key={filter.id} 
                                    isActive={workFilter == filter.filter}
                                    setWorkFilter={setWorkFilter}
                                    selectedCategory={filter.filter}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            ))
                        }
                    </div>
                    <div className='flex flex-col'>
                        {
                            projects.map((project) => (
                                <div className="py-10 px-4 md:py-16 md:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 md:gap-4 border-y border-[#E6E6E6] group" key={project.id}>
                                    <h2 className={`${neue_power_trial.className} text-[32px]/[40px] tracking[1.28px] md:text-[44px]/[60px] font-medium tracking-[1.76px] text-start text-black transition-all ease-in-out duration-300 lg:group-hover:translate-x-[-6.25%] lg:group-hover:opacity-[50%]`}>{project.title}</h2>
                                    <p className={`${geist.className} text-[16px]/[24px] md:text-[18px]/[27px] text-[#666666] font-normal transition-all ease-in-out duration-300 lg:group-hover:translate-x-[6.25%] lg:group-hover:opacity-[50%]`}>{project.task}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </SectionWrapper>
        </main>
    </>
  )
}

export default page