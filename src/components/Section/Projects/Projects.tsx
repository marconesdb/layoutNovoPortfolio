import { useTranslation } from 'react-i18next'; // Importar o hook de tradução
import { 
  Container, 
  ContentWrapper, 
  Title, 
  Line, 
  Cards, 
  Card, 
  CardImage, 
  CardTitle, 
  CardText, 
  CardButtons, 
  CardSubtitle 
} from './Projects.styles';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image1 from '../../../assets/images/img-projetos/Positivus.jpg';
import Image2 from '../../../assets/images/img-projetos/desktop-design.jpg';
import Image3 from '../../../assets/images/img-projetos/trabalhadores.png';
import Image4 from '../../../assets/images/img-projetos/Ecofin.png';
import Image5 from '../../../assets/images/img-projetos/SaborEcia.png';
import Image6 from '../../../assets/images/img-projetos/Logo-JinStore.svg';

type Project = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  githubLink: string;
  externalLink: string;
};

const projects: Project[] = [
  {
    image: Image1,
    subtitle: 'project.Positivus.subtitle', // Chave de tradução
    title: 'project.Positivus.title',
    description: 'project.Positivus.description',
    githubLink: 'https://github.com/marconesdb/PositivusLandinpage',
    externalLink: 'https://positivus-landinpage.vercel.app',
  },
  {
    image: Image2,
    subtitle: 'project.InteractiveCardDetails.subtitle',
    title: 'project.InteractiveCardDetails.title',
    description: 'project.InteractiveCardDetails.description',
    githubLink: 'https://github.com/marconesdb/CreditCardForm',
    externalLink: 'https://marconesdb.github.io/CreditCardForm/',
  },
  
  {
    image: Image3,
    subtitle: 'project.Trabalhadores.subtitle',
    title: 'project.Trabalhadores.title',
    description: 'project.Trabalhadores.description',
    githubLink: 'https://github.com/marconesdb/trabalhadores_da_ultima_hora_final',
    externalLink: 'https://www.trabalhadoresdaultimahora.com.br/',
  },
  {
    image: Image4,
    subtitle: 'project.EcofinPage.subtitle',
    title: 'project.EcofinPage.title',
    description: 'project.EcofinPage.description',
    githubLink: 'https://github.com/marconesdb/ecofin_V3_GestorFinanceiroDomestico',
    externalLink: 'https://ecofin-v3-gestor-financeiro-domesti.vercel.app/',
  },
  {
    image: Image5,
    subtitle: 'project.SaborEcia.subtitle',
    title: 'project.SaborEcia.title',
    description: 'project.SaborEcia.description',
    githubLink: 'https://github.com/marconesdb/Sabor-Cia_Lanchonete',
    externalLink: 'https://sabor-cia-lanchonete.vercel.app/',
  },
  {
    image: Image6,
    subtitle: 'project.Ecommerce.subtitle',
    title: 'project.Ecommerce.title',
    description: 'project.Ecommerce.description',
    githubLink: 'https://github.com/marconesdb/ecommerce',
    externalLink: 'https://ecommerce-git-main-marconesbs-projects.vercel.app/',
  },
];

function ProjectCard({ image, subtitle, title, description, githubLink, externalLink }: Project) {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Card>
      <CardImage src={image} alt={`Imagem do ${t(title)}`} />
      <CardSubtitle>{t(subtitle)}</CardSubtitle> {/* Traduzindo subtítulo */}
      <CardText>
        <CardTitle>{t(title)}</CardTitle> {/* Traduzindo título */}
        {t(description)} {/* Traduzindo descrição */}
      </CardText>
      <CardButtons>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button>
            <FaGithub /> Github
          </button>
        </a>
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <button>
            <FaExternalLinkAlt /> Page
          </button>
        </a>
      </CardButtons>
    </Card>
  );
}

const Projects = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="projetos">
      <ContentWrapper>
        <Title>
          <span>#</span>
          <p>{t('projects.title')}</p> {/* Traduzindo o título da seção */}
          <Line />
        </Title>
        <Cards>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Cards>
      </ContentWrapper>
    </Container>
  );
};

export default Projects;
