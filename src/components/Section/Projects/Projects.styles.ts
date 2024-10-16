
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
  background-color: ${primaryColor};

  @media (min-width: 1201px) and (max-width: 1400px) {
    padding: 3rem; /* Aumentar o padding para telas maiores */
    max-width: 100%; /* Limitar a largura a 90% */
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


  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos verticalmente */
    justify-content: flex-start;
    padding: 1rem; /* Reduz o padding para telas menores */
  }

  @media (min-width: 769px) and (max-width: 1200px) {
  justify-content: space-between; /* Espaço entre os elementos */
  padding: 2rem; /* Ajuste de padding */
 
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    max-width: 1100px; /* Ajuste no limite da largura */
    padding: 2.5rem; /* Padding ajustado */
    justify-content: space-evenly; /* Distribuir igualmente os elementos */
  }

`;


export const Title = styled.div`
  
  width: 100%; /* Garante que o título ocupe a largura total */
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Garante alinhamento do título e linha */


  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  p {
    font-size: 28px; /* Ajuste no tamanho da fonte */
  }
}


@media (min-width: 1201px) and (max-width: 1400px) {
    width: 100%; /* Ajuste da largura do título */
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 30px; /* Ajuste do tamanho da fonte */
    }
  }


  @media (min-width:1401px) {
    width: 100%; /* Ajuste da largura do título */
    display: flex;
    align-items: center;
    justify-content: center;
  }


  
  span {
    color: #A8990F; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }

  

  
`;

export const Line = styled.div`
  height: 1px;
  width: 600px;
  background-color: #A8990F;
  margin-left: 10px;
  
 

  @media (min-width: 360px) and (max-width: 768px) {
    width: 30%; /* Ajusta a largura para dispositivos pequenos */
    margin-left: 25px; /* Remove a margem para centralização */
    flex-grow: 1; /* Faz com que a linha se expanda para ocupar o espaço restante */
  }

  @media (min-width: 769px) and (max-width: 1200px) {
  width: 67%; /* Ajusta a largura da linha */
  margin-left: 0; /* Centraliza a linha */
}

@media (min-width: 1201px) and (max-width: 1400px) {
    width: 67%; /* Ajuste da largura da linha */
    margin-left: 0; /* Centralização */
  }


  @media (min-width:1401px) {
    width: 65%; /* Ajuste da largura do título */
   
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (min-width: 360px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Um cartão por linha */
    gap: 30px; /* Reduz o espaço entre os cartões */
    width: 70%;
  }

  
    @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* Ajusta para 2 colunas */
    gap: 35px; /* Espaçamento ajustado */
    justify-content: center; /* Centraliza os cartões dentro da grid */
    justify-items: center; /* Centraliza os itens dentro de cada célula da grid */
    width: 100%; /* Garante que a grid ocupe toda a largura disponível */
    margin: 0 auto; /* Centraliza a grid dentro do container */
    margin-top: 50px;
}


@media (min-width: 1201px) and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr); /* Ajusta para 2 colunas */
    gap: 35px; /* Espaçamento ajustado */
    justify-content: center; /* Centraliza os cartões dentro da grid */
    justify-items: center; /* Centraliza os itens dentro de cada célula da grid */
    width: 100%; /* Garante que a grid ocupe toda a largura disponível */
    margin: 0 auto; /* Centraliza a grid dentro do container */
    margin-top: 50px;
}

`;

export const Card = styled.div`
  background-color: #1b1e23;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #ABB2BF;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; 
    height: auto; 
    
  }

 

`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;


  @media (min-width: 360px) and (max-width: 768px) {
    height: 150px; 
  }

  @media (min-width: 769px) and (max-width: 1200px) {
  
}

`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  width: 300px;
  padding: 10px;


  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; 
    font-size: 18px; 
  }

  @media (min-width: 769px) and (max-width: 1200px) {
  
}

`;

export const CardSubtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #ABB2BF;
  text-align: center;
  width: 300px;
  padding: 10px;
  border: solid 1px #ABB2BF;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; 
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ABB2BF;
  text-align: center;
  flex: 1;
  margin-bottom: 15px;

  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 12px; 
  }
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;

  a {
    text-decoration: none;  /* Remove sublinhado do link */
  }

  button {
    background-color: #1b1e23;
    border: solid 1px #ABB2BF;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;  /* Espaço entre o ícone e o texto */
    transition: background-color 0.3s;

    &:hover {
      /* background-color: #d9a400; */
      background-color: #1b1e23;
      color: white;
      border: solid #d9a400;
    }

    svg {
      font-size: 18px;  /* Tamanho do ícone */
    }
  }

  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; 
    gap: 10px; 
    justify-content: center; 
    align-items: center; 
  }

  @media (min-width: 769px) and (max-width: 1200px) {
 
}

`;
