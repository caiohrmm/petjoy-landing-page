import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Wrapper para o componente Testimonials
const TestimonialsWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
  overflow: hidden;
`;

// Título dos Testimonials
const TestimonialsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
`;

// Animação de slide
const slideIn = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
`;

// Container para os depoimentos
const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Adiciona esta linha */
  align-items: center; /* Centraliza os itens no eixo horizontal */
  position: relative;
  overflow: hidden; /* Esconde o excesso de conteúdo */
`;

// Área que contém os depoimentos
const TestimonialsInner = styled.div`
  display: flex;
  transition: transform 0.5s ease; /* Transição suave */
  width: 100%; /* Ajusta a largura para caber em um container flex */
  animation: ${({ isExiting }) => (isExiting ? slideOut : slideIn)} 0.5s
    forwards; /* Animação */
  justify-content: center; /* Centraliza os cards horizontalmente */
`;

// Depoimento individual
const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px; /* Ajuste a margem interna conforme necessário */
  flex: 1; /* Faz com que todos os cartões ocupem o mesmo espaço */
  min-width: 300px; /* Largura mínima para cada cartão */
  max-width: 400px; /* Limita a largura máxima para evitar excessos */
  margin: 10px; /* Espaçamento entre os cartões */
  height: auto; /* Altura dinâmica para permitir ajuste ao conteúdo */
  display: flex; /* Permite usar flexbox dentro do card */
  flex-direction: column; /* Coloca o nome e o texto em coluna */
  justify-content: space-between; /* Espaça o conteúdo para ocupar o espaço total */

  @media (max-width: 768px) {
    min-width: 220px; /* Ajusta a largura mínima em telas menores */
    width: 90%; /* Ajusta a largura para ocupar 90% da tela em dispositivos móveis */
  }

  @media (max-width: 480px) {
    min-width: 100%; /* O cartão ocupa 100% da largura em telas pequenas */
    margin: 0; /* Remove margem em telas muito pequenas */
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Efeito de hover */
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
  }
`;

// Nome do cliente
const CustomerName = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fbbf24;
`;

// Depoimento do cliente
const TestimonialText = styled.p`
  font-size: 16px;
  color: #666;
  font-style: italic; /* Estilo em itálico para o depoimento */
  /* Removido overflow e text-overflow para evitar corte do texto */
  flex-grow: 1; /* Permite que o texto ocupe o espaço disponível */
  margin: 0; /* Remove a margem para evitar corte do texto */
`;

const testimonialsData = [
  {
    name: "João Silva",
    text: "Os serviços são excepcionais! Meu cachorro sempre sai feliz.",
  },
  {
    name: "Maria Oliveira",
    text: "Excelente atendimento e profissionais muito competentes.",
  },
  {
    name: "Carlos Souza",
    text: "Meu gato adora ir ao petshop! Super recomendo.",
  },
  {
    name: "Ana Lima",
    text: "A equipe é muito carinhosa e cuida do meu pet com muito amor.",
  },
  {
    name: "Fernanda Santos",
    text: "O melhor petshop da cidade! Meus pets amam.",
  },
  {
    name: "Ricardo Almeida",
    text: "Um atendimento incrível e muito cuidado com os animais.",
  },
  {
    name: "Luciana Costa",
    text: "Sempre tenho confiança no cuidado que dão aos meus pets.",
  },
  {
    name: "Paulo Gomes",
    text: "Atendimento rápido e sempre saio satisfeito com o resultado.",
  },
];

const Testimonials = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const itemsToShow = window.innerWidth <= 768 ? 1 : 3; // 1 card para mobile e 3 para desktop

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Altera a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [currentIndex]);

  const handleNext = () => {
    setIsExiting(true); // Inicia a animação de saída

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      setIsExiting(false); // Restaura a animação de entrada
    }, 500); // Dura o mesmo tempo que a animação
  };

  // Gera os índices dos depoimentos que serão exibidos
  const displayedTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  // Se não houver depoimentos suficientes, reinicia a contagem
  if (displayedTestimonials.length < itemsToShow) {
    const remainingCount = itemsToShow - displayedTestimonials.length;
    const additionalTestimonials = testimonialsData.slice(0, remainingCount);
    displayedTestimonials.push(...additionalTestimonials);
  }

  return (
    <TestimonialsWrapper id={id}>
      <TestimonialsTitle>O que nossos clientes dizem</TestimonialsTitle>
      <TestimonialsContainer>
        <TestimonialsInner
          isExiting={isExiting}
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <CustomerName>{testimonial.name}</CustomerName>
              <TestimonialText>{testimonial.text}</TestimonialText>
            </TestimonialCard>
          ))}
        </TestimonialsInner>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
