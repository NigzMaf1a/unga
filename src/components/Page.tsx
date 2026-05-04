import Skeleton from "../cadaver/Skeleton";
import TopStrip from "./TopStrip";


interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {

  function pageStyles(more?: string): string {
    const bg = "bg-[#191970]";
    return `${bg} ${more}`;
  }    

  return (
    <Skeleton className={pageStyles(className)}>
      <TopStrip/>
      {children}
    </Skeleton>
  );
}