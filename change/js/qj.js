$(function(){
	var srf = $('meta[name="csrf-token"]').attr('content');
	var open=true;
	$(".navlist").click(function(){
	 	if(open){
	 		$(this).addClass("active");
        	$(".collapse").slideDown("200");
        	open=false;
	 	}else{
	 		$(this).removeClass("active");
	 		$(".collapse").slideUp("200");
	 		open=true;
	 	}
    });
})