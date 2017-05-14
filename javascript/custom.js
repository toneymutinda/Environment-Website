$(document).ready(function(){
    // Type header Caption
    $("#homeHeading").typed({
                  strings: ["The Leading Tree Conservation Agency in East and Central Africa"],
                  typeSpeed: 100,
                  showCursor: false,
    });
    
    //Change Navbar color on scroll
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
          navbar = $('.navbar-default');

      if (scrollPos > 50) {
        navbar.addClass('change-color');
      } else {
        navbar.removeClass('change-color');
      }
    });
    
    //Smooth Scrolling on Links
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1250, 'easeInOutExpo');
          return false;
        }
      }
    });
    
    // add box shadow css on thumbnails
    $(".hover-shadow-pics").mouseenter(function() {
          $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
          .css("transition", "0.6s");
             }).mouseleave(function() {
           $(this).css("box-shadow", "none");
    });

     // Gallery Filtering Scripts & Hover Effect
    var filterList = {
        init: function() {
            // MixItUp plugin
            $('.gallery-items').mixItUp();
        },
    };
    filterList.init();
     
     // Gallery Magnific Popup
    $('.mix').magnificPopup({
        type: 'image',
        image: {
            titleSrc: 'title'
        },
        gallery: {
          enabled: true 
        }
    });

    // Partners Carousel
    $('.owl-carousel').owlCarousel({
        items: 5,
        margin:10,
        autoplay: true,
        autoplaySpeed: 800,
        loop: true
      }); 

    // Wow js
    new WOW().init();

    // Button animations
    $(".btnSwing").hover(function () {
      $(this).toggleClass("animated swing");
   });

    // Fade in Testimonial Items
    $('.testimonial-items').addClass('animated fadeIn');

    //scroll top button
    $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        
        
}); //END OF DOCUMENT READY