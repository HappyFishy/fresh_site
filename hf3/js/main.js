jQuery(document).ready(function($){

	$('.down-arrow').on('click', function(event){
			$('.container').toggleClass('clicked-down');
			$('.container').addClass('clicked-down2');
			$('.container').removeClass('clicked-up2');
			downCheck = $('.container').hasClass('1');
			downCheckTwo = $('.container').hasClass('2');
			// downCheckThree = $('.container').hasClass('3');

			if (downCheckTwo == true) {

				$('.container').removeClass('1'); 
				$('.container').removeClass('2'); 
				// $('.container').addClass('3'); 
				console.log('3');
				$('.main2').css("z-index", "1")
				$('.main3').css("-webkit-animation", "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main3').css("z-index", "2")
				$('.main').css("-webkit-animation", "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main').css("z-index", "20")
				console.log('down3');

			} else if (downCheck == true) {

				$('.container').removeClass('1'); 
				$('.container').removeClass('3'); 
				$('.container').addClass('2'); 
				console.log('2');
				$('main').css("z-index", "1")
				$('.main2').css("-webkit-animation", "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main2').css("z-index", "2")
				$('.main3').css("-webkit-animation", "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main3').css("z-index", "20")
				console.log('down2');

			} else if (downCheck == false && downCheckTwo == false) {

				$('.container').addClass('1');
				console.log('1');
				$('.container').removeClass('2'); 
				$('.container').removeClass('3'); 
				$('.main').css("-webkit-animation", "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main').css("z-index", "2")
				$('.main2').css("-webkit-animation", "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main2').css("-moz-animation", "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main2').css("z-index", "20")
				$('.main3').css("z-index", "1")
				console.log('down');

			}
		});


		$('.up-arrow').on('click', function(event){
			downCheck = $('.container').hasClass('1');
			downCheckTwo = $('.container').hasClass('2');
			downCheckThree = $('.container').hasClass('3');
			$('.container').toggleClass('clicked-up');
			$('.container').addClass('clicked-up2');
			$('.container').removeClass('clicked-down2');

			if (downCheckTwo == true) {

				$('.container').addClass('1'); 
				$('.container').removeClass('3'); 
				$('.container').removeClass('2'); 
				// $('.container').addClass('3'); 
				console.log('1');
				$('.main3').css("-webkit-animation", "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main3').css("z-index", "2")
				$('.main2').css("-webkit-animation", "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main2').css("z-index", "20")
				$('.main').css("z-index", "1")
				console.log('up2');

			} else if (downCheck == true) {

				$('.container').removeClass('1'); 
				$('.container').removeClass('2'); 
				console.log('3');
				$('.main2').css("-webkit-animation", "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main2').css("z-index", "2")
				$('.main').css("-webkit-animation", "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main').css("z-index", "20")
				$('.main3').css("z-index", "1")
				console.log('up3');

			} else if (downCheck == false && downCheckTwo == false ) {

				$('.container').addClass('2');
				console.log('2');
				$('.container').removeClass('1'); 
				$('.container').removeClass('3'); 
				$('.main').css("-webkit-animation", "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main').css("z-index", "2")
				$('.main3').css("-webkit-animation", "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)")
				$('.main3').css("z-index", "20")
				$('.main2').css("z-index", "1")
				console.log('up');
		
			} 
		});

	

	// var lastScrollLeft = 0;

	// $(window).scroll(function() {

	//     var documentScrollLeft = $(document).scrollLeft();

	//     if (lastScrollLeft < documentScrollLeft) {

	//         	console.log('scroll x');

	// 			$('body').toggleClass('navigation-is-open');

	// 	}
	        	// lastScrollLeft = documentScrollLeft;
	// });

		// var lastScrollLeft = 0;







	$(window).scroll(function() {

	    // var documentScrollLeft = $(document).scrollLeft();

	    // if (lastScrollLeft < documentScrollLeft) {

	        	console.log('scroll x');

				// $('body').toggleClass('navigation-is-open');

		// }
	        	// lastScrollLeft = documentScrollLeft;
	});

});





