$(function(){
	$(".i-video-box").click(function(){
		var link_url = $(this).attr("rel");
		$('.videos').append('<embed src="http://yuntv.letv.com/bcloud.swf" allowFullScreen="true" quality="high"  width="1280" height="720" align="middle" allowScriptAccess="always" flashvars="'+ link_url +'&auto_play=1&gpcflag=1&width=1280&height=720" type="application/x-shockwave-flash"></embed>');
		$("#video_mask").show();
	})
	$("#close").click(function(){
		$("#video_mask").hide();
	});
	setTimeout(function(){
    $(".wrap,.bg_box").addClass("animate");
  },1000);
	$(".gift a").click(function(){
		$(".gift_tck").show();
		$(".mask").show();
	})
	$(".close").click(function(){
		$(".gift_tck").hide();
		$(".mask").hide();
	})
	$(".list_top ul li").click(function(){
		var index=$(this).index();//获取当前划过元素的index值
		$(this).addClass("on").siblings().removeClass("on");//改变当前状态
		$(".l_inf").eq(index).css({"display":"block"}).siblings(".l_inf").css({"display":"none"});//切换内容
	})
	$('.game_downl').hover(function(){
		$(this).parent().find(".g_name").animate({ right: '0' }, "50");
	}, function(){
		$(this).parent().find(".g_name").animate({ right: '-297px' }, "50");
	});
})
