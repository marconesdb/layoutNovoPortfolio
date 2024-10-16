// App.tsx
import GlobalStyles from './styles/GlobalStyle';
import Header from './components/Header/Header';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import * as S from './styles/LayoutStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Container>
        <Header />
        <SidebarLeft />
        <Main />
        <SidebarRight />
        <Footer />
      </S.Container>
    </>
  );
}

export default App;
