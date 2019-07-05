<template>
    <div class="tabs">
          <div class="tabs">
        <div class="tabnav">
            <p></p>
        </div>
        <div class="tabnav">
            <p>aaa</p>
            <p>bbb</p>
        </div>
        <div class="tabnav">
            <p>aaa</p>
            <p>bbb</p>
        </div>
        <div class="tabnav">
            <p>aaa</p>
            <p>bbb</p>
        </div>

    </div>
    </div>
</template>
 
<script>
import {bottomList} from "../api/home.js"
export default {
      data(){
          return {
            list:[]
          } 
      },
 async created(){
       let a=await bottomList();
       console.log(a)
      this.list=a.data
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

}

.tabnav p:nth-of-type(1) {
    width: 0.22rem;
    height: 0.22rem;
    margin: 0 auto;
    background-size: .25rem .25rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAbFBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKgso/AAAAI3RSTlMAoJD249lr8d/OwrSUdCgiEg0Fu6t6Vk5HLevam5qLb1MwLww+CtkAAAEsSURBVEjH7dTLjoIwGIZhoJSjICAieNb3/u9xYuxiBuzfzmI2E94VyedjBEODtbW1P60Ojwgdw9puB4UjNdjspKCIhApQkwX3kARiCfSWKSUPHOWklgVCFw5hxf8Gd1Wy/T5sk6rzxntAR2P7um7HSAN7X9zFvMvLMudd3HniO/SRBkw66uHuiQvYvm40zOM4D5PXNRR+eIJyPpUweeELjPNphIsPbhSn5XZCNR64gttyu0HlgTPSdrm1KZkbH2DzadzAwYl3UH8aa9g5sPnMMvOtIja/bpm5HxGb57LMPEkRJ1DZcAWJiDWqseFGoSUcwzmwdoZYwMDTjp+AiItAqHDgQcKDjM1p87hGP7o+zPkkYnPOaWZpczLacUnWmLeAWRvzb2WUwdraL/oCOmw2A/vD0QUAAAAASUVORK5CYII=) no-repeat 50%
}
</style>
