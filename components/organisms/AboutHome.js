import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import TwoColumns from 'components/templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import IconInfo from 'components/atoms/IconInfo';
import TextBox from 'components/molecules/TextBox';
import ButtonLink from 'components/atoms/ButtonLink';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { sectiontitles } from 'assets/data/sectiontitles';
import { aboutHome } from 'assets/data/aboutHome';
import { aboutHomeIcons } from 'assets/data/aboutHomeIcons';
import { uiSubs } from 'assets/data/uiSubs';
import sectionHeadingAnim from 'gsapanims/sectionHeadingAnim';

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

const StyledButtonLink = styled(ButtonLink)`
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

  const headingRef = useRef(null);
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

  useEffect(() => {
    sectionHeadingAnim(headingRef.current);
  });

  return (
    <StyledWrapper as="section" id={sectionId}>
      <SectionHeading ref={headingRef}>{title}</SectionHeading>
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
      <Link href="/about" passHref>
        <StyledButtonLink>{uiSubs?.aboutMore?.[locale]}</StyledButtonLink>
      </Link>
    </StyledWrapper>
  );
};

export default AboutHome;
