import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: #fff;
  padding: 16px 0px;
  position: relative;
  @media (min-width: 1250px) {
    justify-content: space-evenly;
    padding-top: 155px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  background: #faf8f6;
  padding: 48px;
  width: auto;
  flex-direction: column;
  @media (min-width: 1250px) {
    margin-bottom: 0px;
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 30px;
  @media (min-width: 1250px) {
    margin-bottom: 0px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  a,
  input {
    width: 100%;
  }
  @media (min-width: 1250px) {
    flex-direction: row;
  }
`;
