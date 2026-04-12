import React from 'react';

//styles
import { CadaverComponents } from './utils/styles';

interface FleshHorProps{
    children: React.ReactNode;
    className?:string;
}

export default function FleshHor({children, className}:FleshHorProps) {
  return (
    <div className={CadaverComponents.fleshHor(className)}>
        {children}
    </div>
  )
} 