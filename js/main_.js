$(document).ready(function(){
    $('.simpleimgs').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
       
       
        responsive: [       
  {
  breakpoint: 800,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  
  }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
  });
  });