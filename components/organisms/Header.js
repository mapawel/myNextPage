import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import TwoColumns from 'components/templates/TwoColumns';
import Triangle from 'components/atoms/Triangle';
import Button from 'components/atoms/Button';
import { gsap, Power3 } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { breakpoint } from 'breakpoints';
import { headings } from 'assets/data/headings';
import { uiSubs } from 'assets/data/uiSubs';
import { myBlurData } from 'helpers/myBlurData';
import mainImg from 'public/headerImage.jpg';
import { sectiontitles } from 'assets/data/sectiontitles';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const StyledTwoColumns = styled(TwoColumns)`
  flex-direction: row;
  position: relative;
  z-index: 0;
  min-height: 100vh;
`;

const StyledHeaderTxt = styled.h1`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-shadow: -2px 2px 6px black;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.05;

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media screen and (min-width: ${breakpoint.L}) {
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const StyledHeaderTxtSpan = styled(StyledHeaderTxt)`
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: ${({ theme }) => theme.fontSize.s};
  margin-bottom: ${({ theme }) => theme.fontSize.s};
  text-shadow: ${({ theme }) => `0 0 4px ${theme.color.textPrimaryShadow}`};

  @media screen and (min-width: ${breakpoint.M}) {
    margin-top: ${({ theme }) => theme.fontSize.m};
    margin-bottom: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledTxtBox = styled.div`
  min-height: 100vh;
  z-index: 1;
  width: 100%;
  padding-top: 4rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 8rem;

  @media screen and (min-width: ${breakpoint.S}) {
    padding-top: 0rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 100vh;
    width: 55%;
  }
  @media screen and (min-width: ${breakpoint.M}) {
    width: 70%;
  }
`;

const StyledLogo = styled.img`
  width: 95%;
  margin-top: 20%;
  margin-bottom: -40vh;

  @media screen and (min-width: ${breakpoint.L}) {
    margin-top: 40%;
  }
`;

const StyledHeadingContainer = styled.div`
  margin-top: 11vh;
  margin-bottom: auto;
  padding-left: 2rem;

  @media screen and (min-width: ${breakpoint.M}) {
    padding-left: 4rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    padding-left: 8rem;
  }
`;

const StyledImgBox = styled.div`
  position: relative;
  width: 1%;
  height: 100vh;
  opacity: 1;

  @media screen and (min-width: ${breakpoint.M}) {
    width: 30%;
  }
`;

const StyledButton = styled(Button)`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin: 4rem 0 6rem;
  align-self: flex-end;
  opacity: 0;
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  z-index: -1;
  transform: rotate(15deg);
  width: 300px;
  height: 300px;
  top: 60%;
  left: 25%;
  opacity: 0;

  @media screen and (min-width: ${breakpoint.S}) {
    top: 20%;
    width: 500px;
    height: 500px;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 800px;
    height: 800px;
    top: 0;
    left: 70%;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    left: 35%;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    width: 1000px;
    height: 1000px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100vh * 1.5);
  margin-left: -35vw;

  @media screen and (min-width: ${breakpoint.M}) {
    margin-left: 0;
  }
`;

const Blend = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(90deg, #010201f6 0%, rgba(0, 0, 0, 0.6) 60%),
    linear-gradient(180deg, #01020100 80%, #010201f6 100%);
`;

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const headinTxtRef = useRef(null);
  const triangleRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const logoRef = useRef(null);
  const sectionId = sectiontitles?.[0]?.titleMenuId;

  const hancleClick = () => {
    router.push(`#${sectiontitles?.[1]?.titleMenuId}`);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
      }
    )
      .to(logoRef.current, {
        ease: Power3.easeOut,
        delay: 1,
        duration: 0.5,
        marginTop: '10%',
        marginBottom: 0,
        width: '70%',
      })
      .fromTo(
        headinTxtRef.current.children,
        { x: '+=200', opacity: 0 },
        {
          x: '0',
          opacity: 1,
          stagger: 0.4,
          duration: 0.3,
        }
      )
      .fromTo(
        imgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
        }
      )
      .to(btnRef.current, {
        opacity: 1,
        delay: -1.5,
        duration: 0.5,
      });

    gsap.fromTo(
      triangleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5,
      }
    );
  }, []);

  return (
    <header id="headerSection">
      <Wrapper id={sectionId}>
        <StyledTwoColumns>
          <StyledTxtBox>
            <StyledTriangle ref={triangleRef} />
            <StyledLogo ref={logoRef} src="/devconelogo.svg" />
            <StyledHeadingContainer ref={headinTxtRef}>
              <StyledHeaderTxt>
                {headings?.[locale]?.[0]}
                <br />
              </StyledHeaderTxt>
              <StyledHeaderTxtSpan>
                {headings?.[locale]?.[1]}
              </StyledHeaderTxtSpan>
              <StyledHeaderTxt as="">{headings?.[locale]?.[2]}</StyledHeaderTxt>
            </StyledHeadingContainer>
            <StyledButton ref={btnRef} onClick={hancleClick}>
              {uiSubs?.welcomeBtn?.[locale]}
            </StyledButton>
          </StyledTxtBox>
          <StyledImgBox ref={imgRef}>
            <ImageWrapper>
              <Image
                src={mainImg}
                alt=" "
                layout="fill"
                placeholder="blur"
                blurDataURL={myBlurData}
                priority={true}
              />
              <Blend />
            </ImageWrapper>
          </StyledImgBox>
        </StyledTwoColumns>
      </Wrapper>
    </header>
  );
};

export default Header;
