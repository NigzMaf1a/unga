import Skeleton from "../cadaver/Skeleton";
import Ribz from "../cadaver/Ribz";
import Text from "../cadaver/Text";

export default function About() {
  function textStyles():string{
    return "text-green-800";
  }

  return (
    <Skeleton>
      <Ribz className="h-full">
        <Text text="Welcome to the About Page!" className={textStyles()} />
        <Text text="Welcome to the About Page!" className={textStyles()} />
        <Text text="Welcome to the About Page!" className={textStyles()} />
      </Ribz>
    </Skeleton>
  )
}