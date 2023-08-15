import { IPropsDynamicSubtitle } from "../../../utils/interfaces";
import { Subtitle } from "./DynamicSubTitle.styles";

export default function DynamicSubtitle({
  subtitle,
  subtitleSizing,
}: IPropsDynamicSubtitle) {
  return <Subtitle subtitleSizing={subtitleSizing}>{subtitle}</Subtitle>;
}
