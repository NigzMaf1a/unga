import React from "react";

// styles
import { CadaverComponents } from "./utils/styles";

interface FleshHorProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  style?: React.CSSProperties; // 🔥 NEW optional style prop
}

export default function FleshHor({
  children,
  className,
  backgroundImage,
  style
}: FleshHorProps) {
  return (
    <div
      className={CadaverComponents.fleshHor(className)}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,

        ...style // 🔥 allow external styles to override / extend
      }}
    >
      {children}
    </div>
  );
}