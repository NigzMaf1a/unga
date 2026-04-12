import { useEffect, useState } from "react";


type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

function sizeFinder():Breakpoints{
    const width = window.innerWidth;

    if(width < 640) return 'sm';
    else if(width >= 640 && width < 768) return 'md';
    else if(width >= 768 && width < 1024) return 'lg';
    else if(width >= 1024 && width < 1280) return 'xl';
    else return '2xl';
}

export function useBreakpoint():Breakpoints{
    const [breakpoint, setBreakpoint] = useState<Breakpoints>(sizeFinder());

    useEffect(()=>{
        function handleResize(){
            setBreakpoint(sizeFinder());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return breakpoint;
}