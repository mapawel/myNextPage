import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css, keyframes } from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { breakpoint } from 'breakpoints';
// import Switch from 'templates/Switch';
import MenuBar from 'components/molecules/MenuBar';
import routes from 'routes';
import LocaleSwitch from 'components/molecules/LocaleSwitch';

gsap.registerPlugin(ScrollToPlugin);

const tl = gsap.timeline();
const tl2 = gsap.timeline({ paused: true });

const menuExpandXAnim = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(0) scaleY(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(1) scaleY(.001);
  }
`;
const menuExpandYAnim = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(1) scaleY(.001));
  }
  to {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(1) scaleY(1);
  }
`;

const StyledBlend = styled.div`
  position: fixed;
  z-index: 900;
  width: 270vw;
  height: 270vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg) scaleX(0) scaleY(0);
  transition: transform 0.5s;
  background-color: ${({ theme }) => theme.color.back};
  ${({ manuOpen }) =>
    manuOpen &&
    css`
      animation: ${menuExpandXAnim} 0.6s both,
        ${menuExpandYAnim} 0.85s 0.25s both;
    `}
`;

const StyledListContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: ${({ manuOpen }) => (manuOpen ? 'flex' : 'none')};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledListElement = styled.a`
  display: inline-block;
  padding: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.textPrimary};
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Menu = () => {
  const router = useRouter();
  const { locale } = router;
  const [manuOpen, setMenuOpen] = useState(false);
  const [manuBarVisible, setMenuBarVisible] = useState(false);
  const menuListRef = useRef(null);
  const switchRef = useRef(null);

  const menuElementsAnim = () => {
    tl.clear();
    tl.fromTo(
      menuListRef.current.children,
      {
        x: '-200',
        opacity: 0,
        rotate: '+=15',
      },
      {
        rotate: '0',
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.25,
        stagger: 0.15,
      }
    ).fromTo(
      switchRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      }
    );
  };

  const hoverMenuElAnim = (e, start) => {
    const test = tl2
      .set(e.target, {
        textShadow: '2px 1px 0 transparent, -2px -1px 0 transparent',
      })
      .to(e.target, {
        textShadow: '2px 1px 0 blue, -2px -1px 0 red',
        duration: 1,
        repeat: -1,
        yoyo: true,
      })
      .to(e.target, {
        textShadow: '2px 1px 0 red, -2px -1px 0 blue',
        duration: 1,
        repeat: -1,
        yoyo: true,
      })
      .to(e.target, {
        scale: '1.04',
        duration: 0.2,
        delay: -2,
      });
    if (start) test.play();
    else tl2.seek(0).pause().clear();
  };

  const closeMenu = () => {
    setMenuOpen((prevState) => !prevState);
    menuElementsAnim();
  };

  const handleClick = (e) => {
    if (e.target.closest('.menuLink')) return null;
    if (e.target.closest('#switch')) return setTimeout(closeMenu, 300);
    closeMenu();
  };

  useEffect(() => {
    if (manuOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [manuOpen]);

  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [closeMenu, router.events]);

  useEffect(() => {
    const showMenuBar = () => {
      if (!manuBarVisible) setMenuBarVisible(true);
    };
    window.addEventListener('scroll', showMenuBar);
    return () => window.removeEventListener('scroll', showMenuBar);
  }, []);

  return (
    <menu>
      <StyledBlend manuOpen={manuOpen} />
      <StyledListContainer manuOpen={manuOpen} onClick={(e) => handleClick(e)}>
        <StyledList ref={menuListRef}>
          {routes?.map(({ name, path }) => (
            <li
              onMouseOver={(e) => hoverMenuElAnim(e, true)}
              onMouseOut={(e) => hoverMenuElAnim(e, false)}
              key={path}
            >
              <Link href={path} passHref>
                <StyledListElement className="menuLink">
                  {name?.[locale]}
                </StyledListElement>
              </Link>
            </li>
          ))}
        </StyledList>
        {/* <Switch ref={switchRef} /> */}
      </StyledListContainer>
      <LocaleSwitch manuBarVisible={manuBarVisible} />
      <MenuBar
        handleClick={handleClick}
        manuOpen={manuOpen}
        manuBarVisible={manuBarVisible}
        setMenuBarVisible={setMenuBarVisible}
      />
    </menu>
  );
};

export default Menu;
