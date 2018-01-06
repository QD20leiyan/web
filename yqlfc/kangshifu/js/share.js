$(function() {
	$('html').fitText(2);

	$(".title02").click(function (){
		$(".dikuang").css("display" , "block");
	})
	
	$(".dikuang").click(function (){
		$(this).css("display" , "none");
	})
})