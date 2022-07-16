import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css, keyframes } from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useA11yDialog } from 'react-a11y-dialog';
import { breakpoint } from 'breakpoints';
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
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: ${({ manuOpen }) => (manuOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  position: fixed;
  justify-content: start;
  overflow-y: auto;
  gap: 5vh;
`;

const StyledList = styled.ul`
  position: relative;
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

const StyledLogo = styled.img``;

const StyledAtag = styled.a`
  display: block;
  width: 70vw;
  max-width: 50rem;
  margin-top: 10vh;
  margin-left: 10vw;
`;

const Menu = () => {
  const router = useRouter();
  const { locale } = router;
  const [manuOpen, setMenuOpen] = useState(false);
  const [manuBarVisible, setMenuBarVisible] = useState(false);
  const menuListRef = useRef(null);
  const logoRef = useRef(null);
  const [instance, attr] = useA11yDialog({
    id: 'menu',
    role: 'dialog',
    title: 'menu',
  });

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
      logoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.7,
        delay: '-0.9',
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

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
    if (!manuOpen) {
      instance.show();
    }
    if (manuOpen) {
      instance.hide();
    }
    menuElementsAnim();
  }, [instance, manuOpen]);

  const checkEsc = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        toggleMenu();
      }
    },
    [toggleMenu]
  );

  const handleClick = (e) => {
    if (e.target.closest('.menuLink')) return null;
    toggleMenu();
  };

  useEffect(() => {
    if (manuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [manuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (!manuOpen) return null;
      toggleMenu();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleMenu, router.events]);

  useEffect(() => {
    const showMenuBar = () => {
      if (!manuBarVisible) setMenuBarVisible(true);
    };
    window.addEventListener('scroll', showMenuBar);
    return () => window.removeEventListener('scroll', showMenuBar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (instance) window.addEventListener('keydown', checkEsc);
    return () => window.removeEventListener('keydown', checkEsc);
  }, [instance, checkEsc, toggleMenu]);

  return (
    <menu {...attr.container}>
      <StyledBlend manuOpen={manuOpen} />
      <StyledListContainer
        id="menu"
        manuOpen={manuOpen}
        onClick={(e) => handleClick(e)}
      >
        <Link href="/" passHref>
          <StyledAtag ref={logoRef}>
            <StyledLogo src="/icons/devdeferlogo.svg" />
          </StyledAtag>
        </Link>
        <StyledList ref={menuListRef}>
          {routes?.map(({ name, path }) => (
            <li
              onMouseOver={(e) => hoverMenuElAnim(e, true)}
              onMouseOut={(e) => hoverMenuElAnim(e, false)}
              key={path}
            >
              <Link href={path} passHref>
                <StyledListElement className="menuLink" {...attr.title}>
                  {name?.[locale]}
                </StyledListElement>
              </Link>
            </li>
          ))}
        </StyledList>
      </StyledListContainer>
      <MenuBar
        handleClick={handleClick}
        manuOpen={manuOpen}
        manuBarVisible={manuBarVisible}
        setMenuBarVisible={setMenuBarVisible}
        dialog={attr}
      />
      <LocaleSwitch manuBarVisible={manuBarVisible} />
    </menu>
  );
};

export default Menu;
