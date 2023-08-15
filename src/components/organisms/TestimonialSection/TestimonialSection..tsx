import {
  Container,
  ContainerTexts,
  ContainerCard,
} from "./TestimonialSection.styles";
import DynamicTitle from "../../atoms/DynamicTitle";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import CardTestimonial from "../../molecules/CardTestimonial";
import React from "react";

export default function TestimonialSection() {
  const { setTestimonials, testimonials } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setTestimonials,
      index: 2,
    });
  }, [setTestimonials]);
  return (
    <Container>
      <ContainerTexts>
        <DynamicTitle titleSizing="fontSizeLarge" title={testimonials.title} />
      </ContainerTexts>
      <ContainerCard>
        {testimonials.card?.map((item, index) => (
          <React.Fragment key={index}>
            {testimonials.imagesCard?.data?.[index]?.attributes?.url &&
              testimonials.imageAvaliation && (
                <CardTestimonial
                  key={testimonials.imagesCard.data[index].attributes.url}
                  urlImageAvaliation={returnFullUrl(
                    testimonials.imageAvaliation.data[index].attributes.url
                  )}
                  title={item.title}
                  description={item.description}
                  urlImage={returnFullUrl(
                    testimonials.imagesCard.data[index].attributes.url
                  )}
                />
              )}
          </React.Fragment>
        ))}
      </ContainerCard>
    </Container>
  );
}
