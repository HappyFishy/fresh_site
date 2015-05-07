function sendAJAX () {
			$('.contacter').load('contact.html');
			$('.sent').removeClass('check');
			$('.form-messages').removeClass('error');
		}
		function sendAJAX2 () {
			$('html').load('portfolio.html');
			$('.container').removeClass('1').removeClass('2').removeClass('3').removeClass('4');
		}