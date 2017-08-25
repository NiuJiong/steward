$(function(){
//	li宽度和长度
	var liwidth = $(".add .bigul ul li").width();
	var lis = $(".add .bigul ul li").length;
	var lileft = parseInt($(".add .bigul ul li").css("marginLeft"));

	
	

//	设置ul宽度
	var sum = (liwidth + lileft) * lis + 'px';
	$(".add .bigul ul").css("width",sum);
	
	var left = 0;
	var nuodong = liwidth + lileft;
	
	setInterval(function(){
		
		if(left <= -(liwidth + lileft) * (lis-1)){
			left = -(liwidth + lileft) * (lis-1);
		}else{
			left = left - nuodong;
		}
		
		$(".add .bigul ul").css("marginLeft",left);
		console.log($(".add .bigul ul").offset().left);
	},4000);
})
