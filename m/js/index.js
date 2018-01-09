$(function() {
	var mySwiper = new Swiper(".z_banner", {
		pagination: '.swiper-pagination',
		observer:true,
		observeParents:true,
	});
	$(".title li").on("click", function() {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m_news ul").eq(index).addClass("active").siblings().removeClass("active");
	});
	var mySwiper1 = new Swiper(".t_banner", {
		pagination: '.swiper-pagination1',
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		observer:true,
		observeParents:true,
	});
	$(".tab_ul li").click(function() {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".content ul").eq(index).addClass("active").siblings().removeClass("active");
	});
	var mySwiper2 = new Swiper(".s_banner", {
		pagination: '.swiper-pagination2',
		//		prevButton: '.swiper-button-prev',
		//		nextButton: '.swiper-button-next',
		observer:true,
		observeParents:true,
	});
	var mySwiper3 = new Swiper(".e_banner", {
		pagination: '.swiper-pagination3',
		observer:true,
		observeParents:true,
	});
	var wait = 60;
	$(".yxyy").click(function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if(isAndroid) {
			var href = $('.js_wap_down').attr('href');
			location.href = href;
		}
		if(isIOS) {
			$(".login").show();
			$(".mask").show();
		}
	})
	$(".close").click(function() {
		$(".login").hide();
		$(".mask").hide();
	});
	$(".js_wap_down").click(function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if(isIOS) {
			$(this).attr("href", "javascript:;")
			$(".login").show();
			$(".mask").show();
		}
	});
	$('.js-send-code').click(sendCode);
	$('.js-yuyue').click(yuYue);

	function sendCode() {
		var phone = $('.js-phone').val();
		if(!checkPhone(phone)) {
			alert('手机号不正确');
			return;
		}
		if(wait != 60 && wait != 0) {
			return;
		}
		var obj = this
		var cms_csrf = $('meta[name="csrf-token"]').attr('content');
		$.post("<?php echo Url::to(['/commonMethod/get-verify']) ?>", {
			phone: phone,
			cms_csrf: cms_csrf
		}, function(data) {
			if(data.status != 0) {
				alert(data.msg);
			} else {
				time(obj);
			}
		}, 'JSON');
	}
	function checkPhone(phone) {
		if(/^1[3|4|5|7|8|9]\d{9}$/.test(phone)) {
			return true;
		}
		return false;
	}
	function time(o) {
		if(wait == 0) {
			o.removeAttribute("disabled");
			o.innerHTML = "再次发送";
			wait = 60;
		} else {

			o.setAttribute("disabled", true);
			o.innerHTML = wait + 's';
			wait--;
			setTimeout(function() {
					time(o)
				},
				1000)
		}
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
					is_no_yzm: 1
				},
				function(data) {
					if(data.status == 0) {
						$(".login").hide();
						$(".mask").hide();
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