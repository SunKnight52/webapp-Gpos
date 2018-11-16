<template>
    <div class="user_info">
        <div class="getpass_header">
             <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            用户信息
        </div>
        <div class="user_main">
             <ul class="mui-table-view">
                 <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        <img src="../../lib/img/icon_txiang.png" style="width:0.61rem" alt="">
                        <span class="mui-pull-right">修改</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        昵称
                        <span class="mui-pull-right">张三丰</span>
                    </a>
                </li>
                 <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        手机号码
                        <span class="mui-pull-right">18652365125</span>
                    </a>
                </li> 
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        性别
                        <span class="mui-pull-right">男</span>
                    </a>
                </li>
                 <li class="mui-table-view-cell">
                    <a  style="padding-right:0.2rem">
                        年龄
                        <span class="mui-pull-right">32岁</span>
                    </a>
                </li> 
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        所在城市
                        <span class="mui-pull-right">武汉</span>
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
.user_info {
    height: 100%;
    background-color: #f3f3f3;
}

.user_main .mui-table-view:after {
    display: none
}
.user_main .mui-table-view:before {
    display: none
}
.user_main .mui-table-view {
    margin-top: 0.1rem;
    background-color: #f3f3f3;
}
.user_main .mui-table-view li {
    height: 0.51rem; 
    background-color: #fff; 
}
.user_main .mui-table-view li:first-of-type {
    height: 0.97rem; 
    margin-bottom: 0.1rem; 
}
.user_main .mui-table-view li:first-of-type a{
   line-height: 0.7rem;
   color : #333;
   font-size: 14px;
}
.user_main .mui-table-view li:first-of-type img{
   vertical-align: middle;
}
.user_main .mui-table-view li:first-of-type:after {
   display: none;
}
.user_main .mui-table-view li a {
color: #333;
font-size: 14px;
padding-right: 0.35rem;
line-height: 0.28rem;

}
.user_main .mui-table-view li a span {
    color: #666;
    
}
.mui-table-view-cell:after {
    left: 0;
}
</style>

