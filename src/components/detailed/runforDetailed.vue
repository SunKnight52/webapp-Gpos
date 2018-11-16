<template>
    <!--下拉刷新容器-->
    <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
        <div class="mui-scroll">
            <!--数据列表-->
            <ul class="mui-table-view mui-table-view-chevron">
                <li class="mui-table-view-cell ten">
                    <div class="top">
                        <span>十期</span>:
                        <span>2018-7-15 -- 2018-7-30</span>
                        <div id='demo6' data-options='{"type":"month"}'><img src="../../lib/img/icon_rili.png" alt=""></div>
                        <!-- <img src="../../lib/img/icon_rili.png" alt=""> -->
                    </div>
                    <div name="10" class="mui-navigate-right">

                        <div class="foot">
                            <div class="user_left">
                                一等奖
                            </div>
                            <div class="user_right">
                                <p>总收益 :
                                    <span>150GPOS</span>
                                </p>
                                <p>实时到账 :
                                    <span>30GPOS</span>
                                </p>
                                <p>已释放 :
                                    <span>100GPOS</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </li>
                <li class="mui-table-view-cell nine">
                    <div class="top">
                        <span>九期</span>:
                        <span>2018-7-15 -- 2018-7-30</span>

                    </div>
                    <div name="9" class="mui-navigate-right">

                        <div class="foot">
                            <div class="user_left">
                                一等奖
                            </div>
                            <div class="user_right">
                                <p>总收益 :
                                    <span>150GPOS</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="mui-table-view-cell eight">
                    <div class="top">
                        <span>八期</span>:
                        <span>2018-7-15 -- 2018-7-30</span>

                    </div>
                    <div name="8" class="mui-navigate-right off">

                        <div class="foot">
                            <div class="user_left">
                                <img src="../../lib/img/icon_wxs_h.png" style="width:0.7rem" alt="">
                            </div>
                            <div class="user_right">
                                <p>
                                    未竞选上
                                </p>

                            </div>
                        </div>
                    </div>
                </li>

            </ul>

        </div>
        <div class="mui-content">
            <div class="mui-content-padded">
                <div id='result' class="ui-alert"></div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../../static/mui/js/mui.picker.min.js";

export default {
    methods: {
        //   psg:function(e){
        //     let name=$(e.currentTarget).attr("name");
        //     this.$router.push("/home/detailed/runforDetailed/runforDetail/"+name)
        //   }  
    },

    mounted() {
        
       let that = this;
        //设置tab状态
        that.$store.commit("tabstate",2);
        //绑定点击事件
        mui('.mui-table-view').on('tap', '.mui-navigate-right', function() {
            let name = $(this).attr("name");
            if ($(this).hasClass("off")) {     //根据是否拥有class  off 来判断路由去向
                that.$router.push("/home/detailed/runforDetailed/runforOff/" + name);
            } else {
                that.$router.push("/home/detailed/runforDetailed/runforDetail/" + name);
            }


        });




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
                    callback: pullupRefresh
                }
            }
        });
        /**
         * 下拉刷新具体业务实现
         */
        function pulldownRefresh() {
            setTimeout(function() {
                // var table = document.body.querySelector('.mui-table-view');
                // var cells = document.body.querySelectorAll('.mui-table-view-cell');
                // for (var i = cells.length, len = i + 3; i < len; i++) {
                //     var li = document.createElement('li');
                //     li.className = 'mui-table-view-cell eight';
                //     let a =require("../../lib/img/icon_wxs_h.png")
                //     li.innerHTML = ' <div class="top"><span>八期</span>:<span>2018-7-15 -- 2018-7-30</span></div><a class="mui-navigate-right"><div class="foot"><div class="user_left"><img src='+a+' +style="width:0.7rem" alt=""></div><div class="user_right"><p>未竞选上</p></div></div> </a>';
                //     //下拉刷新，新纪录插到最前面；
                //     table.insertBefore(li, table.firstChild);
                // }
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
                for (var i = cells.length, len = i + 5; i < len; i++) {
                    var li = document.createElement('li');
                    li.className = 'mui-table-view-cell eight';
                    let a = require("../../lib/img/icon_wxs_h.png")
                    li.innerHTML = '<div class="top"><span>八期</span>:<span>2018-7-15 -- 2018-7-30</span></div><a name="8" class="mui-navigate-right off"> <div class="foot"><div class="user_left"><img src=' + a + ' +style="width:0.7rem" alt=""></div><div class="user_right"><p>未竞选上</p></div></div> </a>';

                    table.appendChild(li);
                    _this.endPullupToRefresh(false); 
                }
            }, 1500);
        }


        //时间日期
        (function($) {
            $.init();
            var result = $('#result')[0];
            var btns = $('#demo6');
            btns.each(function(i, btn) {
                btn.addEventListener('tap', function() {
                    var _self = this;
                    if (_self.picker) {
                        _self.picker.show(function(rs) {
                            result.innerText = '选择结果: ' + rs.text;
                            _self.picker.dispose();
                            _self.picker = null;
                        });
                    } else {
                        var optionsJson = this.getAttribute('data-options') || '{}';
                        var options = JSON.parse(optionsJson);
                        var id = this.getAttribute('id');
                        /*
                         * 首次显示时实例化组件
                         * 示例为了简洁，将 options 放在了按钮的 dom 上
                         * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
                         */
                        _self.picker = new $.DtPicker(options);
                        _self.picker.show(function(rs) {
                            /*
                             * rs.value 拼合后的 value
                             * rs.text 拼合后的 text
                             * rs.y 年，可以通过 rs.y.value 和 rs.y.text 获取值和文本
                             * rs.m 月，用法同年
                             * rs.d 日，用法同年
                             * rs.h 时，用法同年
                             * rs.i 分（minutes 的第二个字母），用法同年
                             */
                            // result.innerText = '选择结果: ' + rs.text;
                            /* 
                             * 返回 false 可以阻止选择框的关闭
                             * return false;
                             */
                            /*
                             * 释放组件资源，释放后将将不能再操作组件
                             * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
                             * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
                             * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
                             */
                            _self.picker.dispose();
                            _self.picker = null;
                            that.$router.push("/home/detailed/runforDetailed/runforHistory/" + rs.y.value + "/" + rs.m.value)
                        });
                    }

                }, false);
            });
        })(mui);
    }

}
</script>
<style scoped>

</style>
