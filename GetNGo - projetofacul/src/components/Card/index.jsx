import { Container } from "./styles"
import { Counter } from "../Counter"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../assets/icons/Heart.svg";
import NirvannaShow from "../../assets/plates/Show 2.png";


export function Card() {

    const navigate = useNavigate();

    function handleNavigate(){
        navigate("/details")
    }
    return (
        <Container>
            <img src={HeartIcon} alt="" style={{ alignSelf: "end" }} />
            <img src={NirvannaShow} alt="" style={{ width: '176px', height: '176px' }} />
            <h1>Show do Nirvanna</h1>
            <h2>Acompanhe o Nirvanna em um de seus shows únicos.</h2>
            <span>R$ 99,90</span>
            <div>
                <Counter />
                <Button title="incluir" onClick={handleNavigate} />
            </div>
        </Container>
    )
}