import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicDiv from "../cadaver/DynamicDiv";

import { AppColors } from "../scripts/data/colors";

interface MenuProps {
  onMouseLeave: () => void;
  style?: React.CSSProperties;
}

interface MenuItemProps {
  label: string;
  icon?:string;
  onClick: () => void;
}

function MenuItem({ label, icon, onClick }: MenuItemProps) {

  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  function itemStyles(): string {
    const dimensions = "w-[392px] h-12 mx-[4px] my-1 rounded-lg";
    const padding = "p-2";
    const flex = "flex items-center gap-2";
    const text = 'text-white';
    const border = isHovered ? "!border-none" : "border-b border-[`${AppColors.accent}`]";

    const hover = isHovered ? "bg-blue-500" : "";

    return ` ${dimensions} ${padding} ${flex} ${hover} ${text} ${border}`;
  }

  return (
    <DynamicDiv onClick={onClick} 
                className={itemStyles()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </DynamicDiv>
  );
}

function Beautify(){

  function beautyStyles(): string {
    const dimensions = "w-full h-[100px] mb-2";
    const border = "border border-gray-300";
    const bg = "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50";
    const shape = "rounded-lg";

    return `${dimensions} ${border} ${bg} ${shape}`;
  }

  return (
    <DynamicDiv className={beautyStyles()}>
      <></>
    </DynamicDiv>
  );
}

export default function Menu({ onMouseLeave, style }: MenuProps) {
  const navigate = useNavigate();

  function  contStyles(): string {
    const dimensions = "w-[400px] h-full !rounded-none";
    const position = "absolute top-0 left-0";
    const flex = "flex flex-col items-center justify-start cursor-pointer";

    return `${dimensions} ${position} ${flex}`;
  }

  return (
    <DynamicDiv className={contStyles()} onMouseLeave={onMouseLeave} style={style}>
        <Beautify />
        <MenuItem label="Home" icon="🏠" onClick={() => navigate('/')} />
        <MenuItem label="Education" icon="🏠" onClick={() => navigate('/education')} />
        <MenuItem label="Experience" icon="🏠" onClick={() => navigate('/experience')} />
        <MenuItem label="Projects" icon="🏠" onClick={() => navigate('/projects')} />
        <MenuItem label="Skills" icon="🏠" onClick={() => navigate('/skills')} />
        <MenuItem label="Technology" icon="🏠" onClick={() => navigate('/technology')} />
        <MenuItem label="Contact" icon="🏠" onClick={() => navigate('/contact')} />
    </DynamicDiv>
  );
}