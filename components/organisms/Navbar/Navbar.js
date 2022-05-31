import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import LocaleSwitch from 'components/molecules/LocaleSwitch';
import useNavbar from 'hooks/useNavbar';
import {
  MenuLinkImageContainer, LogoWraper, StyledIconsList, StyledMenuList, StyledMenuLinkTag, StyledBarWrapper, StyledLogo, StyledNav, StyledBurger, StyledMenuBck,
} from './Navbarstyle';
import InstagramIcon from '../../../assets/icons/instagramLogo.svg'
import FacebookIcon from '../../../assets/icons/facebookLogo.svg'
import menuLinks from 'assets/data/menu';

const Navbar = () => {
  const router = useRouter()
  const { locale, pathname } = router

  const {
    isScrolled,
    isMenuOpen,
    toggleMenuOpen,
    isMenuMobile,
    setMenuOpen,
    isAltMenuOpen,
    bluredList,
    setBluredList,
    inHovered,
    setIsHovered,
    posX,
    posY,
    switchMenuIfCatalog,
  } = useNavbar(pathname);


  return (
    <StyledNav
      $scrolled={isScrolled}
      onClick={isMenuOpen ? toggleMenuOpen : null}
    >
      <StyledMenuBck
        $isMenuOpen={isMenuOpen}
      >

        <StyledMenuList
          $listbig={true}
        >
          {menuLinks?.mainMenuList?.map(({ id, text, link }) => (
            <li key={id}>
              <Link
                href={link}
                passHref
              >
                <StyledMenuLinkTag
                  onMouseEnter={() => {
                    if (!isMenuMobile) switchMenuIfCatalog(link)
                    setBluredList('mainList')
                  }}
                  onMouseLeave={() => setBluredList(false)}
                  $isRestBlured={bluredList === 'mainList'}
                  $isAltMenuOpen={isAltMenuOpen}
                  $isCatalog={link === '/catalog'}
                  $listbig={true}
                >
                  {text[locale]}
                </StyledMenuLinkTag></Link>
            </li>
          ))}
        </StyledMenuList>

        <StyledMenuList
          $isAltMenuOpen={!isAltMenuOpen}
        >
          {menuLinks?.alternativeMenuList?.map(({ id, text, link, imgPath }) => (
            <li key={id}>
              <Link
                href={link}
                passHref
              >
                <StyledMenuLinkTag
                  onMouseEnter={() => {
                    setBluredList('alternativeList');
                    setIsHovered(id)
                  }}
                  onMouseLeave={() => {
                    setBluredList(false)
                    setIsHovered(null)
                  }}
                  $isRestBlured={bluredList === 'alternativeList'}
                  $isAltMenu={true}
                  $listbig={true}
                >
                  {text[locale]}
                </StyledMenuLinkTag>
              </Link>
              <MenuLinkImageContainer
                $isVisible={inHovered === id}
                $posX={posX}
                $posY={posY}
              >
                <Image
                  lazyBoundary="800px"
                  src={`${imgPath}`}
                  alt=""
                  width={400}
                  height={267} />
              </MenuLinkImageContainer>
            </li>
          ))}
        </StyledMenuList>

        <StyledMenuList
          $isAltMenuOpen={isAltMenuOpen}
        >
          {menuLinks?.restMenuList?.map(({ id, text, link }) => (
            <li key={id}>
              <Link href={link} passHref>
                <StyledMenuLinkTag>
                  {text[locale]}
                </StyledMenuLinkTag>
              </Link>
            </li>
          ))}
        </StyledMenuList>

        <StyledIconsList>
          <li>
            <InstagramIcon className="mediaIcon" />
          </li>
          <li>
            <FacebookIcon className="mediaIcon" />
          </li>
        </StyledIconsList>

      </StyledMenuBck>

      <StyledBarWrapper>
        <LocaleSwitch
          $isMenuOpen={isMenuOpen}
        />
        <Link href='/' passHref>
          <LogoWraper
            $isScrolled={isScrolled}
            $pathname={pathname}
            $isMenuOpen={isMenuOpen}
          >
            <StyledLogo
              $isMenuOpen={isMenuOpen}
            />
          </LogoWraper>
        </Link>
        <StyledBurger
          $isMenuOpen={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="toggle menu open"
        >
          <span />
          <span />
          <span />
        </StyledBurger>
      </StyledBarWrapper>
    </StyledNav >
  );
};

export default Navbar;

