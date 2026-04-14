import { useEffect, useState } from "react";
import BackgroundImage from "../cadaver/BackgroundImage";
import DynamicDiv from "../cadaver/DynamicDiv";
import Text from "../cadaver/Text";

//styles
import { glowStyles } from "../scripts/data/colorStyles";

export default function SplashScreen() {

    const [glowIndex, setGlowIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlowIndex(prev => (prev + 1) % glowStyles.length);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    function textStyles(): string {
        const size = "!text-4xl";
        const pos = "absolute bottom-[10%] left-[10px]";
        const animation = "transition-all duration-500";

        return `${size} ${pos} ${animation} ${glowStyles[glowIndex]}`;
    }

    const divStyles = "flex items-center justify-center min-h-screen text-white";

    return (
        <BackgroundImage src="/bgOne.jpg">
            <DynamicDiv className={divStyles}>
                <Text 
                    text="Welcome to my portfolio!" 
                    className={textStyles()} 
                    color="green" 
                    bold 
                    ital 
                />
            </DynamicDiv>
        </BackgroundImage>
    );
}