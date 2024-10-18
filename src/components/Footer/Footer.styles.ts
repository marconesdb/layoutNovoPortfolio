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
  max-width:100%; /* Limita a largura máxima do footer */
  height: 200px; /* Ajusta a altura automaticamente */
  padding: 15px; /* Alinha o padding */
  flex-wrap: wrap; /* Permite que os itens se reorganizem */
  


  @media (min-width: 360px) and (max-width: 768px){
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
 
  }
 
  @media (min-width: 577px) and (max-width: 768px) {
    max-width: 100%;
    min-height: 350px;
    flex-direction: column;
    justify-content: space-around;
  }


  @media (min-width: 769px) and (max-width: 992px) {
    min-height: 300px;
    max-width: 100%;
    height: auto;
    padding: 25px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    max-width: 100%;
    /* max-height: 200px; */
    padding: 30px;
    justify-content: space-between;
    margin-top: 0px;
    height: 400px;
    
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    max-width: 100%;
    height: 200px;
    padding: 35px;
    justify-content: space-between;
    margin-top: 0;
    

  }


  @media (min-width: 1401px) {
    max-width: 100%;
    height: 200px;
    padding: 35px;
    justify-content: space-between;
    margin-top: 0;
     
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

  @media (min-width: 577px) and (max-width: 768px) {
    align-items: center;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 50%;
    align-items: flex-start;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 50%;
    padding-right: 20px;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 50%;
    padding-right: 25px;
  }
`;

// Estilo para o conteúdo da seção esquerda
export const LeftSectionContent = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }
  
  @media (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Contêiner para o layout dos parágrafos
export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
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

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 15px;
    margin: 0 0 10px 0;
    margin-left: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 0 0 10px 0;
    font-size: 15px;
    margin-top: 0;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    margin: 0 0 10px 0;
    font-size: 16px;
    margin-top: 0;
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

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 15px;
    margin: 0 0 10px 0;
    margin-left: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 0 0 10px 30px;
    font-size: 15px;
    margin-top: 0;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    margin: 0 0 10px 35px;
    font-size: 16px;
    margin-top: 0;
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

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 15px;
    margin: 10px 0;
    margin-left: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 10px 0;
    font-size: 15px;
    width: 100%;
    margin-top: 0;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    margin: 10px 0;
    font-size: 16px;
    width: 100%;
    margin-top: 0;
  }
`;

// Estilo para o parágrafo central
export const CentralParagraph = styled.p`
  font-size: 16px;
  color: #ABB2BF;
  

  @media (min-width: 360px) and (max-width: 576px) {
    text-align: center;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    text-align: center;
  }
 
  @media (min-width: 769px) and (max-width: 992px) {
    text-align: center;
    margin-top: 150px;
    width: 100%;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    text-align: center;
    margin-top: 100px;
    width: 100%;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    text-align: center;
    margin-top: 100px;
    width: 100%;
  }
`;

// Estilo para o parágrafo das redes sociais
export const ParagraphSocialNetworks = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-right: 25px;
  margin-top: -60px;

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 0;
    margin-right: 0;
    font-size: 20px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 0;
    margin-right: 0;
    font-size: 22px;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    margin-top: 0;
    margin-right: 0;
    font-size: 24px;
  }
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

  @media (min-width: 577px) and (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    margin-top: 20px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 45%;
    align-items: flex-end;
    margin-left: 0;
    justify-content: space-between;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 50%;
    margin-left: 0;
    margin-top: 0;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 50%;
    margin-left: 0;
    margin-top: 0;
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

  @media (min-width: 577px) and (max-width: 768px) {
    width: 90px;
    height: 27px;
    margin: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 90px;
    height: 27px;
    margin: 0 0 20px 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 95px;
    height: 28px;
    margin: 0 0 20px 0;
    margin-top: 0;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 100px;
    height: 30px;
    margin: 0 0 20px 0;
    margin-top: 0;
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

  @media (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
    margin-top: 15px;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    justify-content: flex-end;
    margin-top: 15px;
    width: 100%;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    justify-content: flex-end;
    margin-top: 15px;
    
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    justify-content: flex-end;
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
  

  @media (min-width: 360px) and (max-width: 576px) {
    position: relative;
    margin-top: 20px;
    
  }

  @media (min-width: 360px) and (max-width: 576px) {
    position: relative;
    margin-top: 20px;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    position: absolute;
    margin-top: 50px;
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

  @media (min-width: 360px) and (max-width: 576px) {
    justify-content: center;
    margin-right: 0;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    justify-content: center;
    margin-right: 10px;
  }
`;