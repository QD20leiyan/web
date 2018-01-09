//tab切换
$.fn.tab_switch=function(){
		return this.each(function(){ //tab导航元素
			$(this).find("ul li").click(function(){
				var index=$(this).index();//获取当前划过元素的index值
				$(this).find("a").addClass("on").end().siblings().find("a").removeClass("on");//改变当前状态
				$(".infor").eq(index).css({"display":"block"}).siblings().css({"display":"none"});//切换内容
			})
		})
	}
//tab切换2
$.fn.tab_switch02=function(){
		return this.each(function(){ //tab导航元素
			$(this).find("ul li").click(function(){
				var index=$(this).index();//获取当前划过元素的index值
				$(this).find("a").addClass("on").end().siblings().find("a").removeClass("on");//改变当前状态
				$(".main06_right2 .infor").eq(index).css({"display":"block"}).siblings().css({"display":"none"});//切换内容
			})
		})
	}
//tab滑动
$.fn.tab_slide=function(){
		return this.each(function(){
			var myindex=0;
			var $cur=$(this);//tab导航元素
			var w=$cur.find("a").width();//获取tab中导航a的width
			$cur.find(".tab_title").mouseover(function(){
				var index=$(this).index();//获取当前划过元素的index值
				var dis=index-myindex;
				myindex=index;
				var l=dis*w;//tab导航中下划线滑动的距离
				var ls=dis*100+'%';//tab内容滑动的距离
				$(".tab_line").animate({left:'+='+l});
				$(".tab_infor").animate({left:'-='+ls});
			})
		})
	}
