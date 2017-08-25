$(function(){
	$(".butt div").click(function(){
		$(".bigtan").addClass("active");
	});
	$(".bigtan p:eq(2) button").click(function(){
		$(".bigtan").removeClass("active");
	});
});
