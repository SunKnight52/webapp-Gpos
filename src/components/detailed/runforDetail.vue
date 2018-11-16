<template>
    <div class="runfor">
        <div class="getpass_header">
            <a href="#/home/detailed/runforDetailed"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            账单详情
        </div>
        <div class="user_main">
           <div class="user_top">
               <span class="left">2018-7-15 -- 2018-7-30</span><span class="right">一等奖</span>
               </div> 
            <div class="user_foot">
                <div>
                    <img src="../../lib/img/icon_jx_xq.png" style="width:0.47rem" alt="">
                    <p>竞选总收益</p>
                    <span>+93.00</span>
                </div>
            </div>
            <div class="foot">
                    <ul>
                        <li>
                            <span class="left">排名</span>
                            <span class="right">23</span>
                        </li>
                        <li>
                            <span class="left">参与人数</span>
                            <span class="right">50000</span>
                        </li>
                    </ul>
                    <ul>    
                        <li>
                            <span class="left">实时到账</span>
                            <span class="right">100GPOS</span>
                        </li>
                        <li>
                            <span class="left">竞选数额</span>
                            <span class="right">100GPOS</span>
                        </li>
                        <li>
                            <span class="left">已释放</span>
                            <span class="right">100GPOS</span>
                        </li>
                       
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  mounted(){
      console.log(this.$route.params.id) //传回来的月份值
    
  }
}
</script>
<style scoped>
.runfor {
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
</style>
