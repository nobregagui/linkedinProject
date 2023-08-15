import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: initial;
      max-width: 350px;
    min-width: 350px;
    min-height: 300px;
  @media (min-width: 1250px) {
    max-width: 545px;
    min-height: auto;

  }
`;

export const ContainerDescription = styled.div`
  max-width: 300px;
  min-width: 225px;
  @media (min-width: 1250px) {
    min-width: auto;
  }
`;
