<template>
  <div>
      <div class="getpass_header">
            <a href="#/home/runfor"><img src="../../../lib/img/icon_fanhui.png" alt=""> </a>
            竞选
        </div>
        <div class="start_main">
            <img src="../../../lib/img/icon_cyjingxuan.png" alt="">
        </div>
        <div class="loginMain">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row row_code">
					<label>竞选金额</label>
					<input name='password' type="password" class="mui-input" placeholder="请输入参与竞选的金额">
					<div class="input_clear"  style="right: 0.7rem"><img src="../../../lib/img/icon_shutdown.png" alt=""></div>
					<div class="tel_code">GPOS</div>
				</div>
				<div class="mui-input-row row_code">
					<label>交易密码</label>
					<input name='password' type="password" class="mui-input" placeholder="请输入交易密码">
					<div class="input_clear"  style="right: 0.9rem"><img src="../../../lib/img/icon_shutdown.png" alt=""></div>
					<div class="tel_code">忘记密码?</div>
				</div>
			</form>
			<div class="loginon">
				<div class="loginin">参与竞选</div>
                <span>*上榜参考值2000GPOS</span>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  mounted(){
      let that =this;
		$(".mui-input-row input").keyup(function(){
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
		$(".input_clear").on("tap",function(){
			$(this).prev().val("")
		})
		$(".tel_code").on("tap",function(){
			that.$router.push('/getpassword')
		})
  }
}
</script>
<style scoped>
.start_main {
    text-align: center;
    height: 1.8rem;
}
.start_main img {
    width:0.635rem ;
    margin-top: 0.49rem;
}
body div .loginMain form .mui-input-row label {
    font-size: 14px;
    color: #333;
    width: 23%;
    padding-right:0.11rem ;
}
.row_code .tel_code {
    font-size: 14px;
    color: #333;
}
.row_code input {
	padding-right: 0.8rem;
}
body div .loginMain form .mui-input-row input {
     width: 77%; 
}
body div .loginMain form .mui-input-row input::-webkit-input-placeholder {
    font-size: 14px;
    color: #ccc;
}
  body div .loginMain .loginon .loginin {
  
   background: url("../../../lib/img/icon_anniu_xf.png") no-repeat;
    background-size: 100% 100%;
} 
 body div .loginMain .loginon span {
    font-size: 12px;
    color: #999;
   
}  
</style>
