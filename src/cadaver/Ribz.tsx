//styles
import { CadaverComponents } from "./utils/styles";

interface RibzProps{
    children: React.ReactNode;
    className?: string;
}

export default function Ribz({children, className}:RibzProps){

    return (
        <div className={CadaverComponents.ribz(className)}>
            {children}
        </div>
    );
}