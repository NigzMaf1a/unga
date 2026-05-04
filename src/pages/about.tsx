import { useEffect, useState } from "react";

//components
import FleshHor from "../cadaver/FleshHor";
import Skeleton from "../cadaver/Skeleton";
import TopStrip from "../components/TopStrip";
import DynamicDiv from "../cadaver/DynamicDiv";
import Image from "../cadaver/Image";

function Photo() {
  function contStyles(): string {
    const dimensions = "w-full md:w-1/2 lg:w-1/4 h-full !border-none";
    const margin = "m-0 md:m-2 mb-1";

    return `${dimensions} ${margin}`;
  }

  function imgStyles(): string {
    const size = "w-full h-full";
    const shape = "rounded-lg object-cover object-center";

    return `${size} ${shape}`;
  }

  return (
    <DynamicDiv className={contStyles()}>
      <img className={imgStyles()} src = '/dp101.JPG'/>
    </DynamicDiv>
  )
}

function Acquaint(){
  const [frameworks] = useState<string[]>([
    '/react.png',
    '/angular.png',
    '/express.png',
    '/nest.png',
  ]);

  const [link, setLink] = useState<string>('/gin.png');

  function contStyles(): string {
    const dimensions = "w-full md:w-1/2 lg:w-3/4 h-full !border-none bg-blue-100";
    const margin = "m-0 md:m-2 mt-1 rounded-lg";
    
    return `${dimensions} ${margin}`;
  }

  function imgStyles(): string {
    const size = "w-full h-full";
    const shape = "rounded-lg !object-cover object-center";

    return `${size} ${shape}`;
  }

  useEffect(() => {

    function juggleLink(): void {
      const randomIndex = Math.floor(Math.random() * frameworks.length);
      setLink(frameworks[randomIndex]);
    }

    const interval = setInterval(juggleLink, 200000);
    return () => clearInterval(interval);

  }, [frameworks]);

  return (
    <DynamicDiv className={contStyles()}>
      <Image className={imgStyles()} src={link} />
    </DynamicDiv>
  )
}


export default function About() {

  function contentStyles(): string {
    const size = "w-full h-full pb-2";
    return `${size}`;
  }

  function aboutStyles(): string {
    const bg = "bg-[#191970]";
    return `${bg}`;
  }

  return (
    <Skeleton className={aboutStyles()}>
      <TopStrip />
      <FleshHor className={contentStyles()}>
        <Photo />
        <Acquaint />
      </FleshHor>
    </Skeleton>
  )
}