import AccountIcon from "../Icons/Account";
import Menu from "../Menu";
import { Container } from "./styles";

export default function MenuList(){
    return(
        <Container>
            <Menu to="/cadastros" icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Cadastros"/>
            <Menu to="/suprimentos" icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Suprimentos"/>
            <Menu to="/vendas" icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Vendas"/>
            <Menu to="/financas" icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Finanças"/>
            <Menu to="/servicos" icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Serviços"/>
            <Menu to="/contabilidade" icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Contabilidade"/>
        </Container>
    );
}