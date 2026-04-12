import { useState } from "react";

/* =========================
   🔷 TYPES (Design Tokens)
========================= */

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Theme = 'dark' | 'light';

type BreakpointStyles = Record<Breakpoint, string>;

interface Styles {
    dark: string;
    light: string;
    cadaver: BreakpointStyles;
}

type ComponentStyles = {
    skeleton: () => string;
    ribz: () => string;
};

/* =========================
   🔷 STYLE TOKENS
========================= */

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

/* =========================
   🔷 STYLE ENGINE (THE UPGRADE)
   replaces class-based logic
========================= */

export const resolveCadaver = (
    breakpoint: Breakpoint,
    theme: Theme = 'dark'
): string => {
    return [
        Cadavers[theme],
        'flex', // base layout behavior (extend anytime)
        Cadavers.cadaver[breakpoint]
    ].join(' ');
};

/* =========================
   🔷 COMPONENT STYLE SYSTEM
========================= */

export const CadaverComponents: ComponentStyles = {
    skeleton: () =>
        'flex flex-col gap-1 h-screen w-screen overflow-hidden',

    ribz: () =>
        'w-full h-1/2 mx-1 bg-green-700'
};

/* =========================
   🔷 OPTIONAL: HOOK USAGE READY
========================= */

export const useCadaverStyles = (
    breakpoint: Breakpoint,
    theme: Theme = 'dark'
) => {
    const [bp] = useState<Breakpoint>(breakpoint);
    const [th] = useState<Theme>(theme);

    return {
        root: resolveCadaver(bp, th),
        skeleton: CadaverComponents.skeleton(),
        ribz: CadaverComponents.ribz()
    };
};