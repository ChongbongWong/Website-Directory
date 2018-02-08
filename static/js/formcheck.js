function checklauncher(form){
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	if (form.email.value=="") {
		alert("您尚未填写邮箱！");
		form.email.focus();
		return false;
	}else if (!reg.test(form.email.value)) {
		alert("邮箱格式错误，请输入正确邮箱");
		form.email.focus();
		return false;
	}else if (reg.test(form.email.value)) {
		if (form.password.value=="") {
			alert("您尚未填写密码！");
			form.password.focus();
			return false;
		}else{
			return true;
		}
	}
}

function checkregister(form){	
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	var reg2= /^[\u4e00-\u9fa5A-Za-z][\u4e00-\u9fa5A-Za-z0-9_.]*$/;
	if (form.email.value=="") {
		alert("您尚未填写邮箱！");
		form.email.focus();
		return false;
	}else if (!reg.test(form.email.value)) {
		alert("邮箱格式错误，请输入正确邮箱");
		form.email.focus();
		return false;
	}else if (reg.test(form.email.value)) {
		if (form.username.value=="") {
			alert("您尚未填写用户名");
			form.username.focus();
			return false;
		}else if (!reg2.test(form.username.value)) {
			alert("昵称只能由中文、字母、数字、句号、下划线组成");
			form.username.focus();
			return false;
		}else if (reg2.test(form.username.value)){
			if (form.password.value=="") {
			alert("您尚未填写密码！");
			form.password.focus();
			return false;
			}else if (form.password.value!= form.password2.value) {
				alert("两次输入的密码不一致");
				form.password2.focus();
				return false;
			}else{
				return true;
			}
		}

	}
}