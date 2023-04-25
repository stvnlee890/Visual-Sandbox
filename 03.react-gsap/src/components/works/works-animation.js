import { gsap } from "gsap";

export const animateWorks = (el1) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
  let border = el1
  tl.fromTo(
    border,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2 }
  );
};

export const animateText = (el1) => {
  let text = el1
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
  tl.fromTo(
    text,
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  );
}
