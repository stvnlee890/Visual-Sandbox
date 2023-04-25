import { gsap, Power2 } from "gsap";

const images = document.querySelectorAll(".images");
const imageBtn = document.querySelectorAll(".btn-image-wrapper");
const movingBorder = document.querySelector('.moving-border')


// Initialize button to -1 because if it's 0 and we click on an element at index 0, it cause the wrong animation
let prev = -1;
imageBtn.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    /*
    e.target.getBoundingClientRect() is a method in JS that returns a DOMRect object 
    providing information about the size and position of an element RELATIVE to the viewport

    Without the subtraction, imageBtn image's bottom right corner will be placed in the center of the border
    So we need to subtract it by a quarter the height for the y, and half the width for the x
     */
    const yPos = e.target.getBoundingClientRect().y - (e.target.getBoundingClientRect().height / 4)
    const xPos = e.target.getBoundingClientRect().x - (e.target.getBoundingClientRect().width / 2)
    // console.log(borderHeight)
    // console.log(e.target.getBoundingClientRect(), i)

    // We can then comfortably include yPos and xPos into our animation without hardcoding values
    gsap.to(movingBorder, { y: yPos, x: xPos, ease: Power2.easeInOut, duration: 1})
    /*
    Add class list to elements so we can compare the previous index with the current so we can display the proper image
    */
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
