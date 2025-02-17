// mobile menu toggle

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon"); 
    const closeIcon = document.querySelector(".close-icon");
    const mobileNavLinks = document.querySelector(".nav-links"); // Mobile nav links

    function toggleMenu() {
        mobileNavLinks.classList.toggle("active");
        menuIcon.classList.toggle("hide");
        closeIcon.classList.toggle("show");
    }

    menuIcon.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      console.log("buttoni u klikua")
    } else {
      x.style.display = "block";
      console.log("nuk eshte kliuar ")
    }
  }

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

