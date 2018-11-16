<template>
  <div class="pay_end">
      <div class="pay_head">
          <img src="../../lib/img/icon_fk_ok.png" alt="">
          <p>付款成功</p>
          <span>100GPOS</span>
      </div>
      <div class="pay_main">
          <span>收款人</span>
          <img src="../../lib/img/icon_tx_mr.png" alt="">
          <p>张三丰</p>
      </div>
      <div class="pay_foot">
            <div @tap="fanh">
                完成
            </div>
      </div>
  </div>
</template>
<script>
export default {
  methods:{
      fanh:function(){
          this.$router.push("/home/index/payment")
      }
  }

}
</script>
<style scoped>
.pay_end {
  width: 100%;
  height: 100%;
}
.pay_end .pay_head {
  padding-top: 0.99rem;
  text-align: center;
}
.pay_end .pay_head img {
  width: 0.33rem;
  margin-bottom: 0.02rem;
}
.pay_end .pay_head p {
  font-size: 14px;
  color: #5871ff;
  margin-bottom: 0.2rem;
}
.pay_end .pay_head span {
  font-size: 25px;
  color: #666;
  font-weight: 700;
}
.pay_end .pay_main {
  padding-top: 1.34rem;
  text-align: center;
}
.pay_end .pay_main span {
  font-size: 14px;
  color: #999;
  display: inherit;
}
.pay_end .pay_main img {
  width: 0.75rem;
  margin: 0.23rem 0 0.2rem 0;
}
.pay_end .pay_main p {
  font-size: 20px;
  color: #333;
  font-weight: 550;
}
.pay_end .pay_foot {
  padding-top: 0.5rem;
  text-align: center;
  color: #fff;
}
.pay_end .pay_foot > div {
  display: inline-block;
  line-height: 0.6rem;
  width: 1.5rem;
  height: 0.6rem;
  background: url("../../lib/img/icon_anniu_x.png") no-repeat;
  background-size: 1.47rem;
  background-position: 0.02rem -0.05rem;
}

</style>
