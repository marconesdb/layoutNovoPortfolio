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
    padding: 1rem; /* Reduz o padding para telas menores */

    
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
    flex-direction: column; /* Coloca os itens em coluna para melhor visualização em telas pequenas */
    
  }
`;


export const Main = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;      /* Centraliza verticalmente */
  width: 100%;              /* Ocupa 100% da largura disponível */
 
  @media (min-width: 360px) and (max-width: 576px) {
    justify-content: center; /* Ajuste para telas menores */
    padding: 1rem;
  }
`;

export const FormularioWrapper = styled.div`
  .container {
    border: solid 1px #ABB2BF;
    padding: 20px;
    background-color: #2c3036;
    max-width: 600px;
    width: 100%;
    margin-top: 200px;
    

    @media (min-width: 360px) and (max-width: 576px) {
      width: 80vw;
      max-width: 100%;
      margin: 50px auto 0;
      padding: 15px;
      box-sizing: border-box;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 500;

    @media (min-width: 360px) and (max-width: 576px) {
      font-size: 18px; /* Reduz o tamanho da fonte */
    }
  }

  form {
    display: flex;
    flex-direction: column;

    @media (min-width: 360px) and (max-width: 576px) {
      width: 100%;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
   
    color: #fff;
   
    font-size: 16px;
  
    @media (min-width: 360px) and (max-width: 576px) {
      font-size: 14px; /* Ajusta o tamanho da fonte */
    }
  
  }

 

  .form-group:first-child {
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 360px) and (max-width: 576px) {
      flex-direction: column; /* Torna os campos empilhados */
    }
  }

  .form-item {
    display: flex;
    flex-direction: column;
    width: 48%; /* Ajuste para deixar um espaço entre os campos */
    @media (min-width: 360px) and (max-width: 576px) {
      width: 100%; /* Campos ocupam 100% da largura em telas pequenas */
      margin-top: 10px;
    }
  }

  label {
    margin-bottom: 8px;
    
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ABB2BF;
    background-color: #2c3036;
    font-size: 16px;
    font-family: 'Fira Code', sans-serif;
    color: #fff; /* Cor do texto no input */
    font-weight: 100;

    @media (min-width: 360px) and (max-width: 576px) {
      font-size: 14px; /* Reduz o tamanho da fonte */
    }
  }


 
`;

export const EnviarButton = styled.button`
  padding: 8px 16px;  /* Reduz o padding para diminuir o tamanho do botão */
  border: 1px solid #A8990F;
  background: transparent;
  color: #fff;
  font-size: 14px;  /* Reduz o tamanho da fonte */
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-start;  /* Alinha o botão à esquerda */
  
  &:hover {
    background-color: #A8990F;
    color: #1b1e23;
  }

  @media (min-width: 360px) and (max-width: 576px) {
    width: 100%; /* O botão ocupa toda a largura disponível em telas pequenas */
    font-size: 12px; /* Ajuste do tamanho da fonte */
    padding: 10px; /* Ajuste do padding */
  }
`;
