import styled from "styled-components";

export const Container = styled.div`
  margin-top: 110px;
  padding: 16px;
  background: #faf8f6;
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
    justify-content: initial;
    margin: 0px;
    padding-left: 270px;
    max-width: 500px;
    margin-bottom: 37px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  overflow: auto;
  margin-top: 20px;
  gap: 25px;
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
    gap: 37px;
    margin-top: 0px;
    overflow: inherit;
  }
`;
