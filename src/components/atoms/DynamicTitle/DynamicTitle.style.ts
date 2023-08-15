import styled from "styled-components";
import { IPropsDynamicTitle } from "../../../utils/interfaces";

export const Title = styled.h1<IPropsDynamicTitle>`
  color: ${(props) =>
    (props.color === "primary" && "#333461") ||
    (props.color === "secondary" && "#fff") ||
    "#333461"};
  font-family: Kumbh Sans;
  font-size: ${(props) =>
    (props.titleSizing === "fontSizeSmall" && "14px") ||
    (props.titleSizing === "fontSizeSubSmall" && "16px") ||
    (props.titleSizing === "fontSizeNormal" && "24px") ||
    (props.titleSizing === "fontSizeSubMedium" && "30px") ||
    (props.titleSizing === "fontSizeMedium" && "36px") ||
    (props.titleSizing === "fontSizeLarge" && "48px") ||
    (props.titleSizing === "fontSizeExtraLarge" && "72px !important")};
  font-style: normal;
  font-weight: bold;
  line-height: 120%; /* 86.4px */
  letter-spacing: -0.72px;
`;
