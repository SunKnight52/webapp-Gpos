<template>
  <div >
		<div class="getpass_header">
            <a href="#/login"><img src="../../lib/img/icon_fanhui.png" alt=""></a>
				忘记密码
		</div>
		<div class="loginMain">
			<form id='gerpassword-form' class="mui-input-group">
				<div class="mui-input-row">
					<label><img src="../../lib/img/icon_shouji.png" style="width:0.125rem" alt=""></label>
					<input id='account' type="text" class="mui-input" placeholder="请输入账号">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
				<div class="mui-input-row row_code">
					<label><img src="../../lib/img/icon_yanzheng.png" style="width:0.125rem" alt=""></label>
					<input id='code' type="text" class="mui-input" placeholder="请输入验证码">
					<div class="input_clear"  style="right: 1.2rem"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
					<div class="tel_code">获取验证码</div>
				</div>
				<div class="mui-input-row">
					<label><img src="../../lib/img/icon_mima.png" style="width:0.14rem" alt=""></label>
					<input id='password' type="password" class=" mui-input" placeholder="请输入密码">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
				<div class="mui-input-row">
					<label><img src="../../lib/img/icon_mima.png" style="width:0.14rem" alt=""></label>
					<input id='passwordagain' type="password" class="mui-input" placeholder="请再次输入密码">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
			</form>
			<div class="loginon">
				<div class="loginin">确定</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  mounted(){
      var time_out = 10;
		//发送验证码
		$("#gerpassword-form .row_code .tel_code").on("click", function() {
			let a = 9;

			console.log(1)
			if (time_out == 10) {
				time_out = 9;
				$("#gerpassword-form .row_code .tel_code").text("重新获取(10)")

				let setTime = setInterval(function() {
					if (a == 0) {
						clearInterval(setTime);
						$("#gerpassword-form .row_code .tel_code").text("获取验证码")
						a = 9;
						time_out = 10
					} else {
						$("#gerpassword-form .row_code .tel_code").text("重新获取(" + a-- +')')
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
        //返回
        // let that=this;
        // $(".getpass_header img").on("tap",function(){
        //     that.$router.push('/login')
        // })
  }
}
</script>
<style scoped>
.loginMain .row_code .tel_code {
	width: 0.9rem;	
}
body div .loginMain form .mui-input-row:first-of-type {
	margin-top: 0.35rem
}
</style>
