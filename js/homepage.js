$(function() {
	//添加订单
	function add(data) {
		
		$.each(data, function(index, value) {
			
		


			var ixiabiao = index;
			ixiabiao++;
			var addli = "<li class='clearlr'>" +
				"<div>" +
				"<div>" + ixiabiao + "</div>" +
				"</div>" +
				"<div>" +
				"<div class='clearlr'>" +
				"<p>" +
				"<span>" + data[index].haoma + "</span>" +
				"<img src='images/genggai.png' />" +
				"</p>" +
				"<p>" +
				"<span>未处理违章</span>" +
				"</p>" +
				"</div>" +
				"<p>" +
				"扣分<span>"+data[index].fenshu+"</span>分" +
				"</p>" +
				"<p>" +
				"罚款<span>"+data[index].jine+"</span>元" +
				"</p>" +
				"</div>" +
				"</li>";

			var addolli = "<li></li>"

			$(".add .bigul ul").append(addli);
			$(".add .clictab ol").append(addolli);

		});
	}

	//	设置ul宽度

	$.ajax({
		type: "GET",
		url: "data/data.json",
		async: true,
		dataType: "json",
		success: function(data) {

			add(data);
			
			
			console.log(data.length);
			if(data.length > 0) {
				$(".add .bigul").addClass("active");
				$(".add .cliadd").addClass("active");
				$(".add .clictab").addClass("active");
				$(".add .addcar").removeClass("active");
			} else if(data.length == 0) {
				$(".add .bigul").removeClass("active");
				$(".add .cliadd").removeClass("active");
				$(".add .clictab").removeClass("active");
				$(".add .addcar").addClass("active");
			}
			
			
			
			

			//	li宽度和长度
			//	违章单轮播
			var liwidth = $(".add .bigul ul li").width();
			console.log(liwidth);
			var lis = $(".add .bigul ul li").length;
			var lileft = parseInt($(".add .bigul ul li").css("marginLeft"));
			var sum = (liwidth + lileft) * lis + 'px';
			$(".add .bigul ul").css("width", sum);

			var left = 0;
			var nuodong = liwidth + lileft;
			var i = 1;
			setInterval(function() {

				$(".clictab ol li").removeClass("active");
				$(".clictab ol li:eq(" + i + ")").addClass("active");

				i++;
				if(i >= $(".clictab ol li").length) {
					i = 0;
				}

				if(left <= -(liwidth + lileft) * (lis - 1)) {
					left = 0;
				} else {
					left = left - nuodong;
				}

				$(".add .bigul ul").css("marginLeft", left);
			}, 3000);
		}
	});

})