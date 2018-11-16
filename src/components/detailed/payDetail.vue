<template>
   <div class="pay">
        <div class="getpass_header">
            <a href="#/home/detailed/payDetailed"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            账单详情
        </div>
        <div class="user_main">
           
            <div class="user_foot">
                <div>
                    <img src="../../lib/img/icon_tx_mh.png" style="width:0.47rem" alt="">
                    <p>收款-张三丰</p>
                    <span>+93.00</span>
                </div>
            </div>
            <div class="foot">
                    <ul>
                        <li>
                            <span class="left">收款方式</span>
                            <span class="right">余额</span>
                        </li>
                        <li>
                            <span class="left">转账备注</span>
                            <span class="right">转账</span>
                        </li>
                        <li>
                            <span class="left">对方账户</span>
                            <span class="right">张三丰123*****12</span>
                        </li>
                        <li>
                            <span class="left">账单分类</span>
                            <span class="right">其他</span>
                        </li>
                    </ul>
                    <ul>    
                        <li>
                            <span class="left">创建时间</span>
                            <span class="right">2018-08-01 10:00</span>
                        </li>
                        <li>
                            <span class="left">订单号</span>
                            <span class="right">123456123456123456</span>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$route.params.id)
    
  }
}
</script>
<style scoped>
.pay {
    height: 100%;
    background-color: #f3f3f3;
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
