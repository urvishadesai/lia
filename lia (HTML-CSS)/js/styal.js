


$(document).ready(function(){

     
     $(window).scroll(function(){
          var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
     
          if (scroll >= 200) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
     });

     $('#trstimonial').owlCarousel({
     loop:true,
     margin:10,
     nav:false,
     dots:false,
     autoplay:true,
     autoplayTimeout:5000,
     
     responsive:{
          0:{
               items:1
          },
          600:{
               items:3
          },
          1000:{
               items:1
          }
          }    
     })

     $('#team').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          // dots:false,
          autoplay:true,
          autoplayTimeout:5000,
          
          responsive:{
               0:{
                    items:1
               },
               600:{
                    items:3
               },
               1000:{
                    items:3
               }
               }    
          })

          
});
