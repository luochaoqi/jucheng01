<template>
<div class="Rec">
    <div class="header">
        <a href="#">
            <span class="iconfont icon-fanhui"></span>
        </a>
        <div class="content">
            南山文体中心
        </div>
        <a href="#">
            <span>...</span>
        </a>
    </div>
    <div class="container">
        <a class="banner" href="#">
            <img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg">
        </a>
        <div class="moudle">
            <ul>
                <li>
                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-show.png">
                    <p>演出</p>
                </li>
                <li>
                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-calendar.png">
                    <p>日历</p>
                </li>
                <li>
                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-theater.png">
                    <p>剧院</p>
                </li>
                <li>
                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-offer.png">
                    <p>特惠</p>
                </li>
            </ul>
        </div>
        <div class="Main">
            <div class="title">
                <h2>热门演出</h2>
            </div>
            <a class="stroke" href="#" v-for="(item,index) in list" :key="index">
                <img :src="item.pic">
                <div class="particulars">
                    <p class="music">{{item.schedular_name}}</p>
                    <p class="show-time">
                        <span class="day">{{item.show_time}}</span>
                    </p>
                    <p class="show-add">
                        <span class="add">南山文体中心</span>
                    </p>
                    <p class="price">
                        <span>￥</span>
                        <span>{{item.min_price}}</span>
                        <span>起</span>
                    </p>
                </div>
            </a>
        </div>

    </div>
</div>
</template>

<script>
import {recreationList} from "../../api/home.js"
export default {
    name:"recreation",
    data(){
        return{
            list:[]
        }
    },
    async created(){
        var data = await recreationList();
        
        this.list = data.datas;
        console.log(this.list)
    }
}
</script>

<style>
.Rec{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
}
    .header {
    width: 100%;
    height: 0.44rem;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
}

.header a:nth-of-type(1) {
    display: block;
    width: 0.6rem;
    height: 0.3rem;
    float: left;
    margin-top: 0.08rem;
}

.header a span {
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.19rem;
    margin-left: 0.05rem;
}

.header .content {
    width: 2.22rem;
    height: 0.225rem;
    font-weight: 700;
    float: left;
    text-align: center;
    line-height: 0.225rem;
    margin-top: 0.1rem;
    margin-left: 0.16rem;
    font-size: 0.16rem;
}

.header a:nth-of-type(2) {
    display: block;
    float: right;
    width: 0.6rem;
    height: 0.44rem;
    text-align: center;
}

.header a:nth-of-type(2) span {
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.16rem;
}
.container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 0.44rem;
}

.banner {
    width: 3.75rem;
    height: 1.55rem;
}

.banner img {
    width: 3.75rem;
    height: 1.55rem;
}

.moudle {
    width: 3.5rem;
    height: 0.88rem;
    background: white;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
}

.moudle ul {
    width: 3.5rem;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.moudle ul li img {
    width: 0.42rem;
    height: 0.42rem;
    margin-top: 0.12rem;
}

.moudle ul li p {
    font-size: 0.12rem;
    color: #000;
    margin-top: 0.05rem;
}

.Main {
    width: 100%;
}

.Main .title {
    width: 3.75rem;
    height: 0.385rem;
    background: white;
}

.Main .title h2 {
    line-height: 0.385rem;
    font-size: 0.16rem;
    font-weight: bold;
    margin-left: 0.16rem;
    overflow: hidden;
}

.Main .stroke {
    display: block;
    width: 3.5rem;
    height: 1.4rem;
    background: white;
    margin-left: 0.13rem;
    overflow: hidden;
    margin-top: 10px;
    border-bottom: 0.01rem solid #ccc;
}

.Main .stroke img {
    width: 0.89rem;
    height: 1.19rem;
    margin-top: 0.1rem;
    float: left;
}

.Main .stroke .particulars {
    width: 2.245rem;
    height: 1.175rem;
    background: white;
    margin-top: 0.1rem;
    float: right;
}

.Main .stroke .particulars .music {
    width: 2.245rem;
    height: 0.4rem;
    background: white;
    font-size: 0.13rem;
    color: black;
}

.Main .stroke .particulars .show-time {
    width: 2.245rem;
    height: 0.175rem;
    background: white;
    margin-top: 0.14rem;
}

.Main .stroke .particulars .show-time .day {
    color: #ccc;
}

.Main .stroke .particulars .show-add {
    width: 2.245rem;
    height: 0.175rem;
}

.Main .stroke .particulars .show-add .add {
    color: #ccc;
}

.Main .stroke .particulars .price {
    width: 2.245rem;
    height: 0.175rem;
    position: relative;
    margin-top: 0.05rem;
}

.Main .stroke .particulars .price span {
    color: gold;
}

.Main .stroke .particulars .price span:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0.02rem;
}

.Main .stroke .particulars .price span:nth-of-type(2) {
    position: absolute;
    top: 0;
    left: 0.16rem;
    font-size: 0.14rem;
}

.Main .stroke .particulars .price span:nth-of-type(3) {
    position: absolute;
    top: 0;
    left: 0.4rem;
}
</style>
