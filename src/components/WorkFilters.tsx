"use client"
import React, { useState } from 'react'
import localFont from "next/font/local";
import { motion } from "framer-motion";

const neue_power = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

type Props = {
    filter: string,
    isActive: boolean,
    setWorkFilter: (filter: string) => void,
    setSelectedCategory: (filter: string) => void
    selectedCategory: string
}

function WorkFilters({filter, isActive, setWorkFilter, selectedCategory, setSelectedCategory}: Props) {

  return (
    <motion.button 
      whileTap={{scale: 0.75}}
      className={
      ` ${neue_power.className} px-5 py-[14px] md:py-4 flex gap-2 items-center justify-center border rounded-[32px] border-B300 capitalize font-bold text-[16px]/[16px] tracking-[0.64px] text-white w-max min-w-max hover:bg-B300 transition ease-in-out duration-100 ${isActive ? "bg-B300 border border-white" : " bg-transparent "}`
      }
      onClick={() => {
        setWorkFilter(filter)
        setSelectedCategory(selectedCategory)
        console.log(selectedCategory)
      }}
      >
        {filter}
    </motion.button>
  )
}

export default WorkFilters