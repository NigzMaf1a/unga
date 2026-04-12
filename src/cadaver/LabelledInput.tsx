//styles
import { CadaverComponents } from "./utils/styles";

interface LabelledInputProps {
    label: string;
    inputType: string;
    onChange: (value: string) => void;
    moreLabelStyles?: string;
    moreInputStyles?: string;
}

export default function LabelledInput({ label, inputType, onChange, moreLabelStyles, moreInputStyles }: LabelledInputProps) {
  return (
    <div className={CadaverComponents.labelledInput().divStyles}>
      <label className={CadaverComponents.labelledInput(undefined, moreLabelStyles).labelStyles}>
        {label}
      </label>
      <input
        type={inputType}
        onChange={(e) => onChange(e.target.value)}
        className={CadaverComponents.labelledInput(undefined, moreInputStyles).inputStyles}
      />
    </div>
  );
}