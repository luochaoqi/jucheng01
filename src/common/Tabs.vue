<template>
    <div class="tabs">
        
        <div class="tabnav" >
            <p class="first" @click="tohome"></p>
        </div>
        <div class="tabnav" @click="toList">
            <p class="iconfont icon-caidan1 ico"></p>
            <p>演出</p>
        </div>
        <div class="tabnav" @click="tocinema" >
            <p class="iconfont icon-dingdan ico"></p>
            <p>剧院</p>
        </div>
        <div class="tabnav" @click="tomine">
            <p class="iconfont icon-wode ico"></p>
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
          tohome(){
      this.$router.push("/home")
          },
       toList(){
           this.$router.push("/list")
       },
       tocinema(){
             this.$router.push("/cinema")
       },
       tomine(){
           this.$router.push("/mine")
       }
      },
 async created(){
      
      }
}
</script>

<style>
.ico{
    padding-top: 0.05rem;
    font-size: 0.18rem;
}
.tabs {
    position: absolute;
    bottom: 0;
    height: 0.5rem;
    display: flex;
    width: 100%;

}

.tabnav {
    flex: 1;
    
    text-align: center;

}

.tabnav p {
    height: 0.25rem;
  overflow: hidden;
}

.tabnav p:nth-of-type(1) {
    width: 0.28rem;
    height: 0.28rem;
    margin: 0 auto;
     background-size: 0.2rem 0.2rem;
    
}

.tabs .tabnav .first{
    height:0.42rem;
    width: 0.42rem;
    background: url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png) no-repeat 50%;
    background-position: 0 -0.4rem;
    background-size:0.42rem 0.85rem;
}
</style>
