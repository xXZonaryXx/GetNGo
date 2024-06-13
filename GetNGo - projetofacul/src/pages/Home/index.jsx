import { Container, BodyContainer, Menu, Advertisement } from './styles';
import { useState, useEffect, useRef } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import Banner from '../../assets/plates/Banner-image.png';
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import CaretRight from "../../assets/icons/CaretRight.svg";


export function Home() {

    const handleScroll = (contentId, scrollAmount) => {
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            const newScrollLeft = contentElement.scrollLeft + scrollAmount;
            contentElement.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container>
            <Header />
            <BodyContainer>
                <Advertisement>
                    <img src={Banner} alt="MacaronWallpaper" />
                    <div>
                        <h1>Ingressos Inigualáveis</h1>
                        <h2>Sinta o cuidado da seleção de ingressos selecionados</h2>
                    </div>
                </Advertisement>
                <Menu>
                    <h1>Shows</h1>
                    <div className="MenuButtons" >
                        <button className="CaretLeft" onClick={() => handleScroll('refeicoesContent', -300)}>
                            <img src={CaretLeft} alt="Caret Left" />
                        </button>
                        <button className="CaretRight" onClick={() => handleScroll('refeicoesContent', 300)}>
                            <img src={CaretRight} alt="CaretRight" />
                        </button>
                    </div>
                    <div id="refeicoesContent">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Menu>
                <Menu>
                    <h1>Sports</h1>
                    <div className="MenuButtons" >
                        <button className="CaretLeft" onClick={() => handleScroll('sobremesasContent', -300)}>
                            <img src={CaretLeft} alt="Caret Left" />
                        </button>
                        <button className="CaretRight" onClick={() => handleScroll('sobremesasContent', 300)}>
                            <img src={CaretRight} alt="CaretRight" />
                        </button>
                    </div>
                    <div id="sobremesasContent">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Menu>
                <Menu>
                    <h1>E-Sports</h1>
                    <div className="MenuButtons" >
                        <button className="CaretLeft" onClick={() => handleScroll('bebidasContent', -300)}>
                            <img src={CaretLeft} alt="Caret Left" />
                        </button>
                        <button className="CaretRight" onClick={() => handleScroll('bebidasContent', 300)}>
                            <img src={CaretRight} alt="CaretRight" />
                        </button>
                    </div>
                    <div id="bebidasContent">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Menu>
            </BodyContainer>
            <Footer />
        </Container>
    )
}