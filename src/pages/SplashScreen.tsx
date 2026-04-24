import { useEffect, useState } from "react";
import BackgroundImage from "../cadaver/BackgroundImage";
import Text from "../cadaver/Text";
import Skeleton from "../cadaver/Skeleton";

//styles
import { glowStyles } from "../scripts/data/colorStyles";
import DynamicDiv from "../cadaver/DynamicDiv";

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

    return (
        <BackgroundImage src="/bgOne.jpg">
            <Skeleton>
                <DynamicDiv>
                    <Text 
                        text="Welcome to my portfolio!" 
                        className={textStyles()} 
                        color="green" 
                        bold 
                        ital 
                    />
                </DynamicDiv>   
            </Skeleton>
        </BackgroundImage>
    );
}