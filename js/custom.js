
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });

    $(document).ready(function(){
      $(window).scroll(function(){
      	var scroll = $(window).scrollTop();

    	  if (scroll > 200) {
    	    $(".navbar").css("background-color" , "#31394e");
          $(".nav-item .nav-link").css("color" , "#fff");
    	  }
    	  else if(scroll<420){
    		  $(".navbar").css("background-color" , "transparent");
          $(".nav-item .nav-link").css("color" , "#ffffff");
    	  }
      })
    })

    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });


    

