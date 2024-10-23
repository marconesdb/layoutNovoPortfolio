// Home.styles.tsx
import styled, { keyframes } from "styled-components";

// Definindo variáveis para cores
const primaryColor = "#2c3036";
const secondaryColor = "#A8990F";
const textColor = "#ffffff";
const lightTextColor = "#cccccc";

// Componente Container
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${primaryColor};
  color: ${textColor};
  padding: 2rem;
  margin-top: 0;
  width: 100%;  /* Ocupar 100% da largura do Main */
  max-width: 100%; /* Limitar a largura máxima para prevenir overflow */
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
  overflow-x: hidden;
   /* Prevenir rolagem horizontal no container */
  

  @media (min-width: 360px) and (max-width: 576px) {
    padding: 1rem; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    padding: 1.5rem; /* Ajuste do padding */
  }


  @media (min-width: 1401px) {
  margin-top: -100px;
  }
`;

export const highlight = styled.section`

  background-color: #A8990F; /* Altere para a cor desejada */
  
`;




// Componente ContentWrapper
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Ocupa 100% da largura do container */
  max-width: 1200px; /* Limite de largura máxima */
  flex-wrap: wrap; /* Permitir quebra de linha se necessário */
  box-sizing: border-box; /* Previne overflow horizontal com padding */

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column; 
    align-items: center; 
    padding: 0; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    flex-direction: column; /* Muda para coluna em telas intermediárias */
    align-items: center; /* Centraliza o conteúdo */
    padding: 1rem; /* Ajusta o padding */
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 120px;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    margin-top: 10px;
  }
  
  @media (min-width: 1401px){
  margin-top: 150px;
  }
`;



// Componente TextSection
export const TextSection = styled.div`
  flex: 1;
  text-align: left;
  margin: 0;
  padding: 0; 

  @media (min-width: 360px) and (max-width: 576px) {
    text-align: center; 
    margin-bottom: 1rem; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    text-align: center; /* Centraliza o texto */
    margin-bottom: 1.5rem; /* Adiciona espaço inferior */
  }
`;

// Componente ImageSection
export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 0.625rem; // Usar rem
  padding: 0;
  margin-right: -5rem; // Ajuste com rem

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    margin: 0; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    flex-direction: column; /* Muda a direção para coluna */
    margin-right: 0; /* Remove a margem */
    align-items: center; /* Centraliza as imagens */
  }
`;

// Componente Logo
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  transform: translateY(0px);
  transform: translateX(80px);
  

  @media (min-width: 360px) and (max-width: 576px) {
    margin: 0 auto; 
    transform: translateX(15px);
  }

  @media (min-width: 577px) and (max-width: 992px) {
    transform: translateX(15px); /* Ajusta a posição do logo */
  }

  .retanguloInferior {
    border: 1px solid ${secondaryColor};
    width: 5rem;
    height: 9.375rem;
    transform: translateY(5.625rem);
    margin-left: -1.8125rem;

    @media (max-width: 400px) {
      width: 3.75rem;
      height: 7.5rem;
      transform: translateY(3.75rem);
    }
  }

  .retanguloInferiorMenor {
    border: 1px solid ${secondaryColor};
    width: 2.5rem;
    height: 3.0625rem;
    transform: translateY(-0.0625rem);
    margin-left: 4.875rem;

    @media (max-width: 400px) {
      width: 2.25rem;
      height: 2.8125rem;
      margin-left: 3.625rem;
      transform: translateY(-2px);
    }
  }

  .retanguloSuperior {
    border: 1px solid ${secondaryColor};
    width: 5rem;
    height: 9.375rem;
    transform: translateY(-7.1875rem);
    margin-left: 3.125rem;

    @media (max-width: 400px) {
      width: 3.75rem;
      height: 7.5rem;
      transform: translateY(-5.625rem);
      margin-left: 1.875rem;
    }
  }

  .retanguloSuperiorMenor {
    border: 1px solid ${secondaryColor};
    width: 2.5rem;
    height: 2.875rem;
    transform: translateY(4.6875rem);
    margin-left: -2.5rem;
    margin-top: 1.8125rem;

    @media (max-width: 400px) {
      width: 2.25rem;
      height: 2.8125rem;
      transform: translateY(2.65rem);
      margin-left: -2.27rem;
    }
  }
`;

// Componente Title
export const Title = styled.h1`
  
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding: 0;
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
  line-height: 1.3; /* Ajusta o espaçamento entre as linhas */
  

  @media (min-width: 360px) and (max-width: 576px) {
    font-size: 1.5rem; 
    text-align: center; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    font-size: 1.75rem; /* Ajusta o tamanho da fonte */
    text-align: center; /* Centraliza o título */
  }

  span {
    color: ${secondaryColor};
    display: inline; /* Quebra cada span em uma linha separada */
    
  }
`;

// Componente Subtitle
export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: left;
  margin: 0;
  padding: 0;
  color: ${lightTextColor};
  margin-top: 2rem;


  @media (min-width: 360px) and (max-width: 576px) {
    font-size: 0.875rem; 
    text-align: center; 
    margin-top: 1rem; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    font-size: 0.9rem; /* Ajusta o tamanho da fonte */
    text-align: center; /* Centraliza o subtítulo */
  }
`;

// Componente ContactButton
export const ContactButton = styled.a`
  display: block;
  padding: 0.625rem 1.25rem;
  border: 1px solid ${secondaryColor};
  background: transparent;
  color: ${textColor};
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
  width: 11rem;
  margin-top: 2rem;

  &:hover {
    background-color: ${secondaryColor};
    color: ${textColor};
  }

  @media (min-width: 360px) and (max-width: 576px) {
    width: 80%; 
    margin: 1rem auto; 
    text-align: center;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 10rem; /* Ajusta a largura do botão */
    margin: 1rem auto; /* Centraliza o botão */
  }
`;

// Componente Image
export const Image = styled.img`
  width: 21.875rem;
  height: auto;
  margin-top: 3.125rem;
  margin-left: 2.8rem;

  @media (min-width: 360px) and (max-width: 576px) {
    width: 100%;
    transform: translateX(0); 
    margin: 0 auto; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 90%; /* Reduz a largura da imagem */
    margin: 0 auto; /* Centraliza a imagem */
  }
`;

// Componente ImageQuadrado
export const ImageQuadrado = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  margin-right: 0.625rem;
  background-color: ${secondaryColor};

  @media (min-width: 360px) and (max-width: 576px) {
    width: 1.5rem; 
    height: 1.5rem; 
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 1.75rem; /* Ajusta o tamanho */
    height: 1.75rem;
  }
`;

// Componente PortfolioTag
export const PortfolioTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  justify-content: center; /* Centraliza o conteúdo */
  color: ${lightTextColor};
  margin: 0;
  /* padding: 0; */
  margin-top: 2rem;
  border: 1px solid #abb2bf;
  width: 25rem;
  padding: 0.3125rem;
  margin-right: 4.9rem;
  box-sizing: border-box; /* Inclui padding e borda na largura total */

  @media (min-width: 360px) and (max-width: 576px) {
    width: calc(100% - 2rem); 
    margin: 0 auto; 
    padding: 0.5rem; 
    margin-top: 25px;
  }


  @media (min-width: 577px) and (max-width: 992px) {
    width: 80%; /* Ajusta a largura */
    margin: 1rem auto; /* Centraliza o componente */
    padding: 0.5rem; /* Ajusta o padding */
  }

  span {
    color: ${textColor};
    font-weight: bold;
  }

  p {
    margin-right: 0;
 
  }


`;