(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({'overflow':'visible'});
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$.backstretch(['assets/images/bahamut-bkg.jpg']);

		/* ---------------------------------------------- /*
		 * Animation scroll
		/* ---------------------------------------------- */

		$('a[href*=#]').bind('click', function(e) {
			var anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 500);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * TimeCicles
		/* ---------------------------------------------- */

		var countdown =  $('.countdown-time');

		createTimeCicles();

		$(window).on('resize', windowSize);

		function windowSize(){
			countdown.TimeCircles().destroy();
			createTimeCicles();
			countdown.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
				countdown.removeClass('animated bounceIn');
			});
		}

		function createTimeCicles() {
			countdown.addClass('animated bounceIn');
			countdown.TimeCircles({
				fg_width: 0.013,
				bg_width: 0.6,
				circle_bg_color: '#ffffff',
				time: {
						Days: {color: '#197c7f'}
				,	   Hours: {color: '#197c7f'}
				,	 Minutes: {color: '#197c7f'}
				,	 Seconds: {color: '#197c7f'}
				}
			});
			countdown.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
				countdown.removeClass('animated bounceIn');
			});
		}

		/* ---------------------------------------------- /*
		 * Particles effect
		/* ---------------------------------------------- */


		/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.8,
    size: 1,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 120,
      color: '#fff',
      opacity: 0.5,
      width: 0.1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1.2
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 1050
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .25
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});

		/* ---------------------------------------------- /*
		 * Subscribe form ajax
		/* ---------------------------------------------- */

		$(".subscription-form").submit(function(e) {

			e.preventDefault();

			var email = $("#sub-email").val();
			var dataString = 'email=' + email;

			$.ajax({
				type: "POST",
				url: "assets/php/subscribe.php",
				data: dataString,
				dataType: 'json',
				success: function (result) {
					if(result.formstatus == 1) {
						$('.subscription-message').html(result.message);
						$('.subscription-message').fadeIn(500);
						$('.subscription-form').fadeOut(500);
					} else {
						$('.subscription-message').html(result.message);
						$('.subscription-message').fadeIn(1000);
					}
				}
			});

			return false;

		});

	});

})(jQuery);
