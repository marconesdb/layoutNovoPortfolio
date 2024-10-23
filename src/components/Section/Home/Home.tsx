import { useTranslation } from 'react-i18next'; // Importar o hook de tradução
import fotoPerfil from '../../../assets/images/Marcone.png';
import 'animate.css';

import { 
  Container, 
  ContentWrapper, 
  TextSection, 
  ImageSection, 
  Title, 
  Subtitle, 
  ContactButton, 
  Image, 
  ImageQuadrado, 
  PortfolioTag, 
  Logo, 
} from '../Home/Home.styles';



const Home = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="inicio">
      <ContentWrapper>
        <TextSection>
          <Title  className='animate__animated animate__backInDown' dangerouslySetInnerHTML={{ __html: t('home.title') }} /> {/* Usando dangerouslySetInnerHTML para manter a formatação */}
          <Subtitle>{t('home.subtitle')}</Subtitle>
          <ContactButton href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer">
            {t('home.contactButton')} {/* Usando tradução */}
          </ContactButton>
        </TextSection>
        <ImageSection>
          <Logo className='animate__animated animate__rotateIn'>
            <div>
              <div className='retanguloInferior'>
                <div className='retanguloInferiorMenor'></div>
              </div>
              <div className='retanguloSuperior'>
                <div className='retanguloSuperiorMenor'></div>
              </div>
            </div>
          </Logo>
          <div>
            <Image  className= '' src={fotoPerfil} alt="Foto - Marcone" />
            <PortfolioTag>
              <ImageQuadrado />
              <p dangerouslySetInnerHTML={{ __html: t('home.portfolioTag') }} /> {/* Usando dangerouslySetInnerHTML para manter a formatação */}
            </PortfolioTag>
          </div>
        </ImageSection>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
