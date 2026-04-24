import React from 'react';

//styles
import { CadaverComponents } from "./utils/styles";

interface DynamicDivProps {
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export default function DynamicDiv({children, onMouseEnter, onMouseLeave, onClick, className, style}: DynamicDivProps) {
  return (
    <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={CadaverComponents.dynamicDiv(className)} style={style}>
        {children}
    </div>
  );
}