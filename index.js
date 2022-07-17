$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  /**toggle menu/navbar script */
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing animation script
  var typed = new Typed(".typing-1", {
    strings: ["Web Developer", "Competative coder", "CSE Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Competative coder", "CSE Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //owl carousel script
  $(".directory").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        iteam: 1,
        nav: false,
      },
      600: {
        iteam: 2,
        nav: false,
      },
      1000: {
        iteam: 3,
        nav: false,
      },
    },
  });
});
