gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.from(".list-items", { 
    y: -100, 
    duration: .7,
    stagger: .25,
});
tl.from("#underline", {
    x: -window.innerWidth,
    duration: 2,
})
tl.to("#intro", {
    opacity: 1,
    duration: 2
})
tl.to(".list-items, #intro", {
    color: 'rgb(60, 62, 63)',
    duration: 1,
})
tl.to("body", {
    backgroundColor: 'rgb(169, 198, 223)',
    duration: 1,
}, "<")
tl.to("#underline", {
    borderBottom: ".5px solid rgb(60, 62, 63)"
}, "<")
tl.to('.box', {
    opacity: 1,
    duration: 1,
    y: 10
}, "<")
// rgb(169, 198, 223)