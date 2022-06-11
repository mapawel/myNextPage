import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import ButtonLink from 'components/atoms/ButtonLink';
import BottomButtons from 'components/molecules/bottomButtons';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { sectiontitles } from 'assets/data/sectiontitles';
import { solutionExamples } from 'assets/data/SolutionExamples';
import { uiSubs } from 'assets/data/uiSubs';
gsap.registerPlugin(ScrollTrigger);

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: row;
    justify-content: space-between;
    margin-right: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    justify-content: end;
    margin-right: 5rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    justify-content: space-between;
    margin-right: 10rem;
    width: 70rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 14rem;
  }
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    padding: 2.5rem 3rem;
  }
`;

const SolutionExamples = () => {
  const { locale } = useRouter();

  const title = sectiontitles?.[3]?.title?.[locale];
  const sectionId = sectiontitles?.[3]?.titleMenuId;

  return (
    <Wrapper as="section" id={sectionId}>
      <SectionHeading>{title}</SectionHeading>
      <List
        nr={1}
        title={solutionExamples?.title?.[locale]}
        content={solutionExamples?.listed}
      />
      <BottomButtons
        noDecoration
        linkOne={{
          href: '/solutions',
          label: uiSubs?.ourSolutions,
        }}
        linkTwo={{
          href: '/projects',
          label: uiSubs?.ourProjects,
        }}
      />
    </Wrapper>
  );
};

export default SolutionExamples;
