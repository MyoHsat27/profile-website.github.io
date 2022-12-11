new WOW().init();

$(window).on("load", function () {
   $(".loader-container").remove();
});

// Pricing Card Corosal
$(".corosal-card").slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 3,
   responsive: [
      {
         breakpoint: 991,
         settings: {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
      {
         breakpoint: 767,
         settings: {
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
   ],
});

let screenHeight = $(window).height();

$(window).scroll(function () {
   let currentPosition = $(this).scrollTop();
   if (currentPosition >= screenHeight - 100) {
      $(".site-nav").addClass("site-nav-scroll");
   } else {
      $(".site-nav").removeClass("site-nav-scroll");
      setActive("home-section");
   }
});

// Mobile Nabar Bar Icon Change
$(".navbar-toggler").click(function () {
   $(".navbar-collapse").toggleClass("navbar-collapse-toggle");
   let result = document.querySelector(".navbar-collapse").classList.contains("navbar-collapse-toggle");
   if (result) {
      $(".navbar-toggler").html('<i class="fa-solid fa-xmark menu-icon"></i>');
   } else {
      $(".navbar-toggler").html('<i class="fa-solid fa-bars menu-icon"></i>');
   }
});

// Active Navbar
function setActive(current) {
   $(".nav-link").removeClass("current-section");
   $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function getCurrent() {
   let currentSection = $(`section[id]`);

   currentSection.waypoint(function (direction) {
      if (direction == "down") {
         setActive($(this.element).attr("id"));
      }
   });

   currentSection.waypoint(
      function (direction) {
         if (direction == "up") {
            setActive($(this.element).attr("id"));
         }
      },
      {offset: "-100px"}
   );
}

getCurrent();
