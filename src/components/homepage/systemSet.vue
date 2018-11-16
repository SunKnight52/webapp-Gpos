<template>
    <div class="sys_set">
        <div class="getpass_header">
            <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            设置
        </div>
        <div class="user_main">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/systemSet/feedBack">
                        意见反馈
                    </a>
                </li>
            </ul>
            <ul class="mui-table-view">

                <li class="mui-table-view-cell">
                    <span>系统通知</span>
                    <div class="mui-switch mui-switch-blue mui-switch-mini mui-active">
                        <div class="mui-switch-handle"></div>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        清空缓存
                        <span class="mui-pull-right">23.6M</span>
                    </a>
                </li>
            </ul>
        </div>
         <div class="loginMain">
                <div class="loginon">
                    <div class="loginin" @tap="loginout">退出登录</div>
                </div>
            </div>

    </div>
</template>
<script>
export default {
        methods:{
            loginout:function(){
               sessionStorage.removeItem("id");
                this.$router.push("/login");
            }
        }
}
</script>
<style  scoped>
.loginMain {
     position: absolute;
    bottom: 0.8rem; 
    width: 100%;
}
.loginMain .loginon .loginin {
    background: url("../../lib/img/icon_anniu_xf.png") no-repeat;
    background-size: 100% 100%;
}
.sys_set {
    height: 100%;
    background-color: #f3f3f3;
}

.mui-table-view {
    margin-top: 0.1rem;
}

.mui-table-view:after {
    display: none
}

.mui-table-view:before {
    display: none
}

.mui-table-view li {
    height: 0.51rem;
    color: #333;
    font-size: 14px;
    line-height: 0.29rem;
}

.mui-table-view li a {
    color: #333;
    font-size: 14px;
    padding-right: 0.35rem;
    line-height: 0.28rem;
}

.mui-table-view li a span {
    color: #666;
}

.mui-table-view-cell:after {
    left: 0;
}
</style>



