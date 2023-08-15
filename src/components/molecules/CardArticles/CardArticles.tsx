import { IPropsCard } from "../../../utils/interfaces";
import DynamicDescription from "../../atoms/DynamicDescription";
import DynamicTitle from "../../atoms/DynamicTitle";
import DynamicImage from "../../atoms/DynamicImage";
import { Container, ContainerText } from "./CardArticles.style";

export default function CardArticles({
  description,
  title,
  urlImage,
}: IPropsCard) {
  return (
    <Container>
      <DynamicImage urlImage={urlImage} altImage="imageCard" />
      <ContainerText>
        <DynamicTitle titleSizing="fontSizeNormal" title={title} />
        <DynamicDescription
          descriptionSizing="fontSizeSmall"
          description={description}
        />
      </ContainerText>
    </Container>
  );
}
