<template>
    <div id="App">
        <Loading v-if="loadFlag"></Loading>
            <div id="lcq-conter" >
        <div class="area-lcq" ref="movieBody">
            <div class="conter-box">
                <router-link to="/yanchu">
                <ul class="conter-ul">
                    <li v-for="(item,index) in list" :key="index" >
                        <p class="p01" >
                            <img :src="item.pic">
                        </p>
                        <div class="conter-li-box">
                            <span>{{item.show_time_top}}</span>
                            <h4>{{item.name}}</h4>
                            <i>{{item.venue_name}}</i>
                            <p>{{item.max_price}}</p>
                        </div>
                    </li>
                </ul> 
                </router-link>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {threList ,musicList,songList,allList,childList,baleiList,} from "../../../api/xiangqing.js"
// import BScroll from "better-scroll";
export default {
 props:["id"],
    data(){
        return {
            list:[],
            loadFlag:true
        }
    },
    mounted(){
        console.log(this.$refs.movieBody);
        this.scroll=new BScroll(this.$refs.movieBody);
    },
 async  created(){
        var a=await allList()
        if(a){
          this.list=a.data.list;
          this.loadFlag=false;
        }
        
       

       this.$nextTick(() => {
       let wrapper = document.querySelector('.area-lcq')
       let scroll = new BScroll(wrapper, {});
    })




   },
 watch:{
      async  id(newval){
          this.loadFlag=true;
          console.log(newval)
          let b=""
          switch(Number(newval)){
              case 1 : 
              b=await songList();
              this.list=b.data.list;
               this.loadFlag=false;
              break;

               case 2 : 
              b=await musicList();
              this.list=b.data.list;
                this.loadFlag=false;
              break;
               case 3 : 
              b=await threList();
              this.list=b.data.list;
                this.loadFlag=false;
              break;
               case 4 : 
              b=await childList();
              this.list=b.data.list;
              this.loadFlag=false;
              break;
              case 5:
              b=await baleiList();
              this.list=b.data.list;
              this.loadFlag=false;
              break;
              default :
              b=await allList();
              this.list=b.data.list;
              this.loadFlag=false;
              break;
          }
           
          
       }
   }
}
</script>

<style >
    #lcq-conter{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .area-lcq{
        width: 3.8rem;
        height: 100%; 
        margin: 0 auto;
    }
    .conter-box{
        width: 100%;
       
    }
    .conter-ul{
        width: 100%;
        height:100%;
        overflow: auto;
    }
    .conter-ul>li{
        width: 3.8rem;
        height: 1.5rem;
    }
    .conter-ul>li .p01{
        width: 1rem;
        height: 1.4rem;
        margin: 0 0 .06rem .2rem;
        float: left;
    }
    .conter-ul>li .p01 img{
        width: 100%;
        height: 100%;
    }
    .conter-li-box{
        width: 2rem;
        height: 1.4rem;
        float: left;
        margin-left: .2rem;
        padding-top: .08rem;
    }
    .conter-li-box>span{
        font-size: .14rem;
    }
    .conter-li-box>h4{
        margin: .1rem 0 .1rem 0;
        font-size: .14rem;
    }
    .conter-li-box>i{
        font-size: .14rem;
        color: #919191;
    }
    .conter-li-box>p{
        font-size: .14rem;
        margin-top: .08rem;
        color:red;
        margin-top: .14rem;
    }
    #App{
    width: 100%;
    height: 100%;
    }
    #app{
        height: 100%;
    }
</style>
