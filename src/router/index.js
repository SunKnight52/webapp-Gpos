import Vue from 'vue'
import Router from 'vue-router'
//主页和注册
import home from "../components/home.vue"
import login from '../components/user/login.vue'
import pushHandpass from '../components/user/pushHandpass.vue'

import runfor from '../components/tabbar/runfor.vue'
import runforStart from '../components/tabbar/runfor/runforStart.vue'
import wealth from '../components/tabbar/wealth.vue'
import index from '../components/tabbar/index.vue';       //首页
import payment from '../components/pay/payment.vue'
import paymentEnd from '../components/pay/paymentEnd.vue'
import receivables from '../components/pay/receivables.vue';   //收款
import barcode from '../components//tabbar/barcode.vue';   //二维码扫描
import unbuyList from '../components//tabbar/unbuyList.vue';   //未购名额
import profit from '../components//tabbar/profit.vue';   //收益

import ranking from '../components/tabbar/ranking/ranking.vue'  //排名

import miner from '../components/pay/miner.vue'
import shop from '../components/tabbar/shop.vue';       //商城
import shopDetail from '../components/tabbar/shop/shopDetail.vue';

import register from "../components/user/register.vue"
import mySet from "../components/tabbar/mySet.vue"
import getpassword from "../components/user/getpassword.vue"
//个人主页
import aboutUs from "../components/homepage/aboutUs.vue"
import safeCenter from "../components/homepage/safeCenter.vue"
import shopEntry from "../components/homepage/shopEntry.vue"
import shopUpload from "../components/homepage/shopUpload.vue"
import getImage from "../components/homepage/getImage.vue"
import systemSet from "../components/homepage/systemSet.vue"
import share from "../components/homepage/share.vue"

//设置密码
import setBuypass from "../components/homepage/setBuypass.vue"
import setLoginpass from "../components/homepage/setLoginpass.vue"
import reviseBuypass from "../components/homepage/reviseBuypass.vue"
import handPass from "../components/homepage/handPass.vue"

//意见反馈
import feedBack from "../components/homepage/feedBack.vue"
//用户信息
import userInfo from "../components/homepage/userInfo.vue"
import info from "../components/homepage/info.vue"
//明细
import detailed from "../components/detailed/index.vue"
import runforDetailed from "../components/detailed/runforDetailed.vue"
import runforDetail from "../components/detailed/runforDetail.vue"
import runforHistory from "../components/detailed/runforHistory.vue"
import runforOff from "../components/detailed/runforOff.vue"

import payDetailed from "../components/detailed/payDetailed.vue"
import payDetail from "../components/detailed/payDetail.vue"

