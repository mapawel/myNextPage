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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const imgAnim = keyframes`
0% {
  opacity: .3;
}
20% {
  opacity: 0.1;
}
40% {
  opacity: 0.5;
}
55% {
  opacity: 0.3;
}
70% {
  opacity: 0.7;
}
85% {
  opacity: 0.6;
}
100% {
  opacity: 1;
}
`;

const StyledTwoColumns = styled(TwoColumns)`
  position: relative;
  z-index: 0;
  min-height: 100vh;
`;

const StyledHeaderTxt = styled.h1`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-shadow: -2px 2px 6px black;
  font-weight: 700;
  line-height: 1.05;

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

const StyledHeaderTxtSpan = styled(StyledHeaderTxt)`
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: ${({ theme }) => theme.fontSize.s};
  margin-bottom: ${({ theme }) => theme.fontSize.xxs};
  text-shadow: ${({ theme }) => `0 0 4px ${theme.color.textPrimaryShadow}`};

  @media screen and (min-width: ${breakpoint.M}) {
    margin-top: ${({ theme }) => theme.fontSize.m};
    margin-bottom: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledTxtBox = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  padding-top: 4rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${breakpoint.S}) {
    height: 100vh;
    padding-top: 0rem;
    width: 55%;
  }
  @media screen and (min-width: ${breakpoint.M}) {
    width: 70%;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
  }
`;

const StyledLogo = styled.img`
  width: 95%;
  margin-top: auto;
  margin-bottom: -40vh;
`;

const StyledHeadingContainer = styled.div`
  margin-top: 7vh;
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
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;
  opacity: 0;

  @media screen and (min-width: ${breakpoint.S}) {
    width: 45%;
    margin-bottom: 5vh;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 30%;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 25%;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`;

const StyledHeaderImg = styled.img`
  max-width: 50%;
  z-index: 1;
  animation: ${imgAnim} 0.5s 4s both;

  @media screen and (min-width: ${breakpoint.S}) {
    max-width: 55%;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    max-width: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 1rem 5rem;
  order: -1;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.xxs};

  @media screen and (min-width: ${breakpoint.S}) {
    margin-bottom: 8%;
    margin-left: -15rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    margin-left: 1rem;
    margin-bottom: 5rem;
    order: 1;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    order: 1;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-top: 10rem;
  }
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  z-index: -1;
  transform: rotate(15deg);
  width: 300px;
  height: 300px;
  top: -10%;
  left: 25%;
  opacity: 0;

  @media screen and (min-width: ${breakpoint.S}) {
    top: -30%;
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

const Header = () => {
  const { locale } = useRouter();
  const headinTxtRef = useRef(null);
  const triangleRef = useRef(null);
  const imgRef = useRef(null);
  const logoRef = useRef(null);

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
      );

    gsap.fromTo(
      triangleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5,
      }
    );
  }, []);

  const handleClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${sectionId}`, offsetY: -30 },
    });
  };

  return (
    <header id="headerSection">
      <Wrapper>
        <StyledTwoColumns>
          <StyledTxtBox>
            <StyledTriangle ref={triangleRef} />
            <StyledLogo ref={logoRef} src="./devconelogo.svg" />
            <StyledHeadingContainer ref={headinTxtRef}>
              <StyledHeaderTxt>
                {headings?.[locale]?.[0]}
                <br />
              </StyledHeaderTxt>
              <StyledHeaderTxtSpan>{headings?.[locale]?.[1]}</StyledHeaderTxtSpan>
              <StyledHeaderTxt as="">{headings?.[locale]?.[2]}</StyledHeaderTxt>
            </StyledHeadingContainer>
          </StyledTxtBox>
          <StyledImgBox ref={imgRef}>
            {/* <StyledHeaderImg
              src={headerImageUrl && headerImageUrl}
              alt="Pawel DevPav owner's photo"
            /> */}
            <StyledButton onClick={handleClick}>
            {uiSubs?.contactBtn?.[locale]}
            </StyledButton>
          </StyledImgBox>
        </StyledTwoColumns>
      </Wrapper>
    </header>
  );
};

export default Header;
