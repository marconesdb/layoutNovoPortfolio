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


  /* Responsividade para dispositivos entre 360px e 576px */
  @media (min-width: 360px) and (max-width: 768px) {
    padding: 1rem; /* Reduzindo padding para telas menores */
    height: auto;  /* Ajusta altura para o conteúdo */
   
  }

  /* Novo: Responsividade para dispositivos entre 769px e 992px */
  @media (min-width: 769px) and (max-width: 992px) {
    padding: 1.5rem; /* Ajuste no padding */
    height: auto;  /* Ajusta a altura */
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    padding: 1.5rem; /* Ajusta o padding para telas médias */
    height: auto; /* Ajuste de altura caso necessário */
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


/* Responsividade para dispositivos entre 360px e 576px */
@media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; /* Altera para coluna em telas menores */
    justify-content: center;
    align-items: center; /* Centralizar os itens */
    width: 100%;
  }
/* Novo: Responsividade para dispositivos entre 769px e 992px */
@media (min-width: 769px) and (max-width: 992px) {
    justify-content: space-around; /* Espaçar os itens */
    max-width: 900px; /* Ajusta a largura máxima */
  }


  @media (min-width: 1201px) and (max-width: 1400px) {
    max-width: 1100px; /* Ajusta a largura máxima para telas médias */
    justify-content: space-around; /* Espaça os itens de forma equilibrada */
  }
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


  /* Responsividade para dispositivos entre 360px e 576px */
  @media (min-width: 360px) and (max-width: 768px) {
    width: 130px; /* Reduzindo o tamanho da linha */
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 180px; /* Ajusta o tamanho da linha */
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os containers horizontalmente */
  align-items: center; /* Alinha os containers verticalmente */
  width: 100%; /* Ocupa 100% da largura disponível */
  margin-top: 90px;

  /* Responsividade para dispositivos entre 360px e 576px */
  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; /* Colocar os containers em coluna */
    margin-top: 40px; /* Ajustando espaçamento superior */
    width: 100%; 
    min-width: 100%;
    padding: 10px;
   
  }

  /* Novo: Responsividade para dispositivos entre 769px e 992px */
  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 60px; /* Ajusta o espaçamento superior */
    padding: 15px; /* Ajusta o padding */
  }


  @media (min-width: 1201px) and (max-width: 1400px) {
    margin-top: 70px; /* Ajusta o espaçamento superior */
  }
`;

export const ContainerEsquerdo = styled.div`
  width: 50%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  
  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 45%; /* Reduzindo a largura para melhor ajuste */
    padding: 15px; /* Ajuste de padding */
  }



  .paragrafo{
  font-size: 16px;
  color: #ABB2BF;
  text-align: justify;
  margin: 0; /* Remover possíveis margens extras */
  padding: 0; /* Remover padding para garantir alinhamento */
  text-indent: 35px; /* Recuo na primeira linha do parágrafo */
 }

 
 

 @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 0;
    text-align: center;
    display: block;
    align-items: center;
    justify-content: center;
    display: flex;

    /* Novo: Responsividade para dispositivos entre 769px e 992px */
  @media (min-width: 769px) and (max-width: 992px) {
    width: 48%; /* Ajuste fino na largura */
    padding: 15px; /* Ajuste de padding */
  }

    .recuo-paragrafo {
      margin-left: 0;
      
    }

    .paragrafo {
      width: 90%; /* Diminui a largura do parágrafo em telas menores */
    max-width: 90%; /* Limitar a largura do parágrafo para evitar que ele se expanda muito */
    text-align: justify; /* Mantém o texto justificado */
    word-spacing: 0.05em; /* Ajuste fino no espaçamento entre palavras */
    letter-spacing: 0.01em; /* Pequeno ajuste no espaçamento entre letras */
    line-height: 1.6; /* Ajusta o espaçamento entre linhas para melhorar a leitura */
    word-break: break-word; /* Permite a quebra de palavras longas */
    overflow-wrap: break-word; /* Força a quebra de linha em palavras longas */
    hyphens: auto; /* Permite a hifenização automática */
    }
    
  }


 /* Responsividade para dispositivos entre 360px e 576px */
 /* @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; 
    padding: 0; 
    
  } */
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

 @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    justify-content: center;
    margin-top: 80px;
    max-width:  400px;


    .contato {
      width: 100%;
      padding: 15px;
      
    }

    .emailContainer {
      width: 100%;
      justify-content: center;
    }

    .email, .TituloMensagem {
      text-align: center;
    }
  }

/* Novo: Responsividade para dispositivos entre 769px e 992px */
@media (min-width: 769px) and (max-width: 992px) {
    width: 48%;
    padding: 15px;
    
    .contato {
      width: 90%; /* Ajusta a largura do bloco contato */
    }

    .emailContainer {
      width: 320px; /* Ajuste fino no container de email */
    }
  }



  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 45%; /* Ajusta a largura */
    padding: 15px; /* Ajuste de padding */
    
    .contato {
      width: 80%; /* Ajuste de largura para o bloco contato */
    }

    .emailContainer {
      width: 300px; /* Ajuste de largura do container de email */
    }
  }
`;