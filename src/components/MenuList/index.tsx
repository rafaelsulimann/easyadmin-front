import AccountIcon from "../Icons/Account";
import Menu from "../Menu";
import { Container } from "./styles";

export default function MenuList(){
    return(
        <Container>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Cadastros"/>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Suprimentos"/>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Suprimentos"/>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Vendas"/>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Finanças"/>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Serviços"/>
            <Menu icon={<AccountIcon fill="#8D8D8D" className="account-icon"/>} label="Contabilidade"/>
        </Container>
    );
}