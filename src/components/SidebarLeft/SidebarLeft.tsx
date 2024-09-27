import * as S from '../../styles/LayoutStyles';
import { VerticalLine, ImageContainer, RetanguloEsquerdoInferior, Cubo } from './SidebarLeft.styles';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SvgLink } from '../Header/Header.styles';

const SidebarLeft = () => {
  return (
    <S.SidebarLeft>
      <VerticalLine />
      <ImageContainer>
        <SvgLink href="https://novo-portifolio-eta.vercel.app/" target="_blank" rel="noopener noreferrer" />
        <SvgLink href="https://wa.me/5538992182727" target="_blank">
          <FaWhatsapp size={30} color="#fff" />
        </SvgLink>
        <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#fff" />
        </SvgLink>
        <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
          <FaLinkedin size={30} color="#fff" />
        </SvgLink>
      </ImageContainer>
      {/* <RetanguloEsquerdoInferior /> */}
      <Cubo>
        {/* <div className='cubo1'>
          {[...Array(25)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div> */}
      </Cubo>
      <Cubo>
        {/* <div className='cubo2'>
          {[...Array(20)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div> */}
      </Cubo>
    </S.SidebarLeft>
  );
}

export default SidebarLeft;
