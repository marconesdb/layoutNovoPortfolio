import { 
  FraseCitacao,
  Container, 
  ContainerCitacao, 
  ContentWrapper,
  DivCitacao, 
} from '../Citacao/Citacao.styles';

const Citacao = () => {
  return (
    <Container id="#">
      <ContentWrapper>
      <ContainerCitacao className='ContainerCitacao'>
      
      <DivCitacao>
      <FraseCitacao>
        <span className='aspasSuperior'>❝</span>A única maneira de fazer <span className='textCitacao'> um excelente trabalho é </span> amar o que você faz.<span className='aspasInferior'>❞</span><span className='autor'>- Steve Jobs</span>
      </FraseCitacao>
      </DivCitacao>
    
     </ContainerCitacao>
   
      </ContentWrapper>
    </Container>
  );
};

export default Citacao;