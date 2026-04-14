import { useEffect, useState } from "react";

// components
import FleshHor from "../cadaver/FleshHor";

// data
import { techColors } from "../scripts/data/colors";

export default function TopStrip() {
  const flatColors = Object.values(techColors).flat(); // 🔥 convert object → array

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % flatColors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [flatColors.length]);

  const bgColor = flatColors[colorIndex];

  function topStripStyles(): string {
    const dimensions = "h-[100px] grid-cols-12 mb-4";
    const flex = "flex items-center justify-center";

    return `${dimensions} ${flex} transition-all duration-700`;
  }

  return (
    <FleshHor
      className={topStripStyles()}
      style={{
        backgroundColor: bgColor, // ✅ SAFE runtime styling
      }}
    >
      <>Nigel</>
    </FleshHor>
  );
}