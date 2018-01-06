/**
 * Created by Sky丶 on 2017/7/13.
 */
//banner轮播
var banner = {};
banner.init = function(ele){
    if(!ele){
        return;
    }
    banner.banner = ele;
    banner.ul = ele.children("ul");
    banner.li = banner.ul.children("li");
    banner.lb_icon = ele.children(".lb_icon").children("label");
    banner.len = banner.li.length;
    banner.w = ele.width();
    banner.h = ele.height();
    banner.index = 0;
    banner.init_w_h();
};

banner.init_w_h = function(){
    banner.len = banner.len*2;
    banner.ul.append(banner.ul.html()).width(banner.w*banner.len+"px").height(banner.h+"px").css({
        left: -banner.len/2*banner.w+"px"
    });

    banner.li = banner.ul.children("li");
    banner.li.width(banner.w+"px");

    banner.start();
};

banner.start = function(){
    var w=banner.w;
    var l=0;
    var timer=null;
    if(banner.len <= 2){
        return;
    }
    //自动切换
    timer=setInterval(init,3000);

    function init(){
        banner.index++;
        l=parseInt(banner.ul.css("left"))-w;  //这里要转成整数，因为后面带了px单位
        showCurrent(l);
    }

    banner.li.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(init,3000);
    });

    banner.lb_icon.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(init,3000);
    });

    banner.lb_icon.click(function(){
        var i_index = $(this).index();
        var init_left = (banner.len/2)*w;
        banner.index = i_index;
        l = -init_left-(w*banner.index);
        showCurrent(l);
    });

    $(".c2IconLeft").click(function(){
        banner.index--;
        l=parseInt(banner.ul.css("left"))+w;
        showCurrent(l);
    });

    $(".c2IconLeft").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(init,3000);
    });

    $(".c2IconRight").click(function(){
        banner.index++;
        l=parseInt(banner.ul.css("left"))-w;
        showCurrent(l);
    });

    $(".c2IconRight").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(init,3000);
    });


    function showCurrent(l){
        if(banner.ul.is(':animated')){
            return;
        }
        banner.ul.animate({"left":l},500,function(){
            if(banner.index == (banner.len/2-1)){
                banner.ul.css({
                    left: -(banner.len/2-1)*banner.w+"px"
                });
            }else if(banner.index == (banner.len/2)){
                banner.index = 0;
            }
            else if(banner.index == -2){
                banner.ul.css({
                    left: -(banner.len-2)*banner.w+"px"
                });
                banner.index = (banner.len/2)-2;
            }
            banner.change_icon(banner.index);
        });
    }
};

banner.change_icon = function(index){
    banner.lb_icon.attr("class","");
    banner.lb_icon.eq(index).attr("class","active");
};