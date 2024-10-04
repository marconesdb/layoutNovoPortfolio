import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import * as S from '../../styles/LayoutStyles';
import { SvgLink } from '../Header/Header.styles';
import { VerticalLine, ImageContainer, ContainerSidebarLeft, RetanguloEsquerdoInferior, Cubo } from './SidebarLeft.styles';
// import {  RetanguloEsquerdoInferior} from './SidebarLeft.styles';

const SidebarLeft = () => {
  return (
    <S.SidebarLeft>
    <ContainerSidebarLeft>
    <VerticalLine />
  <ImageContainer>
    {/* Suas imagens aqui */}
    <SvgLink href="https://novo-portifolio-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
          {/* Adicione aqui o ícone desejado para o seu portfólio, se necessário */}
        </SvgLink>
        <SvgLink href="https://wa.me/5538992182727" target="_blank">
          <FaWhatsapp size={30} color="#fff" /> {/* Ícone do WhatsApp */}
        </SvgLink>
        <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#fff" /> {/* Ícone do GitHub */}
        </SvgLink>
        <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
          <FaLinkedin size={30} color="#fff" /> {/* Ícone do LinkedIn */}
        </SvgLink>
  </ImageContainer>
  <RetanguloEsquerdoInferior />
  <Cubo>
    <div className="cubo1">
      {/* Dots para cubo1 */}
      <div className='cubo1'>
          {/* Criação do cubo */}
          {[...Array(25)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
    </div>
    <div className="cubo2">
      {/* Dots para cubo2 */}
      <div className='cubo2'>
          {/* Criação do cubo */}
          {[...Array(20)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
      </div>
    </div>
  </Cubo> 
    </ContainerSidebarLeft>

    </S.SidebarLeft>
  );
}

export default SidebarLeft;
