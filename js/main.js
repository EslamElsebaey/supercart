$(window).on("load", function () {
  //  Preloader
  $(".preloader").fadeOut();
  setTimeout(() => {
    $(".challenges").addClass("overflow-visible");
  }, 2000);



  // App screens Swiper
  const appScreens = new Swiper(".app-screens .swiper", {
    loop: true,
    autoplay: true,
    allowTouchMove: true,
    speed: 1000,
    centeredSlides: true,
    slideToClickedSlide: true,
    draggable: true,
    navigation: {
      nextEl: " .app-screens .swiper-button-next",
      prevEl: ".app-screens .swiper-button-prev",
    },
    pagination: {
      el: ".app-screens .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });

  // Clients review swiper

  const clientsReview = new Swiper(".client-reviews .swiper", {
    loop: true,

    autoplay: true,
    allowTouchMove: true,
    speed: 1000,
    draggable: true,
    navigation: {
      nextEl: " .client-reviews .swiper-button-next",
      prevEl: ".client-reviews .swiper-button-prev",
    },
    pagination: {
      el: ".client-reviews .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 35,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  });

  if ($("html").attr("dir") == "ltr") {
    $(".target-cats-parent .target-cat").attr("data-aos", "fade-right");
    $(".challenges-list li").attr("data-aos", "fade-right");
    $(".component:first-of-type .img-holder").attr("data-aos", "fade-left");
    $(".component:nth-of-type(2) .img-holder").attr("data-aos", "fade-right");
    $(".component:nth-of-type(3) .img-holder").attr("data-aos", "fade-left");
    $(".component:nth-of-type(4) .img-holder").attr("data-aos", "fade-right");
    $(".get-trial .sub-title").attr("data-aos", "fade-right");
    $(".get-trial .myTitle").attr("data-aos", "fade-right");
  }
  if ($(window).width() < 768) {
    $(".get-trial .myTitle").attr("data-aos", "fade-down");
    $(".get-trial .sub-title").attr("data-aos", "fade-up");
  }

  //  AOS animation

  AOS.init({
    once: true,
  });
});

$(document).ready(function () {
  // **************************************************************************************************

  // **************************************************************************************************

  // Common Questions

  $(".main-question").on("click", function () {
    $(this).children(".ques-answer").slideToggle(300);
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".ques-answer").not($(this).children(".ques-answer")).slideUp(300);
  });

  // **************************************************************************************************

  // fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("blur-header");
      $(".logo img").attr("src", "images/supercart-logo-light.svg");
      if ($(window).width() > 992) {
        $("header").addClass("fixed-header");
      }
      if ($(window).width() < 768) {
        $("header").addClass("padding-10");
      }
    }
    if ($(window).scrollTop() == 0) {
      $("header").removeClass("fixed-header");
      $("header").removeClass("blur-header");
      $("header").removeClass("padding-10");
      $(".logo img").attr("src", "images/supercart-logo-dark.svg");
    }
  });

  // open and close nav

  let openBtn = $(".openBtn");

  openBtn.on("click", function () {
    $(".toTop").toggle()
    if ($(window).width() < 992) {
      if ($(window).scrollTop() > 100) {
        if (!$("body").hasClass("pages-body")) {
          $("header").toggleClass("header-mob");
          let currentSrc = $(".logo img").attr("src");
          if (currentSrc == "images/supercart-logo-dark.svg") {
            $(".logo img").attr("src", "images/supercart-logo-light.svg");
          } else {
            $(".logo img").attr("src", "images/supercart-logo-dark.svg");
          }
        }
      }
    }

    $(".navigation").slideToggle(400);
    $("body").toggleClass("overflow-hidden");
    $(this).children("i").toggleClass("fa-xmark");

    if ($(this).children("i").hasClass("fa-xmark")) {
      $(".big-menu li").addClass("opacity-100");
    } else {
      $(".big-menu li").removeClass("opacity-100");
    }
  });

  if ($(window).width() < 992) {
    $(".big-menu li a").on("click", function () {
      $(".toTop").show();
      $(".navigation").slideUp(400);
      $("header").removeClass("header-mob");
      $(".openBtn i").removeClass("fa-xmark");
      $("body").removeClass("overflow-hidden");
    });
  }

  // **************************************************************************************************

  // to top button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  // **************************************************************************************************
}); // End of document ready
