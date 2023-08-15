import React, { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import {
  Container,
  ContainerTextAndButton,
  Wrapper,
  ContainerImage,
} from "./FreeSessionOffer.styles";
import DynamicTitle from "../../atoms/DynamicTitle";
import Button from "../../atoms/Button";
import DynamicSubTitle from "../../atoms/DynamicSubTitle";
import DynamicImage from "../../atoms/DynamicImage";

export default function FreeSessionOffer() {
  const { freeOfferData, setFreeOfferData } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setFreeOfferData,
      index: 5,
    });
  }, [setFreeOfferData]);
  return (
    <Container>
      <Wrapper>
        <ContainerTextAndButton>
          <DynamicTitle
            titleSizing="fontSizeLarge"
            title={freeOfferData.title}
          />
          <DynamicSubTitle
            subtitleSizing="fontSizeMedium"
            subtitle={freeOfferData.subtitle}
          />
          <Button
            typeButton="primary"
            valueButton={freeOfferData.buttonInformation?.valueButton}
          />
        </ContainerTextAndButton>
        {freeOfferData.imagesCard && (
          <ContainerImage>
            <DynamicImage
              urlImage={returnFullUrl(
                freeOfferData.imagesCard?.data[0].attributes?.url
              )}
            />
          </ContainerImage>
        )}
      </Wrapper>
    </Container>
  );
}
