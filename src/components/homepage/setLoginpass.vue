<template>
  <div class="set_loginpass">
         <div class="getpass_header">
             <a href="#/home/mySet/safeCenter"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            修改密码
        </div>
         <div class="loginMain">
            <form id='setBuypass-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_mima_l.png" alt=""></label>
                    <input name='password' type="password" class=" mui-input" placeholder="请输入旧密码">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_mima_l.png" alt=""></label>
                    <input name='password' type="password" class=" mui-input" placeholder="请输入新密码">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_mima_l.png" alt=""></label>
                    <input name='passwordagain' type="password" class="mui-input" placeholder="请再次输入新密码">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
            </form>
            <div class="user_but">               
                     <button>确认</button>    
            </div>
        </div>
  </div>
</template>
<script>
export default {
   mounted() {
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
body div .loginMain form {
    padding-left: 0.33rem;
    padding-right: 0.33rem;
}
body div .loginMain form .mui-input-row {
    margin-top: 0.08rem;
}
body div .loginMain form .mui-input-row:first-of-type{
    margin-top: 0.2rem;
}
body div .loginMain form .mui-input-row label img {
    width: 0.15rem;
}

body div .loginMain form .mui-input-row input::-webkit-input-placeholder {
    font-size: 13px;
    color: #999
}

body div .loginMain form .mui-input-row input {
    width: 88%;
    padding-right: 0.3rem;
    padding-bottom: 0.05rem;
}

body div .loginMain form .mui-input-row label {
    width: 12%;
    padding: 0.15rem 0.2rem 0.05rem 0;
}
.user_but {
    margin-top: 0.4rem
}
</style>
