import React from 'react';

//styles
import { CadaverComponents } from './utils/styles';

interface FleshVerProps{
    children: React.ReactNode;
    className?:string;
}

function FleshVer({children, className}:FleshVerProps) {
  return (
    <div className={CadaverComponents.fleshVer(className)}>
      {children}
    </div>
  )
}

export default FleshVer