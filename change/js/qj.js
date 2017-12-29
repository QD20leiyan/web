$(function(){
	var srf = $('meta[name="csrf-token"]').attr('content');
	var open=true;
	$(".navlist").click(function(){
	 	if(open){
	 		$(this).removeClass("off_active").addClass("off");
        	$(".collapse").removeClass("hidden");
        	open=false;
	 	}else{
	 		$(this).removeClass("off").addClass("off_active");
	 		$(".collapse").addClass("hidden");
	 		open=true;
	 	}
    });
})