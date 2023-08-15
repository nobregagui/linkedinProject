import styled from "styled-components";
import { IPropsDynamicDescription } from "../../../utils/interfaces";
import ReactMarkdown from "react-markdown";

export const Description = styled(ReactMarkdown)<IPropsDynamicDescription>`
  color: #4a556c;
  font-family: Kumbh Sans;
  font-size: ${(props) =>
    (props.descriptionSizing === "fontSizeSmall" && "16px") ||
    (props.descriptionSizing === "fontSizeMedium" && "18px") ||
    (props.descriptionSizing === "fontSizeLarge" && "22px") ||
    (props.descriptionSizing === "fontSizeExtraLarge" && "24px")};
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
`;
