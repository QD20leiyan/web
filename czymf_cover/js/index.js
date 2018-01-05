$(function(){
        var a_i = 0;
        $(".news-nav li").each(function(){
           var d= $(this).attr("num",a_i++);
           $(".news-li").hide();
           $(".news-li").eq(0).show();
        });
        $(".news-nav li").click(function(){
            var this_i = $(this).attr("num");
            $(".news-nav li").removeClass("curr");
            $(this).addClass("curr");;
            $(".news-li").hide();
            $(".news-li").eq(this_i).show();
        });
        var b_i = 0;
        $(".ziliao-nav li").each(function(){
           var b= $(this).attr("number",b_i++);
           $(".ziliao-li").hide();
           $(".ziliao-li").eq(0).show();
        });
        $(".ziliao-nav li").click(function(){
            var this_j = $(this).attr("number");
            $(".ziliao-nav li").removeClass("on");
            $(this).addClass("on");
            $(".ziliao-li").hide();
            $(".ziliao-li").eq(this_j).show();
        });
})