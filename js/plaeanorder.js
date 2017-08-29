$(function(){
	
//			<!--		实名认证弹窗-->
	$(".butt div").click(function(){
		$(".bigtan").addClass("active");
	});
	$(".bigtan p:eq(2) button").click(function(){
		$(".bigtan").removeClass("active");
	});
	
//修改省份
	$(".shengfen").hide();
	$(".write form .xiala p").click(function(){
		$(".shengfen").slideToggle();
	});
	$(".shengfen ul li").click(function(){
		var sheng = $(this).html();
		$(".write form .xiala p span").html(sheng);
	});
});
