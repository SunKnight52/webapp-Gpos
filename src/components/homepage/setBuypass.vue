<template>
    <div class="set_buypass">
        <div class="getpass_header">
            <a href="#/home/mySet/safeCenter"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            交易密码
        </div>
        <div class="loginMain">
            <div class="top_warn">
                <span>您尚未设置交易密码,请设置交易密码保障账户安全</span>
            </div>
            <form id='setBuypass-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_mima_l.png" alt=""></label>
                    <input name='password' type="password" class=" mui-input" placeholder="请设置6位数交易密码">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_mima_l.png" alt=""></label>
                    <input name='passwordagain' type="password" class="mui-input" placeholder="请再次输入密码">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
            </form>
            <div class="user_but">
                <button class="setpas">确认</button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    methods:{
        setpass(){
            this.$store.commit('setBuypass');
            this.$router.push('/home/mySet/safeCenter')
        }
    },
    mounted() {
        let that =this;
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
        });
        $(".setpas").on('tap', function() {
				
				mui.confirm('确认修改交易密码?', "", function(e) {
					if (e.index == 1) {
						that.setpass();
					} else {
						return ;
					}
				})
			});
    }
}
</script>
<style scoped>
.set_buypass {
    height: 100%;
}

body div .loginMain form {
    padding-left: 0.33rem;
    padding-right: 0.33rem;
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

.top_warn {
    font-size: 13px;
    color: #5871ff;
    text-align: center;
    font-weight: 700;
}

.top_warn {
    margin: 0.25rem 0;
}


</style>
