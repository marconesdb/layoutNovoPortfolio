import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../styles/LayoutStyles';
import styled from 'styled-components';
import {
  Logo, Nav, NavItem, NavItemHome, Hamburger, NavMenu, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ImageContainer,
  SvgLink
} from './Header.styles';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/images/Logo.svg';

// Styled component otimizado para mobile
const StyledLink = styled.div`
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

type SocialLink = {
  href: string;
  icon: typeof FaGithub;
  label: string;
};

const socialLinks: SocialLink[] = [
  { href: "https://novo-portifolio-eta.vercel.app/", icon: FaGlobe, label: "Website" },
  { href: "https://wa.me/5538992182727", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://github.com/marconesdb", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/marconesb/", icon: FaLinkedin, label: "LinkedIn" },
];

const baseOffsets: { [key: string]: number } = {
  inicio: 70,
  projetos: 70,
  skills: 90,
  sobre: 100,
  contato: 110,
};

const getSectionOffset = (section: string) => {
  const isVerySmallScreen = window.innerWidth < 360;
  return isVerySmallScreen ? baseOffsets[section] * 0.8 : baseOffsets[section];
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    Object.keys(baseOffsets).forEach(section => {
      const element = document.getElementById(section);
      if (!element) {
        console.warn(`Seção com ID "${section}" não encontrada.`);
      }
    });
  }, []);

  const scrollToSection = (section: string) => {
    // Debug info para dispositivos pequenos
    const debugInfo = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      userAgent: navigator.userAgent
    };
    console.log('Device Debug Info:', debugInfo);

    const element = document.getElementById(section);
    if (element) {
      // Fecha o menu primeiro
      setIsOpen(false);
      
      // Usa requestAnimationFrame para garantir suavidade
      requestAnimationFrame(() => {
        const headerOffset = getSectionOffset(section);
        
        // Tenta primeiro com scrollIntoView
        try {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Ajusta para o offset do header
          window.scrollBy({
            top: -headerOffset,
            behavior: 'smooth'
          });
        } catch (e) {
          // Fallback para método alternativo
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    } else {
      console.error(`Elemento não encontrado para a seção: ${section}`);
    }
  };

  return (
    <S.Header>
      <Logo>
        <img src={logo} alt="Logo" />
        MSB
      </Logo>
      <Hamburger isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <Nav>
          <StyledLink 
            onClick={() => scrollToSection('inicio')}
            onTouchStart={() => scrollToSection('inicio')}
          >
            <NavItemHome>{t('navbar.home')}</NavItemHome>
          </StyledLink>
          <StyledLink 
            onClick={() => scrollToSection('projetos')}
            onTouchStart={() => scrollToSection('projetos')}
          >
            <NavItem>{t('navbar.projects')}</NavItem>
          </StyledLink>
          <StyledLink 
            onClick={() => scrollToSection('skills')}
            onTouchStart={() => scrollToSection('skills')}
          >
            <NavItem>{t('navbar.skills')}</NavItem>
          </StyledLink>
          <StyledLink 
            onClick={() => scrollToSection('sobre')}
            onTouchStart={() => scrollToSection('sobre')}
          >
            <NavItem>{t('navbar.about')}</NavItem>
          </StyledLink>
          <StyledLink 
            onClick={() => scrollToSection('contato')}
            onTouchStart={() => scrollToSection('contato')}
          >
            <NavItem>{t('navbar.contact')}</NavItem>
          </StyledLink>
          <Dropdown>
            <DropdownToggle onClick={toggleDropdown}>
              {t('navbar.language')}
              <span>{dropdownOpen ? '˰' : 'ˬ'}</span>
            </DropdownToggle>
            <DropdownMenu isOpen={dropdownOpen}>
              <DropdownItem onClick={() => changeLanguage('en')}>EN</DropdownItem>
              <DropdownItem onClick={() => changeLanguage('es')}>ES</DropdownItem>
              <DropdownItem onClick={() => changeLanguage('pt')}>PT</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        {isOpen && (
          <ImageContainer>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <SvgLink key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={40} color="#fff" />
              </SvgLink>
            ))}
          </ImageContainer>
        )}
      </NavMenu>
    </S.Header>
  );
};

export default Header;