
(function($){
    
   "use strict" ;
    
    $(document).ready(function(){
                
    // Sticky Menu
    $(".main_header").sticky({
        topSpacing: 0
    });
       
    // The actual plugin
    $('.nav').singlePageNav({
        offset: $('.nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
        beforeStart: function() {
            console.log('begin scrolling');
        },
        onComplete: function() {
            console.log('done scrolling');
        }
    });

    // click to scroll up

        $('.scrollup').click(function(){
                $("html,body").animate({
                        scrollTop:0
                },600);
                return false;
        });
                $(window).on('scroll',function(){

                        if($(this).scrollTop() >250){
                                $('.scrollup').fadeIn();
                        }else{
                                $('.scrollup').fadeOut();
                        }

                });

                 
          // owl 
          
          $("#owl-example").owlCarousel({
              
              // Most important owl features
                items : 2,
                itemsCustom : false,
                itemsDesktop : [1199,2],
                itemsDesktopSmall : [980,2],
                itemsTablet: [768,1],
                itemsTabletSmall: false,
                itemsMobile : [479,1],
                singleItem : false,
                itemsScaleUp : false,

                //Basic Speeds
                slideSpeed : 200,
                paginationSpeed : 800,
                rewindSpeed : 1000,

                //Autoplay
                autoPlay : true,
                stopOnHover : false,

                // Navigation
                navigation : true,
                navigationText : ["<i class='fa fa-long-arrow-left'></i> Pre","next <i class='fa fa-long-arrow-right'></i>"],
                rewindNav : true,
                scrollPerPage : false,

                //Pagination
                pagination : false,
                paginationNumbers: false,

                // Responsive 
                responsive: true,
                responsiveRefreshRate : 200,
                responsiveBaseWidth: window,




                      });
          
          
          // owl 
          
          $("#owl_brand").owlCarousel({
              
              // Most important owl features
                items : 6,
                itemsCustom : false,
                itemsDesktop : [1199,6],
                itemsDesktopSmall : [980,4],
                itemsTablet: [768,2],
                itemsTabletSmall: false,
                itemsMobile : [479,1],
                singleItem : false,
                itemsScaleUp : false,

                //Basic Speeds
                slideSpeed : 200,
                paginationSpeed : 800,
                rewindSpeed : 1000,

                //Autoplay
                autoPlay : true,
                stopOnHover : false,

                // Navigation
                navigation : true,
                navigationText : ["<i class='fa fa-long-arrow-left'></i> Pre","next <i class='fa fa-long-arrow-right'></i>"],
                rewindNav : true,
                scrollPerPage : false,

                //Pagination
                pagination : true,
                paginationNumbers: false,

                // Responsive 
                responsive: true,
                responsiveRefreshRate : 200,
                responsiveBaseWidth: window,




                      });
                      
                       
        // jQuery Custom scrollbar
		$("body").niceScroll({
			cursorcolor: "rgba(47, 53, 59, 0.95)",
			cursorborderradius: "0px",
			cursorwidth: "10px",
			cursorminheight: 100,
			cursorborder: "0px solid #fff",
			zindex: 9999,
			autohidemode: true,
			horizrailenabled:false
		});
          
          // Google map 
          
          
          function initialize() {
			  var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(23.81033, 90.41252)
			  };

			  var map = new google.maps.Map(document.getElementById('googleMap'),
				  mapOptions);


			  var marker = new google.maps.Marker({
				position: map.getCenter(),
				animation:google.maps.Animation.BOUNCE,
				icon: 'img/marker.png',
				map: map
			  });

			}

			google.maps.event.addDomListener(window, 'load', initialize);
                        
                        
                        
                        
                        
                        // video loop 
                        
                        var vid = document.getElementById("intro_video");

                        function enableLoop() { 
                          vid.loop = true;
                          vid.load();
                        } ;
                        // for preloader
                  setTimeout(function(){
		     $('body').addClass('loaded');
		     $('h1').css('color','#222222');
	              }, 5000);      
                        

    });
    
    
})(jQuery);
