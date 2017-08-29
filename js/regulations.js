$(function(){
	var fs = 0;
	var zje = 0;
	for(var i=0;i<$(".fenshu").length;i++){
		fs+=parseFloat($(".fenshu:eq("+i+")").html());
	}
	$(".zfs").html(fs);
	
	for(var i=0;i<$(".jine").length;i++){
		zje+=parseFloat($(".jine:eq("+i+")").html());
	}
	$(".zfy").html("￥"+zje);
})
