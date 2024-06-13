import { RiShutDownLine } from 'react-icons/ri';
import { Container, Logout, Logo, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import Polygon from "../../assets/icons/Polygon.svg";
import Icon from "../../assets/plates/Logo@3x.png";
import Icon1 from "../../assets/icons/Logo_3x.svg";
import { NavInput } from "../../components/NavInput";
import { FiSearch } from 'react-icons/fi';
import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import Search from "../../assets/icons/Search.svg";

export function Header() {
    const { signOut } = useAuth();
    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    return (
        <Container>
            <Logo>
                <img src={Icon} alt="Poligono" />
                <p>GetNGo</p>
            </Logo>
            <NavInput
                icon={FiSearch}
                type="text"
                placeholder="Busque por ingressos ou shows"
            />
            <Button>
                <img src={Receipt} alt="Receita" />
                <p>Carrinho(0)</p>
            </Button>
            <Logout onClick={handleSignOut} >
                <img src={SignOut} alt="Sair" />
            </Logout>
        </Container>
    )
};