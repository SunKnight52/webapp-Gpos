<template>
  <div>
        <div class="getpass_header">
            <a href="#/home/mySet/safeCenter"><img src="../../lib/img/icon_fanhui.png" alt=""></a>
				忘记密码
		</div>
        <div class="loginMain">
			<form id='buypass-form' class="mui-input-group">
				<div class="mui-input-row" style="margin-top:0.2rem">
					<label><img src="../../lib/img/icon_shouji_l.png"  style="width:0.125rem" alt=""></label>
					<input id='account' type="text" class="mui-input" placeholder="请输入账号">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
				<div class="mui-input-row row_code">
					<label><img src="../../lib/img/icon_yzm_l.png" style="width:0.145rem" alt=""></label>
					<input id='code' type="text" class="mui-input" placeholder="请输入验证码">
					<div class="input_clear"  style="right: 1.2rem"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
					<div class="tel_code">获取验证码</div>
				</div>
				<div class="mui-input-row">
					<label><img src="../../lib/img/icon_mima_l.png"  style="width:0.15rem" alt=""></label>
					<input id='password' type="password" class=" mui-input" placeholder="请输入新的6位数交易密码">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
				<div class="mui-input-row">
					<label><img src="../../lib/img/icon_mima_l.png"  style="width:0.15rem" alt=""></label>
					<input id='passwordagain' type="password" class="mui-input" placeholder="再次输入">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
			</form>
			<div class="user_but">
				<button>确定</button>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  mounted(){
      var time_out = 10;
		//发送验证码
		$("#buypass-form .row_code .tel_code").on("click", function() {
			let a = 9;

			console.log(1)
			if (time_out == 10) {
				time_out = 9;
				$("#buypass-form .row_code .tel_code").text("重新获取(10)")

				let setTime = setInterval(function() {
					if (a == 0) {
						clearInterval(setTime);
						$("#buypass-form .row_code .tel_code").text("获取验证码")
						a = 9;
						time_out = 10
					} else {
						$("#buypass-form .row_code .tel_code").text("重新获取(" + a-- +')')
						time_out--;
					}
				}
					, 1000)
			}
		});
		//关闭按钮
		$(".mui-input-row input").keyup(function() {
			$(this).next().show()
		})
		$(".mui-input-row input").focus(function() {
			if ($(this).val()) {
				$(this).next().show()
			}
		})
		$(".mui-input-row input").blur(function() {
			$(this).next().hide()
		})
		$(".input_clear").on("tap", function() {
			$(this).prev().val("")
		})
	}
  
}
</script>
<style scoped>
body div .loginMain form .mui-input-row  {
    margin-top: 0.15rem;
}
body div .loginMain form .mui-input-row input {
    font-size: 13px;
}
body div .loginMain form .mui-input-row input::-webkit-input-placeholder {
    font-size: 13px;
}
.user_but {
    margin-top: 0.35rem;
}
</style>
