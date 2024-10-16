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

  @media (min-width: 360px) and (max-width: 576px) {
    padding: 1rem;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    padding: 1.5rem;
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


  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
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


  @media (min-width: 360px) and (max-width: 576px) {
    width: 100%;
    text-align: center;

  }


  @media (min-width: 576px) and (max-width: 992px) {
    p {
      font-size: 28px;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 325px;
  background-color: #A8990F;
  margin-left: 10px;
  

  @media (min-width: 360px) and (max-width: 576px) {
    width: 30%;
    margin-left: 20px;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    width: 60%;
    margin-left: 20px;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 40%;
     
    }
`;

export const ContainerAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content:center; /* Alinha os containers esquerdo e direito */
  align-items: center; /* Garante que ambos os containers estejam alinhados no topo */
  flex-wrap: wrap; /* Permite quebra de linha se necessário */
  box-sizing: border-box; /* Previne overflow horizontal com padding */


  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    flex-direction: row;
  }
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

  @media (min-width: 360px) and (max-width: 576px) {
    .texto-titulo {
      width: 100%; /* Ocupar 100% da largura disponível */
      padding: 0 10px; /* Adicionar um padding para espaçamento */
      text-align: center;
      flex-grow: 1; /* Permitir que o container cresça conforme o espaço disponível */
    }

   
  }

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


 @media (min-width: 360px) and (max-width: 576px) {
    width: 100%;
    padding: 0 10px;
    margin-top: 50px;

    .texto-titulo,
    .recuo {
      margin-left: 0;
      word-spacing: normal; /* Espaçamento normal entre palavras */
      hyphens: auto; /* Permite hifenização automática */
      overflow-wrap: break-word; /* Quebra palavras longas se necessário */
      letter-spacing: 0.01em; /* Leve ajuste no espaçamento entre letras */
      text-justify: inter-word; /* Melhora a distribuição das palavras */
      word-break: break-word; /* Permite a quebra de palavras longas */
      text-align: justify;
      
    }

    .p-1,
    .p-2 {
      font-size: 14px;
    }
  }


  @media (min-width: 577px) and (max-width: 992px) {
    width: 80%;
  }
`;


export const ContainerDireito = styled.div`
  width: 50%; /* Ajuste a largura conforme necessário */
  max-width: 600px; /* Limita a largura máxima do container esquerdo */
  padding: 0; /* Adiciona espaço lateral */
  box-sizing: border-box; /* Garante que o padding não cause overflow */
 
  
  @media (min-width: 577px) and (max-width: 992px) {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 30px; /* Espaçamento entre cubos */
   flex-direction: row; /* Garante que os cubos fiquem lado a lado */
  }


  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 150px;

    @media (min-width: 577px) and (max-width: 992px) {
      align-items: center;
      margin-left: 0;
      margin-top: 300px;
    }

    
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

    
    @media (min-width: 577px) and (max-width: 992px) {
      align-items: center;
      margin-left: 100px;
     
    }

  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }


  @media (min-width: 360px) and (max-width: 576px) {
    width: 100%;
    padding: 0 10px;

    .cubo1 {
      margin-top: 100px;
      margin-left: 0px;
 
      align-items: center;
      justify-content: center;
    }
    .cubo2 {
      margin-top: 100px;
      margin-left: 180px;
      align-items: center;
      justify-content: center;
    }
  }

  
`;