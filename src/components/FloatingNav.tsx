import {Cross as Hamburger} from 'hamburger-react';
import { Geist } from 'next/font/google';
import React, { useState, useEffect } from 'react'
import socialmedia from '@/data/socialMedia.json'
import Image from 'next/image';

const geist = Geist({ subsets: ["latin"] });
const FloatingNav = () => {
    const [open, setOpen] = useState(false);
    const [float, setFloat] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
        console.log(open)
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 100) {
          setFloat(true);
        } else {
          setFloat(false);
        }
    };
    
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  return (
    <div className={`z-50 overflow-hidden`}>
        {/* round menu hamburger */}
        <div className={`transition-all bg-black rounded-full duration-300 ease-linear fixed z-50 flex items-center justify-center right-5 md:right-10 lg:right-14 top-[50px] lg:hover:top-[40px] lg:hover:right-8 group overflow-hidden ${float ? 'translate-x-0' : 'translate-x-[200%]'} transition-all duration-500 ${open == true ? '!translate-x-0 filter invert !size-[56px]' : 'size-[64px] md:size-[80px]'} `}  >
          <button className='flex items-center justify-center text-white cursor-pointer size-full' onClick={handleToggle} >
            <Hamburger toggled={open} toggle={setOpen} />
          </button>
        </div>
        <div className={`w-full h-screen fixed right-0 top-0 bg-white flex items-center justify-center z-[10] ${open ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-linear duration-300`}>
            <div className={`w-full sm:w-3/5 lg:w-2/5 h-full bg-black fixed top-0 right-0 ps-10 pe-5 py-5 md:p-10 lg:p-14`}>
              <div className="flex flex-col justify-between h-full w-full pt-[120px]">
                <div className="flex flex-col">
                  <ul className='text-white text-lg md:text-xl lg:text-2xl flex flex-col gap-10'>
                    <li>
                      <a href="#" onClick={handleToggle} className={`${geist.className} text-[32px]/[32px] font-normal tracking-[1.28px] md:text-[56px]/[56px] md:tracking-[2.24px] flex items-center flex-row justify-start`}>
                        <span className='bg-white rounded-full size-2.5 mr-4 hidden'></span>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#work" onClick={handleToggle} className={`${geist.className} text-[32px]/[32px] font-normal tracking-[1.28px] md:text-[56px]/[56px] md:tracking-[2.24px] flex items-center flex-row justify-start`}>
                        <span className='bg-white rounded-full size-2.5 mr-4 hidden'></span>
                        Work
                      </a>
                    </li>
                    <li>
                      <a href="#about" onClick={handleToggle} className={`${geist.className} text-[32px]/[32px] font-normal tracking-[1.28px] md:text-[56px]/[56px] md:tracking-[2.24px] flex items-center flex-row justify-start`}>
                        <span className='bg-white rounded-full size-2.5 mr-4 hidden'></span>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="https://calendly.com/ayobamisamuel732/discovery-call-with-samuel-belawu" target='_blank' onClick={handleToggle} className={`${geist.className} text-[32px]/[32px] font-normal tracking-[1.28px] md:text-[56px]/[56px] md:tracking-[2.24px] flex items-center flex-row justify-start`}>
                        <span className='bg-white rounded-full size-2.5 mr-4 hidden'></span>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row justify-between gap-20 items-center w-full">
                  {
                    socialmedia.map((media) => (
                        <a href={media.url} key={media.id}>
                            <Image src={media.image} alt={media.media} height={32} width={32} className='filter invert' />
                        </a>
                    ))
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FloatingNav