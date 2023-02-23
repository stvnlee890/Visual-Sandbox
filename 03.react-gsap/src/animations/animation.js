import { gsap } from "gsap";

export const animateFrontPage = (el1) => {
  const bgContainer = el1.current;

  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .8, delay: 2.3 } });

  tl.fromTo(bgContainer, { opacity: 0 }, { opacity: 1 });
};
