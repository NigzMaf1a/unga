//styles
import { CadaverComponents } from "./utils/styles";

interface RibzProps{
    children: React.ReactNode;
}

export default function Ribz({children}:RibzProps){

    return (
        <div className={CadaverComponents.ribz()}>
            {children}
        </div>
    );
}