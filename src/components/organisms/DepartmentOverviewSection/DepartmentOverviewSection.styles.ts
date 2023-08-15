import styled from "styled-components";

export const Container = styled.div`
  margin-top: 110px;
  padding: 16px;
  @media (min-width: 1250px) {
    padding: 110px 16px;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  justify-content: center;
  @media (min-width: 1250px) {
    flex-direction: row;
    margin: 0px;
    margin-right: 90px;
    margin-bottom: 56px;
  }
`;

export const ContainerImageAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: fit-content;
  }
  gap: 32px;
  @media (min-width: 1250px) {
    max-width: 492px;
  }
`;

export const ContainerDescription = styled.div`
  @media (min-width: 1250px) {
    max-width: 468px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  overflow: auto;
  .imageCard {
    width: fit-content;
  }
  margin-top: 60px;
  padding-bottom: 30px;
  ::-webkit-scrollbar {
    background-color: #eeeeee;
    width: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #20ad96;
    border-radius: 5px;
  }
  @media (min-width: 1250px) {
    justify-content: center;
    gap: 80px;
    margin-top: 0px;
    overflow: inherit;
  }
`;
