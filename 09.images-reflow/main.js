import { gsap, Power4 } from "gsap";

const img = document.querySelector('.image')
const wrapper = document.querySelector(".image-wrapper");
const bannerContainer = document.querySelector('.banner-container')

const images = document.querySelectorAll('.img-lazy')
const lazyWrapper = document.querySelectorAll('.lazy-image-wrapper')

const bannerContainerW = bannerContainer.offsetWidth

gsap.fromTo(wrapper, { width: 0 }, { width: bannerContainerW, duration: 3, ease: Power4.easeInOut });

const options = {
  root: null,
  rootMargin: "10px",
  threshold: .3
}
// Create callback function to pass into instance of IntersectionObserver
function handleIntersection(images, i) {
  // Here, I added I just in case we needed to alter lazyWrapper
  images.map((images, i) => {
    // Create a conditional for when image is intersecting
    if (images.isIntersecting) {
      // data-src is an attribute that allows us to defer loading the images until visible
      // We add the src of image to the data src
      images.target.src = images.target.dataset.src
      // Remove the img-lazy class that makes the image's visibility to hidden
      images.target.classList.remove('img-lazy')
      // Add a new class that allows the image to become visible
      images.target.classList.add('is-loaded')
      // After doing so, we had gsap animation to animate the opacity
      gsap.fromTo(images.target, { opacity: 0}, { opacity: 1, duration: .7, ease: Power4.easeInOut})
      // We then tell the observer to stop observing the image.
      observer.unobserve(images.target)
    }
  })
}

// IntersectionObserver takes two arguments, the second argument gets passed an option which we configure.
// The options.threshold allows us to indicate at what percentage of the target's visibility the 
// observer's callback should be executed
const observer = new IntersectionObserver(handleIntersection, options)

images.forEach(image => observer.observe(image))