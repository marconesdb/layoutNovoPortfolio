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
  height: 100vh;
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
  overflow-x: hidden; /* Prevenir rolagem horizontal no container */
  background-color: ${primaryColor};
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

`;


export const Title = styled.div`
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;

  

  span {
    color: #A8990F; /* Cor amarela */
  }

  p {
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 200px;
  background-color: #A8990F;
  margin-left: 10px;

`;

export const Main = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os containers horizontalmente */
  align-items: center; /* Alinha os containers verticalmente */
  width: 100%; /* Ocupa 100% da largura disponível */
  margin-top: 90px;


`;

export const ContainerEsquerdo = styled.div`
  width: 50%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  
  .paragrafo{
  font-size: 16px;
  color: #ABB2BF;
  text-align: justify;

 
 }

 .recuo-paragrafo{
  margin-left: 35px;
 }
`;

export const ContainerDireito = styled.div`
  width: 50%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  display: flex;
  justify-content: end;

  
  .contato{
  width: 63%; 
  padding: 20px; /* Padding opcional para espaçamento interno */
  border: 1px solid #ABB2BF;
  /* transform:translateX(180px); */

  }

  .emailContainer {
    display: flex; /* Exibe o ícone e o email lado a lado */
    align-items: center; /* Alinha o ícone e o email verticalmente */
    margin-top: 10px; /* Espaçamento superior opcional */
    width: 350px;
    
  }

  .emailIcon, .telefone, .whatsapp {
    margin-top: 10px;
    margin-right: 10px; /* Espaçamento entre o ícone e o email */
    color: #ABB2BF; /* Cor do ícone */
    font-size: 20px; /* Tamanho do ícone */
  }

  .telefone{
    font-size: 16px;
  }

  .whatsapp{
    font-size: 16px;
  }

  .email{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: 10px;
  text-align: left;
  /* text-align: justify; */
  
 }


 .TituloMensagem{
  font-size: 16px;
  font-weight:500;
  color: #fff;
  text-align: justify;
 }
`;