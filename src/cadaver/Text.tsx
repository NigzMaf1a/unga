//styles
import { CadaverComponents } from "./utils/styles";

interface TextProps{
    text:string;
    className?: string;
}

export default function Text({ text, className }: TextProps) {
  return (
    <p className={CadaverComponents.text(className)}>{text}</p>
  );
}