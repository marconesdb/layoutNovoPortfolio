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
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 100px;

  span {
    color: #A8990F; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }

  
`;

export const Line = styled.div`
  height: 1px;
  width: 280px;
  background-color: #A8990F;
  margin-left: 10px;


`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center; /* Centraliza os elementos dentro deste container */
  margin: auto; /* Centraliza o container em relação ao pai */
  max-width: 100%; /* Limite de largura para o MainContainer */

  

  
  
`;
export const ImagensSuperiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 125px;
  
 

  img {
    width: 48%; /* Ajusta a largura das imagens para que fiquem lado a lado */
    height: auto;
  }

  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    /* margin-left: 16px; */
    margin-top: 40px;

  

  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  .quadrado1{
    border: solid 1px #ABB2BF;
    width: 110px;
    height: 110px;
    margin-right: 50px;
    transform: translateY(-10px);
    transform: translateX(-10px);
  }


`;

export const ImagensInferiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  
 
  

  .cubo2 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 30px;
    margin-right: 60px;

  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  .quadrado2{
    border: solid 1px #ABB2BF;
    width: 80px;
    height: 60px;
    margin-top: 50px;
    transform: translateX(-10px);
  }

`;


export const IconeLogo = styled.div`
  
  display: flex; /* Flexbox para alinhar os retângulos lado a lado */
  flex-direction: row; /* Direção da flexbox em linha para alinhar os elementos horizontalmente */
  gap: 10px; /* Espaço entre os retângulos, ajuste conforme necessário */
  margin-right: 20px;
  margin-top: -120px;
  /* margin-left: 15px; */


  .RetanguloInferior{
   border: solid 1px #A8990F;
   width: 55px;
   height: 100px;
   transform: translateY(80px);
   margin-left: 1px;
  }


  .RetanguloInferiorMenor{
   border: solid 1px #A8990F;
   width: 40px;
   height: 35px;
   transform: translateY(32px);
   margin-left: 14px;
   margin-top: 1px;
  }

  .RetanguloSuperior{
   border: solid 1px #A8990F;
   width: 55px;
   height: 100px;
   transform: translateY(-51px);
   margin-left: 55px;
  }

  .RetanguloSuperiorMenor{
   border: solid 1px #A8990F;
   width: 40px;
   height: 35px;
   transform: translateY(0px);
   margin-left: -1px;
   margin-top: 30px; 
  }

`;

export const SkillsContainer = styled.div`

  gap: 10px; /* Espaço entre os itens */
  width: 60%; /* Ajuste o tamanho do container */
  max-width: 600px;
  margin: auto; /* Centraliza o SkillsContainer em relação ao pai */
 

  
  .Skill-1 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    margin-top: 160px;

  }

  .p-1{
    color: white;
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }

  .Skill-2 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    transform: translateX(-195px);
    transform: translateY(-150px);
    margin-left: 170px;

    
  }

  .p-2{
    color: white;
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }


  .Skill-3 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 210px; 
    height: 210px; 
    align-items: center;
    justify-content: center;
    transform: translateX(-195px);
    transform: translateY(-300px);
    margin-left: 340px;

  }


  .p-3{
    border-bottom: solid 1px #ABB2BF;
    width: 208px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }

  .Skill-4 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    transform: translateX(-195px);
    transform: translateY(-340px);
    margin-left: 170px;

  }

  .p-4{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;

  }


  .Skill-5 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 210px; 
    height: 210px; 
    transform: translateY(-430px);
    margin-left: 340px;

    }

  .p-5{
    border-bottom: solid 1px #ABB2BF;
    width: 208px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;

  }

  .p-texto{
    color: #ABB2BF;
    font-size: 16px;
    padding: 10px;

  }

  
`;



