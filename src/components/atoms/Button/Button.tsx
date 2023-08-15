import { IPropsDynamicButton } from "../../../utils/interfaces";
import { Button } from "./Button.styles";

export default function ButtonComponent({
  typeButton,
  valueButton,
}: IPropsDynamicButton) {
  return <Button typeButton={typeButton}>{valueButton?.toUpperCase()}</Button>;
}
