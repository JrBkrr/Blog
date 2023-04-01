window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  };