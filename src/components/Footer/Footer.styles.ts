import styled from 'styled-components';



export const FooterContent = styled.div`
  display: flex;
  justify-content: center; /* Centraliza todos os itens no conteúdo do footer */
  align-items: center;
  background-color: #2c3036;
  color: #fff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width:73.7%; /* Limita a largura máxima do footer */
  height: 200px; /* Ajusta a altura automaticamente */
  padding: 15px; /* Alinha o padding */
  flex-wrap: wrap; /* Permite que os itens se reorganizem */
  margin-top: 40px;


  @media (min-width: 360px) and (max-width: 768px){
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin-bottom: 30px;
    
  }
 
`;

// Seção da esquerda
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 360px) and (max-width: 576px) {
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;

// Estilo para o conteúdo da seção esquerda
export const LeftSectionContent = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
  }
`;

// Contêiner para o layout dos parágrafos
export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
  }
`;

// Estilo para o primeiro parágrafo
export const FirstParagraph = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  margin-left: -25px;
  margin-top: -110px;


  @media (min-width: 360px) and (max-width: 576px) {
    font-size: 14px;
    margin: 0;
    text-align: center;
    margin-top: 10px;
  }
`;

// Estilo para o segundo parágrafo
export const SecondParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-left: 50px;
  color: #ABB2BF;
  margin-top: -110px;


  @media (min-width: 360px) and (max-width: 576px) {
    font-size: 14px;
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

// Estilo para o terceiro parágrafo
export const ThirdParagraph = styled.p`
  font-weight: 400;
  margin-top: -20px;
  margin-left: 5px;
  font-size: 16px;


  @media (min-width: 360px) and (max-width: 576px) {
    font-size: 14px;
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

// Estilo para o parágrafo central
export const CentralParagraph = styled.p`
  font-size: 16px;
  color: #ABB2BF;
  

  @media (min-width: 360px) and (max-width: 576px) {
    text-align: center;
  }
`;

// Estilo para o parágrafo das redes sociais
export const ParagraphSocialNetworks = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-right: 25px;
  margin-top: -60px;



`;

// Seção da direita
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 50px;
  

  @media (min-width: 360px) and (max-width: 576px) {
    align-items: center;
    margin-left: 0;
    margin-top: 80px;
  }
`;

// Adicione um estilo para a imagem do logo
export const LogoImage = styled.img`
  width: 100px;
  height: 30px;
  margin-left: -30px;
  margin-top: -110px;


  @media (min-width: 360px) and (max-width: 576px) {
    width: 80px;
    height: 24px;
    margin: 0;
  }
`;

// Contêiner de Imagens na direita
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  

  @media (min-width: 360px) and (max-width: 576px) {
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
`;

// Seção central
export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  position: absolute;
  margin-top: 50px;
  

  @media (min-width: 360px) and (max-width: 576px) {
    position: relative;
    margin-top: 20px;
    
  }
`;

// Contêiner da Imagem
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;


  @media (min-width: 360px) and (max-width: 576px) {
    justify-content: center;
    margin-right: 0;
  }
`;