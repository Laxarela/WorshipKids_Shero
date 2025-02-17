// mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon"); 
  const closeIcon = document.querySelector(".close-icon");
  const mobileNavLinks = document.querySelector(".nav-links"); 
  const body = document.body;

  function toggleMenu() {
      const isActive = mobileNavLinks.classList.toggle("active");

      // Show or hide icons based on menu state
      menuIcon.classList.toggle("hide", isActive);
      closeIcon.classList.toggle("show", isActive);

      // Disable scroll when menu is open
      body.classList.toggle("no-scroll", isActive);
  }

  menuIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
});



// document.addEventListener("DOMContentLoaded", function () {
//   const menuIcon = document.querySelector(".menu-icon");
//   const closeIcon = document.querySelector(".close-icon");
//   const navLinks = document.querySelector(".nav-links");
//   const body = document.body;

//   menuIcon.addEventListener("click", function () {
//       navLinks.classList.add("active");
//       menuIcon.classList.add("hide");
//       closeIcon.classList.add("show");
//       body.classList.add("no-scroll"); // Disable scrolling
//   });

//   closeIcon.addEventListener("click", function () {
//       navLinks.classList.remove("active");
//       menuIcon.classList.remove("hide");
//       closeIcon.classList.remove("show");
//       body.classList.remove("no-scroll"); // Enable scrolling again
//   });
// });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

  // homepage banner slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex - 1].style.display = "flex"; 
}


// ///////////////////////////////////////////////////////////////////////////////////

// homegage moving text

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
