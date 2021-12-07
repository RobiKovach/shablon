jQuery(document).ready(function($){
	$(".forma").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					alert('Письмо отправлено');
				}
				else {
					alert('Ошибка! Возможно вы неправильно заполнили поля.');
				}
			}
		});
		return false;
	});

});