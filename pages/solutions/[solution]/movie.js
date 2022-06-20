import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { uiSubs } from 'assets/data/uiSubs';
import { pageTites } from 'assets/data/pageTitles';
import BottomButtons from 'components/molecules/BottomButtons';
import { breakpoint } from 'breakpoints';
import { solutions } from 'assets/data/solutions';

const MovieContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding: 33% 0;
  margin: 0 auto 10rem;
  border: 2px solid ${({ theme }) => theme.color.primary};
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 120rem;
    height: calc(120rem * 0.66);
    padding: 0;
  }
`;

const StyledHeading = styled.h1`
  margin: 0 0 7rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.textSecondary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledSubheading = styled.h2`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.textPrimary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 5rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledPar = styled.p`
  margin-left: 3rem;
  margin-bottom: 5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const DetailSolutionPageMovie = ({
  selectedSolution: { title, shortDescription },
}) => {
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
          <StyledHeading>{title?.[locale]}</StyledHeading>
          <MovieContainer>
            <iframe
              src="https://www.youtube.com/embed/zU54-g1UKek?start=0&autoplay=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3"
              title="PRODUCTS REGISTRATION + ADMIN PANEL - example of a tool communicating customers with business"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </MovieContainer>
          <StyledSubheading>{uiSubs?.brief?.[locale]}</StyledSubheading>
          <StyledPar>{shortDescription?.[locale]}</StyledPar>
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

export function getStaticPaths({ locales }) {
  let paths = [];

  solutions.forEach(({ slug }) => {
    for (const locale of locales) {
      paths.push({
        params: { solution: slug },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { solution } = params || {};
  const selectedSolution = solutions.find(({ slug }) => slug === solution);

  return {
    props: {
      selectedSolution,
    },
  };
}
