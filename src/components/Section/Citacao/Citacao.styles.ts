// Home.styles.tsx
import styled from "styled-components";

const primaryColor = "#2c3036"; 


// Componente Container
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 0;
  width: 100%;  /* Ocupar 100% da largura do Main */
  max-width: 100%; /* Limitar a largura máxima para prevenir overflow */
  min-height: 100vh;
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
  overflow-x: hidden; /* Prevenir rolagem horizontal no container */
  background-color: ${primaryColor};



  @media (min-width: 360px) and (max-width: 768px) {
  min-height: 30vh;
   
  }
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
  

  @media (min-width: 360px) and (max-width: 768px) {
    
  }
`;



export const ContainerCitacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2c3036;
  width: 100%;
  padding: 0 20px; /* Para evitar que o conteúdo toque as bordas em telas menores */
  font-family: 'Fira Code', sans-serif;
  color: #FFFFFF;
  

  @media (min-width: 360px) and (max-width: 768px) {
    
    min-height: 50vh; /* Reduz a altura mínima em dispositivos menores */
    padding: 0 10px; /* Reduz o padding lateral */
    
  }


  @media (min-width: 360px) and (max-width: 768px) {
  
  }
`;


export const DivCitacao = styled.div`
  width: 100%; /* Define a largura da Div */
  max-width: 800px; /* Limita a largura máxima */
  margin: 0 auto; /* Centraliza a div */
  padding: 20px; /* Espaçamento interno */
  border: 1px solid #ABB2BF;
  /* margin-top: -300px; */
  text-align: center; /* Centraliza o texto da citação */

 

  .aspasSuperior, .aspasInferior {
    font-size: 40px;
    color: #ABB2BF;
    vertical-align: middle; /* Garante que as aspas fiquem alinhadas verticalmente com o texto */
  }

  .aspasSuperior{
  
    margin-right: 10px; /* Espaçamento à direita da aspas superior */
 
  }

  .aspasInferior{
    margin-left: 10px; /* Espaçamento à esquerda da aspas inferior */
  }
`;


export const FraseCitacao = styled.div`
 color: #cccccc;
 display: inline-block;
 

.textCitacao{
  display: inline;
}
 

.autor{
    display: block; /* Faz com que o nome do autor fique em uma nova linha */
    margin-top: 15px; /* Espaçamento entre a citação e o nome do autor */
    font-size: 18px; /* Tamanho do texto do autor */
    font-style: italic; /* Deixa o nome do autor em itálico */
    color: #cccccc;/* Cor mais clara para o autor */
    text-align: right; /* Alinha o autor à direita */
  }

`;