<template>
    <div class="messageBox_Container">
        <div class="messageBox_title">{{title}}</div>
        <div class="messageBox_content">{{content}}</div>
        <div class="messageBox_btn" @click="handle()">{{btn}}</div>
    </div>
</template>
<script>
export default {
    name:'messageBox'
}
</script>

<style scoped>
    .messageBox_Container{
        width: 3rem;
        height: 1rem;
        background: #fff;
        position: absolute;
        left: 0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
        z-index:100;
        display: flex;
        flex-direction:column;
        align-items: center;
    }

    .messageBox_Container>div{
        width: 100%;
        height: 32%;
        text-align: center;
        line-height:0.33rem; 
        font-size:.2rem;
    }
    .messageBox_Container>div:nth-child(1){
        font-weight: 900;
    }
    .messageBox_Container>div:nth-child(3){
        border-top:1px solid #ccc;
        color:#26a2ff;
    }
</style>