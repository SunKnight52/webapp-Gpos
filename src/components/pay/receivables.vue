<template>
    <div class="payment">
        <div class="getpass_header">
            <a href="#/home/index"><img src="../../lib/img/icon_fanhui_b.png" alt=""> </a>
            收款
        </div>
        <div class="pay_main">
            <div class="main">
                <div class="pay_top">
                    <img src="../../lib/img/icon_sk_l.png" alt="">二维码收款
                </div>
                <div class="pay_mid">
                    <p>扫二维码向我付款</p>
                    <img src="../../lib/img/icon_ewm.png" alt="" id="receivablesimg">
                </div>
                <div class="pay_bot">
                    <p @longtap="keepimg">保存图片</p>
                </div>
            </div>
            <div class="foot">
                <div class="top">
                    <div class="left">
                        收款
                    </div>
                    <div class="right">
                        共计 :
                        <span>5GPOS</span>
                    </div>
                </div>
                <div class="bot">
                    <img src="../../lib/img/icon_tx_mr.png" alt="">
                    <div class="right">
                        <span>+5GPOS</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
            <div id="picture" class="mui-popover mui-popover-action mui-popover-bottom">
    			<ul class="mui-table-view">
    				<li class="mui-table-view-cell">
    					<a href="#">拍照或录像</a>
    				</li>
    				<li class="mui-table-view-cell">
    					<a href="#">选取现有的</a>
    				</li>
    			</ul>
    			<ul class="mui-table-view">
    				<li class="mui-table-view-cell">
    					<a href="#picture"><b>取消</b></a>
    				</li>
    			</ul>
    		</div> -->
    </div>
</template>
<script>
export default {
    methods: {
        keepimg: function() {
            var btnArray = [{ title: "保存二维码" }];
            plus.nativeUI.actionSheet({
                title: "",
                cancel: "取消",
                buttons: btnArray
            }, function(e) {
                var index = e.index;
                switch (index) {
                    case 0:

                        break;
                    case 1:
                           let picurl = $("#receivablesimg").attr("src");
                            console.log(picurl)
                            let picname = plus.io.convertAbsoluteFileSystem(picurl)
                               console.log(picname)
                plus.io.resolveLocalFileSystemURL( picurl, function( entry ) {
                    console.log(entry.file)
                    console.log(1)
                       plus.gallery.save(entry, function() {//保存到相册方法
                                        mui.toast('已保存到手机相册');
                                 }, function() {
                                        mui.toast('保存失败，请重试！');
                             });
                         plus.gallery.save(picurl, function() {//保存到相册方法
                                        mui.toast('已保存到手机相册');
                                 }, function() {
                                        mui.toast('保存失败，请重试！');
                             });

                })
                                //   console.log(picname)
                         
               
                        break;
                }

            });




        }
    }
}
</script>
<style scoped>
.payment {
    width: 100%;
    height: 100%;
    background-color: #5871ff;
}

.payment .getpass_header {
    background-color: #5871ff;
    border: 0;
    color: #fff;
}

.payment .pay_main {
    width: 100%;
    padding: 0 0.33rem;
    margin-top: 0.5rem;
    height: 4.12rem;
}

.payment .pay_main .main {
    background-color: #fff;
    border-radius: 0.05rem;
    text-align: center;
    height: 100%;
}

.payment .pay_main .main .pay_top {
    background-color: #f3f3f3;
    height: 0.55rem;
    border-radius: 0.05rem 0.05rem 0 0;
    line-height: 0.55rem;
    color: #5871ff;
}

.payment .pay_main .main .pay_top img {
    width: 0.16rem;
    margin-right: 0.07rem;
    vertical-align: middle;
}

.payment .pay_main .main .pay_mid {
    padding-top: 0.33rem;
}

.payment .pay_main .main .pay_mid p {
    font-size: 14px;
    color: #999;
    margin-bottom: 0.24rem;
}

.payment .pay_main .main .pay_mid img {
    width: 1.71rem;
}

.payment .pay_main .main .pay_bot {
    margin-top: 0.4rem;
}

.payment .pay_main .main .pay_bot p {
    color: #5871ff;
    font-size: 14px;
}

.payment .pay_main .foot {
    background-color: #fff;
    margin-top: 0.1rem;
    height: 1.06rem;
    border-radius: 0.05rem;
    ;
    padding: 0 0.3rem;
    line-height: 0.5rem;
}

.payment .pay_main .foot .top {
    height: 0.5rem;
    border-bottom: 1px #ccc solid;
    font-size: 14px;
    color: #333;
}

.payment .pay_main .foot .top .right span {
    font-weight: 550;
}

.payment .pay_main .foot .bot {
    height: 0.5rem;
    font-size: 14px;
    color: #333;
}

.payment .pay_main .foot .bot img {
    width: 0.35rem;
    vertical-align: middle;
}
</style>
