import { gsap, Power3 } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const headerAnim = (logo, headTxts, img, btn, tri) => {
  const tl = gsap.timeline();
  tl.fromTo(
    logo,
    {
      opacity: 0,
    },
    {
      duration: 0.4,
      opacity: 1,
    }
  )
    .to(logo, {
      ease: Power3.easeOut,
      delay: 0.6,
      duration: 0.4,
      marginTop: '10%',
      marginBottom: 0,
      width: '70%',
    })
    .fromTo(
      headTxts,
      { x: '+=200', opacity: 0 },
      {
        x: '0',
        opacity: 1,
        stagger: 0.3,
        duration: 0.2,
      }
    )
    .fromTo(
      img,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
      }
    )
    .to(btn, {
      display: 'block',
      opacity: 1,
      delay: "-1",
      duration: 0.3,
    });

  gsap.fromTo(
    tri,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 5,
    }
  );
};

export default headerAnim;
