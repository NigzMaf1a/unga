//components
import Page from "../components/Page";
import DynamicDiv from "../cadaver/DynamicDiv";
import { useState } from "react";


//interfaces
interface ExperienceDetails {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface ExperienceItemProps {
  details: ExperienceDetails;
  onClick: () => void;
}

function ExperienceItem({ details, onClick }: ExperienceItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function styles(){

    return {

      div: (() => {
        const dimensions = `w-full ${isOpen ? 'h-[300px]' : 'h-24'}`;
        const bg = isOpen === true ? 'bg-white' : 'bg-green-700';
        const flex = 'flex flex-row justify-between items-center gap-1';

        return `${dimensions} ${bg} ${flex}`;
      })(),

      text: (() : string => {
        const base = isOpen === true ? 'text-black' : 'text-white';
        const size = isOpen === true ? 'text-sm' : 'text-lg';
        const weight = isOpen === true ? 'font-normal' : 'font-bold';

        return `${base} ${size} ${weight}`;
      })(),

      cont: (() : string =>{
        const dimensions = isOpen === true ? 'w-full sm:h-[300px] pt-2 px-1' : 'w-full h-24 pt-2 px-1';
        const height = isOpen === true ? 'h-auto bg-white !text-black' : 'h-24 bg-green-700';
        const flex = 'flex flex-row justify-between items-center gap-1';

        return `${dimensions} ${height} ${flex}`;
      })()

    }
  }

  return (
    <DynamicDiv onClick={() => {
                              onClick();
                              setIsOpen(prev => !prev);
                        }}

                onMouseLeave={() => {
                    setIsOpen(false);
                }}

                className={styles().div}
    >
      {
        isOpen === false ? (
          <DynamicDiv className={styles().cont}>
            Open
          </DynamicDiv>
        ) : (
          <DynamicDiv className={styles().cont}>
            <DynamicDiv className={styles().text}>{details.description}</DynamicDiv>
          </DynamicDiv>
        )
      }
    </DynamicDiv>
  );
}

const experience: ExperienceDetails[] = [
  {
    company:'Zynamis Limited',
    position:'Apprentice',
    duration:'3 months',
    description:'Worked as an apprentice for 3 months, learning about software development and gaining hands-on experience in the field.' 
  },
  {
    company:'Zynamis Limited',
    position:'Apprentice',
    duration:'3 months',
    description:'Worked as an apprentice for 3 months, learning about software development and gaining hands-on experience in the field.' 
  }
];

export default function Experience() {

  function styles():string{
    const flex = 'flex flex-col gap-1';

    return `${flex}`;
  }

  return (
    <Page className={styles()}>
      {
        experience && experience.map((item, index) => (
          <ExperienceItem key={index} details={item} onClick={() => {}} />
        ))
      }
    </Page>
  );
}