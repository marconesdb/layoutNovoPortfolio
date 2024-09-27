// StyledComponents.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar-left header sidebar-right'
    'sidebar-left main sidebar-right'
    'footer footer footer';
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 60px 1fr 60px;
  height: 100vh;
  overflow-y: auto; /* Controle da rolagem no Container */
  box-sizing: border-box;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'main'
      'footer';
  }

  @media (min-width: 576px) {
    grid-template-columns: 150px 1fr 150px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 180px 1fr 180px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 200px 1fr 200px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 220px 1fr 220px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 250px 1fr 250px;
  }
`;

export const Header = styled.header`
  
  grid-area: header;
  background-color: #2c3036;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 20px;
  width: 100%; /* Ocupa 100% do espaço da área definida */
  height: 80px; /* Definindo uma altura fixa */
  
`;

export const SidebarLeft = styled.aside`
  grid-area: sidebar-left;
  background-color: #282C33; 
  /* color: white; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const SidebarRight = styled.aside`
  grid-area: sidebar-right;
  background-color: #282C33;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Main = styled.main`
  grid-area: main;
  background-color: #388e3c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box; /* Garante que padding seja incluído nas dimensões */
  margin-top: 10px;


  section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%; /* Garante que o conteúdo não ultrapasse */
    flex-grow: 0; /* Permite que as seções cresçam, mas sem gerar overflow */
    flex-shrink: 0; /* Mantém o tamanho mínimo */
  }
`;

// Estilo para o Footer
export const Footer = styled.footer`
  grid-area: footer;
  /* background-color: #2c3036; */
  /* background-color: #282C33;  */
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza todos os itens no footer */
  width: 100%;
  padding: 20px; /* Adiciona um padding para espaçamento */
  overflow: hidden; /* Evita rolagem no footer */
  height: 150px; /* Altura fixa para o footer */
  border-top: 1px solid #ABB2BF;
`;
