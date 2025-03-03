"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import SectionTitle from '@/components/SectionTitle'
import SectionWrapper from '@/components/SectionWrapper'
import React, { useState } from 'react'
import localFont from "next/font/local";
import WorkFilters from '@/components/WorkFilters'
import filters from '@/data/workFilters.json'
import work from '@/data/work.json'

const neue_power = localFont({
    src: "../../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap" ,
});

type Props = {}

const page = (props: Props) => {
    const [workFilter, setWorkFilter] =  useState("web designs")
    const [selectedCategory, setSelectedCategory] = useState("web designs")
    
    const filteredProjects = (category: string) => {
        return work.filter(project => project.category == category)
    }
    const projects = filteredProjects(selectedCategory)
  return (
    <PageWrapper>
        <Navbar />
        <main>
            <SectionWrapper >
                <SectionTitle fraction={'02/04'} title={'work'} />
                <h1 className={`${neue_power.className} text-[32px]/[32px] tracking-[1.28px] md:text-[56px]/[56px] md:tracking-[2.24px] font-medium`}>
                    See What I’ve Been Up To <br /> (Besides Playing Apex).
                </h1>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 w-full flex-wrap">
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
                    <div className='flex flex-row flex-wrap gap-x-[1%] gap-y-6'>
                        {
                            projects.map((project) => (
                                <div className={`h-[288px] md:h-[336px] lg:h-[437px] bg-[${project.image}] border border-B400 w-full md:w-[49%] lg:w-[32%] bg-cover bg-no-repeat bg-center`} key={project.id} style={{backgroundImage: `url(${project.image})`}}></div>
                            ))
                        }
                    </div>
                </div>
            </SectionWrapper>
        </main>
        <Footer />
    </PageWrapper>
  )
}

export default page