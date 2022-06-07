import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import Button from 'components/atoms/Button';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { sectiontitles } from 'assets/data/sectiontitles';
import { solutionExamples } from 'assets/data/SolutionExamples';
import { uiSubs } from 'assets/data/uiSubs';
gsap.registerPlugin(ScrollTrigger);

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: row;
    justify-content: end;
    margin-right: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    margin-right: 5rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-right: 10rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 14rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    padding: 2.5rem 3rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.s};
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
      <ButtonContainer>
        <Link href="/solutions" passHref>
          <StyledButton >
            {uiSubs?.ourSolutions?.[locale]}
          </StyledButton>
        </Link>
        <Link href="/projects" passHref>
          <StyledButton >
            {uiSubs?.ourProjects?.[locale]}
          </StyledButton>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SolutionExamples;
