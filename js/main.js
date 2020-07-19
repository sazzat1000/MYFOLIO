$(document).ready(function () {

  // Pre Loader
  $(window).on("load", function () {
    $("#preloader").fadeOut(1000);
  })

    // Back to Top Buttton

    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
          $(".up").fadeIn();
        }else {
          $(".up").fadeOut();
        }
      });
    
      $(".up").click(function() {
        $("html, body").animate({scrollTop: 0},1000);
      });

    // Sticky Menu
    $("#about").waypoint(function(direction) {
        if (direction == "down") {
            $("#header").addClass("sticky-header");
        } else {
            $("#header").removeClass("sticky-header");
        }
    });

    // Slick Slider
    $('#banner').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      swipe: false,
      prevArrow: "<i class='fas fa-arrow-left arrow arrow-left'></i>",
      nextArrow: "<i class='fas fa-arrow-right arrow arrow-right'></i>",
    });

    // Wow js
    new WOW().init();


});