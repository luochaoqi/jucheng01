<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"BScroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
        })
    }
}
</script>

<style>
    .wrapper{
        height:100%;
    }
</style>

