$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: true,
		autoplay: true,
		loop: true
	});

	$(".special").owlCarousel({
		slideBy: 3,
		items: 4,
		dots: true,
		margin: 30,
		nav: false,
		responsive: {
	        0: {
	            items: 1
	        },
	        991: {
	            items: 4

	        }
	    }
	});

	$(".reviews").owlCarousel({
		slideBy: 3,
		items: 4,
		margin: 10,
		nav: true,
		loop: true,
		autoplay: true,
		navText: '',
		responsive: {
	        0: {
	            items: 1,
	            slideBy: 1
	        },
	        991: {
	            items: 4

	        }
	    }
	});

	$(".cityhotels .hotels-vblocks").owlCarousel({
		slideBy: 1,
		items: 3,
		margin: 26,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
		navText: '',
		responsive: {
	        0: {
	            items: 1,
	            slideBy: 1
	        },
	        991: {
	            items: 3

	        }
	    }
	});




	

});