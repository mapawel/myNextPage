import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { sectiontitles } from 'assets/data/sectiontitles';
import Grid2Cols from 'components/templates/Grid2Cols';
import ProjectBox from 'components/molecules/ProjectBox';
import { projects } from 'assets/data/projects';
import { uiSubs } from 'assets/data/uiSubs';
import Paragraph from 'components/atoms/Paragraph';
import BottomButtons from 'components/molecules/BottomButtons';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.color.textPrimary};
`;

const ProjectsPage = () => {
  const router = useRouter();
  const { locale } = router;
  const title = sectiontitles?.[1]?.title?.[locale];

  return (
    <>
      <Head>
        <title>{headSubs?.projects?.title?.[locale]}</title>
        <meta
          name="description"
          content={headSubs?.projects?.description?.[locale]}
        />
      </Head>
      <main>
        <Wrapper as="section">
          <SectionHeading nomargin>{title}</SectionHeading>
          <StyledContainer>
            <StyledParagraph>
              {uiSubs?.clickForDetails?.[locale]}
            </StyledParagraph>
          </StyledContainer>
          <Grid2Cols>
            {projects?.map(
              ({ slug, title, images, description, code, live }) => (
                <ProjectBox
                  key={slug}
                  slug={slug}
                  title={title}
                  images={images}
                  description={description?.[locale]}
                  code={code}
                  live={live}
                />
              )
            )}
          </Grid2Cols>
          <BottomButtons
            linkOne={{
              href: '/',
              label: uiSubs?.home,
            }}
            linkTwo={{
              href: '/about',
              label: uiSubs?.about,
            }}
          />
        </Wrapper>
      </main>
    </>
  );
};

export default ProjectsPage;
