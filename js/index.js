$("document").ready(function() {
	$("#fullpage").fullpage({
		fixedElements: "#head",
		resize: "true",
		navigation: "true",
		loopHorizontal: "true",
		slidesNavigation: "true",
		navigationPosition: "right",
		navigationTooltips: ["首页", "关于我", "心路历程", "专业技能", "我的作品", "联系我"],
		css3: "ture",
		anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
		afterLoad: function(c, a) {
			switch (a) {
			case 1:
				move(".section1 h1").scale(1.5).duration("1s").end();
				move(".secp1").set("top", "0px").duration("1s").end(function() {
					move(".secp2").set("top", "0px").duration("1s").end(function() {
						move(".secp3").set("top", "0px").duration("1s").end()
					})
				});
				break;
			case 2:
				move(".section2 h1").set("margin-left", "60%").duration("1s").end(function() {
					move(".section2 h1").set("margin-left", "45%").duration(".5s").end()
				});
				move(".sec2Bor").set("top", "40%").duration("1s").end(function() {
					move(".sectionText").set("opacity", "1").duration("3s").end()
				});
				break;
			case 3:
				move(".sec3-li1").set("margin-left", "40%").duration(".5s").end(function() {
					move(".sec3-li2").set("margin-left", "40%").duration(".5s").end(function() {
						move(".sec3-li3").set("margin-left", "40%").duration(".5s").end(function() {
							move(".sec3-li4").set("margin-left", "40%").duration(".5s").end(function() {
								move(".sec3-li5").set("margin-left", "40%").duration(".5s").end()
							})
						})
					})
				});
				var e = $("#sec3Nav li"),
				d = $(".sec3Box");
				for (var b = 0; b < e.length; b++) {
					e[b].index = b;
					e[b].onclick = function() {
						for (var f = 0; f < d.length; f++) {
							var g = this;
							d[f].style.display = "none";
							d[g.index].style.display = "block"
						}
					}
				}
				move(".sec3Wrap").set("margin-right", "45%").duration("1.5s").end();
				break;
			case 4:
				move(".sec4-pic").set("top", "0").duration(".5s").end(function() {
					move("#pic-c").set("left", "3%").duration(".5s").end(function() {
						move("#pic-j").set("left", "6%").duration(".5s").end(function() {
							move("#pic-aj").set("left", "9%").duration(".5s").end(function() {
								$(".h-tit").on("mouseover",
								function() {
									move(".h-tit").set("top", "10px").duration(".5s").end(function() {
										move("#pic-h>.sec4-list").set("opacity", "1").duration("2s").end()
									})
								});
								$(".c-tit").on("mouseover",
								function() {
									move(".c-tit").set("top", "10px").duration(".5s").end(function() {
										move("#pic-c>.sec4-list").set("opacity", "1").duration("2s").end()
									})
								});
								$(".j-tit").on("mouseover",
								function() {
									move(".j-tit").set("top", "10px").duration(".5s").end(function() {
										move("#pic-j>.sec4-list").set("opacity", "1").duration("2s").end()
									});
									$(".aj-tit").on("mouseover",
									function() {
										move(".aj-tit").set("top", "10px").duration(".5s").end(function() {
											move("#pic-aj>.sec4-list").set("opacity", "1").duration("2s").end()
										})
									})
								})
							})
						})
					})
				});
				break;
			case 5:
				$(".demo img").each(function() {
					$(".mydemo img").bind("mouseover",
					function() {
							move(this).set("top", "-20px").duration("1s").end();
						$(".mydemo img").bind("mouseout",
						function() {
							move(this).set("top", "0px").duration("1s").end()
						})
					})
				});
				break;
			case 6:
				$("#sec6li").on({
					mouseover:
					function() {
						$("#sec6pic").attr("src", "./image/wx.png");
					},
					mouseout: function() {
						$("#sec6pic").attr("src", "./image/qq1.jpg");
					},
				});
				break;
			default:
				break
			}
		},
		onLeave: function(b, a) {
			switch (a) {
			case 1:
				move(".section1 h1").scale(1).end();
				move(".secp1").set("top", "2000px").end();
				move(".secp2").set("top", "2000px").end();
				move(".secp3").set("top", "2000px").end();
				break;
			case 2:
				move(".section2 h1").set("margin-left", "0").end();
				move(".sec2Bor").set("top", "-4000px").duration(".1s").end();
				move(".sectionText").set("opacity", "0").duration(".1s").end();
				break;
			case 3:
				move(".sec3-li1").set("margin-left", "-20%").end();
				move(".sec3-li2").set("margin-left", "-20%").end();
				move(".sec3-li3").set("margin-left", "-20%").end();
				move(".sec3-li4").set("margin-left", "-20%").end();
				move(".sec3-li5").set("margin-left", "-20%").end();
				move(".sec3Wrap").set("margin-right", "-30%").end();
				break;
			case 4:
				move(".sec4-pic").set("top", "-4000px").duration(".1s").end();
				move("#pic-h").set("left", "0px").duration(".1s").end();
				move("#pic-c").set("left", "-216px").duration(".1s").end();
				move("#pic-j").set("left", "-432px").duration(".1s").end();
				move("#pic-aj").set("left", "-648px").duration(".1s").end();
				move(".h-tit").set("top", "120px").end();
				move(".c-tit").set("top", "120px").end();
				move(".j-tit").set("top", "120px").end();
				move(".aj-tit").set("top", "120px").end();
				move("#pic-h>.sec4-list").set("opacity", "0").end();
				move("#pic-c>.sec4-list").set("opacity", "0").end();
				move("#pic-j>.sec4-list").set("opacity", "0").end();
				move("#pic-aj>.sec4-list").set("opacity", "0").end();
				break;
			case 5:
				break;
			default:
				break
			}
		}
	});
	$("#head-tit").hover(function() {
		$("#head-e").text("Position applied").css("color", "#fff");
		$("#head-c").text("前端工程师").css("color", "#fff")
	},
	function() {
		$("#head-e").text("Liwei").css("color", "#fff");
		$("#head-c").text("前端个人简历").css("color", "#fff")
	});
	//禁止页面复制
	// $(document).bind("contextmenu",function(a) {
	// 	return false
	// });

	//F12禁用
	// document.onkeydown = function(c) {
	// 	var b = 0,
	// 	a = c || window.event;
	// 	b = a.keyCode || a.which || a.charCode;
	// 	if (b == 123) {
	// 		window.event.cancelBubble = true;
	// 		window.event.returnValue = false
	// 	}
	// }
});