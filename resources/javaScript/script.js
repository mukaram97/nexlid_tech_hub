$(document).ready(function(){
    
    /* sticky */
    $('.js-section').waypoint(function(direction) {
                            
        
            if (direction == "down") {
                
        
            $('nav').addClass('sticky');
        }   
    
    
    
        else {
                $('nav').removeClass('sticky');
    }
                              
                              
                              
                              
            } , {
          offset: '60px'
        })  
    
    
    /* SCROLL ON BUTTON */
    
    
    $('.js--scroll-to-blog').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-blog').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-services').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-contact').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-about').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-home').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-team').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-team').offset().top}, 1000); 
    });

    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    
    /* mobile navigation */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')

        }
    
    })
    
  /*   var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window') 
        }, {
          offset: '25%'
        })  

*/
    
})