import gposDetailed from "../components/detailed/gposDetailed.vue"
import gposDetail from "../components/detailed/gposDetail.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',component: home,meta: {title: '首页选项卡',index: 1},
      children: [{path: '/home/runfor',component: runfor,meta: {
          title: '竞选',
          index: 2.1
        },
      }, {
        path: '/home/index',
        component: index,
         meta: {
          title: '首页',
          index: 2
        },
      },
      {
        path: '/home/wealth',
        component: wealth,
         meta: {
          title: '财富',
          index: 2.2,
          handpass:1
        },
      },
      {
        path: '/home/shop',
        component: shop,
         meta: {
          title: '商城',
          index: 2.3,
        
        },
      },
      {
        path: '/home/mySet',
        component: mySet,
         meta: {
          title: '我的',
          index: 2.4
        }
      }
      ]
    },
     {
      path: "/pushHandpass",
      component: pushHandpass,
         meta: {
          title: '登录手势密码',
          index: 0
        }
    }, {
      path: "/",
      redirect: "/login",
         meta: {
          title: '登录',
          index: 0
        }
    }, {
      path: "/login",
      component: login,
         meta: {
          title: '登录',
          index: 0
        }
    },
      
    {
      path: "/register",
      component: register,
         meta: {
          title: '注册',
          index: 1
        }
    }, {
      path: "/getpassword",
      component: getpassword,
         meta: {
          title: '获取密码',
          index: 1
        }
    },
    {
      path: "/home/mySet/aboutUs",
      component: aboutUs,
         meta: {
          title: '关于我们',
          index: 3,
        }
    },
    {
      path: "/home/mySet/safeCenter",            
      component: safeCenter,
         meta: {
          title: '安全中心',
          index: 3
        }
    }, {
      path: "/home/mySet/safeCenter/setBuypass",
      component: setBuypass,
         meta: {
          title: '设置交易密码',
          index: 4, 
          handpass:1
        }
        
    }, {
      path: "/home/mySet/safeCenter/setLoginpass",
      component: setLoginpass,
         meta: {
          title: '设置登录密码',
          index: 4
        }
    }, {
      path: "/home/mySet/safeCenter/reviseBuypass",
      component: reviseBuypass,
         meta: {
          title: '忘记交易密码',
          index: 4
        }
    }, {
      path: "/home/mySet/safeCenter/handPass",
      component: handPass,
         meta: {
          title: '设置登录密码',
          index: 4
        }
    },
    {
      path: "/home/mySet/shopEntry",
      component: shopEntry,
         meta: {
          title: '商家入驻',
          index: 3
        },
      //  meta: { keepAlive: true },       
      children: [{

        path: "/home/mySet/shopUpload",
        component: shopUpload,
         meta: {
          title: '商家上传照片',
          index: 4
        }

      }]
    }, {
      path: "/home/mySet/userInfo",
      component: userInfo,
         meta: {
          title: '用户信息',
          index: 3
        }
    }, {
      path: "/home/mySet/info",
      component: info,
         meta: {
          title: '消息',
          index: 3
        }
    },
    {
      path: "/home/mySet/systemSet",      
      component: systemSet,
         meta: {
          title: '系统设置',
          index: 3
        }
    },
    {
      path: "/home/mySet/systemSet/feedBack",
      component: feedBack,
         meta: {
          title: '意见反馈',
          index: 4
        }
    },
    {
      path: "/home/detailed",                               
      component: detailed,
         meta: {
          title: '明细',
          index: 3,
        },
      children: [
        {

          path: "/home/detailed/runforDetailed",
          component: runforDetailed,
         meta: {
          title: '竞选明细',
          index: 4.2,
         
        }
        },
        {

          path: "/home/detailed/payDetailed",
          component: payDetailed,
         meta: {
          title: '收付账单',
          index: 4.3
        }
        },
        {

          path: "/home/detailed/gposDetailed",
          component: gposDetailed,
         meta: {
          title: '矿机账单',
          index: 4.1,
           handpass:1
        }
        }
      ]
    },
    {
      path: "/home/detailed/runforDetailed/runforDetail/:id",        
      component: runforDetail,
         meta: {
          title: '竞选明细',
          index: 5
        }
    },
    {
      path: "/home/detailed/runforDetailed/runforHistory/:id/:ID",
      component: runforHistory,
         meta: {
          title: '竞选历史',
          index: 5
        }
    },
    {
      path: "/home/detailed/runforDetailed/runforOff/:id/",
      component: runforOff,
         meta: {
          title: '未竞选上',
          index: 5
        }
    },
    {
      path: "/home/detailed/gposDetailed/gposDetail/:id/:ID",
      component: gposDetail,
         meta: {
          title: '矿机明细',
          index: 5
        }
    },
    {
      path: "/home/detailed/payDetailed/payDetail/:id",
      component: payDetail,
         meta: {
          title: '收付明细',
          index: 5
        }
    },
    {
      path: "/home/runfor/runforStart",               
      component: runforStart,
         meta: {
          title: '参与竞选',
          index: 3
        }
    },
    {
      path: "/home/index/payment",                
      component: payment,
         meta: {
          title: '付款',
          index: 3
        }
    },
    {
      path: "/home/index/paymentEnd",
      component: paymentEnd,
         meta: {
          title: '付款完成',
          index: 4
        }
    },
    {
      path: "/home/index/receivables",             
      component: receivables,
         meta: {
          title: '收款',
          index: 3
        }
    },
    {
      path: "/home/index/barcode",               
      component: barcode,
         meta: {
          title: '扫描二维码',
          index: 3
        }
    },
    {
      path: "/home/index/miner",                
      component: miner,
         meta: {
          title: '矿机',
          index: 3
        }
    },
    {
      path: "/home/index/unbuyList",                
      component: unbuyList,
         meta: {
          title: '未购名单',
          index: 3
        }
    },
    {
      path: "/home/index/profit/:id",                
      component: profit,
         meta: {
          title: '收益',
          index: 3
        }
    },
    {
      path: "/home/index/ranking/:id",               
      component: ranking,
         meta: {
          title: '排名',
          index: 3
        }
    },
    {
      path: "/home/shop/shopDetail/:id",                 
      component: shopDetail,
         meta: {
          title: '商城详情',
          index: 3
        }
    },
     {
      path: "/home/mySet/getImage",                 
      component: getImage,
         meta: {
          title: '拍照',
          index: 3
        }
    }, 
      {
      path: "/home/mySet/share",                 
      component: share,
         meta: {
          title: '分享',
          index: 3
        }
    }, 
  ]
})
