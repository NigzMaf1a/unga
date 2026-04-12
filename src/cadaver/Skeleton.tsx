//styles
import { CadaverComponents } from "./utils/styles";

interface SkeletonProps {
    children: React.ReactNode;
}

export default function Skeleton({ children }: SkeletonProps) { 

  return (
    <div className={CadaverComponents.skeleton()}>
      {children}
    </div>
  );
}