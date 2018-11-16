// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "jquery"
import axios from "axios"
import store from "./vuex/vuex"

import "./lib/css/login.css";
import "./lib/js/base"
import "./lib/css/base.css"
import "../static/mui/css/app.css";
import VueTouch from 'vue-touch';


Vue.use(VueTouch, { name: 'v-touch' })

VueTouch.config.swipe = {

  threshold: 100, //手指左右滑动距离
  direction: 'horizontal'
}

Vue.prototype.$http = axios;

Vue.config.productionTip = false
// document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';//1rem=100px


router.afterEach(function (to) {    //确保路由跳转后每次都在顶部
  window.scrollTo(0, 0)
})
//每次进入新页面判断是否需要登录
var nub = 0;
router.beforeEach((to, from, next) => {
  // if(from.path=="/pushHandpass"){
  //   console.log(to.path)
  //   console.log(1)
  //   next()
  //   return;
  // }
  if (sessionStorage.id && to.path === '/login') {
    next('/home/index')
  } else if (!localStorage.id && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }

  // if (to.meta.handpass) {                   //路由拦截手势密码
  //      console.log(3)

  //   if (!localStorage.handpass) {
  //     mui.alert('请先设置手势密码', '', function () {
  //         store.commit("tabstate1",5)
  //      next("/home/mySet/safeCenter/handpass")
  //     });
  //     return;
  //   }    
  //   if (store.state.handtime.hand == 0) {
  //     store.commit("handto", to.path)
  //     store.commit("handfrom", from.path)
  //     console.log(10)
  //     next("/pushHandpass");
  //     return;
  //   }
  // }else{
  //   next();
  // }
 
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
