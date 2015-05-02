jQuery(document).ready(function($){

	$('.down-arrow').on('click', function(event){

			$('.container').toggleClass('clicked-down').addClass('clicked-down2').removeClass('clicked-up2');

			downCheck = $('.container').hasClass('1');
			downCheckTwo = $('.container').hasClass('2');
			downCheckThree = $('.container').hasClass('3');
			downCheckFour = $('.container').hasClass('4');

			if (downCheckFour == true) {

				$('.container').removeClass('1').removeClass('2').removeClass('3').removeClass('4'); 
				console.log('5');
				$('.main2, .main3, .main4').css("z-index", "1");
				$('.main5').css({
					"-webkit-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main5').css("z-index", "2");
				$('.main').css({
					"-webkit-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main').css("z-index", "20");
				console.log('down5');

			} else if (downCheckThree == true) {

				$('.container').addClass('4').removeClass('1').removeClass('2').removeClass('3');   
				console.log('4');
				$('.main, .main2, .main3').css("z-index", "1");

				$('.main4').css({
					"-webkit-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main4').css("z-index" , "2")
				$('.main5').css({
					"-webkit-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main5').css("z-index", "20");
				console.log('down4');

			} else if (downCheckTwo == true) {

				$('.container').addClass('3').removeClass('1').removeClass('2').removeClass('4'); 
				console.log('3');
				$('.main, .main2, .main5').css("z-index", "1");

				$('.main3').css({
					"-webkit-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main3').css("z-index", "2");
				$('.main4').css({
					"-webkit-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main4').css("z-index", "20");
				console.log('down3');

			} else if (downCheck == true) {

				///////////////////////////////////////////

				$('.content2').css({
					"-webkit-animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-webkit-animation-fill-mode" : "forwards"
					});

				

				$('.container').addClass('2').removeClass('1').removeClass('3').removeClass('4'); 
				console.log('2');
				$('.main, .main4, .main5').css("z-index", "1");

				$('.main2').css({
					"-webkit-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main2').css("z-index", "2");
				$('.main3').css({
					"-webkit-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main3').css("z-index", "20");
				console.log('down2');

			} else if (downCheck == false && downCheckTwo == false && downCheckThree == false && downCheckFour == false) {

				$('.container').addClass('1').removeClass('2').removeClass('3').removeClass('4');
				console.log('1');



				/////////////////////////////////


				$('.content').css({
					"-webkit-animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "upcontent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-webkit-animation-fill-mode" : "forwards"
					});

				// $('.content p').css({
				// 	"-webkit-animation" : "lines 1s linear",
				// 	"-moz-animation" : "lines 1s linear",
				// 	"-o-animation" : "lines 1s linear",
				// 	"animation" : "lines 1s linear"
				// });


				$('.main').css({
					"-webkit-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "open 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				$('.main').css("z-index", "2");
				$('.main2').css({
					"-webkit-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "closeUp 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});
				
				$('.main2').css("z-index", "20");
				$('.main3, .main4, .main5').css("z-index", "1");

				console.log('down');

			}
		});


		$('.up-arrow').on('click', function(event){

			downCheck = $('.container').hasClass('1');
			downCheckTwo = $('.container').hasClass('2');
			downCheckThree = $('.container').hasClass('3');
			downCheckFour = $('.container').hasClass('4');

			$('.container').toggleClass('clicked-up').addClass('clicked-up2').removeClass('clicked-down2');


			if (downCheck == true) {

				console.log('4');

				$('.container').removeClass('1').removeClass('2').removeClass('3').removeClass('4'); 

				$('.main2').css({
					"-webkit-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
					});

				$('.main2').css("z-index", "2");

				$('.main').css({
					"-webkit-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});



				////////////////////////////////

				
				$('.content').css({
					"-webkit-animation" : "backdown 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "backdown 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "backdown 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "backdown 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});
			






				$('.main').css("z-index", "20");

				$('.main3, .main4, .main5').css("z-index", "1");
				
				console.log('up5');

			} else if (downCheckTwo == true) {



				$('.content2').css({
					"-webkit-animation" : "downcontent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "downcontent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "downcontent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "downcontent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});



				$('.container').addClass('1').removeClass('2').removeClass('3').removeClass('4');
				console.log('1');
			
				$('.main3').css({
					"-webkit-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)", 
					"-moz-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)", 
					"-o-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)", 
					"animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main3').css("z-index", "2")

				$('.main2').css({
					"-webkit-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main2').css("z-index", "20");

				$('.main, .main4, .main5').css("z-index", "1");

				console.log('up4');

			} else if (downCheckThree == true) {

				$('.container').addClass('2').removeClass('1').removeClass('3').removeClass('4');
				console.log('2');
				
				$('.main4').css({
					"-webkit-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main4').css("z-index", "2");

				$('.main3').css({
					"-webkit-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main3').css("z-index", "20");

				$('.main, .main2, .main5').css("z-index", "1")
				
				console.log('up3');

			} else if (downCheckFour == true) {

				$('.container').addClass('3').removeClass('1').removeClass('2').removeClass('4');
				console.log('3');
	
				$('.main5').css({
					"-webkit-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main5').css("z-index", "2");

				$('.main4').css({
					"-webkit-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main4').css("z-index", "20");

				$('.main, .main2, .main3').css("z-index", "1");
		
				console.log('up2');
		
			} else if (downCheck == false && downCheckTwo == false && downCheckThree == false && downCheckFour == false) {

				$('.container').addClass('4').removeClass('1').removeClass('2').removeClass('3');
				console.log('4');
				
				$('.main').css({
					"-webkit-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "openUp 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main').css("z-index", "2");

				$('.main5').css({
					"-webkit-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-moz-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"-o-animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
					"animation" : "close 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)"
				});

				$('.main5').css("z-index", "20");

				$('.main2, .main3, .main4').css("z-index", "1");
		
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





