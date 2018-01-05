$(function() {
	$('html').fitText(2);

	$(".c2_ul_1 li").on("click", function() {
		var index = $(this).index();
		$(".c2_itme_1 span").eq(index).fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
	$(".c2_ul_2 li").click(function() {
		$(".c2_itme_2 span").fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
	$(".c2_ul_3 li").click(function() {
		var index = $(this).index();
		$(".c2_itme_3 span").eq(index).fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
	$(".c2_ul_4 li").click(function() {
		$(".c2_itme_4 span").fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});

	$(".c3_ul_1 li").click(function() {
		$(".c3_item_1 span").fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
	$(".c3_ul_2 li").click(function() {
		var index = $(this).index();
		$(".c3_item_2 span").eq(index).fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
	$(".c3_ul_3 li").click(function() {
		$(".c3_item_3 span").fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
	$(".c_close").click(function() {
		$(this).parent("span").fadeOut();
		$(".mask").fadeOut();
		$(".swiper-wrapper").css({
			"z-index": 1
		})
	});

	$(".c4_btn").click(function() {
		$(".c_four_span").fadeIn();
		$(".swiper-wrapper").css({
			"z-index": 21
		})
		$(".mask").fadeIn();
	});
})