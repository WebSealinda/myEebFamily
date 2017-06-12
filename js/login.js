function codes(n) {
	var a = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
	var b = "";
	for(var i = 0; i < n; i++) {
		var index = Math.floor(Math.random() * 62);
		b += a.charAt(index);

	}
	return b;
};

function show() {
	document.getElementById("loginImg").innerHTML = codes(4);

}
window.onload = function() {
	show();
	var oFormRegister = document.getElementById('register');
	var oFormLogin = document.getElementById('login')
	var btnRegister = document.getElementById('btnRegister');
	var btnLogin = document.getElementById('btnLogin');

	btnRegister.onclick = function() {
		oFormRegister.style.display = 'block';
		oFormLogin.style.display = 'none';
	}
	btnLogin.onclick = function() {
		oFormLogin.style.display = 'block';
		oFormRegister.style.display = 'none';
	}
	
//	登录
	var redirectUrl = "${redirect}";
	var LOGIN = {
			checkInput:function() {
				if ($("#loginname").val() == "") {
					alert("用户名不能为空");
					$("#loginname").focus();
					return false;
				}
				if ($("#nloginpwd").val() == "") {
					alert("密码不能为空");
					$("#nloginpwd").focus();
					return false;
				}
				return true;
			},
			doLogin:function() {
				$.post("/user/login", $("#formlogin").serialize(),function(data){
					if (data.status == 200) {
						alert("登录成功！");
						if (redirectUrl == "") {
							location.href = "http://localhost:8082";
						} else {
							location.href = redirectUrl;
						}
					} else {
						alert("登录失败，原因是：" + data.msg);
						$("#loginname").select();
					}
				});
			},
			login:function() {
				if (this.checkInput()) {
					this.doLogin();
				}
			}
		
	};
	$(function(){
		$("#loginsubmit").click(function(){
			LOGIN.login();
		});
	});

}