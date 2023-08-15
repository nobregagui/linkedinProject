import styled from "styled-components";
import { IPropsImageCardWithOverlay } from "../../../utils/interfaces";

export const ContainerImage = styled.div`
  position: relative;
`;

export const InformationImage = styled.div``;

export const ContainerIconAndText = styled.div<IPropsImageCardWithOverlay>`
  display: inline-flex;
  padding: ${(props) =>
    (props.typeCardOverlay === "primary" && "24px") ||
    (props.typeCardOverlay === "secondary" && "0px") ||
    "24px"};
  align-items: flex-start;
  gap: 15px;
  position: absolute;
  left: ${(props) =>
    (props.typeCardOverlay === "primary" && "20px") ||
    (props.typeCardOverlay === "secondary" && "auto") ||
    "20px"};
  right: ${(props) =>
    (props.typeCardOverlay === "primary" && "auto") ||
    (props.typeCardOverlay === "secondary" && "-6px") ||
    "auto"};
  top: -30px;
  z-index: 2;
  /* teste */
  width: ${(props) =>
    (props.typeCardOverlay === "primary" && "auto") ||
    (props.typeCardOverlay === "secondary" && "96px") ||
    "auto"};
  height: ${(props) =>
    (props.typeCardOverlay === "primary" && "auto") ||
    (props.typeCardOverlay === "secondary" && "96px") ||
    "auto"};
  background-color: ${(props) =>
    (props.typeCardOverlay === "primary" && "#fff") ||
    (props.typeCardOverlay === "secondary" && "#20ad96") ||
    "#fff"};
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    (props.typeCardOverlay === "primary" && "0%") ||
    (props.typeCardOverlay === "secondary" && "50%") ||
    "0%"};
  /* fim do teste */
  box-shadow: 0px 16px 96px 0px rgba(111, 124, 144, 0.16);
  @media (min-width: 1250px) {
    top: -45px;
    left: ${(props) =>
      (props.typeCardOverlay === "primary" && "-130px") ||
      (props.typeCardOverlay === "secondary" && "auto") ||
      "-130px"};
    right: ${(props) =>
      (props.typeCardOverlay === "primary" && "auto") ||
      (props.typeCardOverlay === "secondary" && "-30px") ||
      "auto"};
  }
`;

export const ContainerTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

