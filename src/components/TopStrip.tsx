import FleshHor from "../cadaver/FleshHor";

export default function TopStrip() {
  function topStripStyles():string{
    const dimensions = "h-16 w-full mb-4";
    const flex = "items-center justify-center";
    const bg = "bg-green-500";
    
    return `${dimensions} ${flex} ${bg}`;
  }
  
  return (
      <FleshHor className={topStripStyles()} >
        <></>
      </FleshHor>    
  );
}