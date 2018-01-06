$(function (){
	$('html').fitText(2);
	
	$(".login_btn").click(function (){
		$(".denglu_put").css("display" , "block");
	})
	
	$('.close').click(function (){
		$(".denglu_put").css("display" , "none");
		$(".wrong_put").css("display" , "none");
	})
})
