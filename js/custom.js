$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });


  /* Window scroll */
  $(window).scroll(function () {
    var scrollTopPos = $(window).scrollTop();
    $(".banner li.active .banner-img").css({ "transform": "translateY(" + scrollTopPos*1.3 + "px)" })
    $(".banner li.active .banner-content .container").css({ "transform": "translateY(" + scrollTopPos/1.9 + "px)" })

    if ($(window).scrollTop() > 100) 
      $("body").addClass('fixed-header');
    else 
      $("body").removeClass('fixed-header');    
  });

  // Slider jQuery
  var $windowW = $(window).innerWidth(),
  $sliderItems = $(".banner li").length;
  $(".banner li:first-child").addClass('active');  
  $(".banner li").width($windowW);
  $(".banner ul").width($windowW * $sliderItems);
  $(".prev-slide").addClass('disabled');


  $(".next-slide").click(function () {
    if($(".banner li.active").next().length) {
      $(".banner li.active").removeClass('active').next().addClass('active');      
      var activeSlide = $(".banner li.active").index();
      $(".banner ul").css("transform", "translateX(" + -(activeSlide * $windowW) + "px)");
    }
    $(".prev-slide").removeClass('disabled');
    if(!$(".banner li.active").next().length)
      $(".next-slide").addClass('disabled');
    
  });

  $(".prev-slide").click(function () {
    if ($(".banner li.active").prev().length) {
      $(".banner li.active").removeClass('active').prev().addClass('active');      
      var activeSlide = $(".banner li.active").index();
      $(".banner ul").css("transform", "translateX(" + -(activeSlide * $windowW) + "px)");
    }
    $(".next-slide").removeClass('disabled');
    if(!$(".banner li.active").prev().length)
      $(".prev-slide").addClass('disabled');
    
  });

  var $resizeDone;
  $(window).resize(function (event) {
    clearTimeout($resizeDone);
    $resizeDone = setTimeout(function(){
      $windowW = $(window).innerWidth(),
      $sliderItems = $(".banner li").length;    
      $(".banner li").width($windowW);
      $(".banner ul").width($windowW * $sliderItems);
      var activeSlide = $(".banner li.active").index();    
      $(".banner ul").css("transform", "translateX(" + -(activeSlide * $windowW) + "px)");
    }, 300);
  });

  /*mobile menu*/
  $(".menu-icon").click(function () {
    $("html,body").toggleClass("open-menu");
  });

});


