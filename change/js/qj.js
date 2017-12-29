$(function(){
	var srf = $('meta[name="csrf-token"]').attr('content');
	var open=true;
	$(".navlist").click(function(){
	 	if(open){
	 		$(this).removeClass("navbar-toggle").addClass("off");
        	$(".collapse").removeClass("hidden");
        	open=false;
	 	}else{
	 		$(this).removeClass("off").addClass("navbar-toggle");
	 		$(".collapse").addClass("hidden");
	 		open=true;
	 	}
    });
})