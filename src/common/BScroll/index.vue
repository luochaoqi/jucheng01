<template>
  <div class="wrapper" ref="wrapper">

    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"BScroll",
    data(){
   return {
            data: [0,1,2,3,4,5,6],
            pulldownMsg: '下拉刷新',
            pullupMsg: '加载更多',
            alertHook: 'none'
   }
    },
    mounted(){
        
         this.$nextTick(() => {
             var that=this;
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            scrollX:true,
            tap: true,
           freeScroll:true,
         
            mouseWheel: true,
            pullDownRefresh: {
       
        threshold: 30,
     
        stop: 30
      }
        })
    this.scroll.on('pullingDown', () => {
      console.log('处理下拉刷新操作')
      setTimeout(() => {
        console.log('asfsaf')
        
        this.scroll.finishPullDown()
      }, 2000)
    })

         })
        
    },
    
    

}
</script>

<style>
.wrapper {
  height: 100%;
}
</style>

