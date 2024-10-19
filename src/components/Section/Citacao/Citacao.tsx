import { useTranslation } from 'react-i18next'; // Importar o hook de tradução
import { 
  FraseCitacao,
  Container, 
  ContainerCitacao, 
  ContentWrapper,
  DivCitacao, 
} from '../Citacao/Citacao.styles';

const Citacao = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="citacao">
      <ContentWrapper>
        <ContainerCitacao className='ContainerCitacao'>
          <DivCitacao>
            <FraseCitacao>
              <span className='aspasSuperior'>❝</span>
              {t('quote.text')} {/* Usar tradução aqui */}
              <span className='aspasInferior'>❞</span>
              <span className='autor'>{t('quote.author')}</span> {/* Usar tradução do autor aqui */}
            </FraseCitacao>
          </DivCitacao>
        </ContainerCitacao>
      </ContentWrapper>
    </Container>
  );
};

export default Citacao;
