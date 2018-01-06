$(function(){
	$(window).scroll(function(){
		var $t = $(this).scrollTop();
		if($t > 0){
			$(".head").css({"top":"0"});
			$(".body").css({"zIndex":"99"});
			$("#Hero-bar").css({"zIndex":"98"});
			$(".news-nav").css({"marginTop":"46px"});
		}else{
			$(".head").css({"top":"42px"});
			$(".body").css({"zIndex":"2"});
			$("#Hero-bar").css({"zIndex":"9999999"});
			$(".news-nav").css({"marginTop":"88px"});
		}
	});
	$(".libao").click(function(){
		$(".gift_mask").removeClass("hide");
	});
	$(".gift_mask").click(function(){
		$(".gift_mask").addClass("hide");
	});
});

$(".s-left .tab li,.news-tabs li,.video-menu li").click(function(){
		var index=$(this).index();//获取当前划过元素的index值
        if($(".s-left .tab li").hasClass("curr")){
            $(this).addClass("curr").siblings().removeClass("curr");//改变当前状态
            $(".s-left .tab-cont").eq(index).css({"display":"block"}).siblings(".tab-cont").css({"display":"none"});//切换内容
       }else if($(".news-tabs li").hasClass("active")){
            $(this).addClass("active").siblings().removeClass("active");//改变当前状态
        }
    $(".video-box").eq(index).css({"display":"block"}).siblings(".video-box").css({"display":"none"});//切换内容
	});
$(".player-left .tab li").click(function(){
		var index=$(this).index();//获取当前划过元素的index值
        $(this).addClass("curr").siblings().removeClass("curr");//改变当前状态
        $(".player-left .tab-cont").eq(index).css({"display":"block"}).siblings(".tab-cont").css({"display":"none"});//切换内容
	});
$(".inp").focus(function(){
    $(this).css("width","180px");
    });
$(".inp").blur(function(){
        $(this).css("width","150px");
    });
$(".inp").keydown(function(){
	if(event.keyCode == "13") {
		if($(this).val() == ''){
			return false;
		}else{
			window.open("http://kf.yingxiong.com/","_blank")
		}
	}
});
$(".min-title img").hover(function(){
        $(this).attr("src",STATIC_DOMAIN+"/images/add_a.png")
    },function(){
        $(this).attr("src",STATIC_DOMAIN+"/images/add.png")
    });
$(".return").hover(function(){
            $(".return img").attr("src",STATIC_DOMAIN+"/images/jian_a.png")
        },function(){
            $(".return img").attr("src",STATIC_DOMAIN+"/images/jian.png")
        });
(function(){

	function G(s){
		return document.getElementById(s);
	}

	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}

	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G("picBox");
	var oList = G("listBox");

	var oPrev = G("prev");
	var oNext = G("next");
	var oPrev_mod = G("prev_mod");
	var oNext_mod = G("next_mod");
	var oPrevTop = G("prevTop");
	var oNextTop = G("nextTop");

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;

	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	var w2 = oListLi[0].offsetWidth;

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 +220+ "px";

	var index = 0;

	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});

		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}

	oNextTop.onclick = oNext.onclick= oNext_mod.onclick = function(){
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}

	oPrevTop.onclick = oPrev.onclick=oPrev_mod.onclick = function(){
		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}

})()
