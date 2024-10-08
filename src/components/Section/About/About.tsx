
import { 
  Container, 
  ContainerAbout, 
  ContainerDireito, 
  ContainerEsquerdo, 
  ContentWrapper,
  Line,
  Title, 
   
} from '../About/About.styles';
import { ContactButton } from '../Home/Home.styles';

const About = () => {
  return (
    <Container id="#">
      <ContentWrapper>
      <Title>
          <span>#</span>
          <p>Sobre mim</p>
          <Line />
        </Title>
    <ContainerAbout>
    <ContainerEsquerdo>
      <p className='texto-titulo'>Olá ! <br/> <span className='estilo-p'>Eu sou o Marcone S. de Brito. </span></p>
        <p  className='p-1'> <span className='recuo'>Um</span> desenvolvedor Front-end e Analista de Sistemas, entusiasta de tecnologia, com uma sólida formação acadêmica e ampla experiência prática. Possuo pós-graduação em Big Data, Ciência de Dados, Machine Learning e Inteligência Artificial, e estou localizado em Montes Claros - MG, Brasil.  
        <p className='p-1'><span className='recuo'>Tenho</span> experiência na criação de sites responsivos e na transformação de ideias em experiências web modernas e envolventes. Meu foco é desenvolver interfaces intuitivas e acessíveis, garantindo uma navegação fluida e agradável para os usuários.</p>
        <p className='p-2'><span className='recuo'>Nos</span> últimos anos, trabalhei com uma variedade de clientes, ajudando-os a construir uma presença online sólida e eficiente. Além de dominar HTML, CSS e JavaScript, estou constantemente atualizando meus conhecimentos em tecnologias emergentes e frameworks como React, para oferecer soluções inovadoras e de alta qualidade.</p>
        
        <p className='p-2'><span className='recuo'>Minha</span> paixão pelo desenvolvimento web vai além da codificação; também me esforço para entender as necessidades dos usuários e criar designs que ofereçam valor real. Estou comprometido com a melhoria contínua, sempre buscando aprender novas habilidades e técnicas para entregar resultados excepcionais em cada projeto.</p>
        </p>

         {/* Direcionar para a página que tem o curriculo online em HTML e CSS */}
      <a href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <ContactButton>Leia mais →</ContactButton>
      </a>
    </ContainerEsquerdo>
    <ContainerDireito>
    <div className='cubo1'>
        {/* Criação do cubo */}
        {[...Array(25)].map((_, index) => (
        <div key={index} className="dot"></div>
        ))}
    </div>

    <div className='cubo2'>
        {/* Criação do cubo */}
        {[...Array(25)].map((_, index) => (
        <div key={index} className="dot"></div>
        ))}
    </div>
    </ContainerDireito>
    </ContainerAbout>
    </ContentWrapper>
    </Container>
  );
};

export default About;