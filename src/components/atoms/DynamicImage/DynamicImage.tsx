import { IPropsDynamicImage } from "../../../utils/interfaces";
import { Image } from "./DynamicImage.styles";

export default function DynamicImage({
  urlImage,
  altImage,
}: IPropsDynamicImage) {
  return <Image src={urlImage} className={altImage} alt={altImage} />;
}
