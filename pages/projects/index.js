import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { breakpoint } from 'breakpoints';
import { sectiontitles } from 'assets/data/sectiontitles';
import Grid2Cols from 'components/templates/Grid2Cols';
import Button from 'components/atoms/Button';
import ProjectBox from 'components/molecules/ProjectBox';
import { projects } from 'assets/data/projects';
import { uiSubs } from 'assets/data/uiSubs';
import Paragraph from 'components/atoms/Paragraph';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media screen and (min-width: ${breakpoint.M}) {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 2.5rem 3rem;
    margin-left: 6rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-left: 11rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-left: 15rem;
  }
  `;

const StyledParagraph = styled(Paragraph)`
  color: ${({theme}) => theme.color.textPrimary};
  margin-top: 2rem;
`

const ProjectsPage = () => {
  const router = useRouter();
  const { locale } = router;
  const title = sectiontitles?.[1]?.title?.[locale];

  const handleHomeClick = () => {
    router.push('/');
  };

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
          <StyledContainer>
            <SectionHeading nomargin>{title}</SectionHeading>
            <StyledButton onClick={handleHomeClick}>{uiSubs?.home?.[locale]}</StyledButton>
            <StyledParagraph>
              {uiSubs?.clickForDetails?.[locale]}
            </StyledParagraph>
          </StyledContainer>

          <Grid2Cols>
            {projects
              ?.map(({ slug, title, images, description, code, live }) => (
                <ProjectBox
                  key={slug}
                  slug={slug}
                  title={title}
                  images={images}
                  description={description}
                  code={code}
                  live={live}
                />
              ))}
          </Grid2Cols>
        </Wrapper>
      </main>
    </>
  );
};

export default ProjectsPage;
