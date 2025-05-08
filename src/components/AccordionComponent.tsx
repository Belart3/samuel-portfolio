import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import localFont from "next/font/local";
import PlusIcon from './PlusIcon';
import { Geist } from 'next/font/google';

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});


const geist = Geist({ subsets: ["latin"] });

type props = {
    title: string;
    content: string;
};

export default function AccordionComponent(props: props) {
  return (
    <>
      <Accordion className='border-[#E6E6E6] !rounded-none !shadow-none border-0 !border-y !border-x-0 !m-0 !py-10 !px-4 md:!py-16 md:!px-10 [&_.Mui-expanded]:!m-0 [&_.MuiAccordionSummary-root]:p-0 [&_.MuiAccordionDetails-root]:p-0'>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls={props.title}
          id={props.title}
          expandIcon={<PlusIcon />}
          className='!m-0 !P-0 [&_.MuiAccordionSummary-content]:m-0 [&_.MuiAccordionSummary-content]:p-0'
        >
          <h3 className={`${neue_power_trial.className} !text-[32px]/[40px] md:!text-[56px]/[64px] !m-0 !p-0`}>
            {props.title}
          </h3>
        </AccordionSummary>
        <AccordionDetails className='!mt-10'>
          <p className={`${geist.className} text-[16px]/[24px] md:text-[18px]/[27px] text-[#666666]`}>
            {props.content}
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
