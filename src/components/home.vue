<template>
    <div class="home_body" :class="[isIos ? 'xn-ios':'']">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div">
            <transition :name="transitionName">
          
                <router-view></router-view>

            </transition>
        </v-touch>

        <nav class="mui-bar mui-bar-tab index">
            <a class="mui-tab-item" href="#/home/index" >
                <img src="../lib/img/icon_shouye_l.png" class="hide" alt="">
                <img src="../lib/img/icon_sy_h.png" alt=""><br>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#/home/runfor">
                <img src="../lib/img/icon_jx_l.png" class="hide" alt="">
                <img src="../lib/img/icon_jx_h.png" alt=""><br>
                <span class="mui-tab-label">竞选</span>
            </a>
            <a class="mui-tab-item" href="#/home/wealth">
                <img src="../lib/img/icon_caiful.png" class="hide" alt="">
                <img src="../lib/img/icon_cf_h.png" alt=""><br>
                <span class="mui-tab-label">财富</span>
            </a>
            <a class="mui-tab-item" href="#/home/shop">
                <img src="../lib/img/icon_sc_l.png" class="hide" alt="">
                <img src="../lib/img/icon_sc_h.png" alt=""><br>
                <span class="mui-tab-label">商城</span>
            </a>
            <a class="mui-tab-item" href="#/home/mySet">
                <!-- <span class="mui-icon mui-icon-gear"></span> -->
                <img src="../lib/img/icon_wd_l.png" class="hide" alt="">
                <img src="../lib/img/icon_wd_l.png" alt=""><br>
                <span class="mui-tab-label">我的</span>
            </a>
        </nav>
    </div>
</template>
<script>

export default {
    data() {
        return {
            stat: this.$store.state.tabsta.index,
            isIos: false,
            transitionName: ''
        }
    },
    watch: {//使用watch 监听$router的变化
        $route(to, from) {
            //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
            let nub;
            if (to.meta.index > 0) {
                if (to.meta.index < from.meta.index) {
                    let a =from.meta.index*10-to.meta.index*10;
                    this.transitionName = 'slide-right';
                    nub = this.$store.state.tabsta.index-a;
                } else {
                    let b =to.meta.index*10-from.meta.index*10;
                    this.transitionName = 'slide-left';
                    nub = this.$store.state.tabsta.index+b;
                }
            } else if (to.meta.index == 0 && from.meta.index > 0) {
                this.transitionName = 'slide-right';
            }
       
            //滑动时tabber栏状态
            $(".index .mui-tab-item ").removeClass("mui-active");
            $(".index .mui-tab-item ").eq(nub - 1).addClass("mui-active");
             $(".index .mui-tab-item ").find("img:eq(1)").removeClass("hide");
            $(".index .mui-tab-item ").find("img:eq(0)").addClass("hide");
            $(".index .mui-tab-item ").each(function() {
                if ($(this).hasClass("mui-active")) {
                    $(this).children("img").eq(0).removeClass("hide");
                    $(this).children("img").eq(1).addClass("hide")
                }
            })

        }
       
    },
    methods: {
        
        onSwipeLeft: function() {
            let that = this
            switch (that.$route.path) {
                case "/home/index":
                    that.$router.push("/home/runfor")
                    break;
                case "/home/runfor":
                    that.$router.push("/home/wealth")
                    break;
                case "/home/wealth":
                    that.$router.push("/home/shop")
                    break;
                case "/home/shop":
                    that.$router.push("/home/mySet")
                    break;
                case "/home/mySet":
                    break;
            }

        },
        onSwipeRight: function() {
            let that = this
            switch (that.$route.path) {
                case "/home/index":
                    break;
                case "/home/runfor":
                    that.$router.push("/home/index")
                    break;
                case "/home/wealth":
                    that.$router.push("/home/runfor")
                    break;
                case "/home/shop":
                    that.$router.push("/home/wealth")
                    break;
                case "/home/mySet":
                    that.$router.push("/home/shop")
                    break;
            }
        },

        // st: function(e) {
        //     $(".index .mui-tab-item ").find("img:eq(1)").removeClass("hide");
        //     $(".index .mui-tab-item ").find("img:eq(0)").addClass("hide");
        //     $(e.currentTarget).children("img").eq(0).removeClass("hide");
        //     $(e.currentTarget).children("img").eq(1).addClass("hide");

        // },
        getDevice() {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                this.isIos = true;
            }
        }
    },
    mounted() {
        
        let nub = this.stat;
        let that = this;
        this.getDevice();
       //tabber栏状态
        $(".index .mui-tab-item ").removeClass("mui-active");
        $(".index .mui-tab-item ").eq(nub - 1).addClass("mui-active");
        $(".index .mui-tab-item ").each(function() {
            if ($(this).hasClass("mui-active")) {

                $(this).children("img").eq(0).removeClass("hide");
                $(this).children("img").eq(1).addClass("hide")
            }
        })


        mui('body').on('tap', 'a', function() { document.location.href = this.href; });
       
    },
    created () {
        mui.plusReady(function() {
      plus.navigator.setStatusBarBackground("red");
    });
    }

}

</script>
<style scoped>
.home_body {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
}

.mui-bar {
    box-shadow: 0 0 0;
    -webkit-box-shadow: 0 0 0;
    background-color: #fff;
}

.home_body .mui-bar .mui-tab-item {
    font-size: 12px;
    position: relative;
}

.home_body .mui-bar .mui-tab-item img {
    width: 0.15rem;
    vertical-align: bottom;
    position: absolute;
    left: 50%;
    margin-left: -0.075rem;
    top: 0.05rem
}
</style>
