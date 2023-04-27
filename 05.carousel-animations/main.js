import { gsap, Power2 } from "gsap";

const images = document.querySelectorAll(".images");
const imageBtn = document.querySelectorAll(".btn-image-wrapper");
const movingBorder = document.querySelector(".moving-border");
const placeholder = document.querySelectorAll(".placeholder");

window.onload = function () {
  let prev = -1;
  imageBtn.forEach((element, i) => {
    const btnY = movingBorder.getBoundingClientRect().y
    const btnX = movingBorder.getBoundingClientRect().x
    // Get width and height of the movingBorder elements
    const btnW = movingBorder.getBoundingClientRect().width
    const btnH = movingBorder.getBoundingClientRect().height
    element.addEventListener("click", (e) => {

      /*
    e.target.getBoundingClientRect() is a method in JS that returns a DOMRect object 
    providing information about the size and position of an element RELATIVE to the viewport

    We subtract 
     */
      const yPos =
        e.target.getBoundingClientRect().y - (btnH / 8)

      const xPos =
        e.target.getBoundingClientRect().x - (btnW / 8)
        console.log(xPos)
      // console.log(borderHeight)
      // console.log(e.target.getBoundingClientRect(), i)
      // We can subtract the distance of the movingBorder, with the distance of the click target
      // In yPost and xPos we subtract it by the h / w of the border to center it
      gsap.to(movingBorder, {
        y: yPos - btnY,
        x: xPos - btnX,
        ease: Power2.easeInOut,
        duration: 1,
      });
      /*
    Add class list to elements so we can compare the previous index with the current so we can display the proper image
    */
      element.classList.add(`${i}`);
      if (element.classList[1] == i) {
        images[i].style.display = "block";
        const src = placeholder[i].getAttribute("data-src");
        images[i].src = src;
        images[i].onLoad = function () {
          images[i].classList.add("loaded");
        };
        images[i].classList.add("picture");

        if (i > prev) {
          gsap.fromTo(
            placeholder[i],
            { y: -450, opacity: 0 },
            { y: 0, ease: Power2.easeOut, duration: 1, opacity: 1, delay: 0.2 }
          );
        } else {
          gsap.fromTo(
            placeholder[i],
            { y: 450, opacity: 0 },
            { y: 0, ease: Power2.easeOut, duration: 1, opacity: 1, delay: 0.2 }
          );
        }
      }
      if (imageBtn[prev]) {
        if (i > prev) {
          gsap.fromTo(
            placeholder[prev],
            { y: 0, opacity: 1 },
            {
              y: 450,
              ease: Power2.easeOut,
              duration: 1,
           
              delay: 0.2,
            }
          );
        } else {
          gsap.fromTo(
            placeholder[prev],
            { y: 0, opacity: 1 },
            {
              y: -450,
              ease: Power2.easeOut,
              duration: 1,
           
              delay: 0.2,
            }
          );
        }
      }
      prev = i;
    });
  });
};
