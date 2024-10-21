import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Container,  ContentWrapper } from '../Formulario/Formulario.styles';
import { ContainerDireito, ContainerEsquerdo, Line, Main, Title } from './Contact.styles';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução

const Contact = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="contato">
      <ContentWrapper>
        <Title>
          <span>#</span>
          <p>{t('contact.title')}</p> {/* Tradução do título "Contato" */}
          <Line />
        </Title>
        <Main>
          <ContainerEsquerdo>
            <p className='paragrafo'>
              <span className='recuo-paragrafo'>{t('contact.intro.prefix')}</span>
              {t('contact.intro.content')}
            </p>
          </ContainerEsquerdo>
          <ContainerDireito>
            <div className='contato'>
              <p className='TituloMensagem'>{t('contact.sendMessage')}</p> {/* Tradução "Envie-me uma mensagem" */}
              <div className='emailContainer'>
                <FaEnvelope className='emailIcon' />
                <p className='email'>marconebritt@gmail.com</p>
              </div>
              <div className='emailContainer'>
                <FaPhone className='telefone' /> {/* Ícone de Telefone */}
                <p className='telefone'>+55 38 99218-2727</p>
              </div>
              <div className='emailContainer'>
                <FaWhatsapp className='whatsapp' /> {/* Ícone de WhatsApp */}
                <p className='email'>+55 38 99913-8667</p>
              </div>
            </div>
          </ContainerDireito>
        </Main>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
