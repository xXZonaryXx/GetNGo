import { Container, Main, Plate } from "./styles"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/Button"
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import Show from "../../assets/plates/Show 2.png";


export function Details() {

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Main>
        <button onClick={handleBack} >
          <img src={CaretLeft} alt="Seta" />
          <h2>Voltar</h2>
        </button>
        <Plate>
          <img src={Show} alt="Gambe" />
          <section>
            <h1>Show do Nirvanna</h1>
            <p>Ingresso para o show único do Nirvanna.</p>
            <button>Shows</button>
            <div>
              <Counter />
              <Button title="Incluir - R$ 99,90" />
            </div>
          </section>
        </Plate>
      </Main>
      <Footer />
    </Container>
  )
}