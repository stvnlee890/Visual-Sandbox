import { gsap } from "gsap";

export const animateAbout = (el1) => {
  const border = el1.current;
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

  tl.fromTo(
    border,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1 }
  );
};
