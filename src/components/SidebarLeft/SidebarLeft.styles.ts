import styled from 'styled-components';

// Estiliza o contêiner principal da Sidebar
export const SidebarLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

// Estiliza o contêiner central que agrupa VerticalLine e ImageContainer
export const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
`;

// Estiliza o traço vertical
export const VerticalLine = styled.div`
  width: 1px;
  height: 10cm;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-100%);
  margin-right:5px;
`;

// Contêiner para as imagens
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: absolute;
  bottom: 20px; // Ajuste conforme necessário
  transform: translateY(-100%);
`;

// Estiliza o retângulo inferior esquerdo
export const RetanguloEsquerdoInferior = styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  border-left: none;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: 1640px) {
    height: 200px;
    left: 30px;
  }
`;

// Estiliza os cubos
export const Cubo = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  .cubo1, .cubo2 {
    display: grid;
    grid-template-columns: repeat(5, 15px);
    grid-template-rows: repeat(5, 15px);
    gap: 5px;
    margin-bottom: 20px;
  }

  .cubo1 {
    top: 20px;
  }

  .cubo2 {
    top: 120px;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }
`;