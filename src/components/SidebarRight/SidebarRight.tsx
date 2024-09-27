import * as S from '../../styles/LayoutStyles';
import { CuboDireito, RetanguloDireito, RetanguloDireitoInferior} from '../SidebarRight/SidebarRight.styles';
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
