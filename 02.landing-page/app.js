let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
let flagPoles = CSSRulePlugin.getRule(".cards::before")
let transitions = CSSRulePlugin.getRule(".cards:hover::before")

tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
.to('.box', { 'clip-path': 'polygon(0% 110%, 110% 110%, 110% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.5}, "-=2")
.from('.cards', { opacity: 0, scaleY: 0, stagger: .3 }, "-=2")
.from(flagPoles, { duration: 3, stagger:2, opacity: 0, transform: "translateY(250px)" }, "-=3")
.from('.title-desc, .desc', { stagger: .1, duration: 1, opacity: 0, y: "100px" }, "-=2")
.from(".footer", { opacity: 0 }, "-=2")
.to('.inner-box', { opacity: .5, y: 0, duration: .5}, "-=.5")
