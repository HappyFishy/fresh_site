jQuery(document).ready(function($){

	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
		$('.cd-work-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('work-is-open');
			$('.cd-work-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
				$('.cd-wor-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('work-is-open');
			$('.cd-work-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
		$('.cd-wo-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('contact-is-open');
			$('.cd-contact-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
	$('.cd-contact-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('contact-is-open');
			$('.cd-contact-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});






//   Modernizr.addTest('bgclip',function() {

//     var div = document.createElement('div');

//     if ('bgclip' in div.style)
//       return true;

//     'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g,function(val) { 
//       if (val+'bgclip' in div.style) return true;
//     });

//   });

//   var NastyBrowserSniffing = {

//   ua: navigator.userAgent.toLowerCase(),

//   init: function() {
//     var isAndroid = NastyBrowserSniffing.ua.indexOf("android") > -1;
//     if (isAndroid) {
//       $("html").addClass("android");
//     }
//   }

// };

// NastyBrowserSniffing.init();



    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollup').fadeIn();
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });

    // $('.carrot').click(function () {
    //     $("html").animate({
    //         scrollTop: 500
    //     }, 600);
    //     // return false;
    // });


// /////////////////////$('#port').click(function(){
//     $("html, body").animate({ scrollTop: 0 }, 600);
//     return false;
//  });

//     var Panels = (function() {
  
//   // var panelLeft = document.querySelector('.panels__side--left');
//   var panelRight = document.querySelector('.portgate');
//   var panelLeft = document.querySelector('.portgate', '.wrapper', '.wrapper2');


//   var openRight = function() {
//     panelRight.classList.toggle('open-active');
//     panelLeft.classList.toggle('closed-hidden');
//   };
  
//   var bindActions = function() {
//     panelRight.addEventListener('click', openRight, false);
//   };
  
//   var init = function() {
//     bindActions();
//   };
  
//   return {
//     init: init
//   };
 
// }());

// Panels.init();

    // $(".click").on("click", function( e ) {

    //     e.preventDefault();

    //     $("body, html").animate({ 
    //         scrollTop: $( $(this).attr('href') ).offset().top 
    //     }, 600);

    // });

