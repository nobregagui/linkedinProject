import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: #fff;
  padding: 16px;
  position: relative;
  @media (min-width: 1250px) {
    justify-content: space-evenly;
    padding-top: 155px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  border-radius: 24px;
  background: #faf8f6;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  display: flex;
  flex-direction: column;
  @media (min-width: 1250px) {
    flex-direction: row;
  }
`;

export const ContainerTextAndButton = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 550px;
  margin-bottom: 30px;
  @media (min-width: 1250px) {
    margin-bottom: 0px;
    padding: 64px 0px 64px 64px;
  }
`;

export const ContainerImage = styled.div`
  img {
    width: 100%;
  }
  @media (min-width: 1250px) {
    padding-top: 48px;
  }
`;
