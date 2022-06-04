import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import TwoColumns from 'components/templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import IconInfo from 'components/atoms/IconInfo';
import TextBox from 'components/molecules/TextBox';
import Button from 'components/atoms/Button';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { sectiontitles } from 'assets/data/sectiontitles';
import { aboutHome } from 'assets/data/aboutHome';
import { aboutHomeIcons } from 'assets/data/aboutHomeIcons';
import { uiSubs } from 'assets/data/uiSubs';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const StyledTwoColumns = styled(TwoColumns)`
  margin: 2rem 0 5rem;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: column;
  }
  @media screen and (min-width: ${breakpoint.L}) {
    flex-direction: row;
    align-items: center;
  }
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint.L}) {
    order: ${({ invert }) => (invert ? -1 : null)};
    padding: ${({ invert }) => (invert ? '0 10rem 0 0' : '0 0 0 10rem')};
  }
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
    padding: 2.5rem 3rem;
    margin-right: 6rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-right: 11rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-right: 15rem;
  }
`;

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

const AboutHome = () => {
  const router = useRouter();
  const { locale } = router;
  const title = sectiontitles?.[2]?.title?.[locale];
  const sectionId = sectiontitles?.[2]?.titleMenuId;

  const iconsArrRef = useRef(null);

  useEffect(() => {
    const iconsAnimTarget = (triggerElement) => ({
      x: '0',
      opacity: 1,
      stagger: 0.35,
      duration: 0.4,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 50%',
      },
    });

    gsap.fromTo(
      iconsArrRef.current.children,
      { x: '+=500', opacity: 0 },
      iconsAnimTarget(iconsArrRef.current)
    );
  });
  return (
    <StyledWrapper as="section" id={sectionId}>
      <SectionHeading>{title}</SectionHeading>
      <StyledTwoColumns>
        <TextBox data={aboutHome} rect />
        <StyledColumn ref={iconsArrRef}>
          {aboutHomeIcons?.map((element) => (
            <IconInfo
              key={element.id}
              title={element.title}
              content={element.content}
              icon={element.icon}
            />
          ))}
        </StyledColumn>
      </StyledTwoColumns>
      <StyledButton variant="cta" onClick={() => router.push('/about')}>
        {uiSubs?.aboutMore?.[locale]}
      </StyledButton>
    </StyledWrapper>
  );
};

export default AboutHome;
