import styled from "styled-components";

export const Container = styled.div`
  margin-top: 110px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1250px) {
    padding: 96px;
    margin-top: 0px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: fit-content;
  }
  gap: 32px;
  align-self: center;
  text-align: center;
  @media (min-width: 1250px) {
    max-width: 680px;
    text-align: center;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  overflow: auto;
  gap: 40px;
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
    margin-top: 0px;
    overflow: inherit;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
