$(function() {
	$(".close").click(function() {
		$(".login").hide();
		$(".mask").hide();
	});
	$('.js-yuyue').click(yuYue);

	function checkPhone(phone) {
		if(/^1[3|4|5|7|8|9]\d{9}$/.test(phone)) {
			return true;
		}
		return false;
	}

	function yuYue() {
		var phone = $('.js-phone').val();
		var email = $('.js-email').val();
		var type = "ios";
		if(!checkPhone(phone)) {
			alert('该手机号码不正确');
		} else {
			var cms_csrf = $('meta[name="csrf-token"]').attr('content');
			var type = $('input[name="xitong"]:checked').val();
			$.post('/site/subscribe.html', {
					phone: phone,
					email: email,
					cms_csrf: cms_csrf,
					type: type,
					is_no_yzm: 1,
					scene: 2
				},
				function(data) {
					if(data.status == 0) {
						$('.js-phone').val("");
						$('.js-email').val();
						alert('预约已成功');
					} else {
						alert(data.msg);
					}
				}, 'JSON');
		}
	}
});