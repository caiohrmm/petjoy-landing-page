// src/components/Footer.js
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #444;
  padding: 20px;
  color: #fff;
  text-align: center;
`;

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

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap; /* Permite que os ícones quebrem para a próxima linha em telas menores */

  & > a {
    color: #fff;
    font-size: 24px;
    margin: 0 15px;
    transition: color 0.3s ease;
    animation: ${fadeIn} 0.6s ease forwards;
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(20px); /* Inicialmente deslocado para baixo */

    &:hover {
      color: #fbbf24; /* Cor ao passar o mouse */
    }

    @media (max-width: 768px) {
      font-size: 20px; /* Tamanho dos ícones para telas menores */
      margin: 0 10px; /* Margem reduzida em telas menores */
    }

    @media (max-width: 480px) {
      font-size: 18px; /* Tamanho ainda menor para dispositivos móveis */
      margin: 0 5px; /* Margem ainda menor */
    }
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerTop =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (footerTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterWrapper id="contact">
      <p>
        &copy; 2024 PetJoy - Desenvolvido por CHRLandingPages com dados
        fictícios!
      </p>
      <IconContainer>
        <a
          href="https://facebook.com"
          style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
        >
          {" "}
          <FaFacebookF />{" "}
        </a>
        <a
          href="https://instagram.com"
          style={{ animationDelay: "0.2s", opacity: isVisible ? 1 : 0 }}
        >
          {" "}
          <FaInstagram />{" "}
        </a>
        <a
          href="https://twitter.com"
          style={{ animationDelay: "0.3s", opacity: isVisible ? 1 : 0 }}
        >
          {" "}
          <FaTwitter />{" "}
        </a>
        <a
          href="https://linkedin.com"
          style={{ animationDelay: "0.4s", opacity: isVisible ? 1 : 0 }}
        >
          {" "}
          <FaLinkedin />{" "}
        </a>
      </IconContainer>
    </FooterWrapper>
  );
};

export default Footer;
