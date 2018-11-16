<template>
  <div class="runfor_body">
    <header id="header" class="mui-bar mui-bar-transparent">
		
		</header>
    <div class="runfor_header">
      <img src="../../lib/img/banner_jx.png" alt="/">
      <span>竞选规则</span>
    </div>
    <div class="runfor_main">
      <div class="main">
        <div class="top">
          <div class="left">
            <p>550.56
              <span>GPOS</span>
            </p>
            <img src="../../lib/img/icon_sy_xh.png" alt="">
            <span>总余额</span>
          </div>
          <div class="right">
            <p>6100.88
              <span>GPOS</span>
            </p>
            <img src="../../lib/img/icon_sy_xh.png" alt="">
            <span>竞选余额</span>

          </div>
        </div>
        <div class="foot">
          <div @tap="cyjx">
            竞选
          </div>
          <p>您的竞选余额将在7.31返还到您的账户</p>
        </div>
      </div>
    </div>
    <div class="runfor_foot">
      <div>
        <p>竞选排名</p>
        <span>(上榜参考值2000GPOS)</span>
      </div>
      <table class="runfor_table">
        <thead>
          <tr>
            <th colspan="2">
              名次
            </th>
            <th>
              昵称
            </th>
            <th>
              GPOS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

            </td>
            <td>
              1 <img src="../../lib/img/icon_tx_jx.png" alt="/">
            </td>
            <td>
              用户昵称
            </td>
            <td>
              3288
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>
              1 <img src="../../lib/img/icon_tx_jx.png" alt="/">
            </td>
            <td>
              用户昵称
            </td>
            <td>
              3288
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>
              1 <img src="../../lib/img/icon_tx_jx.png" alt="/">
            </td>
            <td>
              用户昵称
            </td>
            <td>
              3288
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>
              1 <img src="../../lib/img/icon_tx_jx.png" alt="/">
            </td>
            <td>
              用户昵称
            </td>
            <td>
              3288
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>
              1 <img src="../../lib/img/icon_tx_jx.png" alt="/">
            </td>
            <td>
              用户昵称
            </td>
            <td>
              3288
            </td>
          </tr>
          <tr>
            <td colspan="4"><p>......</p></td>
          </tr>
          <tr>
            <td></td>
            <td> 1 <img src="../../lib/img/icon_tx_jx.png" alt="/"></td>
            <td>自己</td>
            <td>7578747</td>

          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {

    }
  },
  methods: {
      cyjx:function(){
           this.$router.push("/home/runfor/runforStart")
      }
  },
  mounted() {
    let that =this;
    //table前3名添加图标
    let jin =require("../../lib/img/icon_jin.png");
    let yin =require("../../lib/img/icon_yin.png");
    let tong =require("../../lib/img/icon_tong.png");
     $(".runfor_table tbody tr:eq(0) td:eq(0)").html("<img src="+jin+" style='width:0.145rem'>"); 
     $(".runfor_table tbody tr:eq(1) td:eq(0)").html("<img src="+yin+" style='width:0.145rem'>"); 
     $(".runfor_table tbody tr:eq(2) td:eq(0)").html("<img src="+tong+" style='width:0.145rem'>"); 
    //tabar状态;
    that.$store.commit("tabstate1",2)
    
  },
  created () {
     mui.plusReady(function() {
      plus.navigator.setStatusBarStyle( "light" );
    });
  }
}
</script>
<style scoped>
@import "../../lib/css/runfor.css";
.mui-bar-transparent {
  background-color: rgba(88,113,255,0);
}
</style>

