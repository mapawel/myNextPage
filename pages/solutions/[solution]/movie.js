import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { uiSubs } from 'assets/data/uiSubs';
import { pageTites } from 'assets/data/pageTitles';
import BottomButtons from 'components/molecules/BottomButtons';
import Paragraph from 'components/atoms/Paragraph';

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20rem;
`;

// Page under construction ! ! !

const DetailSolutionPageMovie = () => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{headSubs?.solutionDetailsMovie?.title?.[locale]}</title>
        <meta
          name="description"
          content={
            headSubs?.solutionDetailsMovie?.description?.[locale?.[locale]]
          }
        />
      </Head>
      <main>
        <Wrapper as="section">
          <SectionHeading nomargin component="span">
            {pageTites?.solutionDetailsMovie?.[locale]}
          </SectionHeading>
          <StyledParagraph>
            {locale === 'en'
              ? `
                A video showing how the described solution looks like in practice will be posted here in the near future.
                `
              : `
                Tu w niedalekiej przyszłości zostanie umieszczony filmik pokazujący jak w praktyce wygląda opisane rozwiązanie.
                `}
          </StyledParagraph>
          <BottomButtons
            linkOne={{
              href: '/',
              label: uiSubs?.home,
            }}
            linkTwo={{
              href: '/solutions',
              label: uiSubs?.ourSolutions,
            }}
          />
        </Wrapper>
      </main>
    </>
  );
};

export default DetailSolutionPageMovie;
