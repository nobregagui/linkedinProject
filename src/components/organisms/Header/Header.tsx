// Header.tsx
import React, { useEffect } from "react";
import { Container, ContainerMenu } from "./Header.styles";
import { fetchDataHeader, returnFullUrl } from "../../../utils/functions";
import NavBurguer from "../../molecules/NavBurguer";
import { useDataContext } from "../../../context/DataContext";
import DynamicImage from "../../atoms/DynamicImage";

const Header: React.FC = () => {
  const { setHeaderLogo, headerLogo } = useDataContext();
  useEffect(() => {
    fetchDataHeader({
      setImageLogo: setHeaderLogo,
    });
  }, [setHeaderLogo]);
  return (
    <Container>
      <DynamicImage urlImage={returnFullUrl(headerLogo)} />
      <ContainerMenu>
        <NavBurguer />
      </ContainerMenu>
    </Container>
  );
};

export default Header;
