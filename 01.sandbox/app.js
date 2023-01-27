gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

// TIMELINE
tl.from(".list-items", {
  y: -100,
  duration: 0.6,
  stagger: 0.25,
});
tl.from("#underline", {
  x: -window.innerWidth,
  duration: 1,
});
tl.to("#intro", {
  opacity: 1,
  duration: 1,
});
tl.to(".list-items, #intro", {
  color: "rgb(60, 62, 63)",
  duration: 1,
  x: -10
});
tl.to(
  "body",
  {
    backgroundColor: "rgb(169, 198, 223)",
    duration: 1,
  },
  "<"
);
tl.to(
  "#underline",
  {
    borderBottom: ".5px solid rgb(60, 62, 63)",
  },
  "<"
);
tl.to(
  ".box",
  {
    opacity: 1,
    duration: 0.5,
    x: 20,
  },
  "<"
);
tl.to(".intro-text", {
  opacity: 1,
  duration: 0.5,
  color: "rgb(60, 62, 63)",
});

// SCROLL TRIGGERS


gsap.from('.underline-project', {
    scrollTrigger: {
        trigger: '.underline-project',
        start: "150px 480px",
        end: "center center",
        // markers: true,
    },
    x: -window.innerWidth,
    duration: 1,
    opacity: 1,
})

// rgb(169, 198, 223)

/*
======================================
ACCORDIAN
======================================
*/

const accordian1 = gsap.timeline({
    paused: "true",
    reverse: "true",
})

accordian1.to("#project-heading-1 #logo1", {
    duration: 0,
    display: "none"
})
accordian1.to("#project-heading-1 #logo2", {
    duration: 0,
    display: "block"
})
accordian1.to("#project-inner-1", {
    duration: 1,
    height: 600,
    opacity: 1,
    display: "block"
})


const accordian2 = gsap.timeline({
    paused: "true",
    reverse: "true",
})

accordian2.to("#project-heading-2 #logo1", {
    duration: 0,
    display: "none"
})
accordian2.to("#project-heading-2 #logo2", {
    duration: 0,
    display: "block"
})
accordian2.to("#project-inner-2", {
    duration: .5,
    opacity: 1,
    height: 600,
    display: "block"
})

function toggle(event) {
    // event.play()
    event.reversed() ? event.play() : event.reverse()
    console.log("clicked")
}