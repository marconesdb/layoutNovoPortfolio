import { 
  Container, 
  ContentWrapper,
  EnviarButton,
  FormularioWrapper,
  Main 
} from '../Formulario/Formulario.styles';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução
import {useState} from 'react';
import emailjs from '@emailjs/browser'

const Formulario = () => {
  const { t } = useTranslation(); // Usar o hook de tradução
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [assunto, setAssunto] = useState('');

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
    from_name: name,
    message: message,
    email: email,
    assunto: assunto
    }


  emailjs.send("service_fwsd2n6", "template_vhv4uql", templateParams, "jPQQSpaqYqSpawUEu")
  .then((response) => {
    console.log("EMAIL ENVIADO", response.status, response.text)
    console.log("EMAIL ENVIADO", response.status, response.text)
    setName('')
    setEmail('')
    setAssunto('')
    setMessage('')
  }, (err) => {
    console.log("ERRO: ", err)
  })

}

  return (
    <Container id="#">
      <ContentWrapper>
        <Main>
          <FormularioWrapper>
            <div className="container">
              <h2>{t('form.title')}</h2> {/* Tradução "Fale comigo!" */}
              <form className="form" onSubmit={sendEmail}>
                <div className="form-group">
                  <div className="form-item">
                    <label htmlFor="nome">{t('form.name.label')}</label> {/* Tradução "Nome:" */}
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      required 
                      placeholder={t('form.name.placeholder')} // Tradução do placeholder "Digite seu nome..."
                      onChange={(e) => setName(e.target.value)}
                      value={name}
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
                      onChange={(e) => setEmail(e.target.value)}
          value={email}
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
                    onChange={(e) => setAssunto(e.target.value)}
                    value={assunto}
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
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>

                <EnviarButton className="button" value="Enviar">{t('form.button')}</EnviarButton>  {/* Tradução do botão "Enviar" */}
              </form>
            </div>
          </FormularioWrapper>
        </Main>
      </ContentWrapper>
    </Container>
  );
};

export default Formulario;
