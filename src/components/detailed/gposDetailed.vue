<template>
   <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
        <div class="mui-scroll">
            <!--数据列表-->
            <ul class="mui-table-view mui-table-view-chevron">
                <li class="mui-table-view-cell ten">
                     <div class="top">
                            <span>本月(单位:GPOS)</span>
                            
                            <div id='demo6' data-options='{"type":"month"}'><img src="../../lib/img/icon_rili.png" alt=""></div>
                        </div>
                    <div name="10"  class="gpos_main">
                       <ul>
                           <li name="1">
                               <div class="left">
                                   <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                               </div>
                               <div class="left">
                                   <span>矿机净收益</span>
                                   <p>2018-7-30</p>
                               </div>
                               <div class="right">+93.0</div>
                           </li>
                           <li name="2">
                               <div class="left">
                                   <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                               </div>
                               <div class="left">
                                   <span>矿机净收益</span>
                                   <p>2018-7-30</p>
                               </div>
                               <div class="right">+93.0</div>
                           </li>
                           <li name="3">
                               <div class="left">
                                   <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                               </div>
                               <div class="left">
                                   <span>矿机净收益</span>
                                   <p>2018-7-30</p>
                               </div>
                               <div class="right">+93.0</div>
                           </li>
                       </ul>
                       
                    </div>

                </li>
                <li class="mui-table-view-cell nine">
                    <div class="top">
                            <span>九期</span>:
                            <span>2018-7-15 -- 2018-7-30</span>

                        </div>
                    <div name="9" class="gpos_main">
                        <ul>
                           <li  name="1">
                               <div class="left">
                                   <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                               </div>
                               <div class="left">
                                   <span>矿机净收益</span>
                                   <p>2018-7-30</p>
                               </div>
                               <div class="right">+93.0</div>
                           </li>
                           <li  name="2">
                               <div class="left">
                                   <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                               </div>
                               <div class="left">
                                   <span>矿机净收益</span>
                                   <p>2018-7-30</p>
                               </div>
                               <div class="right">+93.0</div>
                           </li>
                           <li name="3">
                               <div class="left">
                                   <img src="../../lib/img/icon_kjsy.png" style="width:0.47rem" alt="">
                               </div>
                               <div class="left">
                                   <span>矿机净收益</span>
                                   <p>2018-7-30</p>
                               </div>
                               <div class="right">+93.0</div>
                           </li>
                       </ul>
                        
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
import "../../lib/css/gposDetail.css"
export default {
   methods:{
      
    },

    mounted() {
        let that=this;
        //设置tab状态
        that.$store.commit("tabstate",1);
        //绑定点击事件
        
     mui('.mui-table-view').on('tap', '.gpos_main li', function () {
        let name=$(this).parent().parent().attr("name")
           let id=$(this).attr("name");
           that.$router.push("/home/detailed/gposDetailed/gposDetail/"+name+"/"+id)

     });

        for (var i = mui.hooks.inits.length - 1, item; i >= 0; i--) {
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
                // for (var i = cells.length, len = i + 1; i < len; i++) {
                //     var li = document.createElement('li');
                //     li.className = 'mui-table-view-cell eight';
                //     let a =require("../../lib/img/icon_kjsy.png")
                //     li.innerHTML = "<div class='top'><span>九期</span>:<span>2018-7-15 -- 2018-7-30</span></div><div name='8' class='gpos_main'><ul><li name='1'><div class='left'><img src="+a+" style='width:0.47rem'></div><div class='left'><span>矿机净收益</span><p>2018-7-30</p></div><div class='right'>+93.0</div></li><li name='2'><div class='left'><img src="+a+" style='width:0.47rem' ></div><div class='left'><span>矿机净收益</span><p>2018-7-30</p></div><div class='right'>+93.0</div></li><li name='3'><div class='left'><img src="+a+" style='width:0.47rem'></div><div class='left'><span>矿机净收益</span><p>2018-7-30</p></div><div class='right'>+93.0</div></li></ul></div>";
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
                for (var i = cells.length, len = i + 1; i < len; i++) {
                    var li = document.createElement('li');
                    li.className = 'mui-table-view-cell eight';
                    let a =require("../../lib/img/icon_kjsy.png")
                    li.innerHTML = "<div class='top'><span>九期</span>:<span>2018-7-15 -- 2018-7-30</span></div><div name='8' class='gpos_main'><ul><li name='1'><div class='left'><img src="+a+" style='width:0.47rem'></div><div class='left'><span>矿机净收益</span><p>2018-7-30</p></div><div class='right'>+93.0</div></li><li name='2'><div class='left'><img src="+a+" style='width:0.47rem' ></div><div class='left'><span>矿机净收益</span><p>2018-7-30</p></div><div class='right'>+93.0</div></li><li name='3'><div class='left'><img src="+a+" style='width:0.47rem'></div><div class='left'><span>矿机净收益</span><p>2018-7-30</p></div><div class='right'>+93.0</div></li></ul></div>";
                    
                    table.appendChild(li);
                    _this.endPullupToRefresh(false); 
                }
            }, 1500);
        }

        //时间
         (function($) {
				$.init();
				var result = $('#result')[0];
				var btns = $('#demo6');
				btns.each(function(i, btn) {
					btn.addEventListener('tap', function() {
						var _self = this;
						if(_self.picker) {
							_self.picker.show(function (rs) {
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
								 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
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
                                console.log(rs.text)
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
