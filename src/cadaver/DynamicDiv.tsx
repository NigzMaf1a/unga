import React from 'react';

//styles
import { CadaverComponents } from "./utils/styles";

interface DynamicDivProps {
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
}

export default function DynamicDiv({children, onMouseEnter, onMouseLeave, onClick, className}: DynamicDivProps) {
  return (
    <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={CadaverComponents.dynamicDiv(className)}>
        {children}
    </div>
  );
}