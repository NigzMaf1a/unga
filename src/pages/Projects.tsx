import { useState } from "react";
import Page from "../components/Page";

import Project from "../components/Project";
import type { ProjectProps } from "../components/Project";

const projects:ProjectProps[] = [
  {
    name:'Ukulele band mobile app',
    description:'jjhjhhjh',
    link:'hhhh',
    details:{
      languages:['Typescript', 'PostgreSQL', 'Html', 'Xml'],
      frameworks:['React', 'React-Native', 'Express']
    }
  },
  {
    name:'Aurum Domus Web Application',
    description:'jjhjhhjh',
    link:'hhhh',
    details:{
      languages:['Typescript', 'PostgreSQL', 'Html'],
      frameworks:['Next js', 'Express']
    }
  },
  {
    name:'Organic Web Application app',
    description:'jjhjhhjh',
    link:'hhhh',
    details:{
      languages:['Typescript', 'PostgreSQL', 'Html'],
      frameworks:['React', 'Express']
    }
  }     
];

export default function Projects() {
  const [currIndex, setCurrIndex] = useState<number>(0);

  function open(index: number) {
    setCurrIndex(index);
  }

  function pageStyles():string{
    const bg = '!bg-[#14532D]';

    return `${bg}`;
  }

  return (
    <Page className = {pageStyles()}>
      { projects && projects.map((p, index) => <Project project={p} onClick={() => open(index)} index={index} currentIndex={currIndex}/>)}
    </Page>
  );;
}