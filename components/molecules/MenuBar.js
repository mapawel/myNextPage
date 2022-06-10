/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from 'components/templates/Wrapper';

const StyledContainer = styled.div`
  position: relative;
  z-index: 1000;
  margin-left: auto;
  width: 10rem;
  opacity: ${({ manuBarVisible }) => (manuBarVisible ? 1 : 0)};
  transition: opacity 0.3s;
`;

const StyledTrianglesBox = styled.div`
  display: ${({ manuBarVisible }) => (manuBarVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  transform: ${({ theme: { manuBarWide } }) =>
    manuBarWide ? 'scale(1)' : 'scale(.7)'};
  transition: transform 0.2s;
  cursor: pointer;
`;

const StyledTriangleSmall = styled.div`
  position: fixed;
  top: 0;
  transform: translateX(-20px);
  width: 0;
  height: 0;
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-top: ${({ theme }) => `6rem solid ${theme.color.particles}`};
  border-left: 4rem solid transparent;
  border-right: 4rem solid transparent;
  border-top: ${({ theme }) => `4rem solid ${theme.color.particles}`};
  opacity: 0.6;
  cursor: pointer;
`;

const StyledTriangleBig = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  transform: translateX(60px);
  width: 0;
  height: 0;
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-top: ${({ theme }) => `6rem solid ${theme.color.particles}`};
  cursor: pointer;
`;

const StyledMenuBack = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 0;
  height: 0;
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-bottom: ${({ theme }) => `6rem solid ${theme.color.back}`};
  transform: ${({ theme: { manuBarWide } }) =>
    manuBarWide ? 'translate(0)' : 'translate(20px, -20px)'};
  transition: transform 0.2s;
  cursor: pointer;
`;

const StyledButton = styled.button`
  position: relative;
  height: 6rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background: none;
  padding: 2.8rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.color.textPrimary};
    height: 2px;
    width: 4rem;
    transform: ${({ theme: { manuBarWide } }) =>
      manuBarWide
        ? 'scaleX(1) translate(0, 0)'
        : 'scaleX(.65) translate(-18px, 10px)'};
    transform-origin: left;
    transition: transform 0.2s;
  }
  ::before {
    bottom: 14px;
  }
  ::after {
    content: '';
    bottom: 24px;
  }

  ${({ manuOpen }) =>
    manuOpen &&
    css`
      ::after {
        transform-origin: center;
        transform: translate(2px, 5px) rotate(45deg);
      }
      ::before {
        transform-origin: center;
        transform: translate(2px, -5px) rotate(-45deg);
      }
    `}
`;

const MenuBar = ({
  handleClick,
  manuOpen,
  manuBarVisible,
  setMenuBarVisible,
}) => {
  const { pathname } = useRouter();
  const [manuBarWide, setMenuBarWide] = useState(true);

  let prevScrollY = 0;

  useEffect(() => {
    if (pathname !== '/') setMenuBarVisible(true);
  }, [pathname]);

  useEffect(() => {
    const direction = () => {
      if (window.scrollY > prevScrollY) {
        setMenuBarWide(false);
        prevScrollY = window.scrollY;
      } else {
        setMenuBarWide(true);
        prevScrollY = window.scrollY;
      }
    };
    window.addEventListener('scroll', direction);
    return () => window.removeEventListener('scroll', direction);
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={{ manuBarWide }}>
        <StyledContainer manuBarVisible={manuBarVisible}>
          <StyledTrianglesBox
            manuBarVisible={manuBarVisible}
            onMouseOver={() => setMenuBarWide(true)}
            onClick={handleClick}
          >
            <StyledMenuBack>
              <StyledButton
                manuOpen={manuOpen}
                aria-label="open or close menu"
              />
            </StyledMenuBack>
            <StyledTriangleSmall />
            <StyledTriangleBig />
          </StyledTrianglesBox>
        </StyledContainer>
      </ThemeProvider>
    </Wrapper>
  );
};

MenuBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  manuOpen: PropTypes.bool.isRequired,
};

export default MenuBar;
