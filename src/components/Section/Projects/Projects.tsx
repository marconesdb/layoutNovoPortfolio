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
import Image1 from '../../../assets/images/img-projetos/Laços de Amor 1.png';
import Image2 from '../../../assets/images/img-projetos/Image.png';
import Image3 from '../../../assets/images/img-projetos/Karine Cevalles 2.png';
import Image4 from '../../../assets/images/img-projetos/desktop-preview.jpg';
import Image5 from '../../../assets/images/img-projetos/Landpage.png';
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
    subtitle: 'project.laçosDeAmor.subtitle', // Chave de tradução
    title: 'project.laçosDeAmor.title',
    description: 'project.laçosDeAmor.description',
    githubLink: 'https://github.com/marconesdb/site-lacosdeamor',
    externalLink: 'https://site-lacosdeamor.vercel.app/',
  },
  {
    image: Image2,
    subtitle: 'project.solarDeJesus.subtitle',
    title: 'project.solarDeJesus.title',
    description: 'project.solarDeJesus.description',
    githubLink: 'https://github.com/marconesdb/solardejesus-ecommerce',
    externalLink: 'https://solardejesus-ecommerce.vercel.app/',
  },
  {
    image: Image3,
    subtitle: 'project.karinaCevalles.subtitle',
    title: 'project.karinaCevalles.title',
    description: 'project.karinaCevalles.description',
    githubLink: 'https://github.com/marconesdb/site-karinaCevalles',
    externalLink: 'https://site-karina-cevalles.vercel.app/',
  },
  {
    image: Image4,
    subtitle: 'project.ManageLandingPage.subtitle',
    title: 'project.ManageLandingPage.title',
    description: 'project.ManageLandingPage.description',
    githubLink: 'https://github.com/marconesdb/ManageLandingpage',
    externalLink: 'https://marconesdb.github.io/ManageLandingpage/',
  },
  {
    image: Image5,
    subtitle: 'project.tomsJazzSchool.subtitle',
    title: 'project.tomsJazzSchool.title',
    description: 'project.tomsJazzSchool.description',
    githubLink: 'https://github.com/marconesdb/landPageOneBitCode',
    externalLink: 'https://marconesdb.github.io/landPageOneBitCode/',
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
