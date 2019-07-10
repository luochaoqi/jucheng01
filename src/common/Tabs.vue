<template>
    <div class="tabs">
        
        <div class="tabnav" >
            <p class="first"></p>
        </div>
        <div class="tabnav" @click="toList">
            <p></p>
            <p>影院</p>
        </div>
        <div class="tabnav" @click="tocinema" >
            <p></p>
            <p>票夹</p>
        </div>
        <div class="tabnav">
            <p></p>
            <p>我的</p>
        </div>

   
    </div>
</template>
 
<script>
import {bottomList} from "../api/home.js"
export default {
      data(){
          return {
            list:[
                
            ]
          } 
      },
      methods:{
       toList(){
           this.$router.push("/list")
       },
       tocinema(){
             this.$router.push("/cinema")
       }
      },
 async created(){
      
      }
}
</script>

<style>
.tabs {
    position: absolute;
    bottom: 0;
    height: 0.5rem;
    display: flex;
    width: 100%;

}

.tabnav {
    flex: 1;
    border: 1px solid red;
    text-align: center;

}

.tabnav p {
    height: 0.25rem;
  overflow: hidden;
}

.tabnav p:nth-of-type(1) {
   margin-top: 0.02rem;
    height: 0.28rem;
    margin: 0 auto;
  background-size:  0.42rem 0.85rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAbFBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKgso/AAAAI3RSTlMAoJD249lr8d/OwrSUdCgiEg0Fu6t6Vk5HLevam5qLb1MwLww+CtkAAAEsSURBVEjH7dTLjoIwGIZhoJSjICAieNb3/u9xYuxiBuzfzmI2E94VyedjBEODtbW1P60Ojwgdw9puB4UjNdjspKCIhApQkwX3kARiCfSWKSUPHOWklgVCFw5hxf8Gd1Wy/T5sk6rzxntAR2P7um7HSAN7X9zFvMvLMudd3HniO/SRBkw66uHuiQvYvm40zOM4D5PXNRR+eIJyPpUweeELjPNphIsPbhSn5XZCNR64gttyu0HlgTPSdrm1KZkbH2DzadzAwYl3UH8aa9g5sPnMMvOtIja/bpm5HxGb57LMPEkRJ1DZcAWJiDWqseFGoSUcwzmwdoZYwMDTjp+AiItAqHDgQcKDjM1p87hGP7o+zPkkYnPOaWZpczLacUnWmLeAWRvzb2WUwdraL/oCOmw2A/vD0QUAAAAASUVORK5CYII=) no-repeat center
}
.tabs .tabnav .first{
    height:0.42rem;
    width: 0.42rem;
    background: url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png) no-repeat 50%;
    background-position: 0 -0.4rem;
    background-size:0.42rem 0.85rem;
}
</style>
