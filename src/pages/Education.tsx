import { useState } from "react";

import DynamicDiv from "../cadaver/DynamicDiv";
import Page from "../components/Page";

interface EducationDetails {
  level: string;
  institution: string;
  year: number;
  moreInfo: string;
}

interface EducationItemProps {
  details: EducationDetails;
  onClick: () => void;
}

function EducationItem({ details, onClick }: EducationItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function eduItemStyles(){
    const dimensions = `w-full ${isOpen ? 'h-[300px]' : 'h-24'}`;

    const text = (() : string => {
      const base = isOpen ? 'text-black' : 'text-white';
      const size = isOpen ? 'text-sm' : 'text-lg';
      const weight = isOpen ? 'font-normal' : 'font-bold';

      return `${base} ${size} ${weight}`;
    })();

    const cont = (() : string =>{
      const dimensions = 'w-full h-full pt-2 px-1';
      const height = isOpen ? 'h-auto bg-white !text-black' : 'h-24 bg-[#14532D]';
      const flex = 'flex flex-row justify-between items-center gap-1';

      return `${dimensions} ${height} ${flex}`;
    })();

    const div = `${dimensions} ${text}`;

    return {
      div,
      cont,
      text
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

                className={eduItemStyles().div}
    >
      {
        isOpen === false ? (
          <DynamicDiv className={eduItemStyles().cont}>
            <DynamicDiv className={(() : string => {
                const flex = 'flex flex-col gap-1';

                return `${flex}`;
              })()}
            >
              <DynamicDiv className={eduItemStyles().text}>{details.level}</DynamicDiv>
              <DynamicDiv className={eduItemStyles().text}>{details.institution}</DynamicDiv>              
            </DynamicDiv>
            <DynamicDiv className={eduItemStyles().text}>{details.year}</DynamicDiv>          
          </DynamicDiv>          
        ) : (
          <DynamicDiv className={eduItemStyles().cont}>
            <DynamicDiv className={eduItemStyles().text}>{details.moreInfo}</DynamicDiv>
          </DynamicDiv>
        )
      }
    </DynamicDiv>
  )
}

const educationData: EducationDetails[] = [
  { level: "Bachelor's Degree", institution: "University of Example", year: 2020, moreInfo: "Graduated with honors" },
  { level: "Master's Degree", institution: "Example State University", year: 2022, moreInfo: "Specialization in Computer Science" },
];

export default function Education() {

  function pageStyles():string{
    const flex = 'flex flex-col gap-1';

    return `${flex}`;
  }
  
  return (
    <Page className={pageStyles()}>
      { educationData && educationData.map((item, index) => (
        <EducationItem key={index} details={item} onClick={() => {}} />
      )) }
    </Page>
  )
}