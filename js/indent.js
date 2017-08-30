$(function(){
	$(".main ol li").click(function(){
		var index = $(this).index();
		$(".main ol li").removeClass("active");
		$(this).addClass("active");

		
		var con = $(".main .content:eq("+index+")").children().length;
		console.log(con);
		if(con>0){
			$(".main .meiyou").removeClass("active");
			$(".main .content").removeClass("active");
			$(".main ul li:eq("+index+")").find(".content").addClass("active");
		}else{
			$(".main .content").removeClass("active");
			$(".main .meiyou").removeClass("active");
			$(".main ul li:eq("+index+")").find(".meiyou").addClass("active");
		}
	});
})
