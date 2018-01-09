$(function() {
  $('html').fitText(2);

  var srf = $('meta[name="csrf-token"]').attr('content');
      function windowHidden(){
          $("html,body").css({
              "overflow":"hidden",
              "width":"100%",
              "height":"100%"
          });
      };
      function windowScroll(){
          $("html,body").css({
              "overflow":"visible",
              "width":"100%",
              "height":"auto"
          });
      }; 
//弹窗关闭按钮
    $(".close").click(function(){
        $(this).parent().parent().parent().hide();
        windowScroll();
    });
//点击查看详情
    $(".main2 .look").click(function(){
        $(".active_board").show();
        windowHidden();
    });
//点击分享
$(".main3 .share_oth").click(function(){
        $(".invite_board").show();
        windowHidden();
    });
//点击预约
    $(".main .yuyue").click(function(){
        $(".yuyue_board").show();
        windowHidden();
    });
//点击登录
    $(".main3 .login").click(function(){
        $(".login_board").show();
        windowHidden();
    });
// 重置按钮
  $(".resect").click(function(){
        $(this).parent().find(".tel").val("");
    });
//选择系统
$(".yuyue_board rdo").click(function(){
    $(this).toggleClass("rdo2");
  });
//预约点击验证码
    $(".yuyue_board .gain").click(function(){
    var $timeNum = 60;
    var $timeInter = setInterval(function () {
        $(".gain").text($timeNum + "s");
            $timeNum--;
            if ($timeNum == 0) {
              $(".gain").css("pointer-events",'auto');
              clearInterval($timeInter);
              $(".gain").text("获取验证码");
            }
       }, 1000);
    });
  //登录点击验证码
    $(".login_board .gain").click(function(){
    var $timeNum = 60;
    var $timeInter = setInterval(function () {
        $(".gain").text($timeNum + "s");
            $timeNum--;
            if ($timeNum == 0) {
              $(".gain").css("pointer-events",'auto');
              clearInterval($timeInter);
              $(".gain").text("获取验证码");
            }
       }, 1000);
    });
//时间轴
  $(".yyjl .jiangli").click(function(){
      $(this).parent().parent().find(".gift_page").toggle();
      $(this).parent().parent().siblings("li").find(".gift_page").hide();
      $(this).find("i").toggleClass("on");
      $(this).parent().parent().siblings("li").find("i").removeClass("on");
  });
});