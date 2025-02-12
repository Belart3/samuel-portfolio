import Navbar from "@/components/Navbar";
import PageFractions from "@/components/SectionTitle"; // Import the PageFraction component
import Image from "next/image";
import localFont from "next/font/local";
import BtnTransArr from "@/components/BtnTransArr";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";

const neue_power_regular = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

const base_neue = localFont({
    src: "../../public/assets/fonts/base_neue/BaseNeueTrial-Regular.ttf",
    display: "swap",
});

export default function Home() {
  return (
    <div className="mx-10 max-w-screen-2xl 2xl:mx-auto 2xl:px-10 relative">
      <Navbar />
      <header className="h-dvh max-h-[1000px] relative mt-[56px] border-b border-B400 flex flex-col items-center justify-evenly">
          {/* fixed page fraction */}
        <div className="flex items-center justify-center gap-1 w-fit absolute top-8 left-0">
          <p className={`${base_neue.className} text-B200 text-base capitalize`}>
            01/04 - Scroll
          </p>
          <Image src="./assets/images/arrow-down-grey.svg" height={24} width={24} alt="arrow down"/>
        </div>
        <div className="flex flex-col mx-auto mb-8 w-[90%]">
          <h2 className={`${neue_power_regular.className} text-[clamp(1rem,6vw,96px)]/[100px] bg-clip-text bg-gradient-to-r from-black via-white to-black text-transparent text-end tracking-[4px] font-medium`}>
            Designing Interfaces
          </h2>
          <h2 className={`${neue_power_regular.className} text-[clamp(1rem,6vw,96px)]/[96px]  bg-clip-text bg-gradient-to-r from-black via-white to-black text-transparent text-center tracking-[4px] font-medium`}>
            That Make You Go,
          </h2>
          <h2 className={`${neue_power_regular.className} text-[clamp(1rem,6vw,96px)]/[96px]  bg-clip-text bg-gradient-to-r from-black via-white to-black text-transparent text-start tracking-[4px] font-medium`}>
            “Wow! That Was Easy.”
          </h2>
        </div>
        <div className="w-3/5 mx-auto">
          <p className={`${base_neue.className} text-B50 text-end text-lg/[27px] font-normal`}>
            Turn your wild ideas into pixel-perfect realities. Whether it’s SaaS platforms, Web3 apps, or a landing page that actually converts, I make sure your users stay happy (and your bounce rates stay low).
          </p>
        </div>
        <div className="h-20 w-20 rounded-full border border-white left-1/2 flex items-center justify-center">
          <Image src="./assets/images/arrow-down-white.svg" height={28} width={28} alt="arrow down"/>
        </div>
      </header>
      <main>
        <SectionWrapper className="" >
          <SectionTitle title="My Greatest Hits (No Auto-Tune Required)" fraction="02/04" />
          <div className="flex items-start justify-center gap-4 w-4/5 max-w[]">
            <p className={`${neue_power_regular.className} text-[32px]/[38px] font-medium`}>
              Here’s where I let my work do the talking (because bragging isn’t my thing—okay, maybe a little). Go ahead, take a look—you might just find your next favorite designer.
            </p>
            <BtnTransArr content={"view all my work"} />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-[600px] w-[32%] bg-B50"></div>
            <div className="h-[600px] w-[32%] bg-B50"></div>
            <div className="h-[600px] w-[32%] bg-B50"></div>
          </div>
        </SectionWrapper>
        <SectionWrapper className="">
          <SectionTitle title="Who’s Running the Show? (It’s Me)" fraction="03/04"/>
          <div className="flex flex-row items-center justify-between w-full h-[900px]">
            <div className="flex flex-col justify-between items-start  w-1/2 h-full">
              <div className="flex flex-col justify-between items-start me-[120px] gap-8">
                <p className={`${base_neue.className} text-B50 text-start text-lg/[27px] font-normal`}>
                  Hi, I’m Samuel Belawu, a UI/UX designer crafting websites and designs that don’t just look good—they work. When I’m not designing, I’m either chasing wins in Apex, scoring goals in eFootball, lifting weights at the gym.
                </p>
                <button className={` ${neue_power_regular.className} flex gap-2 items-center justify-center bg-transparent capitalize text-base/4 font-bold text-white w-max min-w-max tracking-[0.64px]`}>
                  learn more about me
                  <Image height={24} width={24} src='./assets/images/arrow-up-right-white.svg' alt='arrow-up'/>
                </button>
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>git global</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>IC Pilates</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>Weight Loss Paradise</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>Hill Growth Agency</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>my AI</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>git global</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>git global</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>git global</p>
                <p className={`${neue_power_regular.className} capitalize text-[32px]/[38px] tracking-[1.28px] `}>git global</p>
              </div>
            </div>

            <div className="bg-B50 h-full w-1/2 bg-no-repeat bg-cover "></div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
