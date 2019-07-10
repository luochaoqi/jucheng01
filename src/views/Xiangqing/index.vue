<template>
    <div id="App">
         <div id="lcq-heander">
        <div class="area">
            <p class="show">
                演出
            </p>
            <i class="iconfont icon-fanhui"></i>
        </div>    
    </div>
    <div id="lcq-title">
        <div class="area">
            <div class="area-box">
                <ul class="lcq-title-ul">
                   <router-link :to="{name:'con',params:{id:6}}" tag="li">全部</router-link>
                   <router-link :to="{name:'con',params:{id:1}}" tag="li">演唱会</router-link>
                   <router-link :to="{name:'con',params:{id:2}}" tag="li">音乐会</router-link>
                   <router-link :to="{name:'con',params:{id:3}}" tag="li">话剧歌剧</router-link>
                   <router-link :to="{name:'con',params:{id:4}}" tag="li">儿童剧场</router-link>
                   <router-link :to="{name:'con',params:{id:5}}" tag="li">芭蕾舞蹈</router-link>
                   
                </ul>
            </div>
        
            <div class="lcq-location">
                <i class="i"></i>
                <span class="sp">深圳</span>
                <i class="iconfont icon-icon-test"></i>
            </div>
        </div>
    </div>
    <router-view></router-view>
    <!-- <Content dis="flag" /> -->
</div>
</template>

<script>

import Content from "./content";

export default {
   
  components:{
      Content
  }
}
</script>

<style >
    #lcq-heander{
    width: 100%;
    height: .38rem;
    background: #fefefe;
    border-bottom: 1px solid #ccc;
    position: relative;
    z-index:100;
}
#lcq-heander .show{
    width: .4rem;
    height: .38rem;
    text-align: center;
    line-height: .38rem;
    margin: 0 auto;
    font-size: .16rem;
    font-weight: 900;
}
#lcq-heander .icon-fanhui{
    position: absolute;
    top:.12rem;
    left: .1rem;
    font-size: .18rem;
    font-weight: 900;
}
#lcq-title{
    width: 100%;
    height: .4rem;
}
.area{
    width: 3.8rem;
    height: .4rem; 
    margin: 0 auto;
}
.area-box{
    width: 2.8rem;
    height: .4rem;
    overflow-X: hidden;
    overflow: auto;
    float: left;
}
#lcq-title .lcq-title-ul{
    width:6.3rem;
    height: .4rem;
    display: flex;
    justify-content: space-around;
}
#lcq-title .lcq-title-ul>li{
    width: .7rem;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
    font-size: .14rem;
}
#lcq-title .lcq-title-ul>li:hover{
    color: red;
}
.lcq-location{
    width: .8rem;
    height: .4rem;
    float: left;
    text-align: center;
    line-height: .4rem;
}
.lcq-location .i{
    display: inline-block;
    width: 1px;
    height: .14rem;
    background: #ccc;
    margin-right: .06rem;
}
.lcq-location .sp{
    font-size: .14rem;
}
.lcq-location>i{
    font-size: .1rem;
    margin-left: .08rem;
}
/* #lcq-conter{
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
/* }
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
}  */
/* #App{
    width: 100%;
    height: 100%;
} */
</style>
