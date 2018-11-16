<template>
    <div class="wealth">
        <div class="wealth_head">
            <img src="../../lib/img/beijing_c.png" alt="">
            <div class="head_main">
                <div>
                    <div class="head_top">
                        <p>昨日收益(GPOS)</p>
                        <span>2.08</span>
                        <p class="eyes">总金额
                            <span>{{rel?"5.00":"----.--"}}</span>GPOS <img :src="rel?img1:img2" @tap="wealth"  alt=""></p>
                    </div>
                    <div class="head_mid">
                        <div>
                            <p>利息%</p>
                            <span>2.3480</span>
                        </div>
                        <div>
                            <p>个人收益</p>
                            <span>2.3480</span>
                        </div>
                        <div>
                            <p>团队收益</p>
                            <span>2.3480</span>
                        </div>
                    </div>
                    <div class="head_but">
                        <button class="but_in">储存</button>
                    </div>
                </div>
            </div>
            <img src="../../lib/img/icon_bangzhu.png" alt="">
        </div>
        <div class="wealth_foot">
            <div class="foot_top">
                <div class="left">
                    <img src="../../lib/img/icon_shifang.png" alt="">待释放
                </div>
                <div class="right">
                    <img src="../../lib/img/icon_jiantous.png" alt="">
                </div>
            </div>
            <img src="../../lib/img/icon_wshuju.png" alt="">
            <p>暂时没有相关数据哦</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rel:this.$store.state.wealth,
            img1:require("../../lib/img/icon_yangjingl.png"),
            img2:require("../../lib/img/icon_biyan_l.png")
        }
    },
      methods: {
        wealth: function(e) {
            console.log(1)
            this.$store.commit("wealthout");
            this.rel = this.$store.state.wealth;
            console.log(this.rel)
        }
    },
     watch: {
        rel: function(newVal, oldVal) {
            let url=require("../../lib/img/icon_biyan_l.png");
            let src =require("../../lib/img/icon_yangjingl.png")
            if (newVal) {
                $(".eyes img").attr("src",src)
                $(".eyes span").text("5.00")
            } else {
                $(".eyes img").attr("src",url)
                $(".eyes span").text("----.--")
            }
        }
    },
    mounted() {
        let that = this;
        //tabar状态;
        that.$store.commit("tabstate1", 3);
       
    }

}
</script>
<style scoped>
@import "../../lib/css/wealth.css";
</style>
