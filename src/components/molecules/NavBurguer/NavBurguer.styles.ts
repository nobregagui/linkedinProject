import styled from "styled-components";
import { IPropsMenuHeaderItem } from "../../../utils/interfaces";

export const StyledBurger = styled.div<IPropsMenuHeaderItem>`
  width: 2rem;
  height: 2rem;
  position: ${({ openMenuMobile }) => (openMenuMobile ? "fixed" : "initial")};
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ openMenuMobile }) =>
      openMenuMobile ? "#fff" : "#0d2538"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ openMenuMobile }) =>
        openMenuMobile ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ openMenuMobile }) =>
        openMenuMobile ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ openMenuMobile }) => (openMenuMobile ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ openMenuMobile }) =>
        openMenuMobile ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
