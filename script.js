// JavaScript to handle the sticky navbar behavior
window.onscroll = function () {
    stickyNavbar();
  };
  
  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Function to show WhatsApp button after scrolling
  window.addEventListener("scroll", function () {
    var whatsappButton = document.querySelector(".social-icons");
    if (window.scrollY > 300) {
      whatsappButton.style.display = "block";
    } else {
      whatsappButton.style.display = "none";
    }
  });

