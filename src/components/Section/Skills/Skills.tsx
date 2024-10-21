import { useTranslation } from 'react-i18next'; // Importar o hook de tradução
import { 
  Container, 
  ContentWrapper,
  IconeLogo,
  ImagensInferiorContainer,
  ImagensSuperiorContainer, 
} from '../Skills/Skills.styles';

import {  
  Line, 
  MainContainer, 
  SkillsContainer, 
  Title 
} from './Skills.styles';

const Skills = () => {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <Container id="skills">
      <ContentWrapper>
        <Title>
          <span>#</span>
          <p>{t('skills.title')}</p> {/* Traduzindo o título "Skills" */}
          <Line />
        </Title>
        <MainContainer>
          <div>
            <ImagensSuperiorContainer>
              <div className='cubo1'>
                {[...Array(25)].map((_, index) => (
                  <div key={index} className="dot"></div>
                ))}
              </div>
              <div className='quadrado1'></div>
            </ImagensSuperiorContainer>
            <ImagensInferiorContainer>
              <IconeLogo>
                <div>
                  <div className='RetanguloInferior'>
                    <div className='RetanguloInferiorMenor'></div>
                  </div>
                  <div className='RetanguloSuperior'>
                    <div className='RetanguloSuperiorMenor'></div>
                  </div>
                </div>
              </IconeLogo>
              <div className='cubo2'>
                {[...Array(25)].map((_, index) => (
                  <div key={index} className="dot"></div>
                ))}
              </div>
              <div className='quadrado2'></div>
            </ImagensInferiorContainer>
          </div>

          <SkillsContainer>
            <div className='Container'>
              <div className="Container Content">
                {/* Coluna 1 */}
                <div className="coluna coluna1">
                  <div className="Skills-1">
                    <p className='p-1'>{t('skills.categories.languages')}</p> {/* Traduzindo "Linguagens" */}
                    <p className='p-texto'>{t('skills.items.languages')}</p> {/* Traduzindo as linguagens */}
                  </div>
                </div>

                {/* Coluna 2 */}
                <div className="coluna coluna2">
                  <div className="Skills-2">
                    <p className='p-2'>{t('skills.categories.databases')}</p> {/* Traduzindo "Databases" */}
                    <p className='p-texto'>{t('skills.items.databases')}</p> {/* Traduzindo os bancos de dados */}
                  </div>
                  <div className="Skills-3">
                    <p className='p-3'>{t('skills.categories.others')}</p> {/* Traduzindo "Outros" */}
                    <p className='p-texto'>{t('skills.items.others')}</p> {/* Traduzindo outros itens */}
                  </div>
                </div>

                {/* Coluna 3 */}
                <div className="coluna coluna3">
                  <div className="Skills-4">
                    <p className='p-4'>{t('skills.categories.tools')}</p> {/* Traduzindo "Ferramentas" */}
                    <p className='p-texto'>{t('skills.items.tools')}</p> {/* Traduzindo ferramentas */}
                  </div>
                  <div className="Skills-5">
                    <p className='p-5'>{t('skills.categories.frameworks')}</p> {/* Traduzindo "Frameworks" */}
                    <p className='p-texto'>{t('skills.items.frameworks')}</p> {/* Traduzindo frameworks */}
                  </div>
                </div>
              </div>
            </div>
          </SkillsContainer>
        </MainContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Skills;
