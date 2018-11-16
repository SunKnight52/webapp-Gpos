<template>
  <div class="gpos">
      <div class="getpass_header">
             <a href="#/home/detailed/gposDetailed"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            账单明细
        </div>
         <div class="user_main">
           <div class="user_top">
               <span class="left">2018-7-15(单位:GPOS)</span><span class="right">第一阶段</span>
               </div> 
            <div class="user_foot">
                <div>
                    <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                    <p>矿机净收益</p>
                    <span>+93.00</span>
                </div>
            </div>
            <div class="foot">
                    <ul>
                        <li>
                            <span class="left">个人总收益</span>
                            <span class="right">+100</span>
                        </li>
                        <li>
                            <span class="left">邀请人收益</span>
                            <span class="right">-10<img src="../../lib/img/icon_xl.png" style="width:0.11rem" alt=""></span>
                        </li>
                       
                        <li>
                            <span class="left">一级邀请人收益</span>
                            <span class="right">-3</span>
                        </li>
                        <li>
                            <span class="left">一级邀请人收益</span>
                            <span class="right">-3</span>
                        </li>
                        <li>
                            <span class="left">推荐人收益</span>
                            <span class="right">+3<img src="../../lib/img/icon_xl.png" style="width:0.11rem" alt=""></span>
                        </li>
                       
                    </ul>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  mounted(){
      console.log(this.$route.params.id);  //获取月份
      let id =this.$route.params.ID;       //获取阶段
         

      if(id==1){
          
          $(".user_top .right").text("第一阶段")
      }else if(id==2){
         $(".user_top .right").text("第二阶段")
      }else {
          console.log(id)
        $(".user_top .right").text("第三阶段")
      }
      
  }
}
</script>
<style scoped>
.gpos {
    height: 100%;
    background-color: #f3f3f3;
}
.user_main .user_top {
    height: 0.28rem;
    font-size: 12px;
    line-height: 0.28rem;
    padding: 0 0.15rem;
}
.user_main .user_top .left {
    color:rgba(102, 102, 102, 0.3)
}
.user_main .user_top .right {
    font-size: 14px;
    color:#666;
}
.user_main .user_foot {
    background-color: #fff;
    height: 1.8rem;
    padding-top: 0.4rem;
    text-align: center;
}
.user_main .user_foot p {
    font-size: 14px;
    color: #333;
}
.user_main .user_foot span {
    font-size: 20px;
    color: #5871ff;
    font-weight: 700;
}
.user_main .foot ul {
    padding: 0 0.15rem;
    background-color: #fff;
    margin-top: 0.1rem;
}
.user_main .foot ul li {
    height: 0.54rem;
    border-bottom: 1px #ccc solid;
    line-height: 0.54rem;
    font-size: 14px;
}
.user_main .foot ul li .left {
    color: #666;
}
.user_main .foot ul li .right {
    color: #333;
}
.user_main .foot ul li:last-of-type {
    border-bottom: 0;
}
.user_main .foot ul li .right img {
    margin-left: 0.05rem;
}
.user_main .foot ul li:last-of-type .right img {
   transform: rotate(-90deg);
}
</style>
