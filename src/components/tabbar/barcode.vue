<template>
    <div>
        <div id="bcid" style="background-color: #000000;">
            <div style="height:40%"></div>
            <p class="tip">...载入中...</p>
        </div>
        <footer>
            <div class="fbt" @tap="back">取　 消</div>
            <div class="fbt" @tap="scanPicture">从相册选择二维码</div>
        </footer>

    </div>
</template>
<script>
require("../../lib/js/h5/common");
var ws = null, wo = null;
var scan = null, domready = true;
export default {
    methods: {
        scanPicture: function() {
            plus.gallery.pick(function(path) {
                plus.barcode.scan(path, onmarked, function(error) {
                    plus.nativeUI.alert('无法识别此图片');
                });
            }, function(err) {
                console.log('Failed: ' + err.message);
            });
        },
        back: function() {
            scan.cancel();//关闭扫描
            scan.close();
            this.$router.push("/home/index")
        }

    },
    mounted() {
        let that =this;

        // H5 plus事件处理



        function plusReady() {
            if (!window.plus || !domready) {
                return;
            }

            // 获取窗口对象
            ws = plus.webview.currentWebview();
            // wo = ws.opener();

            // // 开始扫描
            // ws.addEventListener('show', function() {
            scan = new plus.barcode.Barcode('bcid');
            scan.onmarked = onmarked;

            scan.start({ conserve: true, filename: '_doc/barcode/' });
            // }, false);
            // 显示页面并关闭等待框

            ws.show('pop-in');

            // wo.evalJS('closeWaiting()');

        }
        setTimeout(function() {
            if (window.plus) {
                plusReady();
            } else {
                document.addEventListener('plusready', plusReady, false);
            }
        }, 1000)


        // 二维码扫描成功
        function onmarked(type, result, file) {
            switch (type) {
                case plus.barcode.QR:
                    type = 'QR';
                    break;
                case plus.barcode.EAN13:
                    type = 'EAN13';
                    break;
                case plus.barcode.EAN8:
                    type = 'EAN8';
                    break;
                default:
                    type = '其它' + type;
                    break;
            }
            result = result.replace(/\n/g, '');
            alert(result)
            // wo.evalJS("scaned('" + type + "','" + result + "','" + file + "');");
            
            scan.cancel();//关闭扫描
            scan.close();//关闭条码识别控件
            that.$router.push("/home/index")
        }
        // // 从相册中选择二维码图片 
        // function scanPicture(){

        // }


    }
}
function startScan() {
    if (!window.plus) { return };
    this.startRecognize()//创建控件
    scan.start();
};

function cancelScan() {
    this.isShow = true;
    scan.cancel();//关闭扫描
    scan.close();//关闭条码识别控件
}
</script>
<style scoped>
@import "../../lib/css/common.css";
#bcid {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 44px;
    text-align: center;
}

.tip {
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: 0px -1px #103E5C;
}

footer {
    width: 100%;
    height: 44px;
    position: absolute;
    bottom: 0px;
    line-height: 44px;
    text-align: center;
    color: #FFF;
}

.fbt {
    width: 50%;
    height: 100%;
    background-color: #FFCC33;
    float: left;
}

.fbt:active {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
}
</style>
