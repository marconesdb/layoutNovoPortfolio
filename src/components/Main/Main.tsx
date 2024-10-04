import * as S from '../../styles/LayoutStyles';
import Home from '../Section/Home/Home';
import Citacao from '../Section/Citacao/Citacao'
import Projects from '../Section/Projects/Projects';
import Skills from '../Section/Skills/Skills';
import About from '../Section/About/About';

function Main() {
  return (
    <S.Main>
     <Home /> 
     <Citacao/>
     <Projects/>
      <Skills/>
      <About/>
       {/* <Contact/>
     <Formulario/> */}
    </S.Main>
  );
}

export default Main;

