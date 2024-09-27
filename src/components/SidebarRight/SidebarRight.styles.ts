import styled from 'styled-components';


export const RetanguloDireito= styled.div`
  width: 100px;
  height: 120px;
  border: solid 1px #ABB2BF;
  transform: translateY(895px);
  margin-left: 126px;
  border-right: none;

  @media (min-width: 1640px) {
   
   margin-left:185px;
   
 }

 @media (min-width: 1281px) and (max-width: 1639px){
  width: 76%;
  margin-left: 25px;
  
  }
`;

export const RetanguloDireitoInferior= styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  transform: translateY(1285px);
  margin-left: 126px;
  border-right: none;


  @media (min-width: 1640px) {
    transform: translateY(1600px);
    margin-left:185px;
    height: 200px;
  }

  @media (min-width: 1281px) and (max-width: 1639px){
    width: 76%;
    margin-left: 25px;
    transform: translateY(none);
  }
`;


export const CuboDireito= styled.div`
.cubo1 {
    display: grid;
    grid-template-columns: repeat(4, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    margin-left: 155px;
    margin-top: 40px;
    transform: translateY(3050px);


    @media (min-width: 1640px) {
    transform: translateY(3520px);
    margin-left: 210px;
  }


  @media (min-width: 1281px) and (max-width: 1639px){
   margin-left: 0;
    transform: translateY(none);
   
  }
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;

  
  }

`;