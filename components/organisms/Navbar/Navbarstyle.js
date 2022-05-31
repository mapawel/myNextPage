import styled, { css, keyframes } from 'styled-components';
import breakpoints from 'breakpoints';
import Wrapper from 'components/templates/Wrapper';
import Logo from '../../../assets/logo/mainlogo4.svg';

const zoomIn = keyframes`
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledBarWrapper = styled(Wrapper)`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMenuList = styled.ul`
  display: ${({ $isAltMenuOpen }) => ($isAltMenuOpen ? 'none' : 'block')};
  list-style: none;
  width: 50vw;
  padding: 2rem 0;
  text-align: center;

  :first-of-type {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.counterBase};
  }

  ${({ $listbig }) =>
    $listbig &&
    css`
      text-align: center;
    `}

  @media screen and (min-width: ${breakpoints.S}) {
    width: 50vw;
    padding: 0 5vw;
    text-align: left;

    :first-of-type {
      border-right: 1px solid ${({ theme }) => theme.color.counterBase};
      border-bottom: none;
    }

    ${({ $listbig }) =>
      $listbig &&
      css`
        text-align: right;
      `}
  }
`;

export const StyledIconsList = styled.ul`
  list-style: none;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-left: 0;
  padding-left: 0;
  > li {
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mediaIcon {
    color: ${({ theme }) => theme.color.counterBase};
    width: 25px;
  }

  @media screen and (min-width: ${breakpoints.S}) {
    width: 50vw;
    display: flex;
    margin-left: 50vw;
    padding-left: 5vw;
    justify-content: flex-start;
    > li {
      margin: 1rem 2rem 1rem 0;
    }
    .mediaIcon {
      width: 30px;
    }
  }

  @media screen and (min-width: ${breakpoints.L}) {
    .mediaIcon {
      width: 40px;
    }
  }
`;

export const StyledMenuLinkTag = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  cursor: pointer;
  font-size: min(${({ theme }) => theme.fontSize.m}, 3.5vw);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.darkGrey};
  text-shadow: 0 0 0 ${({ theme }) => theme.color.counterBase};
  transition: text-shadow 0.5s 0.1s;

  :hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.counterBase};
  }

  ${({ $listbig }) =>
    $listbig &&
    css`
      text-transform: uppercase;
      text-align: right;
      font-size: min(${({ theme }) => theme.fontSize.l}, 7vw);
      color: ${({ theme }) => theme.color.counterBase};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    `}

  ${({ $isAltMenu }) =>
    $isAltMenu &&
    css`
      text-transform: uppercase;
      text-align: left;
      margin: 0;
      font-size: min(${({ theme }) => theme.fontSize.m}, 2.5vw);
      color: ${({ theme }) => theme.color.counterBase};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    `}

  ${({ $isRestBlured, $isAltMenu, theme }) =>
    $isRestBlured &&
    css`
      :not(:hover) {
        color: transparent;
        text-shadow: ${$isAltMenu
          ? `0 0 4px ${theme.color.counterBase}`
          : `0 0 7px ${theme.color.counterBase}`};
      }
    `}

  color: ${({ theme, $isAltMenuOpen, $isCatalog }) =>
    $isAltMenuOpen && $isCatalog && theme.color.darkGrey};

  @media screen and (min-width: ${breakpoints.S}) {
    padding: 1rem;
    font-size: min(${({ theme }) => theme.fontSize.m}, 2vw);

    ${({ $listbig }) =>
      $listbig &&
      css`
        font-size: min(${({ theme }) => theme.fontSize.l}, 3vw);
      `}

    ${({ $isAltMenu }) =>
      $isAltMenu &&
      css`
        margin: 0;
        font-size: min(${({ theme }) => theme.fontSize.l}, 2vw);
      `}
  }

  @media screen and (min-width: ${breakpoints.L}) {
    margin: 1rem 0;
    font-size: min(${({ theme }) => theme.fontSize.m}, 2vw);

    ${({ $listbig }) =>
      $listbig &&
      css`
        font-size: min(${({ theme }) => theme.fontSize.xl}, 3vw);
      `}

    ${({ $isAltMenu }) =>
      $isAltMenu &&
      css`
        font-size: min(${({ theme }) => theme.fontSize.l}, 2vw);
      `}
  }
