import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  background: #faf8f6;
  padding-top: 25px;
  position: relative;
  @media (min-width: 1250px) {
    justify-content: space-evenly;
    padding-top: 55px;
  }
`;

export const ContainerTextAndImage = styled.div`
  flex-direction: column;
  gap: 90px;
  display: flex;
  padding: 16px;
  @media (min-width: 1250px) {
    flex-direction: row;
    padding: 26px;
    gap: 55px;
    justify-content: space-evenly;
  }
`;

export const ContainerTextAndButton = styled.div`
  padding-top: 64px;
`;

export const ContainerImageInformation = styled.div`
  padding: 10px;
  img {
    width: 100%;
  }
  .iconOverlay {
    width: fit-content;
  }
`;

export const ContainerImageIcon = styled.div`
  width: 100%;
  text-align: start;
  position: absolute;
  top: 0px;
`;

export const ImageIcon = styled.img`
  padding: 55px 15px;
  @media (min-width: 1250px) {
    padding: 55px 34px;
  }
`;
