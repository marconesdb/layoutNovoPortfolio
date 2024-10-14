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
    flex-direction: column; // Mudando para coluna em telas menores
    align-items: center; // Centraliza itens
  }
`;



// Componente ContentWrapper
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%; /* Ocupa 100% da largura do container */
  max-width: 1200px; /* Limite de largura máxima */
  flex-wrap: wrap; /* Permitir quebra de linha se necessário */
  box-sizing: border-box; /* Previne overflow horizontal com padding */


  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column; // Mudando para coluna em telas menores
    align-items: center; // Centraliza itens
  }
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

  @media (min-width: 360px) and (max-width: 1200px) {
    width: 100%;
    margin-top: 70px;
  
    transform: translateX(0); /* Centraliza horizontalmente */
    
    p {
      font-size: 28px;
    }
  }


`;

export const Line = styled.div`
  height: 1px;
  width: 280px;
  background-color: #A8990F;
  margin-left: 10px;
  
 /* Responsividade */
 @media (min-width: 360px) and (max-width: 992px) {
    width: 100%; 
    margin-left: 25px;
    flex-grow: 1; /* Faz com que a linha se expanda para ocupar o espaço restante */
    
 }

  /* Responsividade */
  @media (min-width: 993px) and (max-width: 1200px) {
   
    flex-grow: 1; /* Faz com que a linha se expanda para ocupar o espaço restante */
    
 }
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center; /* Centraliza os elementos dentro deste container */
  margin: auto; /* Centraliza o container em relação ao pai */
  max-width: 100%; /* Limite de largura para o MainContainer */

  

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }

  
`;
export const ImagensSuperiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 125px;
  margin-left: 10px;
 

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
    transform: translateX(0px);
  }

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 992px) {
    justify-content: center;
    margin-top: 20px;
    margin-left: 45px;
    .quadrado1 {
      width: 80px;
      height: 80px;
      margin-left: 50px;
    }
}

`;

export const ImagensInferiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  
  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column; // Alinha os elementos verticalmente (coluna)
    align-items: center; // Centraliza os elementos
    margin-top: 50px; // Ajuste da margem superior

    .cubo2 {
      margin-left: 0; // Remove a margem à esquerda
      margin-right: 0; // Remove a margem à direita
    }
}


  

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


  /* Responsividade */
@media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .quadrado2 {
      width: 60px;
      height: 50px;
      transform: translateX(-80px);
    }

    .cubo2{
      margin-top: 25px;
      transform: translateX(20px);
    }
  }
`;


export const IconeLogo = styled.div`
  
  display: flex; /* Flexbox para alinhar os retângulos lado a lado */
  flex-direction: row; /* Direção da flexbox em linha para alinhar os elementos horizontalmente */
  gap: 10px; /* Espaço entre os retângulos, ajuste conforme necessário */
  margin-right: 0px;
  margin-top: -120px;
  /* margin-left: 15px; */
  margin-left: 10px;

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

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    margin-top: -50px;
    gap: 5px;
  }
`;


export const SkillsContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px; /* Espaçamento entre skills e o container superior */
  width: 100%; /* Ocupar 100% da largura do MainContainer */
  

 


.Container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Permitir que as colunas quebrem linha se necessário */

  /* Para o media query de 360px a 768px */
@media (min-width: 360px) and (max-width: 992px) {
  .Container {
    flex-direction: column; /* Mudando a direção para coluna em telas menores */
    
  }

 }
}

 .Container Content{
  display: flex;
  flex-wrap: wrap; /* Permite que as colunas quebrem linha se o espaço for insuficiente */
  width: 100%;
  margin-top: 20px;
  justify-content: center;
 }


 .coluna {
  display: flex;
  flex-direction: column;
  margin: 10px;
}



/* Estilos para a primeira coluna */
.coluna1 .Skills-1 {
  border: solid 1px #ABB2BF;
  width: 150px;
  height: 100px;

  @media (min-width: 360px) and (max-width: 992px) {
    height: 410px; /* Altura fixa */
    width: 100%; /* Largura flexível */
    margin-top: 50px; /* Espaço superior */
       
    }

    @media (min-width: 993px) and (max-width: 1200px) {
      width: 120px;
    }
  }
 

  .p-1, .p-2, .p-3, .p-4, .p-5 {
    color: white;
    border-bottom: solid 1px #ABB2BF;
    width: 100%;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    @media (min-width: 360px) and (max-width: 992px) {
      width: 100%; 
      align-items: center;
      text-align: center;
      justify-content: center;

    }
  }


/* Estilos para a segunda coluna */
.coluna2 .Skills-2 {
  border: solid 1px #ABB2BF;
  width: 180px;
  height: 120px;

  @media (min-width: 360px) and (max-width: 992px) {
    
    margin-left: 0px;
    width: 100%; /* Largura flexível */
    height: 410px; /* Altura fixa */
    margin-top: 35px; /* Espaço superior */
    
    }

    @media (min-width: 993px) and (max-width: 1200px) {
      width: 120px;
    }
}



.coluna2 .Skills-3 {
  border: solid 1px #ABB2BF;
  width: 180px;
  height: 120px;
  margin-top: 10px;

  @media (min-width: 360px) and (max-width: 992px) {
   
   margin-left: 0px;
   width: 100%; /* Largura flexível */
   height: 410px; /* Altura fixa */
   margin-top: 50px; /* Espaço superior */
   }

   @media (min-width: 993px) and (max-width: 1200px) {
      width: 120px;
    }
}

/* Estilos para a terceira coluna */
.coluna3 .Skills-4 {
  border: solid 1px #ABB2BF;
  width: 190px;
  height: 180px;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-left: 0;
    width: 100%; /* Largura flexível */
    height: 410px;  /* Altura fixa */
    margin-top: 40px; /* Espaço superior */
    }
}


.coluna3 .Skills-5 {
  border: solid 1px #ABB2BF;
  width: 190px;
  height: 180px;
  margin-top: 10px;

  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%; /* Largura flexível */
    height: 410px;  /* Altura fixa */
    margin-top: 50px; /* Espaço superior */
    margin-left: 0;
  
    }
  }
 

  .p-texto{
    color: #ABB2BF;
    font-size: 16px;
    padding: 10px;

    @media (min-width: 360px) and (max-width: 992px) {
      margin-top: 170px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }



 
`;