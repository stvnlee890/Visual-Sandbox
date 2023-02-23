import { gsap } from "gsap";

export const animateNavWrapper = (el, el2) => {
  const windowH = window.innerHeight;
  const child = el.current.children;
  const navContainer = el2.current

  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
  tl.fromTo(
    navContainer,
    { duration: 0.1, y: windowH - 160 },
    { duration: 1 }, 'start'
  );
  tl.to(navContainer, {y:25, duration: 1.5 });
  tl.fromTo (
    child, 
    { y:-20, duration: 0.1 },
    { y: 10, stagger: 0.2, duration: .7 }, 'start'
    )
    tl.to(child, { duration: 1.5 });
  
};
