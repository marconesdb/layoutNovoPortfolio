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
  max-width: 1020px; /* Limita a largura máxima do footer */
  height: 200px; /* Ajusta a altura automaticamente */
  padding: 15px; /* Alinha o padding */
  flex-wrap: wrap; /* Permite que os itens se reorganizem */
  margin-top: 40px;

  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; /* Alinha os itens verticalmente em telas menores */
  }

  @media (min-width: 1640px) {
      padding-left: 15px;
      padding-right: 15px;
      }
`;

// Seção da esquerda
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 360px) and (max-width: 768px){
    
    align-items: center;
    margin-bottom: 20px;

  }
  
`;

// Estilo para o conteúdo da seção esquerda
export const LeftSectionContent = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 360px) and (max-width: 768px){
    
  flex-direction: column;
  align-items: center;

  }
  
`;

// Contêiner para o layout dos parágrafos
export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;

 
`;

// Estilo para o primeiro parágrafo
export const FirstParagraph = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  margin-left: -25px;
  margin-top: -110px;

  @media (min-width: 360px) and (max-width: 768px){
    
    margin-left: 0;
    margin-top: 1px;
    text-align: center;

    }
`;

// Estilo para o segundo parágrafo
export const SecondParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-left: 50px;
  color: #ABB2BF;
  margin-top: -110px;

  @media (min-width: 360px) and (max-width: 768px){
    
    /* margin-left: -3px; */
    margin-right: 4px;
    margin-top: 1px;
    text-align: center;
  
    }
`;

// Estilo para o terceiro parágrafo
export const ThirdParagraph = styled.p`
  font-weight: 400;
  margin-top: -20px;
  margin-left: 5px;
  font-size: 16px;

  @media (min-width: 360px) and (max-width: 768px){
    
    text-align: center;
    margin-top: 10px;
    margin-left: 0;
  
    }
`;

// Estilo para o parágrafo central
export const CentralParagraph = styled.p`
  font-size: 16px;
  color: #ABB2BF;
  

  @media (min-width: 360px) and (max-width: 768px){
    
    text-align: center;
    margin-bottom: 10px;
  
    }
`;

// Estilo para o parágrafo das redes sociais
export const ParagraphSocialNetworks = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-right: 25px;
  margin-top: -60px;

  @media (min-width: 360px) and (max-width: 768px){
    text-align: center;
    margin-top: 10px;
  
    }

    @media (min-width: 992px) and (max-width: 1280px) {
    margin-left: 30px;
   
  }
`;

// Seção da direita
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 50px;
  
`;

// Adicione um estilo para a imagem do logo
export const LogoImage = styled.img`
  width: 100px;
  height: 30px;
  margin-left: -30px;
  margin-top: -110px;

  @media (min-width: 360px) and (max-width: 768px){
    margin-left: 0;
    margin-top: 0;
    
  
    }
`;

// Contêiner de Imagens na direita
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media (min-width: 360px) and (max-width: 768px){
    justify-content: center;
    width: 100%;
    margin-top: 15px;
  
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
  
  @media (min-width: 360px) and (max-width: 768px){
    position: static;
    bottom: 0;
    margin-top: 15px;
  
    }
`;

// Contêiner da Imagem
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media (min-width: 360px) and (max-width: 768px){
    margin-right: 0;
  
    }
`;