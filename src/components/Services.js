import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animação de drop
const dropIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper para o componente Services
const ServicesWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

// Título dos Serviços
const ServicesTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
`;

// Container para os serviços
const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espaçamento entre os serviços */
`;

// Serviço individual
const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  transition: transform 0.3s ease;
  opacity: 0; /* Inicialmente invisível */
  transform: translateY(20px); /* Inicialmente deslocado para baixo */

  &.visible {
    animation: ${dropIn} 0.5s ease forwards; /* Aplica animação se visível */
    opacity: 1; /* Torna visível */
    transform: translateY(0); /* Restaura a posição */
  }

  &:hover {
    transform: translateY(-5px); /* Leve movimento ao passar o mouse */
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
  }
`;

// Título do Serviço
const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fbbf24;
`;

// Descrição do Serviço
const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// Imagem do Serviço
const ServiceImage = styled.img`
  width: 100%; /* Ocupa a largura total do cartão */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 10px; /* Arredonda os cantos da imagem */
  margin-bottom: 15px; /* Espaçamento abaixo da imagem */
`;

// Dados dos serviços com imagens
const servicesData = [
  {
    title: "Banho",
    description: "Serviço completo de banho para o seu pet.",
    imgSrc: require("../assets/bath.jpg"), // Substitua pelos caminhos corretos das imagens
  },
  {
    title: "Tosa",
    description: "Cortes modernos e personalizados para seu pet.",
    imgSrc: require("../assets/grooming.jpg"), // Substitua pelos caminhos corretos das imagens
  },
  {
    title: "Vacinação",
    description: "Vacinas atualizadas para a saúde do seu amigo.",
    imgSrc: require("../assets/vaccination.jpg"), // Substitua pelos caminhos corretos das imagens
  },
  {
    title: "Consultas",
    description: "Consultas veterinárias com profissionais qualificados.",
    imgSrc: require("../assets/consultation.jpg"), // Substitua pelos caminhos corretos das imagens
  },
];

const Services = ({id}) => {
  const serviceRefs = useRef([]); // Referências para os cartões
  const [visibleIndex, setVisibleIndex] = useState(-1); // Índice do cartão visível

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index; // Pega o índice do cartão
          setVisibleIndex((prevIndex) => Math.max(prevIndex, index)); // Atualiza o índice visível
          observer.unobserve(entry.target); // Para de observar após se tornar visível
        }
      });
    });

    serviceRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card); // Observa cada cartão
      }
    });

    return () => {
      serviceRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card); // Para de observar quando o componente desmonta
        }
      });
    };
  }, []);

  return (
    <ServicesWrapper id={id}>
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <ServicesContainer>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)} // Armazena a referência
            className={index <= visibleIndex ? "visible" : ""} // Aplica a classe se visível
            data-index={index} // Adiciona índice para o observer
          >
            <ServiceImage src={service.imgSrc} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
