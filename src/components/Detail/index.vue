<template>
<div>
    <div id="juchengwang">
        <div id="Top">
            <div class="header">
                <span class="arrows"><i class="iconfont icon-fanhui"></i></span>
                <span class="character">演出详情</span>
                <span class="right"><i class="iconfont icon-shouye"></i></span>
            </div>
            <div class="middle">
                <div class="left">
                    <img :src="list.pic">
                </div>
                <div class="right">
                    <span>{{list.schedular_name}}</span>
                    <p>￥{{list.price_interval}}</p>
                </div>
            </div>
        </div>
        <div id="MainOne">
            <div class="left">
                <div class="L-top">
                    <span>{{list.time_interval_data.day}}</span>
                    <span>{{list.time_interval_data.hour}}</span>
                </div>
                <div class="L-bottom">
                    <p>{{list.city_name}} | {{list.venue_name}}</p>
                </div>
            </div>
            <div class="right"><i class="iconfont icon-dingwei"></i></div>
        </div>
        <div id="MainTwo">
            <div class="main">
                <span>开卡送￥100 最高可省￥80</span>
                <a href="#">立即开卡   ></a>
            </div>
        </div>
        <div id="MainThree">
            <span>入场:</span>
            <div class="details">{{list.tips}}</div>
        </div>
        <div id="MainFour">
            <div><span>支持:</span></div>
            <div><span>在线选座</span></div>
            <div><span>同城满200免邮</span></div>
        </div>
        <div id="MainFive">
            <div class="top">
                <span>巡演城市</span>
                <span>5场></span>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in siteList" :key="index">
                        <span>{{item.city_name}}</span>
                        <p>{{item.date}}</p>
                    </li>
                </ul>
            </div>
        </div>
         <div id="particulars">
            <div class="title">
                演出介绍
            </div>
            <div class="people">
                <img src="http://image.juooo.com/group1/M00/02/73/rAoKmVzBJI-AMAGgAAcbKtP4wNE870.png">
            </div>
        </div>
        <footer id="footer">
            <div class="left">
                <img src="images/service.png">
                <p>客服</p>
            </div>
            <div class="right">
                选座购买
            </div>
        </footer>
    </div>
</div>

</template>
<script>
import {DetailList, siteList} from '../../api/home.js'
export default {
    props:["id"],
    name:"detail",
    data(){
        return{
            list:[],
            siteList:[]
        }
    },
    async created(){

        

        var data = await DetailList();
        this.list = data.data.scheInfo;
         
        var siteData = await siteList();
        this.siteList = siteData.data.tourlist;
        // console.log(this.siteList)
        // console.log(this.siteList[0].city_name)
    }
}
</script>

<style>
    #juchengwang {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: auto;
    padding-bottom: 0.49rem;
}

#Top {
    width: 100%;
    height: 2.295rem;
    background: -webkit-linear-gradient(top, #5d0e66, #e45cf4, #f09dfa)
}

#Top .header {
    width: 100%;
    height: .445rem;
    text-align: center;
}

#Top .header .arrows {
    display: block;
    height: 0.445rem;
    width: 0.39rem;
    float: left;
}

#Top .header .arrows i {
    line-height: 0.445rem;
    font-size: 25px;
    color: #fff;
}

#Top .header .character {
    line-height: 0.445rem;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
}

#Top .header .right {
    display: block;
    height: 0.445rem;
    width: 0.35rem;
    float: right;
}

#Top .header .right i {
    line-height: 0.445rem;
    font-size: 25px;
    color: #fff;
}

#Top .middle {
    height: 1.65rem;
    width: 3.75rem;
    text-align: center;
    overflow: hidden;
    position: relative;
}

#Top .middle .left {
    width: 1.1rem;
    height: 1.5rem;
    float: left;
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
}
#Top .middle .left img{
    width: 1.1rem;
    height: 1.5rem;
}

#Top .middle .right {
    width: 2.2rem;
    height: 1.445rem;
    float: right;
    position: absolute;
    top: 0.21rem;
    right: 0.1rem;
}

#Top .middle .right span {
    display: block;
    width: 2.2rem;
    height: 0.88rem;
    font-size: .2rem;
    font-weight: 700;
    color: #fefefe;
}

#Top .middle .right p {
    font-size: 0.15rem;
    color: #fff;
    font-weight: 700;
    position: absolute;
    top: 1.24rem;
    left: 0.04rem;
}
#MainOne {
    width: 100%;
    height: 1.0698rem;
    position: relative;
}

#MainOne .left {
    width: 3.05rem;
    height: 0.855rem;
    margin-left: 0.1rem;
    position: relative;
    float: left;
}

.L-top {
    width: 3.05rem;
    height: 0.18rem;
    position: absolute;
    top: 0.24rem;
    left: 0;
}

.L-top span {
    color: #000;
    font-weight: 700;
    font-size: 0.19rem;
}

.L-top span:nth-of-type(2) {
    font-size: 0.14rem;
    margin-left: 0.04rem;
}

