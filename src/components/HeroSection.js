// src/components/HeroSection.js
import React from "react";
import styled, { keyframes } from "styled-components";
import newHeroImage from "../assets/hero-pet.png"; // Substitua pela nova imagem

// Animação para o texto aparecer de forma suave
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Hero Section Wrapper com a nova imagem
const HeroWrapper = styled.section`
  height: 100vh;
  background: url(${newHeroImage}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  text-align: center;
  padding: 20px; // Adiciona padding para evitar que o conteúdo fique colado nas bordas
`;

// Sobreposição escura para melhorar a visibilidade do texto sobre a imagem
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Escurece a imagem de fundo */
`;

// Texto principal com animação
const HeroText = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1.2s ease-out;
  display: flex;
  flex-direction: column; /* Organiza os filhos em coluna */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  height: 100%; /* Para garantir que o flexbox ocupe toda a altura */
`;

// Estilo do título maior e mais moderno
const HeroTitle = styled.h1`
  font-size: 64px;
  color: #fbbf24;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 48px; /* Reduz o tamanho em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 36px; /* Tamanho ainda menor para telas muito pequenas */
    margin-bottom: 15px; // Ajusta a margem inferior
  }
`;

// Estilo do parágrafo de suporte com fonte mais clean
const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 1.5;
  max-width: 600px;
  color: #fff;
  text-align: center; /* Centraliza o texto dentro do parágrafo */

  @media (max-width: 768px) {
    font-size: 18px; /* Ajuste para telas menores */
    max-width: 80%; // Limita a largura em telas menores
  }

  @media (max-width: 480px) {
    font-size: 16px; // Tamanho ainda menor para telas muito pequenas
    margin-bottom: 20px; // Ajusta a margem inferior
  }
`;

// Botão com animação e efeito hover
const HeroButton = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  background-color: #fbbf24;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #f59e0b;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 18px; // Reduz o tamanho do botão em telas menores
  }

  @media (max-width: 480px) {
    padding: 10px 20px; // Ajusta o padding para telas muito pequenas
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Overlay />
      <HeroText>
        <HeroTitle>Cuide Bem do Seu Pet!</HeroTitle>
        <HeroSubtitle>
          Atuando há mais de 10 anos no mercado.<br></br>Nós da <strong>PetJoy</strong>,
          garantimos que seu melhor amigo receba todo o carinho e cuidado que
          merece.<br></br>
        </HeroSubtitle>
        <HeroButton>Agende uma Consulta agora !!!</HeroButton>
      </HeroText>
    </HeroWrapper>
  );
};

export default HeroSection;
