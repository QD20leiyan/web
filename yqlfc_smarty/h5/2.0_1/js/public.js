var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
   var opened = window.open('about:blank', '_self');
   opened.opener = null;
}
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
            $(".hand-p,.hand").hide();
            document.getElementById("loading").className = "loading";
        }, 1000);
    }
var videoALL = document.getElementById('videoALL'),
    videobox = document.getElementById('videobox'),
    btn = document.getElementById('btn');
//    videoend =  document.getElementById('videoend');
document.addEventListener('touchmove', function(e){e.preventDefault()}, false);

var u = navigator.userAgent; 
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 

function playcontr(){
    videobox.style.display = "block";
    videoALL.play();
    videoALL.setAttribute("poster"," ");
    btn.style.display = "none";
};