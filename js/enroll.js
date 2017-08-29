$(function(){
	
//	倒计时
	
	$("form .buttom").click(function(){
		var time = 60;
		$(this).addClass("active");
		var times = setInterval(function(){
			var t = time--;
			var text = t + "S";
			if(t>0){
				$("form .buttom").html(text);
				$("form button").attr("disabled","disabled");
			}else{
				$("form button").removeAttr("disabled","disabled");
				$("form .buttom").html("重新获取");
				clearTimeout(times);
				$("form .buttom").removeClass("active");
			}
		},1000);
	});
})
