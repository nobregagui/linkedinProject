import {
  Container,
  ContainerTexts,
  ContainerDescription,
  ContainerImageAndTitle,
  ContainerCard,
} from "./DepartmentOverviewSection.styles";
import DynamicImage from "../../atoms/DynamicImage";
import DynamicTitle from "../../atoms/DynamicTitle";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import DynamicDescription from "../../atoms/DynamicDescription";
import React from "react";
import CardDepartament from "../../molecules/CardDepartament";

export default function DepartmentOverviewSection() {
  const { setDepartmentData, departmentData } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setDepartmentData,
      index: 1,
    });
  }, [setDepartmentData]);

  return (
    <Container>
      <ContainerTexts>
        <ContainerImageAndTitle>
          {departmentData.iconTop && (
            <DynamicImage
              urlImage={returnFullUrl(
                departmentData.iconTop?.data.attributes.url
              )}
            />
          )}

          <DynamicTitle
            titleSizing="fontSizeLarge"
            title={departmentData.title}
          />
        </ContainerImageAndTitle>
        <ContainerDescription>
          <DynamicDescription
            description={departmentData.description}
            descriptionSizing={"fontSizeMedium"}
          />
        </ContainerDescription>
      </ContainerTexts>
      <ContainerCard>
        {departmentData.card?.map((item, index) => (
          <React.Fragment key={index}>
            {departmentData.imagesCard?.data?.[index]?.attributes?.url && (
              <CardDepartament
                key={departmentData.imagesCard.data[index].attributes.url}
                urlImage={returnFullUrl(
                  departmentData.imagesCard.data[index].attributes.url
                )}
                title={item.title}
                description={item.description}
              />
            )}
          </React.Fragment>
        ))}
      </ContainerCard>
    </Container>
  );
}
