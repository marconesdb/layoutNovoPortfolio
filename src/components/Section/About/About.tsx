import { 
  Container, 
  ContainerAbout, 
  ContainerDireito, 
  ContainerEsquerdo, 
  ContentWrapper,
  Line,
  Title
} from '../About/About.styles';
import { ContactButton } from '../Home/Home.styles';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução

const About = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="sobre">
      <ContentWrapper>
        <Title>
          <span>#</span>
          <p>{t('about.title')}</p> {/* Tradução para o título "Sobre mim" */}
          <Line />
        </Title>
        <ContainerAbout>
          <ContainerEsquerdo>
            <p className='texto-titulo'>
              {t('about.greeting')} <br/>
              <span className='estilo-p'>{t('about.introduction')}</span>
            </p>
            <p className='p-1'>
              <span className='recuo'>{t('about.firstParagraph.prefix')}</span> 
              {t('about.firstParagraph.content')}
            </p>
            <p className='p-1'>
              <span className='recuo'>{t('about.secondParagraph.prefix')}</span> 
              {t('about.secondParagraph.content')}
            </p>
            <p className='p-2'>
              <span className='recuo'>{t('about.thirdParagraph.prefix')}</span> 
              {t('about.thirdParagraph.content')}
            </p>
            <p className='p-2'>
              <span className='recuo'>{t('about.fourthParagraph.prefix')}</span> 
              {t('about.fourthParagraph.content')}
            </p>
            
            <a href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <ContactButton>{t('about.readMore')}</ContactButton> {/* Tradução para o botão "Leia mais" */}
            </a>
          </ContainerEsquerdo>
          
          <ContainerDireito>
            <div className='cubo1'>
              {/* Criação do cubo */}
              {[...Array(25)].map((_, index) => (
                <div key={index} className="dot"></div>
              ))}
            </div>

            <div className='cubo2'>
              {/* Criação do cubo */}
              {[...Array(25)].map((_, index) => (
                <div key={index} className="dot"></div>
              ))}
            </div>
          </ContainerDireito>
        </ContainerAbout>
      </ContentWrapper>
    </Container>
  );
};

export default About;
