//页面加载完成回到顶部
window.onload = function(){
    setTimeout(function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },20);
};
$(function(){
    function  init(){
        strartWow();
    }
    //页面事件
    //点击获取游戏礼包
    $("#get_game_lb").click(function(){
        $(".tc-container").css({
            display: "block"
        });
        setTimeout(function(){
            $(".tc-container").css({
                opacity: 1
            });
            $(".tc_form").show();
        },20);
    });

    //点击输入框
    $(".tc-item > div").click(function(){
        var input = $(this).children("input");
        var p = $(this).children("p");
        p.hide();
        input.focus();
    });
    $(".tc-item > div > input").blur(function(){
        var val = $(this).val();
        var my_p = $(this).parent().children("p");
        if(val == "" || val == null){
            my_p.show();
        }
    });
    //获取验证码
    $("#getMark").click(function(){
        var myThis = $(this);
        var name = myThis.attr("name");
        if(name){
            return;
        }
        var tc_phone = $("#tc-phone");
        if(checkPhone(tc_phone) !== true){
            return false;
        }
        myThis.attr("name","false");
        //获取验证码
        var phoneVal = tc_phone.val();
        var url = $(this).attr("url");
        var err = $(this).parent().children("p[class='tc-err']");
        $.ajax({
            url: url,
            type: 'get',
            data: {
                phone: phoneVal,
                type: 2
            },
            success: function(data){
                var data = JSON.parse(data);
                var status = data.status;
                if (status == 1) {
                    $('.js_gift_title').html('您已经获得【一起来飞车】同程旅游激活码');
                    $("#tc_code").html(data.code);
                    $("#tc_form").hide();
                    $("#tc_success").show();
                } else if (status == 0) {
                    //开始倒计时
                    countDown(myThis,60,function(){
                        myThis.html("发送验证码").attr("name","");
                    });
                } else {
                    hideErr($("#backErr"),data.msg);
                }
            },
            error: function(data){
                //myThis.attr("name","");
            }
        });
    });

    //获取激活码
    $("#tc_btn1").click(function(){
        var myThis = $(this);
        var name = myThis.attr("name");
        if(name){
            return;
        }
        var tc_phone = $("#tc-phone");
        if(checkPhone(tc_phone) !== true){
            return false;
        }
        var tc_mark = $("#tc-mark");
        if(checkMark(tc_mark) !== true){
            return false;
        }
        var url = $(this).attr("url");
        var phoneVal = tc_phone.val();
        var verify = $("#tc-mark").val();
        $.ajax({
            url: url,
            type: 'get',
            data: {
                phone: phoneVal,
                verify_type: 2,
                gift_id: 8,
                verify: verify
            },
            success: function(data){
                var data = JSON.parse(data);
                var status = data.status;
                if(status == 0){
                    $("#tc_code").html(data.code);
                    $("#tc_form").hide();
                    $("#tc_success").show();
                }else {
                    hideErr($("#backErr"),data.msg);
                }
            },
            error: function(data){

            }
        });
    });

    //取消弹窗
    $(".tc_close").click(function(){
        closeTc();
    });

    //复制激活码
    $("#tc_btn2").click(function(){
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") {
            alert("您的浏览器版本过低,暂不支持复制,请升级或者手动复制");
        }
    });
    var clipboard = new Clipboard('#tc_btn2');
    clipboard.on('success', function(e) {
        alert('复制成功!');
        e.clearSelection();
        closeTc();
    });
    clipboard.on('error', function(e) {
        alert('请选择“拷贝”进行复制!')
    });

    //开始页面滚动动画
    function strartWow(){
        var isStartWow = true;
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") {
            isStartWow = false;
        }
        if(isStartWow){
            new WOW().init();
        }
    }
    //判断用户填写的手机号码是否正确
    function checkPhone(ele){
        var tc_err = ele.parent().parent().children("p[class='tc-err']");
        var myPhone = ele.val();
        if(myPhone == "" || myPhone == null){
            showErr(tc_err,"请输入手机号码");
            return false;
        }

        if(!(/^1[0-9]{10}$/.test(myPhone))){
            showErr(tc_err,"请输入正确的手机号码");
            return false;
        }

        hideErr(tc_err);
        return true;
    }

    //判断用户填写的验证码是否正确
    function checkMark(ele){
        var tc_err = ele.parent().parent().children("p[class='tc-err']");
        var myPhone = ele.val();
        if(myPhone == "" || myPhone == null){
            showErr(tc_err,"请输入验证码");
            return false;
        }
        if(!(/^[0-9]*$/.test(myPhone))){
            showErr(tc_err,"请输入正确的验证码");
            return false;
        }
        hideErr(tc_err);
        return true;
    }

    //显示错误信息
    function showErr(ele,text){
        var textEle = ele.children("span");
        textEle.html(text);
        ele.css({
            visibility: "visible"
        });
    }
    //隐藏错误信息
    function hideErr(ele){
        ele.css({
            visibility: "hidden"
        });
    }
    //倒计时
    function countDown(ele,time,callBack){
        var time = parseInt(time);
        ele.html(time+"s");
        var timer = setInterval(function(){
            time--;
            if(time == 0){
                clearInterval(timer);
                if(callBack){
                    callBack();
                }
                return;
            }
            ele.html(time+"s");
        },1000);
    }
    //取消弹框
    function closeTc(){
        $(".tc-container").css({
            opacity: 0
        });
        setTimeout(function(){
            $(".tc-container").css({
                display: "none"
            });
        },200);
    }

    init();
});