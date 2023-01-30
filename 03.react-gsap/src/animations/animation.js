import { gsap } from "gsap";

export const animateFrontPage = (dom) => {
    gsap.to(dom.current, { color: "red", duration: 2 })
}