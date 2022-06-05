import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (sectionId) => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: { y: `#${sectionId}`, offsetY: 0 },
  });
};
