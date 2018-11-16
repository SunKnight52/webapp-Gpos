<template>
    <div class="hand_pass1">
        <div class="getpass_header">
            <router-link :to="from"><img src="../../lib/img/icon_fanhui.png" alt=""> </router-link>
            手势密码
        </div>
        <div class="user_main">
            <div class="main_top">
                <img src="../../lib/img/icon_suo.png" alt=""><br>
                <span> 请输入手势密码</span>
            </div>
            <div class="mui-content">
                <div id='holder' class="mui-locker" data-locker-options='{"ringColor":"rgba(88,113,255,1)","fillColor":"#dedeff","pointColor":"rgba(88,113,255,1)","lineColor":"rgba(88,113,255,1)"}' data-locker-width='300' data-locker-height='300'></div>

            </div>
        </div>
        <!--模态框  -->
        <div id="modal" class="mui-modal">
            <div class="modal">
                <div class="top">
                    <img src="../../lib/img/icon_byz.png" style="width:0.55rem" alt="">
                    <p></p>
                </div>
                <div class="but">
                    <p @tap="clear">知道了</p>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../../static/mui/js/mui.locker";
export default {
    data() {
        return {
            from: this.$store.state.handfrom,
            to: this.$store.state.handto,
        }
    },
    methods: {
        clear: function() {
            $("#modal")[0].className = "mui-modal";
        }
    },
    mounted() {
        let that = this;
        console.log(that.from)
        console.log(that.to)

            (function($, doc) {
                $.init();
                mui('.mui-locker').locker();
                var holder = doc.querySelector('#holder'),
                    alert = doc.querySelector('#alert'),
                    record = [],
                    handpass = localStorage.handpass;
                //处理事件
                let nub = 4;
                holder.addEventListener('done', function(event) {
                    var rs = event.detail;
                    record.push(rs.points.join(''));
                    if (that.$store.state.handtime.handoff == 10) {
                        record = [];
                        that.$store.commit("hand0")
                        nub = 4;
                    }
                    if (record.length <= 5) {

                        if (record[record.length - 1] == handpass) {
                            $(".main_top span")[0].innerText = "";
                            that.$store.commit("setHandpass", record[0])
                            mui.alert('密码正确', '', function() {
                                that.$store.commit("handtime", 60)
                                record = [];
                                that.$router.push(that.to)
                            });
                        } else {
                            $("#modal")[0].className = "mui-modal mui-active";
                            if (nub == 0) {
                                $("#modal .top p")[0].innerText = "密码错误还可输入" + nub + "次";
                                that.$store.commit("handoff", 10)
                            } else {
                                $("#modal .top p")[0].innerText = "密码错误还可输入" + nub + "次";
                                nub--;
                            }
                        }
                        rs.sender.clear();
                        // record = [];
                    } else {
                        $("#modal")[0].className = "mui-modal mui-active";
                        $("#modal .top p")[0].innerText = "请在5分钟之后再尝试";
                        rs.sender.clear();
                    }
                });
            }(mui, document));
    }

}
</script>
<style scoped>
html,
body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-color: #efeff4;
}

#holder {
    width: 300px;
    height: 300px;
    margin: 50px auto;
    background-color: #fff;
}

#alert {
    text-align: center;
    padding: 20px 10px;
}

.main_top {
    padding-top: 0.35rem;
    text-align: center;
    font-size: 14px;
    color: #5871ff;
}

.main_top img {
    width: 0.24rem;
}

.mui-content {
    background-color: #fff;
}

.user_foot {
    text-align: center;
    color: #5871ff;
    font-size: 14px;
}

#modal .modal .top {
    text-align: center;
    padding-top: 0.22rem;
}

#modal .modal .top img {
    margin-bottom: 0.19rem;
}

#modal .modal .top p {
    margin-bottom: 0.34rem;
    font-size: 15px;
    color: #333;
}

#modal .modal .but {
    border-top: 1px solid #ccc;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
}

#modal .modal .but p {
    color: #5871ff;
    font-size: 14px;
}

</style>
