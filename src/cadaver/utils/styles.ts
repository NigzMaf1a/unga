type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Theme = 'dark' | 'light';

type BreakpointStyles = Record<Breakpoint, string>;

interface Styles {
    dark: string;
    light: string;
    cadaver: BreakpointStyles;
}

type LabbeledTextProps = {
    divStyles: string;
    labelStyles: string;
    textStyles: string;
    moreOne?: string;
    moreTwo?: string;
};

type LabelledInputProps = {
    divStyles: string;
    labelStyles: string;
    inputStyles: string;
    moreOne?: string;
    moreTwo?: string;
};


type ComponentStyles = {
    skeleton: () => string;
    ribz: (className?: string) => string;
    text: (className?: string) => string;
    dynamicDiv:(more?:string) => string;
    labelledText: (moreOne?:string, moreTwo?:string) => LabbeledTextProps;
    labelledInput: (moreOne?:string, moreTwo?:string) => LabelledInputProps;
    button: (more?:string) => string;
    fleshHor:(className?: string) => string;
    fleshVer:(className?: string) => string;
};

export const Cadavers: Styles = {
    dark: 'bg-gray-900 text-white',
    light: 'bg-white text-gray-900',

    cadaver: {
        sm: 'sm:w-full sm:h-1/2 sm:p-2',
        md: 'md:w-full md:h-1/2 md:p-4',
        lg: 'lg:w-3/4 lg:h-1/2 lg:p-6',
        xl: 'xl:w-2/3 xl:h-1/2 xl:p-8',
        '2xl': '2xl:w-1/2 2xl:h-1/2 2xl:p-10'
    }
};

export const resolveCadaver = (
    breakpoint: Breakpoint,
    theme: Theme = 'dark'
): string => {
    return [
        Cadavers[theme],
        'flex',
        Cadavers.cadaver[breakpoint]
    ].join(' ');
};

export const CadaverComponents: ComponentStyles = {
    skeleton: () =>{
        const flex = "flex flex-col gap-1";
        const dimensions = 'h-screen w-[100%]';
        const overflow = 'overflow-y-hidden overflow-x-hidden'; 

        return `${flex} ${dimensions} ${overflow}}`;
    },

    ribz: (className?: string) =>{

        const bg = "bg-white rounded-lg shadow-md border";
        const flex = "flex flex-col md:flex-row gap-1 p-1";
        const dimensions = 'w-[99%] mx-[0.5%] mt-[1px]';

        return `${dimensions} ${flex} ${bg} ${className || ''}`;
    },

    text: (className?: string) => {
        const text = "font-normal";
        const color = "text-dark-100";     

        return `${text} ${color} ${className || ''}`;
    },

    dynamicDiv:(more?:string) => {
        const dimensions = 'w-full p-1 grid';
        const edges = 'rounded-lg shadow-md border';
        const flex = 'flex flex-col sm:flex-row gap-1';

        const base = `${dimensions} ${flex} ${edges} bg-blue-500`;

        return more ? `${base} ${more}` : base;
    },

    labelledText: (moreOne?:string, moreTwo?:string) => {
        return {
            divStyles: 'flex flex-row gap-1',
            labelStyles: `text-sm font-semibold ${moreOne ? moreOne : ''}`,
            textStyles: `text-base ${moreTwo ? moreTwo : ''}`
        }
    },

    labelledInput: (moreOne?:string, moreTwo?:string) => {
        return {
            divStyles: 'flex flex-col gap-1',
            labelStyles: `text-sm font-semibold ${moreOne ? moreOne : ''}`,
            inputStyles: `p-2 border rounded ${moreTwo ? moreTwo : ''}`
        }
    },

    button: (more?:string) => {
        const base = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300';
        return more ? `${base} ${more}` : base;
    }, 

    fleshHor:(className?: string) => {
        const base = 'rounded grid flex flex-row';
        return className ? `${base} ${className}` : base;
    }, 

    fleshVer:(className?: string) => {
        const base = 'rounded flex grid flex-col';
        return className ? `${base} ${className}` : base;
    }
};