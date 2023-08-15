import {
  Container,
  ContainerTitle,
  ContainerCard,
  ContainerButton,
} from "./FeatureSeactionArticles.styles";
import DynamicTitle from "../../atoms/DynamicTitle";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import React from "react";
import CardArticles from "../../molecules/CardArticles";
import Button from "../../atoms/Button";

export default function FeatureSeactionArticles() {
  const { setArticles, articles } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setArticles,
      index: 3,
    });
  }, [setArticles]);
  return (
    <Container>
      <ContainerTitle>
        <DynamicTitle titleSizing="fontSizeLarge" title={articles.title} />
      </ContainerTitle>
      <ContainerCard>
        {articles.card?.map((item, index) => (
          <React.Fragment key={index}>
            {articles.imagesCard?.data?.[index]?.attributes?.url && (
              <CardArticles
                key={articles.imagesCard.data[index].attributes.url}
                urlImage={returnFullUrl(
                  articles.imagesCard.data[index].attributes.url
                )}
                title={item.title}
                description={item.description}
              />
            )}
          </React.Fragment>
        ))}
      </ContainerCard>
      <ContainerButton>
        <Button
          typeButton={"primary"}
          valueButton={articles.buttonInformation?.valueButton}
        />
      </ContainerButton>
    </Container>
  );
}
