$(".menu li").click(function(){
		var index=$(this).index();//获取当前划过元素的index值
		$(this).addClass("active").siblings().removeClass("active");//改变当前状态
		$(".news-list").eq(index).css({"display":"block"}).siblings(".news-list").css({"display":"none"});//切换内容
	});
$(".video-menu li").click(function(){
		var index=$(this).index();//获取当前划过元素的index值
		$(this).addClass("active").siblings().removeClass("active");//改变当前状态
		$(".video-list").eq(index).css({"display":"block"}).siblings(".video-list").css({"display":"none"});//切换内容
	})
$(".gamer-ul li").click(function(){
		var index=$(this).index();//获取当前划过元素的index值
		$(this).addClass("active").siblings().removeClass("active");//改变当前状态
		$(".gamer-list").eq(index).css({"display":"block"}).siblings(".gamer-list").css({"display":"none"});//切换内容
	});
$(window).load(function () {
	    //$('.btn-nav').on('click tap', function () {
	    //    $('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
	    //    $(this).toggleClass('animated');
	    //});
	var clickNumber = 1;
	$(".btn-nav").click(function() {
		$(this).toggleClass('animated');
		if(clickNumber % 2 !== 0) {
			$(this).parent().siblings(".nav-content").slideDown();
		} else {
			$(this).parent().siblings(".nav-content").slideUp();
		}
		clickNumber++;
	});
});
$(".menu li").click(function(){
	$(this).siblings('li').removeClass('active');
	$(this).addClass('active');   
})