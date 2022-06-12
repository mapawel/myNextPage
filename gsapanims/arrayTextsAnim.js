import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const arrayTextsAnim = (gsaparray) => {
  gsaparray.forEach((child) => {
    gsap.fromTo(
      child,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: child,
          start: 'top 70%',
        },
      }
    );
  });
};

export default arrayTextsAnim;
