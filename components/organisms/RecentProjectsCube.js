import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Cube from 'components/organisms/Cube';
import { sectiontitles } from 'assets/data/sectiontitles';
import { projects } from 'assets/data/projects';
import { uiSubs } from 'assets/data/uiSubs';

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ repeat: -1 });

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin-top: 4rem;
    margin-bottom: 5rem;
    align-self: flex-end;
    margin-right: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 2.5rem 3rem;
    margin-right: 6rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-right: 11rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 15rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  opacity: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.textPrimary};
  text-shadow: ${({ theme }) => `0 0 3px ${theme.color.textPrimaryShadow}`};
  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const RecentProjectsCube = () => {
  const router = useRouter();
  const { locale } = router;
  const title = sectiontitles?.[1]?.title?.[locale];
  const data = projects;
  const sectionId = sectiontitles?.[locale]?.[0]?.titleMenuId;

  const instrucionsRef = useRef(null);
  const [instructionVisible, setInstructionVisible] = useState(true);

  useEffect(() => {
    const animation = tl
      .to(instrucionsRef.current, {
        opacity: 1,
        duration: 0.25,
      })
      .to(instrucionsRef.current, {
        opacity: 0.1,
        duration: 0.25,
      })
      .to(instrucionsRef.current, {
        opacity: 1,
        duration: 0.25,
      })
      .to(instrucionsRef.current, {
        opacity: 1,
        duration: 1.5,
      })
      .to(instrucionsRef.current, {
        opacity: 0,
        duration: 0.25,
      });
    const st = ScrollTrigger.create({
      trigger: instrucionsRef.current,
      start: 'top 25%',
      end: 'buttom',
      animation,
    });
    return () => st.kill();
  });

  const handleDetailsClick = () => {
    router.push('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <section id={sectionId}>
      <Wrapper>
        <SectionHeading>{title}</SectionHeading>
        <StyledContainer>
          {instructionVisible && (
            <StyledParagraph ref={instrucionsRef}>
              {uiSubs?.rotateCube?.[locale]}
            </StyledParagraph>
          )}
          <Cube
            // data={data?.sort((a, b) => (moment(b.creationDate) - moment(a.creationDate))).slice(0, 6)}
            data={data?.slice(0, 6)}
            setInstructionVisible={setInstructionVisible}
          />
          <StyledButton variant="cta" onClick={handleDetailsClick}>
            {uiSubs?.moreProjects?.[locale]}
          </StyledButton>
        </StyledContainer>
      </Wrapper>
    </section>
  );
};

export default RecentProjectsCube;
