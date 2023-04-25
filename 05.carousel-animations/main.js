import { gsap, Power2 } from "gsap";

const images = document.querySelectorAll(".images");
const imageBtn = document.querySelectorAll(".btn-image-wrapper");
const movingBorder = document.querySelector('.moving-border')



let prev = -1;
imageBtn.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    const yPos = e.target.getBoundingClientRect().y - (e.target.getBoundingClientRect().height / 4)
    const xPos = e.target.getBoundingClientRect().x - (e.target.getBoundingClientRect().width / 2)
    // console.log(borderHeight)
    // console.log(e.target.getBoundingClientRect(), i)
    gsap.to(movingBorder, { y: yPos, x: xPos, ease: Power2.easeInOut, duration: 1})
    element.classList.add(`${i}`);
    if (element.classList[1] == i) {
      images[i].style.visibility = "visible";
      if (i > prev) {
        gsap.fromTo(
          images[i],
          { y: e.screenY, opacity: 0 },
          { y: 0, ease: Power2.easeOut, duration: 1, opacity: 1, delay: .5 }
        );
      } else {
        gsap.fromTo(
          images[i],
          { y: -e.screenY, opacity: 0 },
          { y: 0, ease: Power2.easeOut, duration: 1, opacity: 1, delay: .5 }
        );
      }
    }
    if (imageBtn[prev]) {
      imageBtn[prev].style.border = "";
      images[prev].style.visibility = "hidden";
    }
    prev = i;
  });
});
