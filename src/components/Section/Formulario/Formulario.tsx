import { 
  Container, 
  ContentWrapper,
  EnviarButton,
  FormularioWrapper,
  Main 
} from '../Formulario/Formulario.styles';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução

const Formulario = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="#">
      <ContentWrapper>
        <Main>
          <FormularioWrapper>
            <div className="container">
              <h2>{t('form.title')}</h2> {/* Tradução "Fale comigo!" */}
              <form action="#" method="POST">
                <div className="form-group">
                  <div className="form-item">
                    <label htmlFor="nome">{t('form.name.label')}</label> {/* Tradução "Nome:" */}
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      required 
                      placeholder={t('form.name.placeholder')} // Tradução do placeholder "Digite seu nome..."
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="email">{t('form.email.label')}</label> {/* Tradução "Email:" */}
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder={t('form.email.placeholder')} // Tradução do placeholder "Digite seu email..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="assunto">{t('form.subject.label')}</label> {/* Tradução "Assunto:" */}
                  <input 
                    type="text" 
                    id="assunto" 
                    name="assunto" 
                    required 
                    placeholder={t('form.subject.placeholder')} // Tradução do placeholder "Digite um assunto..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">{t('form.message.label')}</label> {/* Tradução "Mensagem:" */}
                  <textarea 
                    id="mensagem" 
                    name="mensagem" 
                    rows={5} 
                    required 
                    placeholder={t('form.message.placeholder')} // Tradução do placeholder "Digite aqui sua mensagem..."
                  ></textarea>
                </div>

                <EnviarButton>{t('form.button')}</EnviarButton>  {/* Tradução do botão "Enviar" */}
              </form>
            </div>
          </FormularioWrapper>
        </Main>
      </ContentWrapper>
    </Container>
  );
};

export default Formulario;
