<template>
  <div class="shop">
    <div class="shop_search">
      <div class="mui-content">
        <div class="mui-input-row mui-search">
          <input type="search" class="mui-input-clear" placeholder="请输入商户名.分类">
        </div>
      </div>
      <img src="../../lib/img/icon_fenlei_sc.png" alt="">
    </div>
    <div  id="pullrefresh" class="mui-content mui-scroll-wrapper">
      <div class="shop_list mui-scroll">
        <ul class="mui-table-view mui-table-view-chevron">
          <li name="1">
            <a href="#/home/shop/shopDetail/1">
            <img src="../../lib/img/icon_sjt.png" alt="">
            <div>
              <div class="list_main">
                <div class="shop_name">
                  <span>商户名</span>
                  <div>分类</div>
                </div>
                <div class="shop_add">
                  <img src="../../lib/img/icon_dizhi_sc.png" alt="">
                  <span>saddddddddddddd</span>
                </div>
                <p>027-12345678</p>
              </div>
              <div class="shop_activity">
                消费100送10GPOS
              </div>
            </div>
            </a>
          </li>
          <li name="2">
            <a href="#/home/shop/shopDetail/2">
            <img src="../../lib/img/icon_sjt.png" alt="">
            <div>
              <div class="list_main">
                <div class="shop_name">
                  <span>商户名</span>
                  <div>分类</div>
                </div>
                <div class="shop_add">
                  <img src="../../lib/img/icon_dizhi_sc.png" alt="">
                  <span>saddddddddddddd</span>
                </div>
                <p>027-12345678</p>
              </div>
              <div class="shop_activity">
                消费100送10GPOS
              </div>
            </div>
             </a>
          </li>
          <li name="3">
            <a href="#/home/shop/shopDetail/3">
            <img src="../../lib/img/icon_sjt.png" alt="">
            <div>
              <div class="list_main">
                <div class="shop_name">
                  <span>商户名</span>
                  <div>分类</div>
                </div>
                <div class="shop_add">
                  <img src="../../lib/img/icon_dizhi_sc.png" alt="">
                  <span>saddddddddddddd</span>
                </div>
                <p>027-12345678</p>
              </div>
              <div class="shop_activity">
                消费100送10GPOS
              </div>
            </div>
             </a>
          </li>
          <li name="4">
            <a href="#/home/shop/shopDetail/4">
            <img src="../../lib/img/icon_sjt.png" alt="">
            <div>
              <div class="list_main">
                <div class="shop_name">
                  <span>商户名</span>
                  <div>分类</div>
                </div>
                <div class="shop_add">
                  <img src="../../lib/img/icon_dizhi_sc.png" alt="">
                  <span>saddddddddddddd</span>
                </div>
                <p>027-12345678</p>
              </div>
              <div class="shop_activity">
                消费100送10GPOS
              </div>
            </div>
             </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "../../lib/css/shop.css";
export default {

  data() {
    return {
      pl: true
    }
  },
  methods: {
    ps() {
      this.$store.commit("ps");
      console.log(1)
    }
  },
  mounted() {
    mui('.mui-input-row input').input();
    let that = this;
    that.$store.commit("tabstate1",4)
        for (var i = mui.hooks.inits.length - 1, item; i >= 0; i--) { //mui下拉组件跳转刷新
            item = mui.hooks.inits[i];
            if (item.name == "pullrefresh") {
                item.repeat = true;
            }
        }
    mui.init({
      pullRefresh: {
        container: '#pullrefresh',
        down: {
          callback: pulldownRefresh
        },
        up: {
          contentrefresh: '正在加载...',
          callback: pullupRefresh,
        }
      }
    });
    /**
     * 下拉刷新具体业务实现
     */
    function pulldownRefresh() {
      setTimeout(function() {
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
      }, 1500);
    }
    var count = 0;
    /**
     * 上拉加载具体业务实现
     */
    function pullupRefresh() {
      let _this =this;
      setTimeout(function() {
        // mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
        var table = document.body.querySelector('.mui-table-view');
        var cells = document.body.querySelectorAll('.mui-table-view-cell');
        for (var i = cells.length, len = i + 4; i < len; i++) {
          var li = document.createElement('li');
          // li.className = 'mui-table-view-cell eight';
          let a = require("../../lib/img/icon_sjt.png")
          let b =require("../../lib/img/icon_dizhi_sc.png")
          let c =i+5;
          $(li).attr("name",c);
          li.innerHTML = "<a href='#/home/shop/shopDetail/"+c+"'><img src="+a+"><div><div class='list_main'><div class='shop_name'><span>商户名</span><div>分类</div></div><div class='shop_add'><img src="+b+"><span>saddddddddddddd</span></div><p>027-12345678</p></div><div class='shop_activity'>消费100送10GPOS</div></div></a>";

          table.appendChild(li);
          _this.endPullupToRefresh(false); 
        }
      }, 1500);
      
    }





  }
}
</script>
<style scoped>

.mui-search input[type=search] {
  height: 0.28rem;
  border-radius: 0.28rem;
  margin-bottom: 0;
}
#pullrefresh{
  top:0.6rem;
}
.mui-search .mui-placeholder {
        pointer-events: none;
    }
</style>

