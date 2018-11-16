<template>
  <div class="safe_center">
       <div class="getpass_header">
             <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            安全中心
        </div>
          <div class="user_main">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/safeCenter/handPass">
                        手势密码
                        <span class="mui-pull-right hand_pass">未设置</span>
                    </a>
                </li>
            </ul>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/safeCenter/setLoginpass">
                    登录密码
                    </a>
                </li>
                 <li class="mui-table-view-cell">
                    <a class="mui-navigate-right buy_pass1 " href="#/home/mySet/safeCenter/setBuypass">
                        交易密码
                        <span class="mui-pull-right buy_pass">未设置</span>
                    </a>
                </li>
            </ul>           
        </div>
  </div>    
</template>
<script>
export default {
  mounted(){
      if(this.$store.state.buypass){
          $(".mui-table-view-cell .buy_pass1").attr("href","#/home/mySet/safeCenter/reviseBuypass")
          $(".mui-table-view-cell .buy_pass").text("修改交易密码")
      }
      if(localStorage.handpass!=""){
          $(".mui-table-view-cell .hand_pass").text("修改手势密码")
      }
  }
}
</script>
<style scoped>
.safe_center {
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
}
.user_main .mui-table-view li {
    height: 0.51rem;  
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
