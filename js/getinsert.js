// 删除员工信息
			function del(){
				var tr = $(this).parents("tr");
				// var name=tr.children("td").eq(2).text();
				var flag=window.confirm("确认删除吗？");
				if(flag){
					tr.empty();
				}
			};
			$(function(){
				
				$("#delate").bind("click",del);
				// 添加员工信息
				var userid=window.localStorage.getItem("userid");
				var username=window.localStorage.getItem("username");
				var dept=window.localStorage.getItem("dept");
				var userwork=window.localStorage.getItem("userwork");
				var sex=window.localStorage.getItem("sex");
				var tel=window.localStorage.getItem("tel");
				var birthday=window.localStorage.getItem("birthday");
				var email=window.localStorage.getItem("email");
				var tr=$('<tr><td><input name="" type="checkbox" value=""/></td><td>'+userid+'</td><td>'+username+'</td><td>'+dept+
				'</td><td>'+userwork+'</td><td>'+sex+'</td><td>'+tel+'</td><td>'+birthday+'</td><td>'+
				email+'</td><td><a href="userUpdate.html"><img src="../img/right/t02.png">修改</a><a href="javascript:;" id="delate"><img src="../img/right/t03.png">删除</a></td><tr>');
				$("tbody").bind("click","#delate",function(){
					tr.empty();
				});
				$("tbody").append(tr);
			});
