import Aside from "../../components/Aside";
import Main from "../../components/Main";
import GlobalStyle from "../../styles/GlobalStyle";
import { Container } from "./styles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Aside />
        <Main />
      </Container>
    </>
  );
}
