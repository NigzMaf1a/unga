//styles
import { CadaverComponents } from "./utils/styles";

interface ImageProps{
    src: string;
    alt?: string;
    className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <img src={src} alt={alt} className={CadaverComponents.image(className)} />
  );
}