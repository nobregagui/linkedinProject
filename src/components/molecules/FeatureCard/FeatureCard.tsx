import { IPropsFeatureSectionWithImage } from "../../../utils/interfaces";
import DynamicSubTitle from "../../atoms/DynamicSubTitle";
import DynamicDescription from "../../atoms/DynamicDescription";
import DynamicTitle from "../../atoms/DynamicTitle";
import { ContainerTexts } from "./FeatureCard.style";
import Button from "../../atoms/Button";

export default function FeatureCard({
  description,
  subtitle,
  buttonInformation,
  title,
}: IPropsFeatureSectionWithImage) {
  return (
    <ContainerTexts>
      <DynamicSubTitle subtitleSizing="fontSizeSmall" subtitle={title} />
      <DynamicTitle titleSizing="fontSizeExtraLarge" title={subtitle} />
      {description && (
        <DynamicDescription
          descriptionSizing="fontSizeMedium"
          description={description}
        />
      )}
      {buttonInformation && (
        <Button
          typeButton={buttonInformation?.typeButton}
          valueButton={buttonInformation?.valueButton}
        />
      )}
    </ContainerTexts>
  );
}
