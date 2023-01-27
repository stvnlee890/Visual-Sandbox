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
gsap.to("#projects", {
  scrollTrigger: {
    trigger: ".intro-container",
    start: "500px 400px",
    end: "800px 200px",
    // markers: true,
  },
  opacity: 1,
  duration: 1.5,
  color: 'rgb(60, 62, 63)'
});

gsap.to('.project-title', {
    scrollTrigger: {
        trigger: "#projects",
        start: "250px 380px",
        end: "center center",
        // markers: true,
    },
    opacity: 1,
    duration: 2,
})
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
