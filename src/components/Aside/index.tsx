import LogoIcon from "../Icons/Logo";
import MenuList from "../MenuList";
import { Container } from "./styles";

export default function Aside() {
  return (
    <Container>
      <LogoIcon fill="#E5BD30" className="div-logo" iconClassName="logo"/>
      <MenuList />
    </Container>
  );
}
