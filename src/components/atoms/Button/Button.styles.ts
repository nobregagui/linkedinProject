import styled from "styled-components";
import { IPropsDynamicButton } from "../../../utils/interfaces";

export const Button = styled.a<IPropsDynamicButton>`
  text-decoration: none;
  padding: 15px;
  width: 250px;
  border-radius: 15px;
  border: ${(props) =>
    (props.typeButton === "primary" && "1px solid #20AD96") ||
    (props.typeButton === "secondary" && "1px solid #D0D5DD")};
  color: ${(props) =>
    (props.typeButton === "primary" && "#fff") ||
    (props.typeButton === "secondary" && "#4A556C80")};
  background-color: ${(props) =>
    (props.typeButton === "primary" && "#20AD96") ||
    (props.typeButton === "secondary" && "transparent")};
  text-align: center;
  font-family: Kumbh Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  cursor: pointer;
`;
