<template>
    <diV id="App">
        <div id="lcq-head">
            <div class="head-box">
                <i class="iconfont  icon-fanhui"></i>
                <p>欢聚橙卡</p>
                <div class="box01">
                   <span></span>&nbsp;<span></span>&nbsp;<span></span>
                </div>
            </div>
        </div>
        <div id="zimulu">
            <div class="lcq-img">
                <img src="http://image.juooo.com/group1/M00/02/61/rAoKmVysWziAFDB-AACn7HZ4yrI996.jpg">
            </div>
            <div class="lcq-cen">
                <ul>
                    <li>
                        <img src="http://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png">
                        <div class="lcq-cen-box">
                            <!-- <h3>橙PLUS卡</h3> -->
                            <!-- <span>演唱会</span>&nbsp;<span>音乐会</span>&nbsp;<span>话剧</span>&nbsp;<span>音乐亲子</span> -->
                            <p>有效期：长期有效</p>
                            <i>￥999</i>
                        </div>
                    </li>
                    <li>
                        <img src="http://image.juooo.com/group1/M00/02/8C/rAoKNVxIboWAGoGlAACAOIdOQlc190.jpg">
                        <div class="lcq-cen-box">
                                <h3>橙PLUS卡</h3>
                                <span>演唱会</span>&nbsp;<span>音乐会</span>&nbsp;<span>话剧</span>&nbsp;<span>音乐亲子</span>
                                <p>有效期：长期有效</p>
                                <i>￥999</i>
                            </div>
                        </li>
                    <li>
                        <img src="http://image.juooo.com/group1/M00/02/57/rAoKmVyd7WWATSq_AAA4Qmv49Mc061.jpg">
                        <div class="lcq-cen-box">
                                <!-- <h3>橙PLUS卡</h3> -->
                                <!-- <span>演唱会</span>&nbsp;<span>音乐会</span>&nbsp;<span>话剧</span>&nbsp;<span>音乐亲子</span> -->
                                <p>有效期：长期有效</p>
                                <i>￥999</i>
                            </div>
                        </li>
                    <li>
                        <img src="http://image.juooo.com/group1/M00/02/8A/rAoKNVxGvceAd2_qAAAbmF9ry6Y996.jpg">
                        <div class="lcq-cen-box">
                                <h3>橙PLUS卡</h3>
                                <span>演唱会</span>&nbsp;<span>音乐会</span>&nbsp;<span>话剧</span>&nbsp;<span>音乐亲子</span>
                                <p>有效期：长期有效</p>
                                <i>￥999</i>
                            </div>
                        </li>
                    <li>
                        <img src="http://image.juooo.com/group1/M00/02/31/rAoKmVyGFYKAX0-rAAAbPd7opm0259.jpg">
                        <div class="lcq-cen-box">
                                <h3>橙PLUS卡</h3>
                                <span>演唱会</span>&nbsp;<span>音乐会</span>&nbsp;<span>话剧</span>&nbsp;<span>音乐亲子</span>
                                <p>有效期：长期有效</p>
                                <i>￥999</i>
                            </div>
                        </li>
                </ul>
            </div>
        </div>
        <div class="foor-box">
            <p>立即绑卡</p>
        </div>

    </diV>
</template>

<script>
export default {

}
</script>

<style>
    #zimulu{
    position: absolute;
    top: .6rem;
    bottom: .6rem;
    width: 100%;
    overflow: auto;
    
}
#lcq-head{
    width: 100%;
    height: .6rem;
    background: #fdfdfd;
    position: absolute;
    top: 0;
    left: 0;
   
}
.head-box{
    width: 100%;
    height: .6rem;
    position: relative;
}
.head-box>i{
    position: absolute;
    top: .1rem;
    left: 2.4%;
    font-size: .4rem;
}
.head-box>p{
    width: 1.4rem;
    height: .6rem;
    margin: 0 auto;
    text-align: center;
    line-height: .6rem;
    font-size: .18rem;
    font-weight: 900;
}
.head-box .box01{
    position: absolute;
    width: .8rem;
    height: .6rem;
    top: 0;
    right: 0;
    text-align: center;
    line-height: .6rem;
}
.head-box .box01>span{
    display:inline-block;
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 50%;
}
.lcq-img{
    width: 100%;
    height: 2.8rem;
}
.lcq-img>img{
    width: 100%;
    height: 100%;
}
.lcq-cen{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.lcq-cen>ul{
    width: 4rem;
    height: 100%;
    margin: 0 auto;
}
.lcq-cen>ul>li{
    width: 100%;
    height: 2.2rem;
    margin-top: .2rem;
    position: relative;
    /* background: #ccc; */
}
.lcq-cen>ul>li>img{
    width: 100%;
    height: 100%;
    /* opacity: .2; */

}
.lcq-cen-box{
    width: 4rem;
    height: 2.2rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: .2rem;
}
.lcq-cen-box>h3{
    font-size: .2rem;
}
.lcq-cen-box>span{
    display: inline-block;
    width: .8rem;
    height: .2rem;
    font-size: .14rem;
    background: #ccc;
    text-align: center;
    line-height: .2rem;
    margin-top: .14rem;
    color: #fff;
}
.lcq-cen-box>p{
    font-size: .14rem;
    margin: .8rem 0 .14rem 0;
    color: #000;
}
.lcq-cen-box>i{
    font-size: .14rem;
    margin-top: .18rem;
    color: #000;
}
.foor-box{
    width: 100%;
    height: .6rem;
    background: rgba(255, 255, 255, 0.95);   
    position: absolute;
    bottom: 0;
    left: 0;
}
.foor-box>p{
    width: 1.2rem;
    height: .6rem;
    margin: 0 auto;
    text-align: center;
    line-height: .6rem;
    font-size: .16rem;
    font-weight: 900;
}

</style>
