import { useState } from "react";
import DynamicDiv from "../cadaver/DynamicDiv";
import Text from "../cadaver/Text";

interface Details {
    languages:string[];
    frameworks:string[];
}

export interface ProjectProps {
  name: string;
  description: string;
  link: string;
  details:Details;
}

interface Props{
    project: ProjectProps;
    currentIndex:number;
    index:number;
    onClick:() => void;
}

export default function Project({ project, onClick, index, currentIndex }: Props){
    const [clicked, setClicked] = useState<boolean>(false);
    const { name, description, link } = project;

    function projectStyles():string{
        const dimensions = 'w-full bg-white my-1';
        const height = clicked === false ? 'h-[50px]' : 'h-[300px]';
        const flex = 'flex flex-col gap-3';
        const borders = clicked === true && 'border border-green-300 border-2';

        return `${dimensions} ${height} ${flex} ${borders}`;
    }

    function itemStyles():string{ 
        const flex = 'flex flex-row items-center justify-between';
        const dimensions = 'mb-3 pt-2 mr-4';
        const bg = 'bg-[#228B22]';

        return `${flex} ${dimensions} ${bg}`;
    }

    function detailStyles():string{
        const dimensions = 'w-full !rounded-none h-full';
        const flex = 'flex flex-col grow';
        const bg = 'bg-white';
        const padding = 'mx-auto';

        return `${dimensions} ${flex} ${bg} ${padding}`;
    }

    function linkSectionStyles():string{
        const dimensions = 'w-full h-[50px] mt-auto';
        const flex = 'flex justify-center items-center';
        const text = 'text-blue-900 font-bold';
        

        return `${dimensions} ${flex} ${text}`;
    }

    function projectNameStyles():string{
        const position = 'ml-4';
        const color = 'text-white';

        return `${position} ${color}`;
    }

    function descriptionStyles():string{
        const dimensions = 'w-full h-full';
        const padding = 'p-4';
        const text = 'text-sm text-gray-700';

        return `${dimensions} ${padding} ${text}`;
    }

    function detailPenStyles(){
        const text = 'text-white text-sm';
        const flexRows = 'flex flex-row gap-1';

        const base = `${text} ${flexRows}`;

        //body styles
        const flex = 'flex flex-col';

        return {
            body:`${flex}`,
            rowOne:`${base}`,
            rowTwo:`${base}`
        };
    }


    return (
        <>
            <DynamicDiv onClick={() => {
                                            onClick();
                                            setClicked(true);
                                        }} 

                        onMouseLeave={() => {
                            setClicked(false);
                        }}

                        className={projectStyles()}
            >
                {
                    clicked === false ? (                
                    <DynamicDiv className={itemStyles()}>

                        <DynamicDiv className={projectNameStyles()}>{name}</DynamicDiv>

                        {                
                            <DynamicDiv className={detailPenStyles().body}>

                                { project.details.languages.length > 0 && 
                                    <DynamicDiv className={detailPenStyles().rowOne}>
                                        <Text color="white" text="Languages:"/>
                                        { project.details.languages.map((l) => <Text color="white" text={`${l}, `}/>) }                                
                                    </DynamicDiv>
                                }

                                { project.details.frameworks.length > 0 && 
                                    <DynamicDiv className={detailPenStyles().rowTwo}>
                                        <Text color="white" text="Frameworks:"/>
                                        { project.details.frameworks.map((f) => <Text color="white" text={`${f}, `}/>) }
                                    </DynamicDiv>
                                }

                            </DynamicDiv>                    
                        }
                    </DynamicDiv> ) : (
                        <DynamicDiv className="flex-col h-full my-2 rounded! w-full">
                            {
                                currentIndex === index && 
                                <DynamicDiv className={detailStyles()}>
                                    <DynamicDiv className={descriptionStyles()}>{description}</DynamicDiv>
                                    <DynamicDiv className={linkSectionStyles()}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            view
                                        </a>
                                    </DynamicDiv>
                                </DynamicDiv>                    
                            }                            
                        </DynamicDiv>
                    )                  
                }
            </DynamicDiv>
        </>
    );
}