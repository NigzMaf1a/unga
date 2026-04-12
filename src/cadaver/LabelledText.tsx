//styles
import { CadaverComponents } from "./utils/styles";

interface LabbeledTextProps {
    label:string;
    text:string;
    moreLabelStyles?: string;
    moreTextStyles?: string;
}

export default function LabelledText({label, text, moreLabelStyles, moreTextStyles}: LabbeledTextProps) {
  return (
    <div className={CadaverComponents.labelledText().divStyles}>
        <p className={CadaverComponents.labelledText(moreLabelStyles).labelStyles}>{label}</p>
        <p className={CadaverComponents.labelledText(undefined, moreTextStyles).textStyles}>{text}</p>
    </div>
  );
}