<template>
    <div class="ranking">
        <div class="getpass_header">
            <a href="#/home/index"><img src="../../../lib/img/icon_fanhui.png" alt=""> </a>
            {{name?"总量排名":"今日新增排名"}}
        </div>
        <div class="ranking_main">
            <div class="tr">
                <div>
                    <div>名次</div>
                </div>
                <div>
                    <div>昵称</div>
                </div>
                <div>
                    <div>GPOS</div>
                </div>
            </div>
            <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
                <div class="shop_list mui-scroll">

                    <table class="mui-table-view mui-table-view-chevron">

                        <tr>
                            <td>
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left">

                                </div>
                                <div class="user">
                                    1
                                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                                </div>
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
                                <div class="left"></div>
                                <div class="user">1<img src="../../../lib/img/icon_tx_jx.png" alt=""></div>
                            </td>
                            <td>用户昵称</td>
                            <td>3288</td>
                        </tr>
                        <tr>
                            <td colspan="3">.............</td>
                        </tr>

                    </table>

                </div>

            </div>
        </div>
        <div class="ranking_foot">

            <div>
                <div class="left">

                </div>
                <div class="user">
                    1
                    <img src="../../../lib/img/icon_tx_jx.png" alt="">
                </div>
            </div>
            <div>
                用户昵称
            </div>
            <div>
                3288
            </div>

        </div>
    </div>
</template>
<script>
import "../../../lib/css/ranking.css"
export default {
    data() {
        return {
            name: this.$route.params.id - 0
        }
    },
    mounted() {
        let that = this;
        for (var i = mui.hooks.inits.length - 1, item; i >= 0; i--) { //mui下拉组件跳转刷新
            item = mui.hooks.inits[i];
            if (item.name == "pullrefresh") {            
                    item.repeat = true;    
            }
        };

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
            let _this = this;
            setTimeout(function() {
                // mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
                var table = document.body.querySelector('.mui-table-view');
                var cells = document.body.querySelectorAll('.mui-table-view-cell');
                for (var i = cells.length, len = i + 4; i < len; i++) {
                    var tr = document.createElement('tr');
                    // li.className = 'mui-table-view-cell eight';
                    let a = require("../../../lib/img/icon_tx_jx.png")

                    tr.innerHTML = "<td><div class='left'></div><div class='user'>1<img src=" + a + "></div></td><td>用户昵称</td><td>3288</td>";

                    table.appendChild(tr);
                    _this.endPullupToRefresh(false);
                }
            }, 1500);

        }

    }
}
</script>
<style scoped>
#pullrefresh {
    top: 1.1rem;
}
.mui-content {
    background-color: #ffffff;
}
.mui-table-view:after, .mui-table-view:before{
    display: none;
}

</style>
