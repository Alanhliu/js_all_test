/**
 * 
 * @authors liuhao (liuhao257@163.com)
 * @date    2017-10-13 09:44:19
 * @version $Id$
 */

$(document).ready(function() {
	//链接颜色相关
	$(".nav span").mouseover(function() {
		$(this).css("color","#F37638");
	})

	$(".nav span").mouseout(function() {
		$(this).css("color","black");
	})

	var insideDropMenu = false;
	var insideNav = true;

	//弹出dropMenu相关
	$(".nav_drop_a span").mouseover(function() {
		var className = $(this).attr('class');
		insideDropMenu = false;
		insideNav = true;

		if ($("#dropMenu").length <= 0 ) {
			$(".nav").after("<div id=\"dropMenu\"><span>This is drop Menu one!</span></div>")
			$("#dropMenu").animate({height:"150px"},300);
		} 

		$("#dropMenu span").text("This is drop Menu "+className+"!");
	})

	$(".nav_drop_a span").mouseout(function() {
		insideNav = false;
	})

	$("#dropMenu").mouseenter(function() {
		insideDropMenu = true;
		insideNav = false;
		alert("insideNav:"+insideNav+",insideDropMenu:"+insideDropMenu);
	});

	$("#dropMenu").mouseover(function() {
		insideDropMenu = true;
		insideNav = false;
		alert("insideNav:"+insideNav+",insideDropMenu:"+insideDropMenu);
	})

	//mouseout mouseleave
	// 1.不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。
	// 2.只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。
	$(".nav_drop_a").mouseleave(function() {
		delayRemove();
	})

	function delayRemove() {
		if ($("#dropMenu").length > 0 ) {
			setTimeout(function() {
				if (insideDropMenu == false && insideNav == false) {
					$("#dropMenu").animate({height:"1px"},200,function() {
						$("#dropMenu").remove();
					});
				}
			},2000);
		}
	}
});
