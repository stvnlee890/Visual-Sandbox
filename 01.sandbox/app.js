gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ ease: "power4.inOut" });

// TIMELINE
tl.from(".list-items", {
  y: -100,
  duration: 0.6,
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

/*
You can initialize an accordian with properties to use on multiple components to keep code DRY
*/
const accordian1 = gsap.timeline({
    paused: "true",
    reverse: "true",
})

/*
You want the first logo "+" to display none 
And the second logo to display block so it shows up on click
This feels like react state almost, setting state to true / false etc.
*/
accordian1.to("#project-heading-1 #logo1", {
    duration: 0,
    display: "none"
})
accordian1.to("#project-heading-1 #logo2", {
    duration: 0,
    display: "block"
})
accordian1.to("#project-inner-1", {
    duration: .5,
    /*
    added height property here
    .project-inner has overflow:hidden so if we adjust height property to a height 
    that is taller than the div then it will display entire content. 
    If height property here is lower, than it displays partial.
    */
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
    /*
    GSPA provides you with reversed, play, reverse methods
    Study these more, they come in handy
    */
    event.reversed() ? event.play() : event.reverse()
    console.log("clicked")
}