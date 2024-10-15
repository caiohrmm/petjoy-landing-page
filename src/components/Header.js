import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPaw } from "react-icons/fa"; // Ícone de patinha
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de menu

// Animação de bounce para a logo
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Estilização do header
const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 10px 20px; /* Ajuste o padding para mais espaço */
  display: flex;
  justify-content: space-between; /* Distribui espaço entre logo e menu */
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Logo com animação de bounce ao passar o mouse
const Logo = styled.div`
  font-size: 24px;
  color: #fbbf24;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    animation: ${bounce} 1s ease;
  }
`;

const LogoIcon = styled(FaPaw)`
  margin-right: 8px;
  color: #fbbf24;
  font-size: 32px;
`;

// Estilo de navegação com transição suave
const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Oculta o menu por padrão em dispositivos móveis */
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px; /* Ajuste conforme necessário */
    left: 0;
    background-color: #fff;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 50; /* Para garantir que fique acima de outros elementos */
    transition: max-height 0.3s ease-in; /* Animação para abrir/fechar */
    max-height: ${(props) =>
      props.isOpen ? "300px" : "0"}; /* Controla a altura do menu */
    overflow: hidden; /* Oculta o conteúdo que não cabe na altura */
  }

  &.active {
    display: flex; /* Mostra o menu quando ativo */
  }
`;

// Estilização do botão do menu de hambúrguer
const HamburgerButton = styled.div`
  display: none; /* Oculta o botão por padrão */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

// Ícone do menu de hambúrguer
const HamburgerIcon = styled(FaBars)`
  font-size: 24px;
  color: #444;
`;

// Ícone de fechar
const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  color: #fbbf24;
`;

// Estilização do link de navegação
const NavLink = styled.a`
  color: #444;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px; /* Adiciona padding para os links */
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px; /* Bordas arredondadas */
  display: block; /* Faz os links ocuparem toda a largura */

  &:hover {
    color: #fff; /* Muda a cor do texto */
    background-color: #fbbf24; /* Cor de fundo ao passar o mouse */
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <LogoIcon /> PetJoy
      </Logo>
      <HamburgerButton onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />} {/* Alterna ícones */}
      </HamburgerButton>
      <Nav className={isMenuOpen ? "active" : ""} isOpen={isMenuOpen}>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#testimonials">Depoimentos</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
