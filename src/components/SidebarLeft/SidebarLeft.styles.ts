import styled from 'styled-components';

export const ContainerSidebarLeft = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #282C33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
`;


export const SidebarLeft = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #282C33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 10cm;
  background-color: #fff;
  /* margin-bottom: 20px; */
  /* transform: translateY(-2150px); */

  @media (min-width:1201px) and (max-width:1400px) {
    margin-top: -65px;
  }


  @media (min-width: 1401px) { 
    margin-top: -100px;
  }


`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* transform: translateY(-2150px); */
`;

export const RetanguloEsquerdoInferior = styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  border-left: none;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(500px);

  @media (min-width: 1640px) {
    height: 200px;
    left: 30px;
  }
`;

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
    transform: translateY(-360px);
  }

  .cubo2 {
    top: 120px;
    transform: translateY(820px);
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }
`;