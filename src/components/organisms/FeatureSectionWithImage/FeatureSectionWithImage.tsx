import React, { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import {
  Container,
  ContainerImageIcon,
  ContainerImageInformation,
  ContainerTextAndButton,
  ContainerTextAndImage,
  ImageIcon,
} from "./FeatureSectionWithImage.styles";
import FeatureCard from "../../molecules/FeatureCard";
import ImageCardWithOverlay from "../../atoms/ImageCardWithOverlay";

export default function FeatureSectionWithImage() {
  const { featureSectionData, setFeatureSectionData } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setFeatureSectionData,
      index: 0,
    });
  }, [setFeatureSectionData]);
  return (
    <Container>
      <ContainerImageIcon>
        {featureSectionData.iconTop && (
          <ImageIcon
            src={returnFullUrl(featureSectionData.iconTop?.data.attributes.url)}
            alt=""
          />
        )}
      </ContainerImageIcon>
      <ContainerTextAndImage>
        <ContainerTextAndButton>
          <FeatureCard
            title={featureSectionData.title}
            subtitle={featureSectionData.subtitle}
            description={featureSectionData.description}
            buttonInformation={{
              typeButton: "primary",
              valueButton: featureSectionData.buttonInformation?.valueButton,
            }}
          />
        </ContainerTextAndButton>
        <ContainerImageInformation>
          {featureSectionData?.imageInformation?.data.attributes && (
            <ImageCardWithOverlay
              titleSizing="fontSizeNormal"
              informationImage={{
                icon: returnFullUrl(
                  featureSectionData.imagesCard?.data[0].attributes.url
                ),
                title: featureSectionData?.informationImage?.title,
                subtitle: featureSectionData?.informationImage?.subtitle,
              }}
              imageInformation={{
                data: {
                  attributes: {
                    url: returnFullUrl(
                      featureSectionData.imageInformation.data.attributes.url
                    ),
                  },
                },
              }}
            />
          )}
        </ContainerImageInformation>
      </ContainerTextAndImage>
    </Container>
  );
}
