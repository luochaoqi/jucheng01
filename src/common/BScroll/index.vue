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
           
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:1
        });  
    }
}
</script>

<style>
    .wrapper{
        height:100%;
    }
 
</style>

