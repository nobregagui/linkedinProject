import { IPropsImageCardWithOverlay } from "../../../utils/interfaces";
import DynamicImage from "../DynamicImage";
import DynamicSubTitle from "../DynamicSubTitle";
import DynamicTitle from "../DynamicTitle";
import {
  ContainerImage,
  InformationImage,
  ContainerIconAndText,
  ContainerTitleAndSubtitle,
} from "./ImageCardWithOverlay.styles";

export default function ImageCardWithOverlay({
  imageInformation,
  informationImage,
  color,
  typeCardOverlay,
  titleSizing,
}: IPropsImageCardWithOverlay) {
  return (
    <ContainerImage>
      <InformationImage>
        <ContainerIconAndText typeCardOverlay={typeCardOverlay}>
          {informationImage?.icon && (
            <DynamicImage
              altImage="iconOverlay"
              urlImage={informationImage?.icon}
            />
          )}
          <ContainerTitleAndSubtitle>
            <DynamicTitle
              titleSizing={titleSizing}
              title={informationImage?.title}
              color={color}
            />
            <DynamicSubTitle
              subtitleSizing="fontSizeSubSmall"
              subtitle={informationImage?.subtitle}
            />
          </ContainerTitleAndSubtitle>
        </ContainerIconAndText>
      </InformationImage>
      {imageInformation?.data && (
        <DynamicImage urlImage={imageInformation?.data.attributes.url} />
      )}
    </ContainerImage>
  );
}
