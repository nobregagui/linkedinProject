import { IPropsMenuFooter } from "../../../utils/interfaces";
import { MenuItem } from "./MenuFooter.styles";

export default function MenuFooter({ url, value }: IPropsMenuFooter) {
  return <MenuItem href={url}>{value}</MenuItem>;
}
