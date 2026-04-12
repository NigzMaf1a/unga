//styles
import { CadaverComponents } from "./utils/styles";

interface ButtonProps {
    label:string;
    onClick: () => void;
    className?: string;
}


export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button className={CadaverComponents.button(className)} onClick={onClick}>
      {label}
    </button>
  )
}