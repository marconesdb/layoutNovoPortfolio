import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../styles/LayoutStyles';
import {
  Logo, Nav, NavItem, NavItemHome, Hamburger, NavMenu, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ImageContainer,
  SvgLink, StyledLink,
} from './Header.styles';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/images/Logo.svg';

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
    const sections = ['inicio', 'projetos', 'skills', 'sobre', 'contato'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (!element) {
        console.warn(`Seção com ID "${section}" não encontrada.`);
      }
    });
  }, []);

  const scrollToSection = (section: string) => {
    console.log(`Tentando rolar para a seção: ${section}`);
    const element = document.getElementById(section);
    if (element) {
      console.log(`Elemento encontrado para a seção: ${section}`);

      // Fechar o menu móvel se estiver aberto
      setIsOpen(false);
      
      // Rolar diretamente para a seção sem offset
      element.scrollIntoView({ block: 'start' });
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
          <StyledLink onClick={() => scrollToSection('inicio')}>
            <NavItemHome>{t('navbar.home')}</NavItemHome>
          </StyledLink>
          <StyledLink onClick={() => scrollToSection('projetos')}>
            <NavItem>{t('navbar.projects')}</NavItem>
          </StyledLink>
          <StyledLink onClick={() => scrollToSection('skills')}>
            <NavItem>{t('navbar.habilidades')}</NavItem>
          </StyledLink>
          <StyledLink onClick={() => scrollToSection('sobre')}>
            <NavItem>{t('navbar.about')}</NavItem>
          </StyledLink>
          <StyledLink onClick={() => scrollToSection('contato')}>
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
