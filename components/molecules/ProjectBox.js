import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import ButtonLink from 'components/atoms/ButtonLink';
import Rect from 'components/atoms/Rect';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { myBlurData } from 'helpers/myBlurData';
import { uiSubs } from 'assets/data/uiSubs';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const StyledContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 34rem;
  flex-shrink: 0;
  flex-grow: 0;
  opacity: 1;

  @media screen and (min-width: ${breakpoint.XS}) {
    max-width: 42rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    max-width: 47rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    max-width: 66rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    max-width: 34rem;
    :nth-child(even) {
      bottom: -50rem;
    }
  }

  @media screen and (min-width: 1800px) {
    max-width: 62rem;
  }
`;

const StyledRect = styled(Rect)`
  position: absolute;
  width: 54rem;
  height: 54rem;
  top: 0;
  left: -5rem;
  transform: rotate(5deg);

  @media screen and (min-width: ${breakpoint.S}) {
    width: 58rem;
    height: 58rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 76rem;
    height: 76rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    left: -10rem;
    width: 54rem;
    height: 54rem;
  }

  @media screen and (min-width: 1800px) {
    left: -10rem;
    width: 76rem;
    height: 76rem;
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  opacity: 1;
  transition: opacity 0.3s;
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 390px) {
    font-size: 3.4rem;
  }

  @media screen and (min-width: ${breakpoint.XS}) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    margin-bottom: 2rem;
    font-size: 4.8rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: 6.8rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media screen and (min-width: 1800px) {
    font-size: 6.8rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  opacity: ${({ isToolVisible }) => (isToolVisible ? 0 : 1)};
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media screen and (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  width: 100%;
  height: 0;
  padding: 28% 0;

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    transition: opacity 0.2s;
  }

  :nth-child(1),
  :nth-child(3) {
    transition: transform 0.2s;
  }

  :nth-child(1) {
    transform: translate(10%, 0);
    z-index: 5;
  }

  :nth-child(2) {
    transform: translate(0, -50%);
    z-index: 3;
  }

  :nth-child(3) {
    transform: translate(-10%, -100%);
  }

  @media screen and (min-width: ${breakpoint.M}) {
    :nth-child(1) {
      transform: translate(10%, 0);
    }

    :nth-child(2) {
      transform: translate(0, -65%);
    }

    :nth-child(3) {
      transform: translate(-10%, -130%);
    }
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-left: 0;

    :nth-child(1) {
      transform: translate(10%, 0);
      z-index: 5;
    }

    :nth-child(2) {
      transform: translate(0, -50%);
      z-index: 3;
    }

    :nth-child(3) {
      transform: translate(-10%, -100%);
    }
  }
`;

const StyledImgBox = styled.div`
  position: relative;
  width: 86%;
  margin-left: 7%;
  z-index: 0;
  height: 34rem;
  margin-bottom: 2rem;
  cursor: pointer;

  :hover > ${ImageWrapper}::after {
    opacity: 0;
  }

  :hover > ${ImageWrapper}:nth-child(1) {
    transform: translate(-10%, -5%);
  }
  :hover > ${ImageWrapper}:nth-child(3) {
    transform: translate(10%, -75%);
  }

  @media screen and (min-width: ${breakpoint.XS}) {
    height: 41rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    height: 45rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 54rem;

    :hover > ${ImageWrapper}:nth-child(3) {
      transform: translate(10%, -110%);
    }
  }

  @media screen and (min-width: ${breakpoint.L}) {
    height: 37rem;
    width: 100%;
    margin-left: 0;

    :hover > ${ImageWrapper}:nth-child(3) {
      transform: translate(10%, -75%);
    }
  }

  @media screen and (min-width: 1800px) {
    width: 84%;
    height: 58rem;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0;
`;

const StyledButtonLink = styled(ButtonLink)`
  margin: 2rem 0;
`;

const StyledToolBox = styled.div`
  position: absolute;
  width: 54rem;
  height: 54rem;
  top: 0;
  left: -5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 13rem;
  border: ${({ theme }) => `1px solid ${theme.color.textPrimary}`};
  background-color: #000000e2;
  transform: ${({ isToolVisible }) =>
    isToolVisible ? 'rotate(5deg) scale(1)' : 'rotate(5deg) scale(0)'};
  transition: transform 0.3s;

  @media screen and (max-width: 439px) {
    padding: 0 18rem 0 8rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    width: 58rem;
    height: 58rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 76rem;
    height: 76rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    left: -10rem;
    width: 54rem;
    height: 54rem;
  }

  @media screen and (min-width: 1800px) {
    left: -10rem;
    width: 76rem;
    height: 76rem;
  }
`;

const StyledButtonBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-5deg);
`;

const StyledStandardButton = styled.button`
  position: absolute;
  top: 4rem;
  right: 0;
  width: 6rem;
  height: 6rem;
  background: none;
  border: none;
  cursor: pointer;
  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.color.textPrimary};
    opacity: 1;
    transition: opacity 0.3s;
  }
  ::after {
    transform: rotate(45deg);
  }
  ::before {
    transform: rotate(-45deg);
  }
  :hover::after,
  :hover::before {
    opacity: 0.5;
  }
`;

const ProjectBox = ({ slug, title, images, description, live }) => {
  const router = useRouter();
  const { locale } = router;
  const [isToolVisible, setToolVisible] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
      },
      {
        y: '+=100',
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <StyledContainer ref={containerRef} onClick={() => setToolVisible(true)}>
      <StyledHeading>{title?.[locale]?.toUpperCase()}</StyledHeading>
      <StyledImgBox>
        {images?.length !== 0 &&
          images?.slice(0, 3).map(({ id, img }, index) => (
            <ImageWrapper key={id}>
              <Image
                src={img}
                alt={`image nr ${index + 1} of project: ${title}`}
                layout="fill"
                placeholder="blur"
                sizes={`(max-width: ${breakpoint.L}) 70vw, (max-width: ${breakpoint.XL}) 30vw, 20vw`}
                // priority={true}
              />
            </ImageWrapper>
          ))}
      </StyledImgBox>
      <StyledParagraph isToolVisible={isToolVisible}>
        {description}
      </StyledParagraph>
      <StyledRect />

      <StyledToolBox
        isToolVisible={isToolVisible}
        onMouseLeave={() => setToolVisible(false)}
      >
        <StyledButtonBox>
          <StyledStandardButton
            onClick={(e) => {
              e.stopPropagation();
              setToolVisible(false);
            }}
            aria-label="close toolbox"
          />
          <Link href={`/projects/${slug}`} passHref>
            <StyledButton variant="cta">
              {uiSubs?.details?.[locale]}
            </StyledButton>
          </Link>
          <StyledButtonLink
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            {uiSubs?.live?.[locale]}
          </StyledButtonLink>
        </StyledButtonBox>
      </StyledToolBox>
    </StyledContainer>
  );
};

ProjectBox.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
};

ProjectBox.defaultProps = {
  images: [],
};

export default ProjectBox;
