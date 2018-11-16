import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        stall:false,   //更多选项
        buypass:false,   //设置交易密码
        balsee:true,         //余额可见
        wealth:true,            //财富可见
        tabsta:{               //选项卡状态
              index:1  ,         //index首页
              detail:1        //detail明细
        },
        shop_photo:[],          //店铺上传图片
        handpass:0,             //手势密码
        handto:"",              //手势密码去向
        handfrom:"",            //手势密码来源
        handtime:{               //手势密码倒计时
            hand:0,
            handoff:0
        }            
    },
    mutations :{
        ps:function(){
            let a=!this.state.stall
            this.state.stall=a
        },
        setBuypass:function(){           //设置交易密码
            this.state.buypass=true;
        },
        balanceout :function(){            //余额不可见
            let a =!this.state.balsee;
            this.state.balsee=a;
        },
        wealthout:function(){               //财富不可见
             let a =!this.state.wealth;
            this.state.wealth=a;
        },
        tabstate:function(state,a){               //明细选项卡状态
            this.state.tabsta.detail=a;     
        },
        tabstate1:function(state,a){
            this.state.tabsta.index=a;             //首页选项卡状态
        },
        shopPhoto:function(state,a){
            this.state.shop_photo=a;               //店铺图片添加
        },
        shopOut:function(){
            this.state.shop_photo=[];               //店铺图片清空
        },
        setHandpass:function(state,a){              //设置手势密码;
            this.state.handpass=a;
            localStorage.handpass=a;
        },
        handto:function(state,a){              //设置手势密码to;
            this.state.handto=a;
        },
        handfrom:function(state,a){              //设置手势密码from;
            this.state.handfrom=a;
        },
        handtime:function(state,a){
            let that=this ;
            that.state.handtime.hand=a;             //手势倒计时;
            let b =setInterval(function(){
                a--;
                that.state.handtime.hand=a;
                if(a==0){
                    clearInterval(b)
                }
            },1000)
        },
         handoff:function(state,a){
            let that=this ;             //手势失败倒计时;
            let b =setInterval(function(){
                that.state.handtime.handoff++;
                if(a==that.state.handtime.handoff){
                    clearInterval(b)
                }
            },1000)
        },
        hand0:function(){
            this.state.handtime.handoff=0;
        }
    },
    action :{
        
    }
})
export default store;
