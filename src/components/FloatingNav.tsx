import {Cross as Hamburger} from 'hamburger-react';
import React, { useState, useEffect } from 'react'

const FloatingNav = () => {
    const [open, setOpen] = useState(false);
    const [float, setFloat] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
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
        <div className={`size-[64px] md:size-[80px] transition-all bg-black rounded-full duration-300 ease-linear fixed z-50 flex items-center justify-center right-4 md:right-7 lg:right-10 top-[50px] lg:hover:top-[40px] lg:hover:right-8 group overflow-hidden ${float ? 'translate-x-0' : 'translate-x-[150%]'} transition-all duration-500 ${open == true ? '!translate-x-0' : ''} `}  >
            <div className={`absolute top-0 left-0 h-full w-full rounded-full ${open ? 'translate-y-0' : 'translate-y-[100%]'} bg-[#666666] lg:group-hover:translate-y-0 transition-all duration-300`}></div>
            <button className='flex items-center justify-center text-white cursor-pointer size-full' onClick={handleToggle} >
                <Hamburger />
            </button>
        </div>
        <div className={`w-full h-screen fixed right-0 top-0 flex items-center justify-center z-[10] ${open ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-linear duration-700`}>
            <div className={` w-2/5 h-full bg-black fixed top-0 right-0`}></div>
        </div>
    </div>
  )
}

export default FloatingNav