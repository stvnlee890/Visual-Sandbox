import { gsap, Power2 } from "gsap";

const app = document.querySelector("#app");
const h1 = document.querySelectorAll("h1");
const lazyLoading = document.querySelectorAll("img.lazy-loading");
console.log(lazyLoading);
/*
Create a scale animation of main section
*/
const tl = gsap.timeline();
// tl.fromTo(app, { height: 0}, {height: window.innerHeight, delay: .5, duration: 1.5, ease: Power2.easeInOut})
tl.fromTo(h1, { y: 100 }, { y: 0, duration: 1.3, ease: Power2.easeInOut });

function lazyImageAnimation(element) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 100 },
    { y: 0, opacity: 1, duration: 1.2, ease: Power2.easeOut }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy-loading"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      console.log(entries);
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImageAnimation(lazyImage)
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy-loading");

          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
