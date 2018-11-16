<template>
    <div class="shop_detail">
       
        <div class="shop_main">
            <img src="../../../lib/img/banner_shxq.png" alt="">
             <a href="#/home/shop/"><img src="../../../lib/img/icon_fanhui_b.png" alt=""> </a>
            <ul>
                <li>商户名{{shop_name}}
                    <div>分类</div>
                </li>
                <li>
                    <img src="../../../lib/img/icon_dizhi_xq.png" alt="">
                    <span>地址asdadas阿萨达萨达多多ffffff多多多</span>
                </li>
                <li>
                    <img src="../../../lib/img/icon_dianhua_xq.png" alt="">
                    <span>027-8895953662</span>
                </li>
                <li>
                    <img src="../../../lib/img/icon_huodong_xq.png" alt=""><span style="color:#5871ff">消费100送100GPOS</span>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
// import "../1.css"
export default {
    data(){
        return {
            shop_name:this.$route.params.id
        }
    },
    mounted() {
        
    }
}
</script>
<style scoped>
.shop_detail {
  width: 100%;
  background-color: #f3f3f3;
  height: 100%;
}
.shop_detail .shop_main {
  position: relative;
  top: 0;
  width: 100%;
}
.shop_detail .shop_main > img {
  width: 100%;
}
.shop_detail .shop_main > a > img {
  width: 0.1rem;
  position: absolute;
  top: 0.4rem;
  left: 0.1rem;
}
.shop_detail .shop_main ul li {
  padding: 0 0.15rem;
  height: 0.53rem;
  width: 100%;
  margin-bottom: 0.1rem;
  background-color: #fff;
  line-height: 0.53rem;
  overflow: hidden;
}
.shop_detail .shop_main ul li img {
  width: 0.13rem;
  margin-right: 0.07rem;
}
.shop_detail .shop_main ul li span {
  font-size: 14px;
  color: #666;
}
.shop_detail .shop_main ul li:first-of-type:after {
  content: "";
  width: 95%;
  position: absolute;
  height: 0.01rem;
  background-color: #ccc;
  bottom: 0;
   /* left: 0.15rem; */
  right: 2.5%;
}
.shop_detail .shop_main ul li:first-of-type {
  font-size: 14px;
  color: #333;
  margin-bottom: 0;
  position: relative;
}
.shop_detail .shop_main ul li:first-of-type div {
  display: inline-block;
  background-color: #5871ff;
  color: #fff;
  font-size: 10px;
  margin-left: 0.07rem;
  height: 0.15rem;
  line-height: 0.15rem;
  padding: 0 0.04rem;
}
.shop_detail .shop_main ul li:nth-of-type(2) {
  height: 0.61rem;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  line-height: 0.2rem;
  padding-top: 0.15rem;
}

</style>
