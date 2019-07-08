<template>
    <div id="App">
            <div id="lcq-conter">
        <div class="area-lcq">
            <div class="conter-box">
                <ul class="conter-ul">
                    <li v-for="(item,index) in list" :key="index" >
                        <p class="p01" >
                            <img :src="item.pic">
                            <span>{{dis}}</span>
                        </p>
                        <div class="conter-li-box">
                            <span>{{item.show_time_top}}</span>
                            <h3>{{item.name}}</h3>
                            <i>{{item.venue_name}}</i>
                            <p>{{item.max_price}}</p>
                        </div>
                    </li>
                
                </ul> 
            </div>
        </div>
    </div>

    </div>
</template>

<script>
import {showList ,disList} from "../../../api/xiangqing.js"
export default {
    props:["dis"],
    data(){
        return {
            list:[]
        }
    },
 async  created(){
        var a=await showList()
        console.log(a)
        this.list=a.data.list
        console.log(this.list)
   },
   updated(){
         var b= disList()
        this.list=b.data.list;  
          }
}
</script>

<style>
    #lcq-conter{
        width: 100%;
        height: 100%;
    }
    .area-lcq{
        width: 3.8rem;
        height: 100%; 
        margin: 0 auto;
    }

    .conter-box{
        width: 100%;
        height: 100%;
    }
    .conter-ul{
        width: 100%;
        height:100%;
    
        overflow: auto;
    }
    .conter-ul>li{
        width: 3.8rem;
        height: 1.5rem;
        /* border-bottom: 1px solid #ccc; */
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
    .conter-li-box>h3{
        margin: .1rem 0 .1rem 0;
        font-size: .16rem;
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
