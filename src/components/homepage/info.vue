<template>
    <div class="info">
        <div class="getpass_header">
            <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            消息
        </div>
        <div class="user_info">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" value="1" @tap="ps($event)">
                    <a href="javascript:;">
                        <img class="mui-pull-left" src="../../lib/img/icon_xiaoxi_l.png">
                        <div class="mui-media-body">
                            <p class="muihead">幸福</p>
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media" value="2" @tap="ps($event)">
                    <a href="javascript:;">
                        <img class="mui-pull-left" src="../../lib/img/icon_xiaoxi_l.png">
                        <div class="mui-media-body">
                            <p class="muihead">幸福1</p>
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media ready" value="3" @tap="ps($event)">
                    <a href="javascript:;">
                        <img class="mui-pull-left" src="../../lib/img/icon_xiaoxi_h.png">
                        <div class="mui-media-body">
                            <p class="muihead">幸福2</p>
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media ready" value="4" @tap="ps($event)">
                    <a href="javascript:;">
                        <img class="mui-pull-left" src="../../lib/img/icon_xiaoxi_h.png">
                        <div class="mui-media-body">
                            <p class="muihead">幸福3</p>
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <!--模态框  -->
        <div id="modal" class="mui-modal">
            <div class="modal">
                <header>
                    <img src="../../lib/img/icon_guanbi.png" alt="" @tap="close">
                    <span></span>
                </header>
                <div class="modal_main">
                    <p></p>
                    <div class="modal_but">
                        <button @tap="next">下一条</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pig:0
        }
    },
    methods: {
        ps: function(e) {
            $("#modal").addClass("mui-active")
            $(e.currentTarget).addClass("ready");
            this.pig= $(e.currentTarget)[0].value+1;
            $(e.currentTarget).find($(".mui-pull-left"))[0].src=require("../../lib/img/icon_xiaoxi_h.png");
            let title = $(e.currentTarget).find($(".muihead"))[0].innerText;
            let main = $(e.currentTarget).find($(".mui-ellipsis"))[0].innerText;
            $("#modal .modal span").text(title);
            $("#modal .modal p").text(main);
            
        },
        close: function() {
            $("#modal").removeClass("mui-active")
        },
        next:function() {
           let li= $(".user_info li[value="+this.pig+"]");
           if(li.length){
            $(li).addClass("ready");
            $(li).find($(".mui-pull-left"))[0].src=require("../../lib/img/icon_xiaoxi_h.png");
            let title = $(li).find($(".muihead"))[0].innerText;
            let main = $(li).find($(".mui-ellipsis"))[0].innerText;
            $("#modal .modal span").text(title);
            $("#modal .modal p").text(main);
            this.pig++;
           }else {
               mui.toast('已无更多消息');
           }
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
.user_info {
    background-color: #f3f3f3;
    padding-top: 0.08rem;
}

.mui-table-view:before {
    display: none;
}

.mui-table-view-cell:after {
    left: 0;
}

.mui-ios .mui-table-view-cell a img {
    width: 0.345rem;
    margin-top: 0.08rem;
}

.mui-ios .mui-table-view-cell a {
    padding-bottom: 0.17rem;
    padding-top: 0.17rem;
}

.mui-table-view .mui-media-body {
    padding-left: 0.2rem;
}

.mui-table-view .mui-media-body .muihead {
    font-size: 16px;
    color: #333;
}

.mui-table-view .ready .mui-media-body {
    color: #999
}

.mui-table-view .mui-media-body p {
    font-size: 12px;
    color: #999;
}

.mui-table-view .ready .mui-media-body p {
    color: #ccc
}
</style>
