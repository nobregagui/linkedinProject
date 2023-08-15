import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: #fff;
  padding: 16px;
  position: relative;
  @media (min-width: 1250px) {
    justify-content: space-evenly;
    padding-top: 55px;
    flex-direction: row;
  }
`;

export const ContainerTextAndButton = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 550px;
`;

export const ContainerImageInformation = styled.div`
  margin-top: 50px;
  img {
    width: 100%;
  }
`;

