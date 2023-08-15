import {
  Container,
  ContainerLogo,
  ContainerMenu,
  ContainerMenuItems,
} from "./Footer.styles";
import { fetchData, returnFullUrl } from "../../../utils/functions";
import { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import DynamicImage from "../../atoms/DynamicImage";
import MenuFooter from "../../atoms/MenuFooter";
import DynamicSubTitle from "../../atoms/DynamicSubTitle";
import DynamicTitle from "../../atoms/DynamicTitle";

export default function Footer() {
  const { setFooterData, footerData } = useDataContext();
  useEffect(() => {
    fetchData({
      setData: setFooterData,
      index: 7,
    });
  }, [setFooterData]);
  return (
    <Container>
      <ContainerLogo>
        {footerData.imagesCard && (
          <DynamicImage
            urlImage={returnFullUrl(
              footerData.imagesCard?.data[0].attributes.url
            )}
          />
        )}
        <DynamicSubTitle
          subtitleSizing="fontSizeSmall"
          subtitle={footerData.subtitle}
        />
      </ContainerLogo>
      <ContainerMenu>
        <DynamicTitle
          title={footerData.titleFooterSection}
          titleSizing="fontSizeSmall"
        />
        <ContainerMenuItems>
          {footerData.menuSections &&
            footerData?.menuSections.map((item) => (
              <MenuFooter value={item.section} />
            ))}
        </ContainerMenuItems>
      </ContainerMenu>
      <ContainerMenu>
        <DynamicTitle
          title={footerData.titleFooterContact}
          titleSizing="fontSizeSmall"
        />
        <ContainerMenuItems>
          {footerData.menuContacts &&
            footerData?.menuContacts.map((item) => (
              <MenuFooter value={item.contact} />
            ))}
        </ContainerMenuItems>
      </ContainerMenu>
    </Container>
  );
}
