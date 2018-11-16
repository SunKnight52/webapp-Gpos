<template>
    <div class="profit">
        <div class="getpass_header">
            <a href="#/home/index"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            {{profit?"今日收益":"总收益"}}
        </div>
        <div class="profit_main">
            <div class="profit_head">
                <div class="top">
                    <p>{{profit?"今日收益":"总收益"}}
                        <span>(2018-08-05)</span>
                    </p>
                    <span>+100.00</span>
                </div>
                <div class="but">
                    <div>
                        矿机
                        <span>+2.32</span>
                    </div>
                    <div>
                        竞选
                        <span>+25.62</span>
                    </div>
                </div>
            </div>
            <div class="profit_foot mui-">

                <div class="tabber">
                    <div id="segmentedControl" class="mui-segmented-control">
                        <a class="mui-control-item mui-active" href="#item1">图</a><a class="mui-control-item" href="#item2">表</a>
                    </div>
                </div>
                <div class="tabber_con">
                    <img src="../../lib/img/icon_xiala.png" alt="">
                    <div>
                        <div id="item1" class="mui-control-content mui-active">

                            <div class="chart" id="lineChart"></div>
                        </div>
                        <div id="item2" class="mui-control-content ">
                            <table>
                                <tr>
                                    <th>日期</th>
                                    <th>矿机</th>
                                    <th>竞选</th>
                                    <th>合计</th>
                                </tr>
                                <tr>
                                    <td>2018-08-01</td>
                                    <td>10.23</td>
                                    <td>100.23</td>
                                    <td>100.03</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>

import "../../../static/mui/libs/echarts-all.js"
export default {
    data() {
        return {
            profit: this.$route.params.id - 0,
        }
    },
    methods: {
        // chart: function() {
        //     window.location.reload();
        // }
    },
    mounted() {
      var getOption = function(chartType) {
				var chartOption = {
					grid: {
						x: 35,
						x2: 10,
						y: 30,
						y2: 25
					},
					toolbox: {
						show: false,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: false,
					xAxis: [{
						type: 'category',
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
					}],
					yAxis: [{
						type: 'value',
						splitArea: {
							show: true
						}
					}],
					series: [{
						name: '收益',
						type: chartType,
						data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
					}]
				};
				return chartOption;
			};
			var byId = function(id) {
				return document.getElementById(id);
			};
			// var barChart = echarts.init(byId('barChart'));
			// barChart.setOption(getOption('bar'));
			var lineChart = echarts.init(byId('lineChart'));
			lineChart.setOption(getOption('line'));
			// var pieChart = echarts.init(byId('pieChart'));
			// pieChart.setOption(getOption('pie'));
			// byId("echarts").addEventListener('tap',function(){
			// 	var url = this.getAttribute('data-url');
			// 	plus.runtime.openURL(url);
			// },false);

    }
}
</script>
<style scoped>
#segmentedControl .mui-active {
    color: #5871ff;
}

.mui-segmented-control .mui-control-item {
    border: 0;
}

.mui-segmented-control {
    border: 0;
}

.chart {
    height: 200px;
    margin: 0px;
    padding: 0px;
}
.profit {
  width: 100%;
}
.profit .profit_main .profit_head {
  padding-top: 0.79rem;
  text-align: center;
}
.profit .profit_main .profit_head .top {
  margin-bottom: 0.4rem;
}
.profit .profit_main .profit_head .top p {
  font-size: 14px;
  color: #666;
  margin-bottom: 0.15rem;
}
.profit .profit_main .profit_head .top > span {
  color: #5871ff;
  font-size: 40px;
  font-weight: 700;
}
.profit .profit_main .profit_head .but {
  display: flex;
  margin-bottom: 0.55rem;
}
.profit .profit_main .profit_head .but > div {
  flex: 1;
  font-size: 14px;
  color: #333;
}
.profit .profit_main .profit_head .but > div > span {
  color: #5871ff;
  margin-left: 0.03rem;
}
.profit .profit_main .profit_foot .tabber {
  text-align: center;
}
.profit .profit_main .profit_foot .tabber > div {
  display: inline-block;
  overflow: hidden;
  border-radius: 3px;
}
.profit .profit_main .profit_foot .tabber > div > a {
  width: 0.775rem;
  height: 0.39rem;
  font-size: 14px;
  background-color: #f3f3f3;
  display: inline-block;
  line-height: 0.39rem;
  color: #666;
  position: relative;
}
.profit .profit_main .profit_foot .tabber > div a:first-of-type::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 0.2rem;
  background-color: #ccc;
  right: 0;
  top: 0.1rem;
}
.profit .profit_main .profit_foot .tabber_con {
  text-align: right;
}
.profit .profit_main .profit_foot .tabber_con > img {
  width: 0.08rem;
  margin: 0.29rem 0.15rem 0.36rem 0;
}
.profit .profit_main .profit_foot .tabber_con #item2 {
  padding: 0 0.15rem;
}
.profit .profit_main .profit_foot .tabber_con #item2 table {
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #333;
  line-height: 0.29rem;
}
.profit .profit_main .profit_foot .tabber_con #item2 table th {
  background-color: #f3f3f3;
  width: 25%;
  border: 1px #fff solid;
  height: 0.29rem;
}
.profit .profit_main .profit_foot .tabber_con #item2 table td {
  background-color: #f3f3f3;
  border: 1px #fff solid;
  height: 0.29rem;
}

</style>
