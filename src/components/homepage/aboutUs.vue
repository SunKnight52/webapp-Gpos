<template>
    <div class="about_us">
        <div class="getpass_header">
             <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""></a>
            关于我们
        </div>
        <div class="user_header">
            <div>
                <img src="../../lib/img/icon_tubiao.png" alt="">
                <div>v1.0.3</div>
            </div>
        </div>
        <div class="user_main">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        服务及隐私条款
                    </a>
                </li>
            </ul>

            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a>当前版本
                        <span class="mui-pull-right">1.0.3</span>
                    </a>
                </li>
                 <li class="mui-table-view-cell">
                    <a>新版更新
                        <span class="mui-pull-right">暂无新版本</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
.about_us {
    height: 100%;
    background-color: #f3f3f3;
}

.user_header {
    width: 100%;
    height: 1.95rem;
    box-sizing: border-box;
    padding-top: 0.46rem;
}

.user_header>div {
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    color: #666;
}

.user_header>div>img {
    width: 0.73rem;
}
.user_main .mui-table-view:after {
    display: none
}
.user_main .mui-table-view:before {
    display: none
}
.user_main .mui-table-view:nth-of-type(2) {
    margin-top: 0.1rem;
}
.user_main .mui-table-view li {
    height: 0.52rem;  
    
}
.user_main .mui-table-view li a {
color: #333;
font-size: 14px;
padding-top: 0.16rem;
}
.user_main .mui-table-view li a span {
    color: #666;
}
.mui-table-view-cell:after {
    left: 0;
}
</style>
