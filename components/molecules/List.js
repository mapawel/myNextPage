import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Heading from 'components/atoms/Heading';
import Rect from 'components/atoms/Rect';
import Triangle from 'components/atoms/Triangle';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { breakpoint } from 'breakpoints';

gsap.registerPlugin(ScrollTrigger);

const blink = keyframes`
  from {
    opacity: .8;
  }
  to {
    opacity: .05;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  margin-bottom: 8rem;
  margin-left: 5vw;
  &:last-child {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    margin-left: 10vw;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-left: 15vw;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-left: 15vw;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  position: relative;
  margin-left: ${({ index }) => `${index * 1.4}rem`};
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  opacity: 0;
  
  @media screen and (min-width: ${breakpoint.XS}) {
    margin-left: ${({ index }) => `${index * 2.5}rem`};
    margin-bottom: 0.8rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  
  @media screen and (min-width: ${breakpoint.L}) {
    margin-left: ${({ index }) => `${index * 4}rem`};
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledListHeading = styled(Heading)`
  margin-bottom: 3rem;
`;

const StyledBox = styled.div`
  position: absolute;
  width: 70rem;
  height: 70rem;
  top: 0;
  right: 0;
  transform: rotate(15deg);
  opacity: 0;
`;

const StyledRect = styled(Rect)`
  position: absolute;
  width: 20rem;
  height: 20rem;
  top: 20%;
  right: 40%;

  @media screen and (min-width: ${breakpoint.S}) {
    width: 40rem;
    height: 40rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 60rem;
    height: 60rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 75rem;
    height: 75rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
  }
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  width: 30rem;
  height: 30rem;
  top: 20%;
  right: 40%;

  @media screen and (min-width: ${breakpoint.S}) {
    width: 50rem;
    height: 50rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 70rem;
    height: 70rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 90rem;
    height: 90rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
  }
`;

const List = ({ title, content, nr }) => {
  const { locale } = useRouter();
  const listRef = useRef();
  const figureRef = useRef(null);
  const listHeadingRef = useRef();
  useEffect(() => {
    if (content) {
      gsap.fromTo(
        listHeadingRef.current,
        {
          y: '+= 100',
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: listHeadingRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.fromTo(
        listRef.current.children,
        { x: '-=200', opacity: 0 },
        {
          x: '0',
          opacity: 1,
          stagger: 0.2,
          duration: 0.4,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 50%',
          },
        }
      );

      gsap.fromTo(
        figureRef.current,
        { x: '+=500', rotation: '-10', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          rotation: '15',
          duration: 0.4,
          scrollTrigger: {
            trigger: figureRef.current,
            start: 'top 80%',
            scrub: 1,
          },
        }
      );
    }
  }, [content]);

  return (
    <StyledContainer>
      <StyledListHeading ref={listHeadingRef} secondary bold big>
        {title}
      </StyledListHeading>
      <StyledUl ref={listRef}>
        {content?.map((element, index) => (
          <StyledLi key={element.id} index={index}>
            {element?.item?.[locale]}
          </StyledLi>
        ))}
      </StyledUl>
      <StyledBox ref={figureRef}>
        {nr & 1 ? <StyledTriangle /> : <StyledRect />}
      </StyledBox>
    </StyledContainer>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  nr: PropTypes.number.isRequired,
};

export default List;
