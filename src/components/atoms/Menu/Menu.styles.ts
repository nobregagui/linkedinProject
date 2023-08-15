import styled from "styled-components";
import { IPropsMenuHeaderItem } from "../../../utils/interfaces";

export const MenuItem = styled.li<IPropsMenuHeaderItem>`
  color: ${(props) => (props.menuItemContact ? "#ffffff" : "#4a556c")};
  align-self: center;
  text-decoration: none;
  text-align: right;
  font-family: "Kumbh Sans", sans-serif;
  font-size: ${(props) => (props.menuItemContact ? "18px" : "17px")};
  font-style: normal;
  padding: 11px 16px;
  font-weight: 600;
  border-radius: 4px;
  line-height: 24px; /* 160% */
  letter-spacing: -0.3px;
  background-color: ${(props) =>
    props.menuItemContact ? "#20AD96" : "transparent"};
  cursor: pointer;
  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const ContainerMenu = styled.ul<IPropsMenuHeaderItem>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ openMenuMobile }) =>
      openMenuMobile ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 3;
    gap: 30px;
  }
`;
