import React from 'react';

//styles
import { CadaverComponents } from "./utils/styles";

interface DynamicDivProps {
    children: React.ReactNode;
    className?: string;
}

export default function DynamicDiv({children, className}: DynamicDivProps) {
  return (
    <div className={CadaverComponents.dynamicDiv(className)}>
        {children}
    </div>
  );
}