// window.onload = function() {
//   var largePicture = document.querySelector('.image-container')

//   // Load large image
//   var imgLarge = new Image();
//   imgLarge.src = largePicture.dataset.large;
//   imgLarge.onload = function () {
//     imgLarge.classList.add('loaded');
//   };
//     imgLarge.classList.add('picture');
//   largePicture.appendChild(imgLarge);
// }

window.addEventListener("load", () => {
  const largePicture = document.querySelectorAll(".image-container");
  largePicture.forEach((ele) => {
    const imgLarge = new Image();
    imgLarge.src = ele.dataset.large;
    imgLarge.onload = function () {
      imgLarge.classList.add("loaded");
    };
    imgLarge.classList.add("picture");
    ele.appendChild(imgLarge);
  });
});
