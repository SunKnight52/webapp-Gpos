<template>
    <div class="shop_entry">
        <div class="getpass_header">
            <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            商家入驻
        </div>
        <div class="loginMain">
            <form id='shopentry-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_sj.png" style="width:0.14rem" alt="">商户名</label>
                    <input type="text" placeholder="请输入商店名称">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_dianhua.png" style="width:0.14rem" alt="">电话</label>
                    <input type="text" placeholder="请输入商家电话">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
                <div class="mui-input-row">
                    <label><img src="../../lib/img/icon_dizhi.png" style="width:0.14rem" alt="">地址</label>
                    <input type="text" placeholder="请输入详细地址">
                    <div class="input_clear"><img src="../../lib/img/icon_shutdown.png" alt=""></div>
                </div>
            </form>
            <form id='shopentry-form' class="mui-input-group">
                <div class="mui-input-row" style=" margin-top: 0.1rem;">
                    <label><img src="../../lib/img/icon_huodong.png" style="width:0.15rem" alt="">活动</label>
                    <input type="text" placeholder="例:消费满100送20GPOS" disabled>
                </div>
                <div class="mui-input-row" @click="upload">
                    <label><img src="../../lib/img/icon_tupian.png" style="width:0.14rem" alt="">图片</label>
                    <!-- <div class="shop_photo">可添加3-5张店铺图片</div> -->
                    <div class="shop_photo">
                        可添加3-5张店铺图片
                    </div>
                 
                    <img src="../../lib/img/icon_jt_you.png" style="width:0.06rem"  >
                </div>
                <div class="mui-input-row" id='showUserPicker'>
                    <label><img src="../../lib/img/icon_feilei_rz.png" style="width:0.13rem" alt="">分类</label>
                    <input class="list" type="text" placeholder="请选择店铺类型" disabled>
                    
                </div>
               
            </form>
            <div class="loginon">
				<div class="loginin">确定</div>
			</div>
        </div> 
        <router-view v-on:add_shopentry="show_shopupload"></router-view>    
    </div>
</template>
<script>
import "../../lib/css/shopEntry.css"
import "../../../static/mui/js/mui.picker"
import "../../../static/mui/js/mui.poppicker"
export default {
    methods:{
        upload:function(){
            this.$router.push("/home/mySet/shopUpload");
        },
        show_shopupload:function(e){
           console.log("2");
            $(".shop_photo").text("")
            for(var i in e){
                let path =e[i].path;
                
                
                if(path.length){

                    let img="<img src="+path+">"
                $(".shop_photo").prepend(img)
                }
                
            }
        }
    },
     
    mounted() {
        $(".mui-input-row input").keyup(function() {
            $(this).next().show()
        })
        $(".mui-input-row input").focus(function() {
            if ($(this).val()) {
                $(this).next().show()
            }
        })
        $(".mui-input-row input").blur(function() {
            $(this).next().hide()
        })
        $(".input_clear").on("tap", function() {
            $(this).prev().val("")
        })
        	
				mui.init();
				mui.ready(function() {
					var _getParam = function(obj, param) {
						return obj[param] || '';
					};
					//普通示例
					var userPicker = new mui.PopPicker();
					userPicker.setData([{
						value: 'ywj',
						text: '娱乐'
					}, {
						value: 'aaa',
						text: '饮食'
					}, {
						value: 'lj',
						text: '罗辑'
					}]);
					var showUserPickerButton = document.getElementById('showUserPicker');
					var list =document.getElementsByClassName("list")[0];
					showUserPickerButton.addEventListener('click', function(event) {
						userPicker.show(function(items) {
                            // list.innerText = JSON.stringify(items[0]);
                            $(list).val(items[0].text)
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
					
				});
		



    }
}
</script>

<style scoped>
.shop_entry[data-v-74cd74c4] {
    width: 100%;
    height: 3.37rem;
}
body {
    width: 100%;
   
}
body div .loginMain .loginon {
    padding-top: 0.1rem
}

body div .loginMain form .mui-input-row input::-webkit-input-placeholder {
    color: #999;
    font-size: 14px;
}

body div .loginMain form {
    padding-left: 0;
    padding-right: 0;
}

body div .loginMain form .mui-input-row label {
    width: 32%;
    padding-left: 0.15rem;
    font-size: 14px;
    color: #333;
    margin-top: 0.075rem;
}

body div .loginMain form .mui-input-row label img {
    margin-right: 0.11rem;
}

body div .loginMain form .mui-input-row input {
    width: 68%;
    margin-top: 0.05rem;
}
body div .loginMain form .mui-input-row .shop_photo {
    width: 68%;
    font-size: 14px;
    color: #999;
    display: inline-block;
    height: 0.5rem;
    line-height: 0.5rem;
}
body div .loginMain form .mui-input-row:first-of-type {
    margin-top: 0.1rem
}

body div .loginMain form .mui-input-row:nth-of-type(3):after {
    display: none;
}

body div .loginMain form .mui-input-row {
    margin-top: 0;
    height: 0.5rem;
    position: relative;
}
body div .loginMain form .mui-input-row>img {
    position: absolute;
    right: 0.15rem;
    top:0.2rem;
}

body div .loginMain form .mui-input-row .input_clear {
    right: 0.1rem;
}

.shop_foot {
    margin-top: 0.45rem;
}

</style>
