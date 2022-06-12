import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sectionHeadingAnim = (heading) => {
  gsap.fromTo(
    heading,
    {
      y: '+=30',
      opacity: 0,
    },
    {
      y: 0,
      duration: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: heading,
        start: 'top 70%',
      },
    }
  );
};

export default sectionHeadingAnim;
