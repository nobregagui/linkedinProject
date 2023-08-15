import { IPropsCard } from "../../../utils/interfaces";
import DynamicDescription from "../../atoms/DynamicDescription";
import DynamicTitle from "../../atoms/DynamicTitle";
import { ContainerDescription, Container } from "./CardDepartament.style";
import DynamicImage from "../../atoms/DynamicImage";

export default function CardDepartament({
  description,
  title,
  urlImage,
}: IPropsCard) {
  return (
    <Container>
      <DynamicImage urlImage={urlImage} altImage="imageCard" />
      <DynamicTitle titleSizing="fontSizeNormal" title={title} />
      <ContainerDescription>
        <DynamicDescription
          descriptionSizing="fontSizeSmall"
          description={description}
        />
      </ContainerDescription>
    </Container>
  );
}
