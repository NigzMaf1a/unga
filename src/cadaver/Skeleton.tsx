import { useEffect, useState } from "react";

interface SkeletonProps {
    children: React.ReactNode;
}

export default function Skeleton({ children }: SkeletonProps) {
    const [mode, setMode] = useState('light');

    useEffect(()=>{
        (async ()=>{
            const storedMode = localStorage.getItem('mode');
            if(storedMode){
                await setMode(storedMode);
            }            
        })();
    }, []);
    
    function modeStyles():string{
        if(mode === 'dark') return 'bg-gray-900 text-white';
        else return 'bg-white text-gray-900';
    }

    function divStyles():string{
        const flex = "flex flex-col gap-1";
        const dimensions = 'h-screen w-screen';
        const overflow = 'overflow-y-hidden overflow-x-hidden';

        return `${flex} ${dimensions} ${overflow} ${modeStyles()}`;
    } 

  return (
    <div className={divStyles()}>
      {children}
    </div>
  );
}