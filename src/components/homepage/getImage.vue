<template>
    <div class="shop_upload">

        <div class="getpass_header">
            <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            添加图片
        </div>
        <div class="upload_mai">
            <ul id="files">

                <li class='photo'><img src="../../lib/img/icon_xiangji.png" alt="/"></li>
            </ul>
        </div>
        <div class="loginMain">
            <div class="loginon">
                <div class="loginin" @tap="add_shopentry">确定</div>
            </div>
        </div>

    </div>
</template>
<script>
require("../../lib/js/h5/common");
require("../../lib/js/h5/immersed");
import "../../lib/css/shopUpload.css";

export default {
    data() {
        return {
            files: []
        }
    },
    methods: {
        galleryImgs() {
            let that = this;
            //  outSet('从相册中选择多张图片：');
            plus.gallery.pick(function(e) {
                that.files = [];
                let fe = document.getElementById("files");
                let b = require("../../lib/img/icon_xiangji.png")
                fe.innerHTML = "<li class='photo'><img src=" + b + "></li>";

                for (var i in e.files) {
                    // outLine(e.files[i]);

                    that.appendFile(e.files[i], i);

                }
            }, function(e) {
                // outSet('取消选择图片');
            }, { filter: 'image', multiple: true, system: false, maximum: 5 });
        },
        appendByCamera: function() {
            let that = this;
            plus.camera.getCamera().captureImage(function(p) {
                console.log(p)
                        //p为本地路径
                 plus.gallery.save(p, function() {//保存到相册方法
                                        mui.toast('已保存到手机相册');
                                    }, function() {
                                        mui.toast('保存失败，请重试！');
                                    });

                plus.io.resolveLocalFileSystemURL(p, function(entry) {
                    that.appendFile(entry.toLocalURL()); 
                }, function(e) {
                   
                });
            });
        },
        appendFile: function(e, i) {
            let that = this;
            var fe = document.getElementById("files");
            var li = document.createElement("li");
            // var n = p.substr(p.lastIndexOf('/') + 1);
            // li.innerText = n;

            let a = require("../../lib/img/icon_cha.png");

            li.innerHTML = "<img src=" + e + "><img src=" + a + "  class='clos'>";
            $(fe).prepend(li);

            // that.files.push({ name: i, path: e });
        },

        add_shopentry: function() {
            console.log(this.files)
            this.$store.commit("shopPhoto", this.files)
            this.$router.push("/home/mySet");
        }
    },


    mounted() {
        let that = this;
        let shop = this.$store.state.shop_photo;
        console.log(shop)
        if (shop.length) {
            for (var i in shop) {
                that.files = [];
                that.appendFile(shop[i].path, i);
            }
        }

        // function showImg(url) {
        //     // 兼容以"file:"开头的情况
        //     if (0 != url.indexOf('file://')) {
        //         url = 'file://' + url;
        //     }
        //     var _body_ = document.body;
        //     var _div_ = document.createElement('div');
        //     _div_.style.top = '0px';
        //     _div_.style.left = '0px';
        //     _div_.style.height = '100%';
        //     _div_.style.width = '100%';
        //     _div_.style.zIndex = '99999';
        //     _div_.style.position = 'fixed';
        //     _div_.style.background = '#ffffff';
        //     _div_.id = 'imgShow';
        //     _div_.onclick = closeImg;
        //     var _img_ = document.createElement('img');
        //     _img_.src = url;
        //     _img_.style.width = '100%';
        //     _body_.appendChild(_div_);
        //     _div_.appendChild(_img_);
        // }


        $("#files").on("tap", ".clos", function() {

            let fil = $(this).parent().attr("name");
            $(this).parent().remove();
            that.files.splice(that.files[fil], 1)
        })
        $("#files").on("tap", ".photo", function() {
            that.appendByCamera()

        })
        // function appendFile(p) {
        //     var index = 1; var files = [];
        //     var fe = document.getElementById("files");
        //     var li = document.createElement("li");
        //     // var n = p.substr(p.lastIndexOf('/') + 1);
        //     // li.innerText = n;
        //     li.innerHTML = "<li><img src=" + p + "><img src='../../lib/img/icon_cha.png' class='clos'></li>"
        //     fe.appendChild(li);
        //     files.push({ name: "uploadkey" + index, path: p });
        //     index++;
        // }

        // function galleryImgs() {
        //     // 从相册中选择图片

        // }


    }
}
// 拍照添加文件
// function appendByCamera() {
//     plus.camera.getCamera().captureImage(function(p) {
//         appendFile(p);
//     });
// }
// 从相册添加文件
// function appendByGallery() {
//     plus.gallery.pick(function(p) {
//         appendFile(p);
//     });
// }
// 添加文件


</script>
<style scoped >
@import "../../lib/css/common.css";
.shop_upload {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 99;
}

body div .upload_mai ul {
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 0.11rem;
}

body div .upload_mai ul li:last-of-type {
    width: 1.1rem;
    height: 1.1rem;
    text-align: center;
    margin-left: 0.12rem;
    margin-bottom: 0.12rem;
    border: 2px #5871ff dashed;
    line-height: 1.1rem;

    text-align: center;
    border-radius: 10px;
}

body div .upload_mai ul li:last-of-type img {
    width: 0.38rem;
    height: 0.325rem;
    vertical-align: middle;
}

body div .loginMain .loginon .loginin {
    background-size: 3.385rem;
    line-height: 0.86rem;
    margin-left: -0.13rem;
    margin-bottom: -0.1rem
}
</style>
