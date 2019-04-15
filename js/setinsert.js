$(function(){
				var btn=$(".btn");
				btn.click(function(){
				var userid = $("input[name='userid']").val();
				var username = $("input[name='username']").val();
				var dept = $("select[name='dept']").val();
				var userwork = $("input[name='userwork']").val();
				var sex = $("input[name='sex']:checked").val();
				var tel = $("input[name='tel']").val();
				var birthday = $("input[name='birthday']").val();
				var email = $("input[name='email']").val();
				window.localStorage.setItem("userid",userid);
				window.localStorage.setItem("username",username);
				window.localStorage.setItem("dept",dept);
				window.localStorage.setItem("userwork",userwork);
				window.localStorage.setItem("sex",sex);
				window.localStorage.setItem("tel",tel);
				window.localStorage.setItem("birthday",birthday);
				window.localStorage.setItem("email",email);
				window.location.href="userSearch.html";
				});
				return false;
			});