.L-bottom {
    width: 2.48rem;
    height: 0.22rem;
    position: absolute;
    top: 0.6rem;
    left: 0;
}

.L-bottom p {
    color: #000;
    font-size: 0.16rem;
    font-weight: 700;
    line-height: 0.22rem;
}

#MainOne .right {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #ededed;
    float: right;
    position: absolute;
    top: .3rem;
    right: .24rem;
}

#MainOne .right i {
    position: absolute;
    font-size: 0.3rem;
    top: 0.03rem;
    right: 0.05rem;
    color: #ff6942;
    font-weight: 700;
}
#MainTwo {
    width: 100%;
    height: 0.45rem;
    background: #fff;
}

#MainTwo .main {
    width: 3.45rem;
    height: 0.45rem;
    margin-left: 0.14rem;
    background: #ff6643;
    border-radius: 0.1rem;
    overflow: hidden;
    position: relative;
}

#MainTwo .main span {
    display: block;
    width: 2.51rem;
    height: 0.2rem;
    margin-top: 0.12rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
    color: #fff;
}

#MainTwo .main a {
    display: block;
    position: absolute;
    top: 0.16rem;
    right: 0.16rem;
    color: #fff;
    font-size: 0.13rem;
    font-weight: 700;
}
#MainThree {
    width: 100%;
    height: 0.54rem;
    background: #fff;
    border-top: solid #f5f5f5 0.1rem;
    border-bottom: solid #f5f5f5 0.01rem;
    line-height: 0.54rem;
}

#MainThree span {
    float: left;
    font-size: 0.14rem;
    color: #999999;
    margin-left: 0.16rem;
}

#MainThree .details {
    width: 2.98rem;
    height: 0.25rem;
    margin-top: 15px;
    float: right;
    line-height: 0.25rem;
    font-weight: 700;
    margin-right: 0.08rem;
}
#MainFour {
    width: 100%;
    height: 0.54rem;
    border-bottom: solid #f5f5f5 0.1rem;
    line-height: 0.54rem;
    position: relative;
}
#MainFour>div{
    float: left;
}
#MainFour>div:nth-of-type(1){
    position: absolute;
    top: 0;
    left:0.46rem;
}
#MainFour>div:nth-of-type(2){
    position: absolute;
    top: 0;
    left:.98rem;
}
#MainFour>div:nth-of-type(3){
    position: absolute;
    top: 0;
    left:1.62rem;
}
#MainFour span {
    padding-right: 10px;
}

#MainFour span:nth-of-type(1) {
    margin-left: -0.27rem;
}
#MainFive {
    height: 1.8rem;
    border-bottom: solid #c0c0c0 0.2rem;
}

#MainFive .top {
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
}

#MainFive .top span:nth-of-type(1) {
    float: left;
    font-size: 0.2rem;
    color: black;
    font-weight: 700;
    margin-left: 10px;
}

#MainFive .top span:nth-of-type(2) {
    float: right;
    font-size: 0.1rem;
    color: #ff9177;
    font-weight: 700;
    margin-right: 10px;
}

#MainFive .bottom {
    width: 3.75rem;
    height: 1.1rem;
}

#MainFive .bottom ul {
    height: 1.1rem;
    justify-content: space-around;
    overflow: auto;
    white-space: nowrap;
}

#MainFive .bottom ul li {
    width: .9rem;
    height: 0.62rem;
    border: solid #efefef 1px;
    margin-left: 0.1rem;
    display: inline-block;
    position: relative;
}

#MainFive .bottom ul li span {
    font-size: 0.24rem;
    color: #000;
    font-weight: 700;
    position: absolute;
    top: 0.14rem;
    left: 0.18rem;
}

#MainFive .bottom ul li p {
    font-size: 10px;
    color: #ccc;
    position: absolute;
    top: 0.42rem;
    left: 0.3rem;
}
#particulars {
    width: 100%;
    height: 3rem;
    overflow: hidden;
}

#particulars .title {
    width: 3.45rem;
    height: 0.19rem;
    margin-top: .16rem;
    margin-left: .14rem;
    font-size: .18rem;
    color: #000;
    font-weight: 700;
}

#particulars .people {
    width: 3.45rem;
    height: 2.3rem;
    margin-top: .16rem;
    margin-left: .14rem;
}

#particulars .people img {
    display: block;
    width: 3.45rem;
    height: 2.3rem;
}

#footer {
    width: 100%;
    height: 0.49rem;
    background: #ff8a39;
    position: fixed;
    bottom: 0;
    left: 0;
}

#footer .left {
    width: 0.51rem;
    height: 0.49rem;
    background: #fff;
    float: left;
    position: relative;
}

#footer .left img {
    width: 0.19rem;
    height: 0.19rem;
    position: absolute;
    top: 0.1rem;
    left: 0.16rem;
}

#footer .left p {
    font-size: 0.12rem;
    position: absolute;
    top: 0.32rem;
    left: 0.12rem;
    font-weight: 700;
}

#footer .right {
    text-align: center;
    line-height: 0.49rem;
    font-size: 0.2rem;
    color: #fff;
    font-weight: 700;
}
</style>

