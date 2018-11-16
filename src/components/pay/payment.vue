<template>
  <div class="payment">
    <div class="getpass_header">
      <a href="#/home/index"><img src="../../lib/img/icon_fanhui_b.png" alt=""> </a>
      付款
    </div>
    <div class="pay_main">
      <div class="main">
        <div class="pay_top">
          <img src="../../lib/img/icon_fukuan_l.png" alt="">向商家付款
        </div>
        <div class="pay_mid">
          <p @tap="pay">将二维码展示给商家付款</p>
          <img src="../../lib/img/icon_ewm.png" id="scan" @longtap="an($event)"  alt="">
        </div>
        <div class="pay_bot">
          <div class="bot">
            <div class="left">
              <img src="../../lib/img/icon_yue.png" alt="">余额支付
            </div>
            <div class="right">
              <img src="../../lib/img/icon_jt_you.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  methods: {
    pay: function() {
      this.$router.push("/home/index/paymentEnd")
    },
    an: function(e) {
     
        var scan = document.getElementById("scan");
     
      // 长按识别二维码
         let src = scan.src;
         console.log(src)
        plus.barcode.scan(src, function(type, result) {
          alert( result);
        }, function(error) {
          alert(error.message);
        });
      }
    
  }

}
</script>
<style scoped>
.payment {
  width: 100%;
  height: 100%;
  background-color: #5871ff;
}

.payment .getpass_header {
  background-color: #5871ff;
  border: 0;
  color: #fff;
}

.payment .pay_main {
  width: 100%;
  padding: 0 0.33rem;
  margin-top: 0.5rem;
}

.payment .pay_main .main {
  background-color: #fff;
  border-radius: 0.05rem;
  text-align: center;
  height: 100%;
}

.payment .pay_main .main .pay_top {
  background-color: #f3f3f3;
  height: 0.55rem;
  border-radius: 0.05rem 0.05rem 0 0;
  line-height: 0.55rem;
  color: #5871ff;
}

.payment .pay_main .main .pay_top img {
  width: 0.16rem;
  margin-right: 0.07rem;
  vertical-align: middle;
}

.payment .pay_main .main .pay_mid {
  padding-top: 0.59rem;
}

.payment .pay_main .main .pay_mid p {
  font-size: 14px;
  color: #999;
  margin-bottom: 0.24rem;
}

.payment .pay_main .main .pay_mid img {
  width: 1.71rem;
}

.payment .pay_main .main .pay_bot {
  height: 0.57rem;
  margin-top: 0.63rem;
  padding: 0 0.28rem;
  line-height: 0.57rem;
}

.payment .pay_main .main .pay_bot .bot {
  border-top: 1px #ccc solid;
}

.payment .pay_main .main .pay_bot .bot .left {
  font-size: 14px;
  color: #333;
}

.payment .pay_main .main .pay_bot .bot .left img {
  width: 0.18rem;
  margin-right: 0.1rem;
  vertical-align: middle;
}

.payment .pay_main .main .pay_bot .bot .right img {
  width: 0.06rem;
  vertical-align: middle;
}
</style>
