//var useragent = navigator.userAgent;
//if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
//    var opened = window.open('about:blank', '_self');
//    opened.opener = null;
//    opened.close();
//}
var SHAKE_THRESHOLD = 800;
    var last_update = 0;
    var x = y = z = last_x = last_y = last_z = 0;

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        alert('本设备不支持devicemotion事件');
    }

    function deviceMotionHandler(eventData) {
        var acceleration = eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();

        if ((curTime - last_update) > 100) {
            var diffTime = curTime - last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
            var status = document.getElementById("status");

            if (speed > SHAKE_THRESHOLD) {
                doResult();
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    }

    function doResult() {
        document.getElementById("result").className = "result";
        document.getElementById("loading").className = "loading loading-show";
        setTimeout(function(){
            //document.getElementById("hand").className = "hand";
            document.getElementById("result").className = "result result-show";
            $(".hand-p").hide();
            document.getElementById("loading").className = "loading";
        }, 1000);
    }
window.onload = function ()
    {
    var iPhone = document.getElementById("iphone");
    var oLock = document.getElementById("lock");
    var oBtn = oLock.getElementsByTagName("span")[0];
    var disX = 0;
    var maxL = oLock.clientWidth - oBtn.offsetWidth;
    var oBg = document.createElement("img");
    oBg.src = "/imagesforcode/201206/2.jpg";//预加载下第二张背景，其它没什么大用。
    oBtn.onmousedown = function (e)
    {
    var e = e || window.event;
    disX = e.clientX - this.offsetLeft;
    document.onmousemove = function (e)
    {
    var e = e || window.event;
    var l = e.clientX - disX;
    l < 0 && (l = 0);
    l > maxL && (l = maxL);
    oBtn.style.left = l + "px";
    oBtn.offsetLeft == maxL && (iPhone.style.background = "url("+ oBg.src +")", oLock.style.display = "none");
    return false;
    };
    document.onmouseup = function ()
    {
    document.onmousemove = null;
    document.onmouseup = null;
    oBtn.releaseCapture && oBtn.releaseCapture();
    oBtn.offsetLeft > maxL / 2 ?
    startMove(maxL, function ()
    {
    iPhone.style.background = "url("+ oBg.src +")";
    oLock.style.display = "none"
    }) :
    startMove(0)
    };
    this.setCapture && this.setCapture();
    return false
    };
    function startMove (iTarget, onEnd)
    {
    clearInterval(oBtn.timer);
    oBtn.timer = setInterval(function ()
    {
    doMove(iTarget, onEnd)
    }, 30)
    }
    function doMove (iTarget, onEnd)
    {
    var iSpeed = (iTarget - oBtn.offsetLeft) / 5;
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    iTarget == oBtn.offsetLeft ? (clearInterval(oBtn.timer), onEnd && onEnd()) : oBtn.style.left = iSpeed + oBtn.offsetLeft + "px"
    }
    };