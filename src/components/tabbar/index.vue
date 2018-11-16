<template>
    <div class="index">
        <div class="index_head">
            <div class="head_top">
              
                <div class="balance">
                    我的余额
                    <a id="eye" href="javascript:;" :class="rel ?'':'active'" @tap="balance($event)">
                        <span class="mui-icon mui-icon-eye"></span>
                    </a>
                </div>
                <div class="gpos_nub" id="gpos_nub">
                    <span>{{rel?"1000.00":"----.--"}}</span>GPOS
                </div>
                <div class="ranking">
                    <div @tap="rank(1)">总量排名:
                        <span>20</span>
                    </div>
                    <div @tap="rank(0)">今日新增排名:
                        <span>20</span>
                    </div>
                </div>
                <a href="#">
                    <img src="../../lib/img/icon_fx_b.png" style="width:0.185rem" alt="">
                </a>
            </div>
            <div class="fot">
                <div class="head_foot">
                    <ul>
                        <li>
                            <a href="#/home/index/barcode">
                                <img src="../../lib/img/icon_saoma.png" alt=""><br> 扫一扫
                            </a>
                        </li>
                        <li>
                            <a href="#/home/index/receivables">
                                <img src="../../lib/img/icon_shoukuan.png" alt=""><br> 收款
                            </a>
                        </li>
                        <li>
                            <a href="#/home/index/payment">
                                <img src="../../lib/img/icon_fukuan.png" alt=""><br> 付款
                            </a>
                        </li>
                        <li>
                            <a href="#/home/detailed/gposDetailed">
                                <img src="../../lib/img/icon_mx.png" alt=""><br> 明细
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="index_profit">
            <div class="left">
                <router-link to="/home/index/profit/0">
                    <div>
                        <img src="../../lib/img/icon_sy_l.png" alt="">总收益
                    </div>
                    <div>
                        <span>1000.00</span>GPOS
                    </div>
                </router-link>
            </div>
            <div class="right">
                <router-link to="/home/index/profit/1">
                    <div>
                        <img src="../../lib/img/icon_sy_l.png" alt="">今日收益
                    </div>
                    <div>
                        <span>870.00</span>GPOS
                    </div>
                </router-link>
            </div>
            <img src="../../lib/img/banner_sy_x.png" alt="">
        </div>
        <div class="index_foot">
            <div class="index_user index_nub">
                <div class="left">
                    <img src="../../lib/img/icon_quanyou.png" style="width:0.71rem" alt="">
                    <p>劵友</p>
                </div>
                <span></span>
                <div class="left">
                    <ul class="ul_top">
                        <li>
                            <div class="top">台数</div>
                            <div class="but">5</div>
                        </li>
                        <li>
                            <div class="top">人数</div>
                            <div class="but">15</div>
                        </li>
                        <li @tap="unbuy">
                            <div class="top">未购名额</div>
                            <div class="but">10</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="index_team index_nub">
                <div class="left">
                    <img src="../../lib/img/icon_tuandui.png" style="width:0.765rem" alt="">
                    <p>团队</p>
                </div>
                <span></span>
                <div class="left">
                    <ul>
                        <li>
                            <div class="top">台数</div>
                            <div class="but">5</div>
                        </li>
                        <li>
                            <div class="top">人数</div>
                            <div class="but">15</div>
                        </li>
                        <li>
                            <div class="top">未购人数</div>
                            <div class="but">10</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="index_GPOS" @tap="kj">
                <div class="left">
                    <p>GPOS矿机</p>
                    <span>共有2台矿机正在挖矿</span>
                </div>
                <div class="right">
                    <img src="../../lib/img/icon_kuangji.png" style="width:1.245rem" alt="">
                </div>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    data() {
        return {
            rel: this.$store.state.balsee
        }
    },

    methods: {
        balance: function(e) {
            this.$store.commit("balanceout");
            this.rel = this.$store.state.balsee;
        },
        kj() {
            this.$router.push("/home/index/miner")
        },
        rank: function(e) {
            this.$router.push("/home/index/ranking/" + e)
        },
        unbuy() {
            this.$router.push("/home/index/unbuyList")
        },
        // news: function() {
        //     Notification.requestPermission(function(permission) {
        //         if (permission == "granted") {
        //             var notification = new Notification("您有一条新的消息", {
        //                 dir: "auto",
        //                 lang: "zh-CN",
        //                 tag: "testNotice",
        //                 icon: 'ant.png',
        //                 body: '你好啊！我是蚂蚁，我在测试桌面推送'
        //             });
        //         }
        //     }
        //     )
        // }
        
    },
    watch: {
        rel: function(newVal, oldVal) {
            if (newVal) {
                $("#eye").removeClass("active")
                $("#gpos_nub span").text("1000.00")
            } else {
                $("#eye").addClass("active")
                $("#gpos_nub span").text("----.--")
            }
        }
    },
    mounted() {
        let that = this;
        that.$store.commit("tabstate1", 1)
    }
}
</script>
<style scoped>
@import "../../lib/css/index.css";
.active span {
    color: #000;
}



</style>
