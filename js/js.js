
   $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
       /*centerMode: true,
       ceterPadding: "25px",
       /*dots:true,
       fade: true*/

   });

   $('body').flipLightBox
   ({ lightbox_flip_speed: 500, 
      lightbox_border_color: '#666666' 
   })

   $(document).ready(function(){
      $('.nivo-lightbox a').nivoLightbox({ effect: 'fade' });
      });
  
   $(document).ready(function() {
      $('#myCarousel').carousel({
      interval: 10000
      })
      });

   