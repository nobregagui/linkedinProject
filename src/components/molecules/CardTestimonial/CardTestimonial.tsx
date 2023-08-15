import { IPropsCard } from "../../../utils/interfaces";
import DynamicDescription from "../../atoms/DynamicDescription";
import DynamicTitle from "../../atoms/DynamicTitle";
import { Container } from "./CardTestimonial.style";
import DynamicImage from "../../atoms/DynamicImage";

export default function CardTestimonial({
  description,
  title,
  urlImage,
  urlImageAvaliation,
}: IPropsCard) {
  return (
    <Container>
      <DynamicTitle titleSizing="fontSizeNormal" title={title} />
      <DynamicDescription
        descriptionSizing="fontSizeSmall"
        description={description}
      />
      <DynamicImage urlImage={urlImage} altImage="imageCard" />
      <div>
        {urlImageAvaliation &&
          [...Array(5)].map((item, index) => (
            <DynamicImage
              key={index}
              urlImage={urlImageAvaliation}
              altImage="imageCard"
            />
          ))}
      </div>
    </Container>
  );
}