//	弹出框
$.fn.tck=function(){
	return this.each(function(){
		var $btn=$(this);//被点击元素
		var $tck=$(".tck_con");//被弹出元素
		var $mask=$(".mask");//遮罩层
		var $close=$(".close");//关闭按钮
		$btn.click(function(){ //点击元素使弹出框显示
			$tck.show();
			$mask.show();
		})
		$mask.click(function(){ //点击遮罩层使弹出框隐藏
			$tck.hide();
			$mask.hide();
		})
		$close.click(function(){ //点击关闭按钮使弹出框隐藏
			$tck.hide();
			$mask.hide();
		})
	})
}
//  图片循环轮播
$.fn.img_loop_lb=function(){
    return this.each(function(){
        var $oBox = $(this);//包裹按钮和轮播的图片元素
        var $oUl = $oBox.find('.content');
        var $aLi = $oUl.children('li');
        var len = $aLi.length;
        var aLiWidth = $aLi.outerWidth();
        $oUl.children('li').clone().appendTo($oUl);
        var nLen = ($oUl.children().length) * aLiWidth;
        $oUl.css('width',nLen+'px');
        var w = $oUl.outerWidth()/2;
        var iNow = 0;
        $oBox.find('.prev').bind('click',function(event) {
          iNow --;
          tab();
        });
        $oBox.find('.next').bind('click',function(event) {
          next();
          tab();
        });
        function next(){
          iNow ++;
        }
        function tab(){
          moveToL($oUl,-$aLi.outerWidth()*iNow,1000);
        }
        var left = 0;
        function moveToL(obj,iTarget,time){
          var start = left;
          var dis = iTarget - start;
          var count = Math.round(time/30);
          var n = 0;
          clearInterval(obj.timer);
          obj.timer = setInterval(function(){
            n++;
            var a = 1 - n/count;
            var cur = start + dis*(1-a*a*a);
            left = cur;
            if(left < 0){
              obj.css('left', left%w + "px");
            } else {
              obj.css('left', (left%w-w)%w + "px");
            }
            if(n == count){
              clearInterval(obj.timer);
            }
          },30);
        }
     });
};
//图片轮播    
$.fn.img_lb_b=function(){
	return this.each(function(){
		var $con=$(this);//包裹按钮和轮播的图片元素
		var sWidth = $con.width();
		var cov_length = $con.find("ul li").length;
		var index = 0;
		var picTimer;
		$con.find(".buttons span").mouseover(function() {
			index = $con.find(".buttons span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");
		$(".pre").click(function() {
			index -= 1;
			if (index == -1) {
				index = cov_length - 1;
			}
			showPics(index);
		});
		$(".next").click(function() {
			index += 1;
			if (index == cov_length) {
				index = 0;
			}
			showPics(index);
		});
		$con.find("ul").css("width", sWidth * (cov_length));
		$con.hover(function() {
			clearInterval(picTimer);
		}, function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if (index == cov_length) {
					index = 0;
				}
			}, 3000);
		}).trigger("mouseleave");
		function showPics(index) { 
			var nowLeft = -index * sWidth;
			$con.find("ul").stop(true, false).animate({
				"left": nowLeft
			}, 300);
		    $con.find(".buttons span").removeClass("on").eq(index).addClass("on"); 
		    $con.find(".buttons a").hide().eq(index).show(); 
		}
	})
}
//图片轮播    
$.fn.img_lb_c=function(){
	return this.each(function(){
		var $con=$(this);//包裹按钮和轮播的图片元素
		var sWidth = $con.width();
		var cov_length = $con.find("ul li").length;
		var index = 0;
		var picTimer;
//		var btn="<div class='v_button'>";
//		for( var i=0;i<cov_length;i++){
//			if(i==0){
//				btn+="<span class='on'></span>";
//			}else{
//				btn+="<span></span>";
//			}			
//		}
//		$(".v-act-image").append(btn);
		$(".v-act-image").find(".v_button span").mouseover(function() {		    
			index = $(this).index();
			showPics(index);
			$(this).addClass("on").siblings("span").removeClass("on");
		})
		$con.find(".buttons span").mouseover(function() {
			index = $con.find(".buttons span").index(this);
			showPics(index);
		})
		$con.find("ul").css("width", sWidth * (cov_length));
		$con.hover(function() {
			clearInterval(picTimer);
		}, function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if (index == cov_length) {
					index = 0;
				}
			}, 3000);
		}).trigger("mouseleave");
		function showPics(index) { 
			var nowLeft = -index * sWidth;
			$con.find("ul").stop(true, false).animate({
				"left": nowLeft
			}, 300);
		    $con.find(".buttons span").removeClass("on").eq(index).addClass("on"); 
		    $(".v-act-image").find(".v_button span").removeClass("on").eq(index).addClass("on"); 
		    $con.find(".buttons a").hide().eq(index).show(); 
		}
	})
}
//图片轮播1    
$.fn.img_lb=function(){
	return this.each(function(){
		var $con=$(this);//包裹按钮和轮播的图片元素
		var sWidth = $con.width();
		var cov_length = $con.find("ul li").length;
		var index = 0;
		var picTimer;
		var btn = "<div class='buttons'>";
		for (var i = 0; i < cov_length; i++) {
			if(i==0){
				btn+="<span class='on'></span>";
			}else{
				btn+="<span></span>";
			}
		}
		$con.append(btn);
		$con.find(".buttons span").mouseover(function() {
			index = $con.find(".buttons span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");
		$(".pre").click(function() {
			index -= 1;
			if (index == -1) {
				index = cov_length - 1;
			}
			showPics(index);
		});
		$(".next").click(function() {
			index += 1;
			if (index == cov_length) {
				index = 0;
			}
			showPics(index);
		});
		$con.find("ul").css("width", sWidth * (cov_length));
		$con.hover(function() {
			clearInterval(picTimer);
		}, function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if (index == cov_length) {
					index = 0;
				}
			}, 3000);
		}).trigger("mouseleave");
		function showPics(index) { 
			var nowLeft = -index * sWidth;
			$con.find("ul").stop(true, false).animate({
				"left": nowLeft
			}, 300);
		    $con.find(".buttons span").removeClass("on").eq(index).addClass("on"); 				
		}
	})
}
//图片轮播2
$.fn.img_lb_nobtn=function(){
	return this.each(function(){
		var $con=$(this);//包裹按钮和轮播的图片元素
		var sWidth = $con.width();
		var cov_length = $con.find("ul li").length;
		var index = 0;
		var picTimer;
		var btn = "<div class='buttons'>";
		for (var i = 0; i < cov_length; i++) {
			if(i==0){
				btn+="<span class='on' style='width:"+($(".main02_right").width()-cov_length*3-13)/cov_length+"px'></span>";
			}else{
				btn+="<span style='width:"+($(".main02_right").width()-cov_length*3-13)/cov_length+"px'></span>";
			}
		}
		$con.append(btn);
		$con.find(".buttons span").mouseover(function() {
			index = $con.find(".buttons span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");
		$con.find("ul").css("width", sWidth * (cov_length));
		$con.hover(function() {
			clearInterval(picTimer);
		}, function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if (index == cov_length) {
					index = 0;
				}
			}, 3000);
		}).trigger("mouseleave");
		function showPics(index) { 
			var nowLeft = -index * sWidth;
			$con.find("ul").stop(true, false).animate({
				"left": nowLeft
			}, 300);
		    $con.find(".buttons span").removeClass("on").eq(index).addClass("on"); 				
		}
	})
}
//轮播图渐隐效果
$.fn.img_fade=function(){
	return this.each(function(){
		var timer;
		var index=0;
		var $img_fade=$(this);
		var len=$img_fade.find("ul li").length;
		var btn="<div class='buttons'>";
		for( var i=0;i<len;i++){
			if(i==0){
				btn+="<span class='on'></span>";
			}else{
				btn+="<span></span>";
			}			
		}
		$img_fade.append(btn);
		function autoPlay(){
		  if(index==len-1){
				index=0;
			}else{
				index++;
			}
		$(".buttons span").eq(index).addClass("on").siblings().removeClass("on");
		$img_fade.find("ul li").eq(index).fadeIn(500).siblings().hide();
		}
		$(".buttons span").mouseover(function(){
			var myindex=$(this).index();
			$img_fade.find("ul li").eq(myindex).fadeIn(500).siblings().hide();
			$(this).addClass("on").siblings().removeClass("on");
			index=myindex;
		})
		$img_fade.mouseover(function(){
			clearTimeout(timer);
		})
		$img_fade.mouseout(function(){
			timer=setInterval(autoPlay,3000);
		})
		timer=setInterval(autoPlay,3000);		
	  })
	}
	jQuery.fn.floatadv = function(loaded) {
		var obj = this;
		body_height = parseInt($(window).height());
		block_height = parseInt(obj.height());	
		top_position = parseInt((body_height/3) - (block_height/3) + $(window).scrollTop());
		if (body_height<block_height) { top_position = 0 + $(window).scrollTop(); };	
		if(!loaded) {
			obj.css({'position': 'absolute'});
			obj.css({ 'top': top_position });
			$(window).bind('resize', function() { 
				obj.floatadv(!loaded);
			});
			$(window).bind('scroll', function() { 
				obj.floatadv(!loaded);
			});
		} else {
			obj.stop();
			obj.css({'position': 'absolute'});
			obj.animate({ 'top': top_position }, 400, 'linear');
		}
	}
//调用
$(function(){
	// $(".tab_slide").tab_slide();
	// $(".tab_switch").tab_switch();
	// $(".tck_click").tck();
	// $(".img_lb").img_lb();
	// $(".img_loop_lb").img_loop_lb();
	// $(".img_fade").img_fade();
 // 	$(".nav").floatadv();
 	$(".i-down").floatadv();
 	$(".i-m1-lb").img_lb();
 	// $(".act_imgbox").img_lb_b();
 	// $(".v_act_imgbox").img_lb_c();
 	// $(".main06_right1").tab_switch02();
 	// $(".sh_title").tab_switch();
})
