import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import breakpoints from "breakpoints";

const useNavbar = (pathname) => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuMobile, setMenuMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAltMenuOpen, setAltMenuOpen] = useState(false);
  const [bluredList, setBluredList] = useState(null);
  const [inHovered, setIsHovered] = useState(null);
  const toggleMenuOpen = () => {
    if (isMenuOpen) setMenuOpen(false);
  };

  const checkWidth = (isAltMenuOpen) => {
    if (window.innerWidth <= breakpoints.S.split("px")[0]) setMenuMobile(true);
    else setMenuMobile(false);
    if (isAltMenuOpen) {
      setAltMenuOpen(false);
    }
  };

  const toggleAltMenu = () => {
    setAltMenuOpen(!isAltMenuOpen);
  };

  useEffect(() => {
    const checkPossition = () => {
      if (window.scrollY >= (pathname === '/' ? window.innerHeight * 0.8 : 70)) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", debounce(checkPossition, 50));

    return () =>
      window.removeEventListener("scroll", debounce(checkPossition, 50));
  }, [pathname]);

  const switchMenuIfCatalog = (link) => {
    if (link !== "/catalog" && isAltMenuOpen) {
      toggleAltMenu();
      return;
    }
    if (link !== "/catalog") {
      return;
    }
    if (!isAltMenuOpen) {
      toggleAltMenu();
    }
  };

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleMouseMove = (e) => {
    setPosX(e.pageX);
    setPosY(e.pageY - window.scrollY);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", debounce(checkWidth, 250));
    checkWidth(isAltMenuOpen);

    return () =>
      window.removeEventListener("resize", debounce(checkWidth, 250));
  }, []);

  // useEffect(() => {
  //   if (isMenuOpen) document.body.style.overflowY = 'hidden';
  //   else document.body.style.overflowY = 'auto';
  // }, [isMenuOpen]);

  return {
    isScrolled,
    isMenuMobile,
    isMenuOpen,
    toggleMenuOpen,
    setMenuOpen,
    isAltMenuOpen,
    toggleAltMenu,
    bluredList,
    setBluredList,
    inHovered,
    setIsHovered,
    posX,
    posY,
    switchMenuIfCatalog,
  };
};

export default useNavbar;
