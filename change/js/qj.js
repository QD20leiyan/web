$(function(){
	var srf = $('meta[name="csrf-token"]').attr('content');
	var open=true;
	$(".navlist").click(function(){
	 	if(open){
	 		$(this).addClass("active");
        	$(".collapse").removeClass("hidden");
        	open=false;
	 	}else{
	 		$(this).removeClass("active");
	 		$(".collapse").addClass("hidden");
	 		open=true;
	 	}
    });
})