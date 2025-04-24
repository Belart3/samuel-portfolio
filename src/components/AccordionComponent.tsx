import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import localFont from "next/font/local";
import PlusIcon from './PlusIcon';

const neue_power_trial = localFont({
    src: "../../public/assets/fonts/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
    display: "swap",
});

type props = {
    title: string;
    content: string;
};

export default function AccordionComponent(props: props) {
  return (
    <div>
      <Accordion className='border-[#E6E6E6] !rounded-none !shadow-none border-0 !border-y !border-x-0 [&_.MuiAccordionSummary-root]:py-10 [&_.MuiAccordionSummary-root]:px-4 md:[&_.MuiAccordionSummary-root]:py-16 md:[&_.MuiAccordionSummary-root]:px-10'>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls={props.title}
          id={props.title}
          expandIcon={<PlusIcon />}
          className='!m-0 !P-0 [&_.MuiAccordionSummary-content]:m-0 [&_.MuiAccordionSummary-content]:p-0'
        >
          <h3 className={`${neue_power_trial.className} !text-[32px]/[32px] md:!text-[56px]/[56px] !m-0 !p-0`}>
            {props.title}
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          {props.content}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
