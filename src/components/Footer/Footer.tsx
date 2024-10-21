import * as S from '../../styles/LayoutStyles';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importando os ícones
import { SvgLink } from '../Header/Header.styles';
import Logo from '../../assets/images/Logo.svg';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução

import {
  LeftSection,
  RightSection,
  ImagesContainer,
  CenterSection,
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
  ImageContainer,
  LeftSectionContent,
  ParagraphContainer,
  CentralParagraph,
  ParagraphSocialNetworks,
  LogoImage,
  FooterContent,
} from './Footer.styles';

function Footer() {
  const { t } = useTranslation(); // Usar o hook de tradução

  // Função para obter o ano atual
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <S.Footer>
      <FooterContent>
        <LeftSection>
          <LeftSectionContent>
            <ImageContainer>
              <LogoImage src={Logo} alt="Logo" />
            </ImageContainer>
            <ParagraphContainer>
              <FirstParagraph>{t('footer.name')}</FirstParagraph> {/* Tradução do nome */}
              <SecondParagraph>{t('footer.email')}</SecondParagraph> {/* Tradução do email */}
            </ParagraphContainer>
          </LeftSectionContent>
          <ThirdParagraph>{t('footer.profession')}</ThirdParagraph> {/* Tradução da profissão */}
        </LeftSection>

        <CenterSection>
          <CentralParagraph>
            &copy; {t('footer.copyright', { year: getCurrentYear() })} {/* Tradução do copyright */}
          </CentralParagraph>
        </CenterSection>

        <RightSection>
          <ParagraphSocialNetworks>{t('footer.socialNetworks')}</ParagraphSocialNetworks> {/* Tradução das redes sociais */}
          <ImagesContainer>
            <SvgLink href="https://wa.me/5538992182727" target="_blank">
              <FaWhatsapp size={30} color="#fff" />  {/* Ícone WhatsApp */}
            </SvgLink>
            <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="#fff" />  {/* Ícone GitHub */}
            </SvgLink>
            <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
              <FaLinkedin size={30} color="#fff" />  {/* Ícone LinkedIn */}
            </SvgLink>
          </ImagesContainer>
        </RightSection>
      </FooterContent>
    </S.Footer>
  );
}

export default Footer;
