<template>
    <div class="hand_pass">
        <div class="getpass_header">
            <a href="#/home/mySet/safeCenter"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            手势密码
        </div>
        <div class="user_main">
            <div class="main_top">
                <img src="../../lib/img/icon_suo.png" alt=""><br>
                <span> 为了您的账户安全,请设置手势密码</span>
            </div>
            <div class="mui-content">
                <div id='holder' class="mui-locker" data-locker-options='{"ringColor":"rgba(88,113,255,1)","fillColor":"#dedeff","pointColor":"rgba(88,113,255,1)","lineColor":"rgba(88,113,255,1)"}' data-locker-width='300' data-locker-height='300'></div>

            </div>
        </div>
        <div class="user_foot">
            下一步
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
    methods: {
        clear: function() {
            $("#modal")[0].className = "mui-modal";
        }
    },
    mounted() {
        let that = this;
        (function($, doc) {
            $.init();

            mui('.mui-locker').locker();

            var holder = doc.querySelector('#holder'),
                alert = doc.querySelector('#alert'),
                record = [],
                handpass = that.$store.state.handpass;
            if (handpass != 0) {
                $(".main_top span")[0].innerText = "请输入旧密码";
                holder.addEventListener('done', function(event) {
                    var rs = event.detail;
                    record.push(rs.points.join(''));

                    if (record[0] == handpass) {
                        $(".main_top span")[0].innerText = "请输入新密码";

                        mui.alert('密码正确,请输入新密码', '', function() {
                            record = [];
                            holder.addEventListener('done', function(event) {
                                var rs = event.detail;
                                if (rs.points.length < 4) {
                                    mui.toast('设置的密码太简单了');
                                    record = [];
                                    rs.sender.clear();
                                    return;
                                }
                                
                                record.push(rs.points.join(''));
                                if (record.length >= 2) {
                                    if (record[0] == record[1]) {
                                        $(".main_top span")[0].innerText = "手势设定完成";
                                        that.$store.commit("setHandpass", record[0])
                                        mui.alert('设置成功', '', function() {
                                            that.$router.push("/home/mySet/safeCenter")
                                        });

                                    } else {

                                        $("#modal")[0].className = "mui-modal mui-active";
                                        $("#modal .top p")[0].innerText = "两次手势设定不一致";
                                        // $(".main_top span")[0].innerText = "两次手势设定不一致"

                                    }
                                    rs.sender.clear();
                                    record = [];
                                } else {
                                    $(".main_top span")[0].innerText = '请确认手势设定';
                                    mui.toast("请确认手势设定");
                                    rs.sender.clear();
                                }
                            });
                        });

                    } else {

                        $("#modal")[0].className = "mui-modal mui-active";
                        $("#modal .top p")[0].innerText = "密码错误请再次输入";


                    }
                    rs.sender.clear();
                    record = [];

                });
            }
            //处理事件
            holder.addEventListener('done', function(event) {
                var rs = event.detail;
                if (rs.points.length < 4) {
                    mui.toast('设置的密码太简单了');
                    record = [];
                    rs.sender.clear();
                    return;
                }
                console.log(rs.points.join(''));
                record.push(rs.points.join(''));
                console.log($(".main_top span")[0].innerText)
                if (record.length >= 2) {
                    if (record[0] == record[1]) {
                        $(".main_top span")[0].innerText = "手势设定完成";
                        that.$store.commit("setHandpass", record[0])
                        mui.alert('设置成功', '', function() {
                            that.$router.push("/home/mySet/safeCenter")
                        });

                    } else {

                        $("#modal")[0].className = "mui-modal mui-active";
                        $("#modal .top p")[0].innerText = "两次手势设定不一致";
                        // $(".main_top span")[0].innerText = "两次手势设定不一致"

                    }
                    rs.sender.clear();
                    record = [];
                } else {
                    $(".main_top span")[0].innerText = '请确认手势设定';
                    mui.toast("请确认手势设定");
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
