<template>
    <div id="app" :class="[isIos ? 'xn-ios':'']">

        <div class="shar">
            <!-- 欢迎 -->
        </div>
         <transition :name="transitionName"> 
            <router-view></router-view>
         </transition> 
         
    </div>
</template>

<script>
    export default {
        
        data(){
            return {
                isIos:false,
                transitionName:'',
               
            }
        },
        create(){
           

        },
        mounted(){
            let that=this;
            this.getDevice();
            this.shows=false;
            setTimeout(function(){
               $(".shar").hide()
            },1000)
           console.log(plus.device.model)   //设备型号
           console.log(plus.os.name)       //设备名称
        },
        methods: {
            getDevice(){
                if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                    this.isIos = true;
                }
            }
           
        },
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
         
                //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
                
                if(to.meta.index > 0){
                    
                    if( to.meta.index < from.meta.index){
                    
                        this.transitionName = 'slide-right';
                    }else{
                       
                        this.transitionName = 'slide-left';
                    }
                }else if(to.meta.index == 0 && from.meta.index > 0){
                    this.transitionName = 'slide-right';
                }
            }
            
        }

    }
</script>

<style>
.shar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 80px;
    font-weight: 900;
    line-height: 100%;
    background-color: #fff;
    text-align: center;
    z-index: 9999;
}
  
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter {
        transform: translateX(-100%);
    }
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(100%);
    }
    .slide-left-leave-active {
        transform: translateX(-100%);
    }
</style>