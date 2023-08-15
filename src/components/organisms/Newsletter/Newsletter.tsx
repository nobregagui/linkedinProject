import React, { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import { fetchData } from "../../../utils/functions";
import DynamicTitle from "../../atoms/DynamicTitle";
import Button from "../../atoms/Button";
import DynamicSubTitle from "../../atoms/DynamicSubTitle";
import { Container, ContainerText, ContainerInput, Wrapper } from "./Newsletter.styles";
import DynamicInput from "../../atoms/DynamicInput";

export default function Newsletter() {
  const { newsletterData, setNewsletterData } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setNewsletterData,
      index: 6,
    });
  }, [setNewsletterData]);
  return (
    <Container>
      <Wrapper>
        <ContainerText>
          <DynamicTitle
            titleSizing="fontSizeLarge"
            title={newsletterData.title}
          />
          <DynamicSubTitle
            subtitleSizing="fontSizeMedium"
            subtitle={newsletterData.subtitle}
          />
        </ContainerText>
        <ContainerInput>
          <DynamicInput />
          <Button
            typeButton="primary"
            valueButton={newsletterData.buttonInformation?.valueButton}
          />
        </ContainerInput>
      </Wrapper>
    </Container>
  );
}
