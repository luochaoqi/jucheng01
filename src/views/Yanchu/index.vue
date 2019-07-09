<template>
    <div id="App" ref="movieBody">
        <div class="box">
            <div id="lcq-header01">
                <div class="header01">
                    <div class="header01-prelude">
                        <i class="iconfont icon-fanhui"></i>
                        <p>演出详情</p>
                        <i class="iconfont icon-qq"></i>
                        <i class="iconfont icon-shouye"></i>
                    </div>
                    <div class="header01-banner">
                        <p>
                            <img src="http://image.juooo.com/group1/M00/02/34/rAoKmVyI3CWAQewVAACCNSlg3Yo045.jpg">
                        </p>
                        <div class="header01-banner-right">
                            <p>{{list.scheInfo.intro}}</p>
                            <i>{{list.scheInfo.price_interval}}</i>
                        </div>
                    </div>  
                </div>    
            </div>
            <div class="lcq-time">
                <div class="lcq-time-box">
                    <p>08/01 - 08/15</p>
                    <i>深圳|Skyland 未来科技馆</i>
                </div>
                <p>
                    <i class="iconfont icon-dingwei"></i>
                </p>
            </div>
            <div class="plus">
                <div class="plus-box">
                    <span>
                        开卡送￥100 最高可省￥22   
                    </span>
                    <i> 立即开卡></i>
                </div>
            </div>
            <div class="a"></div>
            <div class="lcq-rule">
                <p><span>入场：</span>儿童身高满70cm以上，需要购买全票</p>
                <i>支持：&nbsp;&nbsp;电子票&nbsp;&nbsp;|&nbsp;&nbsp;同城满200免邮</i>
            </div>
            <div class="a"></div>
            <div class="lcq-intro">
                <h2>演出介绍</h2>
                <ul>
                    <li>
                        <span>营业时间:</span>每周一闭馆&nbsp;（法定节假日除外）
                    </li>
                    <li>
                        周二到周五：11:00—20:00
                    </li>
                    <li>
                        周末及节假日：10:00—21:00
                    </li>
                    <li>
                        <span>活动地点：</span>&nbsp;笋岗西路深业上城CEEC七楼
                    </li>
                </ul>
            </div>
            <div class="lcq-conter">
                <ul class="conter-ul">
                    <li v-for="(item,index) in lists" :key="index">
                        <p class="p01">
                            <img :src="item.pic">
                        </p>
                        <div class="conter-li-box">
                            <span>{{item.show_time_bottom}}-{{item.show_time_top}}</span>
                            <h3>{{item.name}}</h3>
                            <i>{{item.venue_name}}</i>
                            <p>￥280 起</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {yanChu,Xunhuan} from "../../api/xiangqing.js"
export default {
 async created(){
    var a=await yanChu()
    // console.log(a.data.scheInfo.intro)
    var b=await Xunhuan()
     this.list=a.data;
     this.lists=b.data.list;
     console.log(this.lists)
    },
  data(){
        return {
            list:[],
            lists:[]
        }
    },
    mounted(){
        console.log(this.$refs.movieBody);
        this.scroll=new BScroll(this.$refs.movieBody);
    }

   
}
</script>

<style >
.box{
    height: 100%;
    width: 100%;
    overflow: auto;
}
#lcq-header01{
    width: 100%;
    height: 2.3rem;
    background:#336482;
}
/* .area01{
    width: 3.5rem;
    height: 100%;
    margin: 0 auto;
} */
.header01{
    width: 100%;
    height: 2.3rem;
    position: relative;
}
.header01-prelude{
    width: 3.5rem;
    height: .5rem;
    margin: 0 auto;
}
.header01-prelude .icon-fanhui{
    position: absolute;
    top: .14rem;
    left: .6%;
    font-size: .22rem;
    color: #fff;

}
.header01-prelude>p{
    width: .9rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    margin: 0 auto;
    font-size: .18rem;
    font-weight: 900;
    color: #fff;
}
.header01-prelude .icon-qq{
    position: absolute;
    top: .14rem;
    right:.4rem ;
    font-size: .22rem;
    color: #fff;

}
.header01-prelude .icon-shouye{
    position: absolute;
    top: .14rem;
    right:.07rem ;
    font-size: .22rem;
    color: #fff;
}
.header01-banner{
    width: 100%;
    height: 1.8rem;
    padding: .2%;
    display: flex;
    justify-content: space-around;
}
.header01-banner>p{
    width: 1.2rem;
    height: 1.6rem;
    margin: 1% 0 0 1%;
}
.header01-banner>p>img{
    width: 100%;
    height:100%;
    border-radius: .04rem;
}
.header01-banner .header01-banner-right{
    width: 2.1rem;
    height: 1.5rem;
    margin-top: 1% ;
}
.header01-banner-right>p{
    font-size: .2rem;
    color: #fff;
    font-weight: 900;
    margin:.08rem 0 .5rem 0;
}
.header01-banner-right>i{
    font-size: .18rem;
    color: #fff;
    font-weight: 900;
}
.lcq-time{
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: space-around;
}
.lcq-time-box{
    width: 2.6rem;
    height: 1.1rem;
}
.icon-dingwei{
    display: inline-block;
    width: .44rem;
    height: .44rem;
    background: #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: .44rem;
    margin-top: .2rem;
    color: crimson;
    font-size: .18rem;
}
.lcq-time-box>p{
    font-size: .16rem;
    margin: .2rem 0 .16rem 0;
    font-weight: 900;
}
.lcq-time-box>i{
    font-size: .16rem;
    font-weight: 900;
}
.plus{
    width: 100%;
    height: .6rem;
    box-sizing: border-box;
}
.plus-box{
    width: 90%;
    height: .5rem;
    margin: 0 auto;
    background: orange;
    border-radius: .06rem;
}
.plus-box>span{
    line-height: .5rem;
    font-size: .16rem;
    font-weight: 900;
    padding:0 .5rem 0 .04rem;
}
.plus-box>i{
    font-size: .16rem;
    font-weight: 900;
    line-height: .5rem;
}
.a{
    width: 100%;
    height: .16rem;
    background: #f8f5f5;
}
.lcq-rule{
    width: 100%;
    height: 1.1rem;
    box-sizing: border-box;
}
.lcq-rule>p{
    width: 100%;
    height: .62rem;
    border-bottom: 1px solid #f8f5f5;
    font-size: .14rem;
    line-height: .62rem;
    padding-left: .1rem;
}
.lcq-rule>p>span{
    padding-right: .12rem;
    color: #aaaaaa;
}
.lcq-rule>i{
    font-size: .14rem;
    line-height: .51rem;
    padding-left: .1rem;
    color: #aaaaaa;
}
.lcq-intro{
    width: 100%;
    height: 2.7rem;
    overflow: hidden;
    box-sizing: border-box;
}
.lcq-intro>h2{
    margin-top: .4rem;
    padding-left: .1rem;
}
.lcq-intro>ul{
    width: 100%;
    height: 100%;
    margin-top: .8rem;
}
.lcq-intro>ul>li{
    width: 100%;
    height: .28rem;
    line-height: .28rem;
    padding-left: .1rem;
}
.lcq-intro>ul>li>span{
    font-weight: 900;
}
#lcq-conter{
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
    margin: 0 0 .06rem .14rem;
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
    /* height: 100%; */
}
#app{
    width: 100%;
}
</style>
