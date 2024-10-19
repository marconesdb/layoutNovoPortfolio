import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução
import * as S from '../../styles/LayoutStyles';
import {
  Logo,
  Nav,
  NavItem,
  NavItemHome,
  Hamburger,
  NavMenu,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ImageContainer,
  SvgLink,
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
  const { t, i18n } = useTranslation(); // Usar o hook de tradução
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu toggled'); // Verifica se a função é chamada
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Função para trocar o idioma
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
          <ScrollLink to="inicio" smooth={true} duration={500} offset={-70} onClick={() => console.log('Link "Início" clicado')}>
            <NavItemHome>{t('navbar.home')}</NavItemHome> {/* Usando tradução */}
          </ScrollLink>
          <ScrollLink to="projetos" smooth={true} duration={500} offset={-70}>
            <NavItem>{t('navbar.projects')}</NavItem>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-10}>
            <NavItem>{t('navbar.skills')}</NavItem>
          </ScrollLink>
          <ScrollLink to="sobre" smooth={true} duration={500} offset={-270}>
            <NavItem>{t('navbar.about')}</NavItem>
          </ScrollLink>
          <ScrollLink to="contato" smooth={true} duration={500} offset={-70}>
            <NavItem>{t('navbar.contact')}</NavItem>
          </ScrollLink>

          <Dropdown>
            <DropdownToggle onClick={toggleDropdown}>
              {t('navbar.language')}
              <span>{dropdownOpen ? '˰' : 'ˬ'}</span>
            </DropdownToggle>
            <DropdownMenu isOpen={dropdownOpen}>
              <DropdownItem onClick={() => changeLanguage('en')}>EN</DropdownItem> {/* Troca para inglês */}
              <DropdownItem onClick={() => changeLanguage('es')}>ES</DropdownItem> {/* Troca para espanhol */}
              <DropdownItem onClick={() => changeLanguage('pt')}>PT</DropdownItem> {/* Troca para português */}
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
