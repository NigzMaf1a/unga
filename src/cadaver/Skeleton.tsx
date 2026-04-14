//styles
import { CadaverComponents } from "./utils/styles";

interface SkeletonProps {
    children: React.ReactNode;
    className?: string;
}

export default function Skeleton({ children, className }: SkeletonProps) { 

  return (
    <div className={CadaverComponents.skeleton(className)}>
      {children}
    </div>
  );
}