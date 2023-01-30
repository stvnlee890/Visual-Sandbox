import { gsap } from "gsap";

export const animateNavWrapper = (el, el1) => {
    const windowH = window.innerHeight
    const child = el.current.children
    console.log(child)

    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } })
    tl.fromTo(child, { opacity: 0, duration: 2, y: windowH - 100 }, { opacity: 1, stagger: .5, duration: 2 })
    tl.to(child, { y: 10, duration: 1.5 })
}