//styles
import { CadaverComponents } from "./utils/styles";

type TextSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type TextColor = 'blue' | 'red' | 'green' | 'yellow' | 'black' | 'gray' | 'white';
type Bold = true;
type Ital = true;

interface TextProps{
    text:string;
    size?:TextSize;
    color?: TextColor;
    bold?: Bold;
    ital?:Ital;

    className?: string;
}

export default function Text({ text, size, bold, className, ital, color }: TextProps) {
    function textSize():string{

        if(size) switch(size){
            case 'sm':
                return 'text-sm';
            case 'md':
                return 'text-md';
            case 'lg':
                return 'text-lg';
            case 'xl':
                return 'text-xl';
            case '2xl':
                return 'text-2xl';
            default:
                return 'text-base';
        } else return 'text-base';
    }

    function textColor():string{

        if(color) switch(color){
            case 'blue':
                return 'text-blue-500';
            case 'red':
                return 'text-red-500';
            case 'green':
                return 'text-green-500';
            case 'yellow':
                return 'text-yellow-500';
            case 'black':
                return 'text-black';
            case 'gray':
                return 'text-gray-500';
            case 'white':
                return 'text-white';
            default:
                return 'text-gray-800';
        } else return 'text-gray-800';
    }


    function textBold():string{
        return bold ? '!font-bold' : 'font-normal';  
    }   
    
    function textItal():string{
        return ital ? '!italic' : 'not-italic';
    }

    const classes = `${textSize()} ${textBold()} ${textItal()} ${textColor()} ${className || ''}`;

    return (
        <p className={CadaverComponents.text(classes)}>{text}</p>
    );
}