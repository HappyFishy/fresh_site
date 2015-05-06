jQuery(document).ready(function($){

	$('html').addClass('fade-in');

	$('.close').on('click', function(event){
		$('.contacter').html('');		
	});



	// setTimeout(function(){
	// 	$('.contact').hide('slow');
	// }, 2500);





	$('.field4').on('click', function(event){



	// $(function() {
	    // Get the form.
	    var form = $('#ajax-contact');

	    // Get the messages div.
	    var formMessages = $('#messages');

	    // TODO: The rest of the code will go here...
	// });


	// Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // TODO
	});

	// Serialize the form data.
	var formData = $(form).serialize();
	console.log(formData);

	// Submit the form using AJAX.
	$.ajax({
	    type: 'POST',
	    url: $(form).attr('action'),
	    data: formData
	})

	.done(function(response) {
	    // Make sure that the formMessages div has the 'success' class.
	    $('.form-messages').removeClass('error');
	    // $(formMessages).addClass('success');

	    // Set the message text.
	    // $('.form').html('');
	    // $(formMessages).text('OOGA BOOGA!');
	    $('.contacter').html('');
	    $('.sent').addClass('check');
	    // $(formMessages).text('Sorry, there was a problem submitting your email.');

	    // Clear the form.
	    $('#name').val('');
	    $('#email').val('');
	    $('#message').val('');
	})

	.fail(function(data) {
	    // Make sure that the formMessages div has the 'error' class.
	    // $(formMessages).removeClass('success');
	    $('.form-messages').addClass('error');

	    // Set the message text.
	    if (data.responseText !== '') {
	        $(formMessages).text(data.responseText);
	    } else {
	        $(formMessages).text('Sorry, there was a problem submitting your email.');
	    }
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

	

});