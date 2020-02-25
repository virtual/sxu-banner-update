$(function () {

  // Update these following buttons if you use another library for icons in the future
  var buttonPrev = "<button type='button' aria-label='Previous' class='slick-prev pull-left'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span></button>";
  var buttonNext = "<button type='button' aria-label='Next' class='slick-next pull-right'><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></button>";
  
    carouselslider = $('.slick-slider.carousel-slider');
    carouselsliderOptions = {
      arrows: true,
      autoplaySpeed: 5000,
      autoplay: true,
      infinite: true,
      dots: false,
      prevArrow: buttonPrev,
      nextArrow: buttonNext,
      pauseOnHover: true, 
      draggable: false, // JS click slide
      swipe: true, 
      slide: '.slide' 
    };  
     
    $(carouselslider.each(function (idx, item) {
      var carouselId = "carousel" + idx;
      this.id = carouselId;
 
      $(this).slick(carouselsliderOptions); 
    }));
  
    $(".carousel-slider.slick-slider .caption").each(function() {
      var $slide = $(this).parent();
      if ($slide.attr("aria-describedby") != undefined) {
      // ignore extra/cloned slides
      $(this).attr("id", $slide.attr("aria-describedby"));
      }
      });
     
    // Link whole slide based on inner link
    $('.carousel-slider .slick-slide').click(function(e){
      // var link = $(this).find('.carousel-feature-title a').attr('href');
      var link = $(this).find('.carousel-feature-text a').attr('href');
      if (link) { // Don't link if undefined
        window.location.href = link;
      }
    }) 
  });