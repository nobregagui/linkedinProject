// NavBurguer.tsx
import { StyledBurger } from "./NavBurguer.styles";
import MenuHeader from "../../atoms/Menu";
import { useDataContext } from "../../../context/DataContext";

const Burger = () => {
  const { openMenuMobile, setOpenMenuMobile } = useDataContext();
  return (
    <>
      <StyledBurger
        openMenuMobile={openMenuMobile}
        onClick={() => setOpenMenuMobile(!openMenuMobile)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuHeader open={openMenuMobile} />
    </>
  );
};

export default Burger;
