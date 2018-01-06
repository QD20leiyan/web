$(window).load(function(){
	$('html').fitText(2);
	var mySwiper = new Swiper ('.index1_page2 .swiper-container ', {  
	    loop: true,
	    autoplay: 5000,
	    // // 如果需要分页器
	     pagination: '.swiper-pagination',    
		speed:500,
		paginationClickable :true
	    // // 如果需要前进后退按钮
	    // nextButton: '.swiper-button-next',
	    // prevButton: '.swiper-button-prev', 
	    // // 如果需要滚动条
	    // scrollbar: '.swiper-scrollbar',
 	 });
	$(".list .ul_title li").mouseover(function(){
		var index=$(this).index();
		$(".list ul li").eq(index).addClass("on").siblings().removeClass("on");
		$('.list_detail ul').eq(index).show().siblings().hide();
	})
	$(".video_i").click(function(){
		$("#index1_video_mask").show();
	});
	$("#index1_close,#index1_video_mask").click(function(){
	    $("#index1_video_mask").hide();
		setTimeout(function(){$(window.frames['iframe_btn'].document).find("video")[0].pause()},100);
	});
	$("#index1player5").click(function(e){
		e.stopPropagation();
	});
})