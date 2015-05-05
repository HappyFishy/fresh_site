jQuery(document).ready(function($){

	function goDown() {

/////////////////////////////////////////////////////////////////
///////////// FIXES ARROW COLOR WHEN ACTIVE /////////////
/////////////////////////////////////////////////////////////////


		$('.down-arrow').removeClass('color-change5').removeClass('color-change').removeClass('color-change2').removeClass('color-change3').removeClass('color-change4');
		

		$('.down-arrow').css({
			'background-color' : '#FCFCFC',
			'-webkit-transition-duration' : '.25s',
			'-moz-transition-duration' : '.25s',
			'-ms-transition-duration' : '.25s',
			'-o-transition-duration' : '.25s',
			'transition-duration' : '.25s'
		});


		$('.container').toggleClass('clicked-down').addClass('clicked-down2').removeClass('clicked-up2');

		downCheck = $('.container').hasClass('1');
		downCheckTwo = $('.container').hasClass('2');
		downCheckThree = $('.container').hasClass('3');
		downCheckFour = $('.container').hasClass('4');

		if (downCheckFour == true) {

			$('.button-contact, .button-portfolio').addClass('color-change-buttons5').removeClass('color-change-buttons').removeClass('color-change-buttons2').removeClass('color-change-buttons3').removeClass('color-change-buttons4');
			$('.fixed, .up-arrow').addClass('color-change5').removeClass('color-change').removeClass('color-change2').removeClass('color-change3').removeClass('color-change4');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#583450'
			 });
			 $('.fixed, .up-arrow').css({
			 	'background-color' : 'rgba(98,62,90, .7)'
			 });

			

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

			////////////////////////////////////////////////////////////  

			$('.content4, .content2, .content3').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content').css("z-index", "60");

			$('.content5').css({
				"-webkit-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content').css({
				"-webkit-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

		} else if (downCheckThree == true) {

			$('.button-contact, .button-portfolio').addClass('color-change-buttons4').removeClass('color-change-buttons').removeClass('color-change-buttons2').removeClass('color-change-buttons3').removeClass('color-change-buttons5');
			$('.fixed, .up-arrow').addClass('color-change4').removeClass('color-change').removeClass('color-change2').removeClass('color-change3').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#a09065'
			 });
			 $('.fixed, .up-arrow').css({
			 	'background-color' : 'rgba(170,154,111, .7)'
			 });



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


			////////////////////////////////////////////////////////////  

			$('.content, .content2, .content3').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content5').css("z-index", "60");

			$('.content4').css({
				"-webkit-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content5').css({
				"-webkit-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

		} else if (downCheckTwo == true) {

			$('.button-contact, .button-portfolio').addClass('color-change-buttons3').removeClass('color-change-buttons').removeClass('color-change-buttons2').removeClass('color-change-buttons4').removeClass('color-change-buttons5');
			$('.fixed, .up-arrow').addClass('color-change3').removeClass('color-change').removeClass('color-change').removeClass('color-change4').removeClass('color-change5');


			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#00a676'
			 });
			 $('.fixed, .up-arrow').css({
			 	'background-color' : 'rgba(10,176,128, 0.7)'
			 });



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


			////////////////////////////////////////////////////////////  

			$('.content, .content2, .content5').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content4').css("z-index", "60");

			$('.content3').css({
				"-webkit-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content4').css({
				"-webkit-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});


		} else if (downCheck == true) {

			$('.button-contact, .button-portfolio').addClass('color-change-buttons2').removeClass('color-change-buttons1').removeClass('color-change-buttons3').removeClass('color-change-buttons4').removeClass('color-change-buttons5');
			$('.fixed, .up-arrow').addClass('color-change2').removeClass('color-change').removeClass('color-change3').removeClass('color-change4').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#444554'
			 });
			 $('.fixed, .up-arrow').css({
			 	'background-color' : 'rgba(78,79,94, .7)'
			 });

			///////////////////////////////////////////		

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


			////////////////////////////////////////////////////////////  

			$('.content, .content4, .content5').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content3').css("z-index", "60");

			$('.content2').css({
				"-webkit-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content3').css({
				"-webkit-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});



		} else if (downCheck == false && downCheckTwo == false && downCheckThree == false && downCheckFour == false) {

			$('.container').addClass('1').removeClass('2').removeClass('3').removeClass('4');
			console.log('1');


			// $('.liner').css({
			// 	"-webkit-animation" : "lines .1s linear",
			// 	"-moz-animation" : "lines .1s linear",
			// 	"-o-animation" : "lines .1s linear",
			// 	"animation" : "lines .1s linear"
			// });


			////////////////////////////////////////
			//color change
			////////////////////////////////////////


			$('.button-contact, .button-portfolio').addClass('color-change-buttons').removeClass('color-change-buttons2').removeClass('color-change-buttons3').removeClass('color-change-buttons4').removeClass('color-change-buttons5');
			$('.fixed, .up-arrow').addClass('color-change').removeClass('color-change2').removeClass('color-change3').removeClass('color-change4').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#AF4335'
			 });
			 $('.fixed, .up-arrow').css({
			 	'background-color' : 'rgba(185,77,63,.7)'
			 });
		
			 /////////////
			 // if ($('.container').hasClass('clicked-down2') == false) {

			 // 	$('.down-arrow').addClass('color-change');
			 // } else {
			 // 	console.log('SHOSHOHSOHSHOSH');
			 // }

			////////////////////////////////////////
			//content line height change
			////////////////////////////////////////

			// $('.content p').css({
			// 	"-webkit-animation" : "spaceLines 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
			// 	"-webkit-animation-fill-mode" : "initial"
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

			////////////////////////////////////////////////////////////  

			$('.content3, .content4, .content5').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content2').css("z-index", "60");

			$('.content').css({
				"-webkit-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content2').css({
				"-webkit-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeUpContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

		}

	};


		function goUp() {

		downCheck = $('.container').hasClass('1');
		downCheckTwo = $('.container').hasClass('2');
		downCheckThree = $('.container').hasClass('3');
		downCheckFour = $('.container').hasClass('4');

		$('.container').toggleClass('clicked-up').addClass('clicked-up2').removeClass('clicked-down2');

		$('.up-arrow').removeClass('color-change5').removeClass('color-change').removeClass('color-change2').removeClass('color-change3').removeClass('color-change4');

		$('.up-arrow').css({
			'background-color' : '#FCFCFC',
			'-webkit-transition-duration' : '.25s',
			'-moz-transition-duration' : '.25s',
			'-ms-transition-duration' : '.25s',
			'-o-transition-duration' : '.25s',
			'transition-duration' : '.25s'
		});

		if (downCheck == true) {


			$('.button-contact, .button-portfolio').addClass('color-change-buttons5').removeClass('color-change-buttons3').removeClass('color-change-buttons4').removeClass('color-change-buttons2').removeClass('color-change-buttons');
			$('.fixed, .down-arrow').addClass('color-change5').removeClass('color-change3').removeClass('color-change4').removeClass('color-change2').removeClass('color-change');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#444554'
			 });
			 $('.fixed, .down-arrow').css({
			 	'background-color' : 'rgba(78,79,94, .7)'
			 });


			// $('.content p').css({
			// 	"-webkit-animation" : "spaceLinesBack 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
			// 	"-webkit-animation-fill-mode" : "initial"
			// });


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


			$('.main').css("z-index", "20");

			$('.main3, .main4, .main5').css("z-index", "1");
			
			console.log('up5');


			////////////////////////////// content moves on up arrow


			$('.content3, .content4, .content5').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content').css("z-index", "60");

			$('.content2').css({
				"-webkit-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content').css({
				"-webkit-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

		} else if (downCheckTwo == true) {


			$('.button-contact, .button-portfolio').addClass('color-change-buttons').removeClass('color-change-buttons3').removeClass('color-change-buttons4').removeClass('color-change-buttons2').removeClass('color-change-buttons5');
			$('.fixed, .down-arrow').addClass('color-change').removeClass('color-change3').removeClass('color-change4').removeClass('color-change2').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#00a676'
			 });
			 $('.fixed, .down-arrow').css({
			 	'background-color' : 'rgba(10,176,128, 0.7)'
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



			////////////////////////////// content moves on up arrow

			$('.content, .content4, .content5').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content2').css("z-index", "60");

			$('.content3').css({
				"-webkit-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content2').css({
				"-webkit-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

		} else if (downCheckThree == true) {

			$('.button-contact, .button-portfolio').addClass('color-change-buttons2').removeClass('color-change-buttons3').removeClass('color-change-buttons4').removeClass('color-change-buttons').removeClass('color-change-buttons5');
			$('.fixed, .down-arrow').addClass('color-change2').removeClass('color-change3').removeClass('color-change4').removeClass('color-change').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#a09065'
			 });
			 $('.fixed, .down-arrow').css({
			 	'background-color' : 'rgba(170,154,111, .7)'
			 });


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

			////////////////////////////// content moves on up arrow

			$('.content, .content2, .content5').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content3').css("z-index", "60");

			$('.content4').css({
				"-webkit-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content3').css({
				"-webkit-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

		} else if (downCheckFour == true) {


			$('.button-contact, .button-portfolio').addClass('color-change-buttons3').removeClass('color-change-buttons2').removeClass('color-change-buttons4').removeClass('color-change-buttons').removeClass('color-change-buttons5');
			$('.fixed, .down-arrow').addClass('color-change3').removeClass('color-change2').removeClass('color-change4').removeClass('color-change').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#583450'
			 });
			 $('.fixed, .down-arrow').css({
			 	'background-color' : 'rgba(98,62,90, .7)'
			 });



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


			////////////////////////////// content moves on up arrow

			$('.content, .content2, .content3').css("z-index", "-1");
			// $('.content5').css("z-index", "2");
			$('.content4').css("z-index", "60");

			$('.content5').css({
				"-webkit-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content4').css({
				"-webkit-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});
	
	
		} else if (downCheck == false && downCheckTwo == false && downCheckThree == false && downCheckFour == false) {

			$('.button-contact, .button-portfolio').addClass('color-change-buttons4').removeClass('color-change-buttons2').removeClass('color-change-buttons3').removeClass('color-change-buttons').removeClass('color-change-buttons5');
			$('.fixed, .down-arrow').addClass('color-change4').removeClass('color-change2').removeClass('color-change3').removeClass('color-change').removeClass('color-change5');

			$('.button-contact, .button-portfolio').css({
			 	'background-color' : '#AF4335'
			 });
			 $('.fixed, .down-arrow').css({
			 	'background-color' : 'rgba(185,77,63,.7)'
			 });
		


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


			////////////////////////////// content moves on up arrow

			$('.content2, .content3, .content4').css("z-index", "-1");
			// $('.content').css("z-index", "2");
			$('.content5').css("z-index", "60");

			$('.content').css({
				"-webkit-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "openUpContent 1.4s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});

			$('.content5').css({
				"-webkit-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-moz-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-o-animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"animation" : "closeContent 0.6s cubic-bezier(0.91, 0.01, 0.6, 0.99)",
				"-webkit-animation-fill-mode" : "forwards",
				"-moz-animation-fill-mode" : "forwards",
				"-ms-animation-fill-mode" : "forwards",
				"-o-animation-fill-mode" : "forwards",
				"animation-fill-mode" : "forwards"

			});
	
		} 

	};

		

$('.down-arrow').on('click', function(event){
	goDown();
});

$('.up-arrow').on('click', function(event){
	goUp();
});


////// chrome, opera, i.e. ////// works on safari also

var isMoving=false;

$(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event, delta) {
   event.preventDefault();
   if (isMoving) return;
   navigateTo();
});

function navigateTo(){
   isMoving = true;
   setTimeout(function() {
    isMoving=false;
   },1500);
}


// creates a global "addWheelListener" method
// example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
// (function(window,document) {

//     var prefix = "", _addEventListener, onwheel, support;

//     // detect event model
//     if ( window.addEventListener ) {
//         _addEventListener = "addEventListener";
//     } else {
//         _addEventListener = "attachEvent";
//         prefix = "on";
//     }

//     // detect available wheel event
//     support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
//               document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
//               "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

//     window.addWheelListener = function( elem, callback, useCapture ) {
//         _addWheelListener( elem, support, callback, useCapture );

//         // handle MozMousePixelScroll in older Firefox
//         if( support == "DOMMouseScroll" ) {
//             _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
//         }
//     };

//     function _addWheelListener( elem, eventName, callback, useCapture ) {
//         elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
//             !originalEvent && ( originalEvent = window.event );

//             // create a normalized event object
//             var event = {
//                 // keep a ref to the original event object
//                 originalEvent: originalEvent,
//                 target: originalEvent.target || originalEvent.srcElement,
//                 type: "wheel",
//                 deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
//                 deltaX: 0,
//                 deltaZ: 0,
//                 preventDefault: function() {
//                     originalEvent.preventDefault ?
//                         originalEvent.preventDefault() :
//                         originalEvent.returnValue = false;
//                 }
//             };
            
//             // calculate deltaY (and deltaX) according to the event
//             if ( support == "mousewheel" ) {
//                 event.deltaY = - 1/40 * originalEvent.wheelDelta;
//                 // Webkit also support wheelDeltaX
//                 originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
//             } else {
//                 event.deltaY = originalEvent.detail;
//             }

//             // it's time to fire the callback
//             return callback( event );

//         }, useCapture || false );
//     }

//     $('html').bind('mousewheel wheel DOMMouseScroll MozMousePixelScroll', function(e) {
// 	// $('html').on('mousewheel', function (e) {
//     // var delta = e.originalEvent.wheelDelta;
//     event.preventDefault();
//     console.log(event.deltaY);


//     if(isMoving == false && event.deltaY > 0) {

// 	   console.log('scrolled down');

//        goDown();

//     } else if (isMoving == false && event.deltaY < 0) {

//         console.log('scrolled up');

// 		goUp();
//     }
// });

// })(window,document);


$('html').bind('mousewheel wheel DOMMouseScroll MozMousePixelScroll', function (e) {
	// $('html').on('mousewheel', function (e) {
    // var delta = e.originalEvent.wheelDelta;
    event.preventDefault();
    console.log(event.deltaY);


    if(isMoving == false && event.deltaY > 0) {

	   console.log('scrolled down');

       goDown();

    } else if (isMoving == false && event.deltaY < 0) {

        console.log('scrolled up');

		goUp();
    }
});

// $('html').on('wheel', function (e) {
//     // var delta = e.originalEvent.wheelDelta;
//     e.preventDefault();
//     console.log(WheelEvent.deltaY);


//     if(isMoving == false && WheelEvent.deltaY > 0) {

// 	   console.log(WheelEvent.deltaY);

//        goDown();

//     } else if (isMoving == false && WheelEvent.deltaY < 0) {

//         console.log('scrolled up');

// 		goUp();
//     }
// });




////// safari

// $('html').on ('DOMMouseScroll', function (e) {
//     var delta = e.originalEvent.detail;
    
//     if (delta < 0) {
//         $('p').text ('You scrolled up');
//     } else if (delta > 0) {
//         $('p').text ('You scrolled down');
//     }
    
// });

///////////////// transition with this and reset to zero for every section





});





