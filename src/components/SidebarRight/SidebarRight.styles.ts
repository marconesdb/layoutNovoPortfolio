import styled from 'styled-components';


export const SidebarRetanguloDireito= styled.div`

  width: 100px;
  height: 120px;
  border: solid 1px #ABB2BF;
  transform: translateY(965px);
  border-right: none;
  margin-left: 29%;

  @media (min-width: 1201px) and (max-width: 1400px) { 
    margin-left: 65%;
  }

  
  @media (min-width: 1401px) { 
    margin-left: 50%;
  }
`;

export const SidebarRetanguloDireitoInferior= styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  right: 0; /* Posiciona à direita */
  top: 140px; /* Abaixo do primeiro retângulo */
  border-right: none;
  margin-left: 39%;
  transform: translateY(1700px);

  @media (min-width: 1201px) and (max-width: 1400px) { 
    margin-left: 65%;
  }

  @media (min-width: 1401px) { 
    margin-left: 50%;
  }
`;


export const CuboDireito= styled.div`
.cubo1 {
    display: grid;
    grid-template-columns: repeat(4, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    margin-left: 75px;
    margin-top: 40px;
    transform: translateY(3250px);

    @media (min-width: 1201px) and (max-width: 1400px) { 
    margin-left: 75%;
  }

  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;

  
  }

`;