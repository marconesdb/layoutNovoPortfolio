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
  width: 80%;
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
 


  

  span {
    color: #A8990F; /* Cor amarela */
   
  }

  p{
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 325px;
  background-color: #A8990F;
  margin-left: 10px;

`;

export const ContainerAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content:center; /* Alinha os containers esquerdo e direito */
  align-items: center; /* Garante que ambos os containers estejam alinhados no topo */
  flex-wrap: wrap; /* Permite quebra de linha se necessário */
  box-sizing: border-box; /* Previne overflow horizontal com padding */
`;


export const ContainerEsquerdo = styled.div`
  width: 50%; /* Ajuste a largura conforme necessário */
  max-width: 600px; /* Limita a largura máxima do container esquerdo */
  padding: 0; /* Adiciona espaço lateral */
  box-sizing: border-box; /* Garante que o padding não cause overflow */

 


  .texto-titulo{
  font-size: 16px;
  color: #ABB2BF;
  margin-left: 35px;
  }

  .recuo{
    margin-left: 35px;

  }



 .p-1{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: 10px;
  text-align: justify;


 
 }

 .p-2{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: 10px;
  text-align: justify;
 }

`;


export const ContainerDireito = styled.div`
  width: 50%; /* Ajuste a largura conforme necessário */
  max-width: 600px; /* Limita a largura máxima do container esquerdo */
  padding: 0; /* Adiciona espaço lateral */
  box-sizing: border-box; /* Garante que o padding não cause overflow */
 
  
 


  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 150px;
    
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }


  .cubo2 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 10px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 380px;

  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }
`;