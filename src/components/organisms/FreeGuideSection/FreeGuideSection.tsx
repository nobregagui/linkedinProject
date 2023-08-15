import React, { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import {
  Container,
  ContainerImageInformation,
  ContainerTextAndButton,
} from "./FreeGuideSection.styles";
import DynamicTitle from "../../atoms/DynamicTitle";
import DynamicDescription from "../../atoms/DynamicDescription";
import Button from "../../atoms/Button";
import ImageCardWithOverlay from "../../atoms/ImageCardWithOverlay";

export default function FreeGuideSection() {
  const { freeGuideData, setFreeGuideData } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setFreeGuideData,
      index: 4,
    });
  }, [setFreeGuideData]);
  return (
    <Container>
      <ContainerTextAndButton>
        <DynamicTitle titleSizing="fontSizeLarge" title={freeGuideData.title} />
        <DynamicDescription
          descriptionSizing={"fontSizeMedium"}
          description={freeGuideData.description}
        />
        <Button
          typeButton="primary"
          valueButton={freeGuideData.buttonInformation?.valueButton}
        />
      </ContainerTextAndButton>

      <ContainerImageInformation>
        {freeGuideData?.imageInformation?.data.attributes &&
          freeGuideData?.informationImage && (
            <ImageCardWithOverlay
              informationImage={{
                title: freeGuideData?.informationImage.title,
                subtitle: freeGuideData?.informationImage.subtitle,
              }}
              color="secondary"
              typeCardOverlay="secondary"
              titleSizing="fontSizeSubSmall"
              imageInformation={{
                data: {
                  attributes: {
                    url: returnFullUrl(
                      freeGuideData.imageInformation.data.attributes?.url
                    ),
                  },
                },
              }}
            />
          )}
      </ContainerImageInformation>
    </Container>
  );
}
