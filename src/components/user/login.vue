<template>
	<div class="login">
		<div class="headerImg">
			<img src="../../lib/img/beijing_dl.png" alt="">
			<img src="../../lib/img/icon_logo.png" alt="">
		</div>
		<div class="loginMain">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label><img src="../../lib/img/icon_shouji.png" style="width:0.125rem" alt=""></label>
					<input name='account' type="text" class="mui-input" placeholder="请输入账号">
					<div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
				</div>
				<div class="mui-input-row row_code">
					<label><img src="../../lib/img/icon_mima.png" style="width:0.14rem" alt=""></label>
					<input name='password' type="password" class="mui-input" placeholder="请输入密码">
					<div class="input_clear" style="right: 0.9rem"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
					<div class="tel_code">忘记密码?</div>
				</div>
				
			</form>
			<div class="mui-input-row mui-checkbox mui-left oc">
						<label>记住密码</label>
						<input name="remberme" v-model="remb" type="checkbox" @change="ps">
					</div>
			<div class="loginon">
				<div class="loginin" @click="sub">登录</div>
			</div>
		</div>
		<footer class="footerin">
			还没账户?
			<router-link to="/register">立即注册</router-link>
		</footer>
	</div>
</template>
<script>
export default {
  data: () => {
    return {
      // username:"",
      // password:""
      remb: localStorage.remberme
    };
  },
  methods: {
    sub() {
      let that = this;
      let id = $(".mui-input-row input[name=account]").val();
      let password = $(".mui-input-row input[name=password]").val();
      if (id == "admin" && password == "123456") {
        localStorage.id = window.btoa(id);
        sessionStorage.id = window.btoa(id);
        localStorage.password = window.btoa(password);
        localStorage.remberme = that.remb;
        mui.toast("登录成功");
        setTimeout(function() {
          that.$router.push("/home/index");
        }, 1000);
      }
    },
    ps() {
      // console.log(this.remb)
    }
  },
  created() {
    mui.plusReady(function() {
      plus.navigator.setStatusBarBackground("#c11c2d");
    });
  },
  mounted() {
    console.log("2");
    console.log(window.btoa("admin"));

    let remberme = this.remb;
	console.log(remberme)
	$(".mui-input-row input[name=remberme]").prop("checked",JSON.parse(remberme));
    if (remberme=="true") {
      let id = window.atob(localStorage.id + "");
      let password = window.atob(localStorage.password + "");
      $(".mui-input-row input[name=account]").val(id);
	  $(".mui-input-row input[name=password]").val(password);
    }
    let that = this;
    $(".mui-input-row input").keyup(function() {
      $(this)
        .next()
        .show();
    });
    $(".mui-input-row input").focus(function() {
      if ($(this).val()) {
        $(this)
          .next()
          .show();
      }
    });
    $(".mui-input-row input").blur(function() {
      $(this)
        .next()
        .hide();
    });
    $(".input_clear").on("tap", function() {
      $(this)
        .prev()
        .val("");
    });
    $(".tel_code").on("tap", function() {
      that.$router.push("/getpassword");
    });
  }
};
</script>
<style scoped>
.mui-checkbox > input {
  pointer-events: none;
}
.oc {
	margin-top: 0.1rem;
}
.oc label {
	font-size: 14px;
}
.mui-checkbox.mui-left input[type=checkbox] {
	left: 0.37rem;
}
.oc input:before{
	font-size: 14px;
	line-height: 2;
}
</style>
