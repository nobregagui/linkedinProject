import { IPropsDynamicTitle } from "../../../utils/interfaces";
import { Title } from "./DynamicTitle.style";

export default function DynamicTitle({
  title,
  titleSizing,
  color,
}: IPropsDynamicTitle) {
  return (
    <Title color={color} titleSizing={titleSizing}>
      {title}
    </Title>
  );
}
