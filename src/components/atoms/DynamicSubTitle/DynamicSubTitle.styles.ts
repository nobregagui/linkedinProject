import styled from "styled-components";
import { IPropsDynamicSubtitle } from "../../../utils/interfaces";

export const Subtitle = styled.p<IPropsDynamicSubtitle>`
  color: #4a556c;
  font-family: Kumbh Sans;
  font-size: ${(props) =>
    (props.subtitleSizing === "fontSizeSubSmall" && "12px") ||
    (props.subtitleSizing === "fontSizeSmall" && "16") ||
    (props.subtitleSizing === "fontSizeMedium" && "20px")};
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
`;
