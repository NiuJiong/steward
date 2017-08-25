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
	var i =1;
	setInterval(function(){
		
		$(".clictab ol li").removeClass("active");
		$(".clictab ol li:eq("+i+")").addClass("active");
		
		i++;
		if(i>=$(".clictab ol li").length){
			i=0;
		}
		
		if(left <= -(liwidth + lileft) * (lis-1)){
			left = 0;
		}else{
			left = left - nuodong;
		}
		
		$(".add .bigul ul").css("marginLeft",left);
	},3000);
})
