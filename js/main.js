$(document).ready(function () {

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
      prevArrow: "<i class='fas fa-arrow-left left'></i>",
      nextArrow: "<i class='fas fa-arrow-right right'></i>",
    });


});