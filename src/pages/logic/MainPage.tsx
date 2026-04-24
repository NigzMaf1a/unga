import { useEffect, useState } from "react";

//components
import Skeleton from "../../cadaver/Skeleton";

//pages
import SplashScreen from "../SplashScreen";
import About from "../about";

export default function MainPage() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 5000);

    // cleanup (important, avoids memory leaks)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Skeleton>
      {showAbout ? <About /> : <SplashScreen />}
    </Skeleton>
  );
}