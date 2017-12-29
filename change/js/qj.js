$(function(){
	var srf = $('meta[name="csrf-token"]').attr('content');
	var open=true;
	$(".navlist").click(function(){
	 	if(open){
	 		$(this).addClass("active");
        	$(".collapse").slideDown("slow");
        	open=false;
	 	}else{
	 		$(this).removeClass("active");
	 		$(".collapse").slideUp("slow");
	 		open=true;
	 	}
    });
})