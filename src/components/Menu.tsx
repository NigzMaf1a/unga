import DynamicDiv from "../cadaver/DynamicDiv";

interface MenuProps {
  onMouseLeave: () => void;
}

export default function Menu({ onMouseLeave }: MenuProps) {
  function  contStyles(): string {
    const dimensions = "w-[400px] h-full !rounded-none";
    const bg = "bg-white";
    const position = "absolute top-0 left-0";
    const flex = "flex flex-col items-center justify-around cursor-pointer";

    return `${dimensions} ${bg} ${position} ${flex}`;
  }

  return (
    <DynamicDiv className={contStyles()} onMouseLeave={onMouseLeave}>
        Menu
    </DynamicDiv>
  );
}