import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: initial;
  max-width: 300px;
  min-width: 300px;
  background: var(--white, #fff);
  border: 1px solid var(--gray-200, #edeff5);
  opacity: 0.85;
  cursor: pointer;
  padding: 48px;
  :hover {
    box-shadow: 0px 96px 96px 0px rgba(177, 186, 200, 0.12);
    border: 1px solid transparent;
  }
  img {
    width: fit-content;
  }
  @media (min-width: 1250px) {
    max-width: 300px;
    min-height: auto;
  }
`;
