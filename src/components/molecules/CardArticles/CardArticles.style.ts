import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: initial;
  max-width: 300px;
  min-width: 300px;
  border: 1px solid #edeff5;
  background: #fff;
  cursor: pointer;
  img {
    width: 100%;
  }
  @media (min-width: 1250px) {
    max-width: 356px;
    min-height: auto;
  }
`;

export const ContainerText = styled.div`
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 1250px) {
    min-width: auto;
  }
`;
