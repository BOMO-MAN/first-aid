$(document).ready(function($) {
	// 导航切换
	$('#nav ul li ').click(function(event) {
		/* Act on the event */
		var e = event.target
		console.log(e)
		$(e).parent().siblings().children('a').removeClass('navActive');
		$(e).addClass('navActive');
	});

	//  msg提示
	$('#msg').click(function(event) {
		/* Act on the event */
		$('#msg_box').toggle()
		console.log('hello')
	});

	// 监看面板切换
	$('.pot').children('a').click(function(event) {
		/* Act on the event */
		var e = event.target;
		console.log(e)
		$(e).siblings().removeClass('pot_active')
		$(e).addClass('pot_active')

		// 获取index(),展示内容box
		var num = $(this).index()
		console.log(num)
		switch(num) {
			case 0:
			$('.data_line').show()
			$('.today').hide()
			$('.use_time').hide();
			break;

			case 1:
			$('.data_line').hide()
			$('.today').show()
			$('.use_time').hide();
			break;

			case 2:
			$('.data_line').hide()
			$('.today').hide()
			$('.use_time').show();
			break;
		}
	});

	//  view.js
	$('.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	//  目录树
		//后台传入的 标题列表
		var arr = [{
				id: 1,
				name: "一级标题",
				pid: 0
			}, {
				id: 2,
				name: "二级标题",
				pid: 0
			}, {
				id: 3,
				name: "2.1级标题",
				pid: 2
			}, {
				id: 4,
				name: "2.2级标题",
				pid: 2
			}, {
				id: 5,
				name: "1.1级标题",
				pid: 1
			}, {
				id: 6,
				name: "1.2级标题",
				pid: 1
			}, {
				id: 7,
				name: "1.21级标题",
				pid: 6
			}, {
				id: 8,
				name: "三级标题",
				pid: 0
			}, {
				id: 9,
				name: "1.22级标题",
				pid: 6
			}, {
				id: 10,
				name: "1.221级标题",
				pid: 9
			}, {
				id: 11,
				name: "1.2211级标题",
				pid: 10
			}, {
				id: 12,
				name: "1.2212级标题",
				pid: 10
			}

		];
        //标题的图标是集成bootstrap 的图标  更改 请参考bootstrap的字体图标替换自己想要的图标
		$(".innerUl").ProTree({
			arr: arr,
			simIcon: "fa fa-square-o",//单个标题字体图标 不传默认glyphicon-file
			mouIconOpen: "fa fa-minus-square-o ",//含多个标题的打开字体图标  不传默认glyphicon-folder-open
			mouIconClose:"fa fa-plus-square-o",//含多个标题的关闭的字体图标  不传默认glyphicon-folder-close
			callback: function(id,name) {
				// alert("你选择的id是" + id + "，名字是" + name);
			}

		})

		//  系统配置 部分代码
		 // 软件配置
		 $('#checkList ul li').click(function(e) {
		 	/* Act on the event */
		 		var e = event.target
				$(e).parent().siblings().children('a').removeClass('checkListHover');
				$(e).addClass('checkListHover');

				//  右边box内容
				var num = $(this).index()
					console.log(num)
					switch(num) {
						case 0:
						$('#baseInfo').show()
						$('#agreement').hide()
						$('#suggest').hide()
						$('#baseSetting').hide()
						$('#backUp').hide();
						break;
			
						case 1:
						$('#baseInfo').hide()
						$('#agreement').show()
						$('#suggest').hide()
						$('#baseSetting').hide()
						$('#backUp').hide();
						break;
			
						case 2:
						$('#baseInfo').hide()
						$('#agreement').hide()
						$('#suggest').show()
						$('#baseSetting').hide()
						$('#backUp').hide();
						break;

						case 3:
						$('#baseInfo').hide()
						$('#agreement').hide()
						$('#suggest').hide()
						$('#baseSetting').show()
						$('#backUp').hide();
						break;

						case 4:
						$('#baseInfo').hide()
						$('#agreement').hide()
						$('#suggest').hide()
						$('#baseSetting').hide()
						$('#backUp').show();
						break;
					}
				 });


});