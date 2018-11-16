<template>
    <div class="usertap">
        <div class="user_header">
            <img src="../../lib/img/beijing_wd.png" alt="">
            <div>
                <router-link to="/home/mySet/userInfo">
                    <img src="../../lib/img/icon_touxiang.png" alt="">
                </router-link>
                <div>张三丰</div>
            </div>
            <router-link to="/home/mySet/info">
                <img src="../../lib/img/icon_xiaoxi.png" alt="">
            </router-link>
        </div>
        <div class="user_main">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/shopEntry">
                        <img src="../../lib/img/icon_shangjia.png" alt=""> 商家入驻
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/safeCenter">
                        <img src="../../lib/img/icon_anquan.png" alt=""> 安全中心
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/systemSet">
                        <img src="../../lib/img/icon_shezhi.png" alt=""> 系统设置
                    </a>
                </li>
            </ul>

            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/share">
                        <img src="../../lib/img/icon_fenxiang.png" alt=""> 分享好友
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/getImage">
                        <img src="../../lib/img/icon_kefu.png" alt=""> 客服中心
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#/home/mySet/aboutUs">
                        <img src="../../lib/img/icon_gywomen.png" alt=""> 关于我们
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import "../../lib/css/mySet.css";
export default {
    mounted(){
        let that =this;
        that.$store.commit("tabstate1",5)
        that.$store.commit("shopOut")
    }
}
</script>
<style>

</style>
