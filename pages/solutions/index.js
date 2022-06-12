import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import routes from 'routes';
import BottomButtons from 'components/molecules/BottomButtons';
import { uiSubs } from 'assets/data/uiSubs';
import SolutionBox from 'components/molecules/SolutionBox';
import { breakpoint } from 'breakpoints';
import { solutions } from 'assets/data/solutions';

const SolutionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-bottom: 25rem;

  @media screen and (min-width: ${breakpoint.M}) {
    gap: 12rem;
  }
  @media screen and (min-width: ${breakpoint.L}) {
    gap: 16rem;
  }
  @media screen and (min-width: 1800px) {
    gap: 20rem;
  }
`;

const SolutionsPage = () => {
  const { locale } = useRouter();
  const title = routes?.[3]?.name?.[locale];

  return (
    <>
      <Head>
        <title>{headSubs?.solutions?.title?.[locale]}</title>
        <meta
          name="description"
          content={headSubs?.solutions?.description?.[locale]}
        />
      </Head>
      <main>
        <Wrapper as="section">
          <SectionHeading nomargin>{title}</SectionHeading>
          <SolutionsContainer>
            {solutions?.length &&
              solutions?.map((solution) => (
                <SolutionBox
                key={solution?.slug}
                solution={solution}
                />
              ))}
          </SolutionsContainer>
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

export default SolutionsPage;
