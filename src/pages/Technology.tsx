import { useState } from "react";

import Page from "../components/Page";
import DynamicDiv from "../cadaver/DynamicDiv";

import technologies from "../scripts/data/technology";

interface DetailsProps {
  technologies: Technology[];
  index: number;
}

export interface Technology{
  img?: string;
  name: string;
  description: string;
  purpose: string;
  language: string;
}

interface TechnologyItemProps {
  tech: Technology;
  onClick?: () => void;
}

function TechnologyItem({ tech, onClick }: TechnologyItemProps) {
  const [screenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth < 768;

  function styles() {

    let div = '';

    const flex = 'flex flex-col justify-between gap-1';

    (() => {
      if(isMobile){
        div = 'w-full p-4 mb-4 bg-gray-100 rounded-lg';
      } else {
        div = 'ml-[10px] w-[200px] h-full p-4 mb-1 bg-gray-100 rounded-lg';
      }
    })();

    return {
      item:`${div} ${flex} cursor-pointer`,
      name: isMobile ? 'text-blue-500' : 'mt-auto mx-auto text-blue-900',
      img:'w-12 h-12 mx-auto'
    }
  }

  return (
    <DynamicDiv onClick={onClick} className={styles().item}>
      {tech.img && <img src={tech.img} alt={tech.name} className={styles().img}/>}
      <h3 className={styles().name}>{tech.name}</h3>
    </DynamicDiv>
  );
}

function Details({ technologies, index }: DetailsProps) {

  const tech = technologies[index];

  function styles() {
    return {
      det:'w-full h-full mb-2 rounded-lg p-4 flex flex-row gap-3',
      img:'w-1/3 h-full bg-white',
      info:'w-2/3 h-full flex flex-col gap-1 bg-white'
    }
  }

  return (
    <DynamicDiv className={styles().det}>
      <DynamicDiv className={styles().img}>
        <img src={tech.img} alt={tech.name} />
      </DynamicDiv>
      <DynamicDiv className={styles().info}>
        <h3>{tech.name}</h3>
        <p>{tech.description}</p>
      </DynamicDiv>
    </DynamicDiv>
  );
}

export default function TechnologyPage() {
  const [isLgScreen] = useState(window.innerWidth >= 1024);
  const [selectedTechIndex, setSelectedTechIndex] = useState(0);

  function styles() {

    const div = 'my-1 mt-[10px] !rounded-none flex flex-row gap-1 items-center justify-start w-full h-[200px]';

    return {
      div
    }
  }

  return (
    <Page className="gap-1">
      <DynamicDiv className={styles().div}>
        {
          technologies && technologies.map((tech, index) => (
            <TechnologyItem
              key={index}
              tech={tech}
              onClick={() => setSelectedTechIndex(index)}
            />
          ))
        }        
      </DynamicDiv>

      {
        isLgScreen && (
          <Details technologies={technologies} index={selectedTechIndex} />
        )
      }

    </Page>
  );
}