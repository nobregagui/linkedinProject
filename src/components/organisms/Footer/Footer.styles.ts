import styled from "styled-components";

export const Container = styled.div`
  margin-top: 110px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1250px) {
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: fit-content;
  }
  gap: 32px;
  @media (min-width: 1250px) {
    max-width: 320px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
