"use client"
import React from 'react'
import localFont from "next/font/local";
import BtnWhiteArr from './BtnWhiteArr';
import socialmedia from '@/data/socialMedia.json'
import Image from 'next/image';
import { Geist } from 'next/font/google';
import { motion } from "framer-motion";
import BtnTrans from './BtnTrans';

const neue_power_regular = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const geist = Geist({ subsets: ["latin"] });

type Props = {}

const Footer = (props: Props) => {
  return (
    <motion.footer className="
        flex 
        flex-col 
        gap-10
        lg:gap-16 lg:px-0
        mb-16" 
    >
        <div className="
            flex 
            flex-col items-center gap-10 h-fit
            lg:flex-row lg:gap-0 lg:px-0 lg:h-[600px]"
        >
            <div className="
                flex gap-8 
                flex-col justify-center items-center pe-0 w-full md:w-[80%]
                lg:pe-20 lg:w-1/2 lg:items-start"
            >
                <h2 className=
                    {
                    `${neue_power_regular.className} 
                    text-[32px]/[32px] md:text-[56px]/[56px] tracking-[1.28px] md:tracking-[2.24px] text-center
                    lg:text-start text-white`
                    }
                >
                    Ready to Make Your Vision Look This Good?
                </h2>
                <p className=
                    {
                    `${geist.className} 
                    text-sm/[21px] tracking-[0.56px] md:text-lg/[27px] text-B200 md:tracking-[0.72px] 
                    text-center
                    lg:text-start 
                    `
                    }
                >
                    Whether it’s a website, a pitch deck, or social media ads that actually convert, I’m here to make it happen. Let’s create something amazing together (because mediocre isn’t my thing).
                </p>
                <BtnWhiteArr content='Hire Me—You Won’t Regret It' />
            </div>
            <div className="
                bg-B75 
                h-[300px] md:h-[500px] lg:h-[600px]  w-full
                lg:w-1/2 
            "
            ></div>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row items-center justify-between w-full">
            <div className='flex flex-row items-center   justify-center w-full md:w-fit'>
                <BtnTrans content='Available for Work' />
            </div>
            <div className="flex flex-row justify-center gap-20 items-center">
            {
                socialmedia.map((media) => (
                    <a href={media.url} key={media.id}>
                        <Image src={media.image} alt={media.media} height={32} width={32} />
                    </a>
                ))
            }
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer