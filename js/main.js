/*$(document).ready(function(){
    $('.nivo-lightbox a').nivoLightbox({ effect: 'fade' });
    });

    $('#carouselExample').on('slide.bs.carousel', function (e) {

        /*
    
        CC 2.0 License Iatek LLC 2018
        Attribution required
        
        */
       $('#carouselExample').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
    
    /*$(document).ready(function() {
        $('#myCarousel').carousel({
        interval: 10
        })
       });*/