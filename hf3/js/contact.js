jQuery(document).ready(function($){

	$('html').addClass('fade-in');

	$('.close').on('click', function(event){
		$('.contacter').html('');		
	});

	// setTimeout(function(){
	// 	$('.contact').hide('slow');
	// }, 2500);

	$('.field4').on('click', function(event){

	    var form = $('#ajax-contact');

	    var formMessages = $('#messages');

		$(form).submit(function(event) {
	   
	   		event.preventDefault();

		});

	
		var formData = $(form).serialize();
		console.log(formData);

		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		})

		.done(function(response) {
		    
		    $('.form-messages').removeClass('error');
		    $('.contacter').html('');
		    $('.sent').addClass('check');

		    $('#name').val('');
		    $('#email').val('');
		    $('#message').val('');

		})

		.fail(function(data) {
		    
		    $('.form-messages').addClass('error');

		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Sorry, there was a problem submitting your email.');
		    }
		});

	});

});
	

		// function clickTime () {

		// 	clickOne = false;
		// 	clickTwo = false;

		// 	console.log(clickOne);
		// 	console.log(clickTwo);

		// 	$('.container').on('click', function(event){
		// 		clickOne = true;
		// 		console.log(clickOne);
		// 		if (clickOne == true && clickTwo == true) {
		// 		$('.contacter').html('');
		// 		console.log('closososo');
		// 	};
		// 	});

		// 	$('.form').on('click', function(event){
		// 		clickTwo = false;
		// 		console.log(clickTwo);
		// 		if (clickOne == true && clickTwo == true) {
		// 		$('.contacter').html('');
		// 		console.log('closososo');
		// 	};
		// 	});

		// };

		// clickTime();

	
