import * as S from '../../styles/LayoutStyles';
import { CuboDireito} from '../SidebarRight/SidebarRight.styles';
// import {RetanguloDireito} from '../SidebarRight/SidebarRight.styles';
// import {RetanguloDireitoInferior} from '../SidebarRight/SidebarRight.styles';
function SidebarRight() {

  return (
    <S.SidebarRight>
      {/* <RetanguloDireito>
      </RetanguloDireito> */}
      {/* <RetanguloDireitoInferior>
      </RetanguloDireitoInferior> */}
      <CuboDireito>
         {/* Criação do cubo */}
      {/* <div className='cubo1'>
        {[...Array(20)].map((_, index) => (
        <div key={index} className="dot"></div>
        ))}
      </div> */}
      </CuboDireito>
    </S.SidebarRight>

     );
}

export default SidebarRight;
