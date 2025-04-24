"use client"
import React from 'react'
import localFont from "next/font/local";
import BtnWhiteArr from './BtnWhiteArr';
import socialmedia from '@/data/socialMedia.json'
import Image from 'next/image';
import { Geist } from 'next/font/google';
import BtnTrans from './BtnTrans';

const neue_power_regular = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const geist = Geist({ subsets: ["latin"] });

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col gap-8 lg:gap-10 lg:px-0 mb-16 mx-4 md:mx-7 lg:mx-10" >
        <div className="flex justify-center items-center bg-black rounded-2xl w-full px-5 md:px-16 py-[120px] md:py-[75px] lg:py-16 overflow-hidden relative">
            <div className="flex flex-col items-center justify-center max-w-[800px] gap-4 md:gap-6">
                <p className={`${geist.className} text-[16px]/[24px] md:text-[18px]/[27px] font-normal text-[#B3B3B3] text-center`}>
                    LET’S CONNECT!
                </p>
                <h2 className={`${neue_power_regular.className} text-[32px]/[32px] md:text-[56px]/[56px] text-white text-center mb-2`}>
                    Ready to Make Your Vision Look This Good?
                </h2>
                <BtnWhiteArr content='Hire Me—You Won’t Regret It' />
            </div>
            {/* absolutely placed background elements */}
            <div className="absolute -bottom-1/4 -left-[33%] md:-left-[30%] lg:-bottom-[66%] lg:-left-[15%] bg-[url('/assets/images/footer-bg-1.svg')] bg-contain bg-no-repeat bg-center size-[250px] md:size-[350px] lg:size-[450px] animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -top-1/4 -right-[33%] md:-right-[30%] lg:-top-[66%] lg:-right-[15%] bg-[url('/assets/images/footer-bg-1.svg')] bg-contain bg-no-repeat bg-center md:size-[350px] size-[250px] lg:size-[450px] animate-[spin_10s_linear_infinite]"></div>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row items-center justify-between w-full">
            <div className='flex flex-row items-center   justify-center w-full md:w-fit'>
                <BtnTrans content='Available for Work' />
            </div>
            <div className="flex flex-row justify-between gap-20 items-center w-full max-w-[400px]">
            {
                socialmedia.map((media) => (
                    <a href={media.url} key={media.id}>
                        <Image src={media.image} alt={media.media} height={32} width={32} />
                    </a>
                ))
            }
            </div>
        </div>
    </footer>
  )
}

export default Footer