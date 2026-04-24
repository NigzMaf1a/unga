// import { useNavigate } from "react-router-dom";
import DynamicDiv from "../cadaver/DynamicDiv";

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

  function itemStyles(): string {
    const dimensions = "w-[392px] h-12 mx-[4px] my-1 rounded-lg";
    const padding = "p-2";
    const flex = "flex items-center gap-2";
    const hover = "";
    const text = 'text-white';
    const border = "border-b border-gray-300 last:border-none";

    return ` ${dimensions} ${padding} ${flex} ${hover} ${text} ${border}`;
  }

  return (
    <DynamicDiv onClick={onClick} className={itemStyles()}>
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
  // const navigate = useNavigate();

  function  contStyles(): string {
    const dimensions = "w-[400px] h-full !rounded-none";
    const position = "absolute top-0 left-0";
    const flex = "flex flex-col items-center justify-start cursor-pointer";

    return `${dimensions} ${position} ${flex}`;
  }

  return (
    <DynamicDiv className={contStyles()} onMouseLeave={onMouseLeave} style={style}>
        <Beautify />
        <MenuItem label="Home" icon="🏠" onClick={() => console.log("Home clicked")} />
        <MenuItem label="Home" icon="🏠" onClick={() => console.log("Home clicked")} />
    </DynamicDiv>
  );
}