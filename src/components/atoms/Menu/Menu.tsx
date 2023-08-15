// MenuHeader.tsx
import { useEffect } from "react";
import { useDataContext } from "../../../context/DataContext";
import { IPropsMenuHeader } from "../../../utils/interfaces";
import { ContainerMenu, MenuItem } from "./Menu.styles";
import { fetchDataHeader } from "../../../utils/functions";

export default function MenuHeader({ open }: IPropsMenuHeader) {
  const { headerData, setHeaderData } = useDataContext();
  useEffect(() => {
    fetchDataHeader({
      setData: setHeaderData,
    });
  }, [setHeaderData]);

  return (
    <>
      <ContainerMenu openMenuMobile={open}>
        {headerData.map((item, index) => (
          <MenuItem menuItemContact={item.menuItemContact} key={index}>
            {item.menuItem}
          </MenuItem>
        ))}
      </ContainerMenu>
    </>
  );
}
