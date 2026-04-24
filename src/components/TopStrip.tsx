import { useEffect, useState } from "react";

// components
import FleshHor from "../cadaver/FleshHor";
import Menu from "./Menu";

// data
import { techColors } from "../scripts/data/colors";
import DynamicDiv from "../cadaver/DynamicDiv";

interface MenuButtonProps {
  onClick: () => void;
  onMouseEnter?: () => void;
  className?: string;
}

function Bar(){
  function contStyles(): string {
    const dimensions = "w-[30px] h-[5px] !rounded-none border-outline";
    const bg = "bg-[#000000]";
    return `${dimensions} ${bg}`;
  }

  return (
    <DynamicDiv className={contStyles()}>
      <></>
    </DynamicDiv>
  );
}

function MenuButton({ onClick, className, onMouseEnter }: MenuButtonProps) {
  function menuStyles(): string {
    const dimensions = "w-[50px] h-[40px] !rounded-none";
    const bg = "bg-white";
    const position = "absolute top-6 left-4";
    const flex = "flex flex-col items-center justify-around cursor-pointer";
    return `${dimensions} ${bg} ${position} ${flex} ${className || ''}`;
  }

  return (
    <DynamicDiv onClick={onClick} onMouseEnter={onMouseEnter} className={menuStyles()}>
      <Bar />
      <Bar />
      <Bar />
    </DynamicDiv>
  );
}

export default function TopStrip() {
  const flatColors = Object.values(techColors).flat(); // 🔥 convert object → array

  const [colorIndex, setColorIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % flatColors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [flatColors.length]);

  const bgColor = flatColors[colorIndex];

  function topStripStyles(): string {
    const dimensions = "h-[100px] grid-cols-12";
    const flex = "flex items-center justify-center";

    return `${dimensions} ${flex} transition-all duration-700`;
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>

    <FleshHor
      className={topStripStyles()}
      style={{
        backgroundColor: bgColor, // SAFE runtime styling
      }}
    >
       { !menuOpen && <MenuButton onClick={() => toggleMenu()} onMouseEnter={() => toggleMenu()} /> }
    </FleshHor>

    { menuOpen && <Menu onMouseLeave={() => toggleMenu()} style={{ backgroundColor: bgColor }} /> }

    </>
  );
}