
window.onload = function() {
  var largePicture = document.querySelector('.image-container')

  // Load large image
  var imgLarge = new Image();
  imgLarge.src = '/image-3.webp'
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');
  };
    imgLarge.classList.add('picture');
  largePicture.appendChild(imgLarge);
}