<template>
    <div class="detailed">
        <div class="getpass_header">
            <a href="#/home/index"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            账单明细
        </div>
        <div class="user_main">
            <div class="user_head">
                <div>
                    <a href="#/home/detailed/gposDetailed">
                        矿机
                    </a>
                </div>
                <div>
                    <a href="#/home/detailed/runforDetailed">
                        竞选
                    </a>
                </div>
                <!-- <div>
                    <a href="#item3mobile">
                        持币
                    </a>
                </div> -->
                <div>
                    <a href="#/home/detailed/payDetailed">
                        收付
                    </a>
                </div>
            </div>
        </div>
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div">
            <transition :name="transitionName">
                <router-view></router-view>
            </transition>
        </v-touch>
    </div>
</template>
<script>
import "../../lib/css/runforDetail.css";
import "../../../static/mui/css/mui.picker.min.css";
import "../../../static/mui/css/app.css";
export default {
    data() {
        return {
            isIos: false,
            transitionName: ''
        }
    },
    methods: {
        onSwipeLeft: function() {
            let that = this
            switch (that.$route.path) {
                case "/home/detailed/gposDetailed":
                    that.$router.push("/home/detailed/runforDetailed")
                    break;
                case "/home/detailed/runforDetailed":
                    that.$router.push("/home/detailed/payDetailed")
                    break;
                case "/home/detailed/payDetailed":
                    break;
            }
        },
        onSwipeRight: function() {
            let that = this
            switch (that.$route.path) {
                case "/home/detailed/gposDetailed":
                    break;
                case "/home/detailed/runforDetailed":
                    that.$router.push("/home/detailed/gposDetailed")
                    break;

                case "/home/detailed/payDetailed":
                console.log("yes")
                    that.$router.push("/home/detailed/runforDetailed")
                    break;
            }
        },
         getDevice() {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                this.isIos = true;
            }
        }
    },
      watch: {//使用watch 监听$router的变化
        $route(to, from) {
            //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
            let nub;
            if (to.meta.index > 0) {
                if (to.meta.index < from.meta.index) {
                    let a =from.meta.index*10-to.meta.index*10;
                                        console.log(a)

                    this.transitionName = 'slide-right';
                   console.log( this.$store.state.tabsta.detail)
                    nub = this.$store.state.tabsta.detail-a;
                    console.log(nub)
                } else {
                    let b =to.meta.index*10-from.meta.index*10;
                    console.log(b)
                    this.transitionName = 'slide-left';
                    nub = this.$store.state.tabsta.detail+b;
                }
            } else if (to.meta.index == 0 && from.meta.index > 0) {
                this.transitionName = 'slide-right';
            }   
            console.log(nub)
            $(".user_main .user_head div a ").removeClass("active");
             $(".user_main .user_head div a ").eq(nub - 1).addClass("active");
        }
    },
    mounted() {
        this.getDevice();
        //绑定点击事件
        // $(".user_main .user_head div a ").on("tap", function() {
        //     $(".user_main .user_head div a ").removeClass("active");
        //     $(this).addClass("active");
        // })
        let nub = this.$store.state.tabsta.detail;
        $(".user_main .user_head div a ").removeClass("active");
        $(".user_main .user_head div a ").eq(nub - 1).addClass("active");

    }
}
</script>
<style scoped>

.user_main {
    width: 100%;
}

.user_main .user_head {
    width: 100%;
    height: 0.43rem;
    display: flex;
}

.user_main .user_head>div {
    flex: 1;
    text-align: center;
    border-bottom: 1px #ccc solid;
}

.user_main .user_head a {
    display: inline-block;
    margin-right: 0.34rem;
    width: 0.41rem;
    height: 0.43rem;
    text-decoration: none;
    outline: none;
    color: #666;
    font-size: 14px;
    font-weight: 600;
    line-height: 0.43rem;
}

.user_main .user_head a:last-of-type {
    margin-right: 0;
}

.user_main .user_head div .active {
    color: #5871ff;
    border-bottom: 2px #5871ff solid;
}
</style>
