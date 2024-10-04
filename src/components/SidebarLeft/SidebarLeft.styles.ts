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
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
`;

// Estiliza o traço vertical
export const VerticalLine = styled.div`

  width: 1px; /* Largura do traço */
  height: 10cm; /* Altura do traço */
  background-color: #fff; /* Cor do traço */
  margin-bottom: 20px; /* Espaço entre o traço e as imagens */
  transform: translateY(-2550px);
  gap: 10px; /* Espaço entre as imagens */
 
`;

// Contêiner para as imagens
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinha as imagens verticalmente */
  align-items: center;
  gap: 10px; /* Espaço entre as imagens */
  transform: translateY(-2250px);
  
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