`;

export const StyledNav = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 85px;
  padding: 1.9rem 0 1rem;
  overflow-y: visible;
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => `${theme.color.counterBase}E2`};
    box-shadow: ${({ theme }) => `0 0 25px -13px ${theme.color.base}60`};
    z-index: -1;
    opacity: ${({ $scrolled }) => ($scrolled ? 1 : 0)};
    transition: opacity 0.3s;
  }
`;

export const StyledMenuBck = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.base};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 9rem;
  transform: translateY(calc(-100% - 500px));
  transition: transform 0.4s;
  ${({ $isMenuOpen }) =>
    $isMenuOpen &&
    css`
      transform: translateX(0);
    `};

  @media screen and (min-width: ${breakpoints.S}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding-top: 0;
  }
`;

export const StyledBagCount = styled.div`
  display: ${({ $count }) => ($count ? 'block' : 'none')};
  position: absolute;
  bottom: 0.2rem;
  right: 0.8rem;
  width: 1.9rem;
  height: 1.9rem;
  background-color: ${({ theme }) => theme.color.base};
  border-radius: 50%;
  ::after {
    position: absolute;
    content: ${({ $count }) => $count && `'${$count}'`};
    color: ${({ theme }) => theme.color.counterBase};
    font-size: ${({ theme }) => theme.fontSize.xxxs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-family: ${({ theme }) => theme.fontFamily.text};
    line-height: 0;
    font-feature-settings: normal;
    font-variant-numeric: lining-nums;
    left: 50%;
    top: 50%;
    margin-top: 2px;
    transform: translate(-50%, -50%);
  }
`;

export const StyledBurger = styled.button`
  display: block;
  position: relative;
  right: 0;
  width: 55px;
  height: 45px;
  background: none;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
  > span {
    content: '';
    position: absolute;
    top: 50%;
    right: calc(50% / 2);
    width: 50%;
    height: 1.2px;
    background-color: ${({ theme }) => theme.color.base};
    transition: transform 0.15s, background-color 0.7s;
    transform-origin: right;
  }
  > span:first-of-type {
    transform: translate(0, -8px) scaleX(0.35);
  }
  > span:nth-of-type(2) {
    transform: translate(0, 0) scaleX(0.65);
  }
  > span:last-of-type {
    width: 50%;
    transform: translate(0, 8px);
  }
  ${({ $isMenuOpen }) =>
    !$isMenuOpen &&
    css`
      :hover {
        > span:first-of-type {
          transform: translate(0, -8px) scaleX(1);
        }
        > span:nth-of-type(2) {
          transform: translate(0, 0) scaleX(1);
        }
      }
    `}
  ${({ $isMenuOpen }) =>
    $isMenuOpen &&
    css`
      > span {
        background-color: ${({ theme }) => theme.color.counterBase};
        transform-origin: center;
      }
      > span:first-of-type {
        transform: translate(0, 0) rotate(45deg) scaleX(1);
      }
      > span:nth-of-type(2) {
        transform: translate(-200%, 0) scaleX(1);
      }
      > span:last-of-type {
        transform: translate(0, 0) rotate(-45deg) scaleX(1);
      }
    `}
`;

const appear = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
export const LogoWraper = styled.a`
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 37px;
  color: black;
  cursor: pointer;

  ${({ $pathname, $isMenuOpen }) =>
    ($pathname !== '/' || $isMenuOpen) &&
    css`
      opacity: 1;
      transition: opacity 0.5s;
    `}

  ${({ $isScrolled, $pathname, $isMenuOpen }) =>
    $isScrolled &&
    !$isMenuOpen &&
    $pathname === '/' &&
    css`
  animation: ${appear} .5s forwards} 
  `}

  @media screen and (min-width: ${breakpoints.S}) {
    width: 300px;
    height: 56px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.base};
  transition: color 0.7s;

  ${({ $isMenuOpen }) =>
    $isMenuOpen &&
    css`
      color: ${({ theme }) => theme.color.counterBase};
    `}
`;

export const MenuLinkImageContainer = styled.div.attrs(({ $posX, $posY }) => ({
  style: {
    left: `${$posX + 5}px`,
    top: `${$posY + 5}px`,
  },
}))`
  opacity: 0;
  position: absolute;
  z-index: -1;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      animation: ${zoomIn} 0.5s;
    `}
`;
