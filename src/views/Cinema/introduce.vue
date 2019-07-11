<template>
    <div class="Intro">
         <div class="scroll-top">
        <div class="roof">
            <div class="head">
                <i class="iconfont icon-fanhui" @click="ReturnClick()"></i>
                <div class="center">
                    剧院详情
                </div>
            </div>
            <div class="banner">
                <img src="https://image.juooo.com///group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg">
            </div>
        </div>
        <div class="title">
            <h3>南山文体中心</h3>
        </div>
        <div class="address">
            <span>
                        广东省深圳市南山区南山大道和南头街交汇处
            </span>
            <a href="#">
                <i class="iconfont icon-icon-test"></i>
            </a>
        </div>
        <div class="phone">
            <span>
                        400-185-8666
            </span>
            <a href="#">
                <i class="iconfont icon-dianhua"></i>
            </a>
        </div>
        <div class="referral">
            <h3>剧院介绍</h3>
        </div>
        <div class="content">
            <p>深圳南山区文体中心剧院总建筑面积为2.38万平方米；包括一个</p>
            <p>1325座的大剧院和一个356座的小剧场。</p>
            <p>深圳南山文体中心2014年秋季开放，2015年一年共演出357场，成</p>
            <p>为中国剧院新概念的旗舰；2016年以570场演出的骄人成绩，成为中国</p>
            <p>剧院综合活力15强之一；2017年演出更是达到了近700场</p>
            <p>大量高品质演出和活动的举办，使得深圳南山区文体中心剧院成为</p>
            <p>业界的标杆，得到政府、社会的高度认可。</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"intro",
    methods:{
        ReturnClick(){
            this.$router.back();
        }
    }

}
</script>

<style scoped>
.Intro{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 10;
}
.scroll-top {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.roof {
    width: 100%;
    height: 1.96rem;
    background: -webkit-linear-gradient(top, #1c74b8, #38ade3, #70c3ea)
}

.roof .head {
    width: 100%;
    height: 0.44rem;
    position: relative;
}

.roof .head i {
    position: absolute;
    top: 8px;
    left: 20px;
    font-size: 26px;
    color: white;
}

.roof .head .center {
    text-align: center;
    line-height: 0.44rem;
    font-size: 24px;
    color: white;
}

.roof .banner {
    width: 1.09rem;
    height: 1.09rem;
}

.roof .banner img {
    width: 1.09rem;
    height: 1.09rem;
    margin-top: 24px;
    margin-left: 132px;
}

.title {
    width: 100%;
    height: 0.225rem;
    background: white;
    text-align: center;
    line-height: 0.225rem;
    font-size: 17px;
    margin-top: 10px;
}

.address {
    width: 100%;
    height: 0.44rem;
    background: white;
    line-height: 0.44rem;
    margin-top: 20px;
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
}

.address>span {
    float: left;
    margin-left: 10px;
    font-size: 12px;
    color: #6b6b6b;
}

.address>a {
    display: block;
    width: 10px;
    height: 10px;
    float: right;
    margin-right: 30px;
}

.address>a>i {
    font-size: 18px;
}

.phone {
    width: 100%;
    height: 0.44rem;
    background: white;
    line-height: 0.44rem;
    border-bottom: 6px solid #f6f6f6;
    position: relative;
}

.phone>span {
    position: absolute;
    left: 13px;
    font-size: 14px;
    color: #6b6b6b;
}

.phone>a {
    display: block;
    position: absolute;
    right: 23px;
}

.phone>a>i {
    font-size: 18px;
}

.referral {
    width: 100%;
    height: 0.56rem;
    background: white;
    text-align: center;
    line-height: 0.56rem;
    font-size: 16px;
}

.content {
    width: 3.45rem;
    background: white;
    margin-left: 14px;
}

.content>p {
    width: 100%;
    height: 0.5rem;
    font-size: 14px;
    color: #838383;
}
</style>
