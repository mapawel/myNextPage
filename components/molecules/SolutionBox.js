import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import ButtonLink from 'components/atoms/ButtonLink';
import Triangle from 'components/atoms/Triangle';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { uiSubs } from 'assets/data/uiSubs';
import { projects } from 'assets/data/projects';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.L}) {
    max-width: 50%;
    justify-content: space-between;
  }
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  width: 70rem;
  height: 70rem;
  top: -5rem;
  left: -15rem;
  transform: rotate(5deg);

  @media screen and (min-width: ${breakpoint.XS}) {
    top: -10rem;
    left: -10rem;
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  opacity: 1;
  transition: opacity 0.3s;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: auto;
  opacity: ${({ isToolVisible }) => (isToolVisible ? 0 : 1)};
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  width: 100%;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: ${breakpoint.M}) {
    max-width: none;
    flex-direction: row;
    align-items: end;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    flex-direction: column;
  }
`;

const ButtonsBox = styled.div`
  width: 100%;
  display: ${({ visibleOnLarge }) => (visibleOnLarge ? 'none' : 'flex')};
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem;

  @media screen and (min-width: 1800px) {
    ${({ visibleOnLarge }) =>
      !visibleOnLarge &&
      css`
        display: none;
      `}

    ${({ visibleOnLarge }) =>
      visibleOnLarge &&
      css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      `}
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media screen and (min-width: ${breakpoint.M}) {
    :nth-of-type(even) {
      & > ${ImgBox} > ${ButtonsBox} {
        order: -1;
      }
    }
  }

  @media screen and (min-width: ${breakpoint.L}) {
    flex-direction: row;
    align-items: stretch;
    gap: 6rem;
    :nth-of-type(even) {
      & > ${ImgBox} {
        order: -1;
        & > ${ButtonsBox} {
          order: 1;
        }
      }
    }
  }
`;

const SolutionBox = ({ solution }) => {
  const { locale } = useRouter();
  const { slug, title, shortDescription, images } = solution;

  const Links = ({ visibleOnLarge }) => (
    <ButtonsBox visibleOnLarge={visibleOnLarge}>
      <Link href={`/solutions/${slug}`} passHref>
        <ButtonLink>{uiSubs?.aboutMore?.[locale]}</ButtonLink>
      </Link>
      <Link href={`/solutions/${slug}/movie`} passHref>
        <ButtonLink>{uiSubs?.watchMovie?.[locale]}</ButtonLink>
      </Link>
    </ButtonsBox>
  );

  return (
    <ElementWrapper>
      <TextBox>
        <StyledHeading>{title?.[locale]}</StyledHeading>
        <StyledParagraph>{shortDescription?.[locale]}</StyledParagraph>
        <Links visibleOnLarge />
        <StyledTriangle />
      </TextBox>
      <ImgBox>
        <ImageWrapper>
          <Image
            src={images?.[0]?.img}
            alt={`Image of our solution: "${title?.[locale]}"`}
            layout="responsive"
            placeholder="blur"
            sizes={`(max-width: ${breakpoint.M}) 100vw, (max-width: ${breakpoint.XL}) 50vw, 30vw`}
          />
        </ImageWrapper>
        <Links />
      </ImgBox>
    </ElementWrapper>
  );
};

SolutionBox.propTypes = {
  solution: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
    ])
  ).isRequired,
};

export default SolutionBox;
