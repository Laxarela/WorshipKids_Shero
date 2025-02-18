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

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


