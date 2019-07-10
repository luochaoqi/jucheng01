<template>
<div class="home">
  <Loading v-if="loadFlag"></Loading>
    <div class="nav_wrap">
      <div class="nav">
        <div class="local fla">
          <span @click="toZimulu">全国</span>
        </div>
        <div class="inpu fla">
          <span>搜索热门演出</span>
        </div>
        <div class="imge fla">
          <a href>
            <img
              src="http://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png"
              alt
            />
          </a>
        </div>
      </div>
    </div>
   
    <div class="box_wrap">
      <div class="scroll_inside">
      <div class="box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in slidelist" :key="index">
              <img :src="item.touch_image_url" alt />
            </div>
          </div>
        </div>
      </div>

      <div class="sec">
        <div class="classify">
          <div class="item">
             <router-link to="/list" v-for="(items,index) in clasifylist" :key="index">
              <img :src="items.pic" alt />
              <br />
              <span>{{items.name}}</span>
            </router-link>
          </div>
        </div>
        <div class="opa">
          <div class="opera">
            <div class="ver"></div>
            
            <a href >
              <div class="detail" >
                <p >橙卡PLUS</p>
                <p>
                  限时送
                  <span>100元</span>
                </p>
              </div>
              <div class="pic">
                <img
                  src="http://image.juooo.com/group1/M00/03/0D/rAoKNVyuly2Abyo9AAAFqTMeVeI867.png"
                  alt
                />
              </div>
            </a>
          </div>
          <div class="opera">
            <div class="ver"></div>
            <a href>
              <div class="detail">
                <p>橙卡PLUS</p>
                <p>
                  限时送
                  <span>100元</span>
                </p>
              </div>
              <div class="pic">
                <img
                  src="http://image.juooo.com/group1/M00/03/0D/rAoKNVyuly2Abyo9AAAFqTMeVeI867.png"
                  alt
                />
              </div>
            </a>
          </div>
        </div>
        <div class="opc"></div>
        <div class="opb">
          <li>
            <div class="ver"></div>
            <a href>
              <p>聚特惠</p>
              <p>优惠不止一点点</p>
              <img
                src="http://image.juooo.com/group1/M00/03/0D/rAoKNVyumIiAMpqmAAAGebZ70tk573.png"
                alt
              />
            </a>
          </li>
          <li>
            <div class="ver"></div>
            <a href>
              <p>聚特惠</p>
              <p>优惠不止一点点</p>
              <img
                src="http://image.juooo.com/group1/M00/03/0D/rAoKNVyumIiAMpqmAAAGebZ70tk573.png"
                alt
              />
            </a>
          </li>
          <li>
            <div class="ver"></div>
            <a href >
              <p>聚特惠</p>
              <p>优惠不止一点点</p>
              <img
                src="http://image.juooo.com/group1/M00/03/0D/rAoKNVyumIiAMpqmAAAGebZ70tk573.png"
                alt
              />
            </a>
          </li>
        </div>
      </div>

      <div class="hot">
        <div class="hot_title">
          <span>热门演出</span>
        </div>
        <div class="hot_contet">
          <div class="hot_item" v-for="(item,index) in htolist" :key="index">
            <a href>
              <img :src="item.pic" alt />
              <h2>{{item.show_name}}</h2>
            </a>
          </div>
        </div>
      </div>

      <div class="floorshow">
        <div class="sing" v-for="(item,index) in yanchang" :key="index">
          <p>{{item.title}}</p>
          <div class="bg">
            <div class="left">
              <img :src="item.list[0].pic" alt />
              <span>555</span>
            </div>
            <div class="right">
              <p>{{item.list[0].date}}</p>
              <h3>{{item.list[0].schedular_name}}</h3>
              <p>{{item.list[0].venue_name}}</p>
            </div>
          </div>
          <div class="flow">
            <div class="flowitem_wrap">
              <div class="flow_item" v-for="(items,index) in item.list" :key="index">
                <a href>
                  <div class="flow_img">
                    <img :src="items.pic" alt="">
                  </div>
                  <h3>{{items.schedular_name}}</h3>
                  <p>{{items.low_price}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    </div>
  </div>


</template>

<script>
import BScroll from 'better-scroll'
import {
  slideList,
  bottomList,
  hotList,
  floorList,
  yanChang
} from "../../../api/home.js";

export default{
    methods:{
        toZimulu(){
            this.$router.push("/zimulu")
        }
    },
data() {
    return {
      slidelist: [],
      clasifylist: [],
      htolist: [],
      floorlist: [],
      mySwiper: "",
      yanchang: [],
      loadFlag:true
    };
  },
  async created() {    
    let a = await slideList();
    let b = await bottomList();
    let c = await hotList();
    let d = await floorList();
    let e = await yanChang();
    if(a&&b&&c&&d&&e){

    this.slidelist = a.data.silde_list;
    this.clasifylist = b.data.classify_list;
    this.htolist = c.data.hots_show_list;
    this.floorlist = d.data.tour_show_list;
    this.yanchang = e.data;
    this.loadFlag=false;
    }
    
    this.$nextTick(() => {
       this.mySwiper = new Swiper(".swiper-container", {
      autoplay: 2000, //可选选项，自动滑动
      loop: true
    })
      })
    
     this.$nextTick(() => {
       let wrapper = document.querySelector('')
       let scroll = new BScroll(wrapper, {});
    })
     
  },
   mounted(){

    
    


   }
}

</script>


<style>
.home{

}

.nav_wrap {
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
}
.scroll_inside{
  overflow:hidden;

}
.nav {
  height: 0.44rem;
  display: flex;
  background: rgba(0, 0, 0, 0);
  padding: 0 0.12rem;

  align-items: center;
}

.fla {
  margin: 0 0.02rem;
}

.local {
  width: 0.6rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  background: rgba(0, 0, 0, 0.6);
  line-height: 0.3rem;
  text-align: center;
  color: #fefefe;
  font-size: 0.15rem;
  font-weight: 700;
  flex: 2;
}

.inpu {
  flex: 5;
  height: 0.3rem;
}

.inpu span {
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 0.16rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.12rem;
}

.imge {
  flex: 1;
  height: 0.25rem;
}

.imge a {
  width: 100%;
  height: 100%;
}

.imge img {
  width: 0.27rem;
  height: 100%;
}

/* ------------------------------- */

.box_wrap {
  position: absolute;
  top: 0.44rem;
  bottom: 0.5rem;

  width: 100%;
  overflow: auto;
}

.box {
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 2;
}

.box,
.swiper-container {
  width: 100%;
}

.swiper-wrapper {
  width: 100%;
}

.swiper-wrapper img {
  width: 100%;
  height: 2rem;
}

/* ---------section---------------- */
.sec {
  position: absolute;
  top: 2rem;
  box-sizing: border-box;
  padding: 0 0.15rem;
  width: 100%;
  background: #fefefe;
}

.classify {
  width: 100%;
}

.classify .item {
  display: flex;
  height: 0.78rem;
}

.classify .item a {
  display: inline-block;
  height: 100%;
  flex: 1;
}

.item img {
  width: 0.51rem;
  height: 0.51rem;
  margin: 0 auto;
}

.classify .item {
  text-align: center;
}

/* ---------------opa------------ */

.opera {
  height: 0.8rem;
  background: #fefefe;

  width: 1.87rem;
  justify-content: space-around;
  text-align: center;
}

.opera .detail {
  width: 0.7rem;
  float: left;
}

.opa {
  background: #f5f5f5;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.05rem;
}

.opera {
}

.opera .pic {
  float: left;
  width: 0.45rem;
  height: 0.45rem;
}

.opera a {
  display: inline-block;
  vertical-align: middle;

  text-align: center;
}

.detail p:nth-of-type(1) {
  font-size: 0.15rem;
}

.detail p:nth-of-type(2) {
  font-size: 0.11rem;
}

.pic img {
  width: 100%;
  height: 100%;
}

.opc {
  width: 100%;
  height: 0.03rem;
  background: #fefefe;
}

.opb {
  display: flex;
  background: #f5f5f5;
  justify-content: space-between;
}

.opb li {
  width: 1.25rem;

  text-align: center;
  height: 1.11rem;
  background: #fefefe;
}

.opb li a {
  display: inline-block;
  width: 1.06rem;
  vertical-align: middle;
}

.opb li a img {
  width: 0.45rem;
  height: 0.45rem;
  margin: 0 auto;
}

.ver {
  width: 0;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
/* --------------------hot------------------------------------------ */
.hot {
  padding: 0.2rem 0 0.35rem 0.15rem;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 5rem;
  width: 100%;
}
.hot_title {
  height: 0.23rem;
}
.hot_title span {
  display: inline-block;
  font-size: 0.2rem;
  font-weight: 700;
  color: #232323;

  height: 0.61333rem;
  line-height: 0.2rem;
}
.hot_contet {
  overflow: auto;
  white-space: nowrap;
}
.hot_item {
  width: 1.07rem;
  margin-right: 0.08rem;
  display: inline-block;
}
.hot_item > a {
  display: block;
}
.hot_item > a img {
  width: 1.07rem;
  height: 1.46rem;
}
.hot_item > a h2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* -------------------------------- */
.floorshow {
  position: absolute;
  width: 100%;
  top: 7.5rem;
  padding: 0 0 0.4rem;
}

.sing {
  width: 100%;
  padding-bottom: 0.4rem;
}
.sing>p{
  height: 0.24rem;
  font-size: 0.2rem;
  font-weight: 700;
    color: #232323;
  padding-left: .15rem;
   
    line-height: .24rem;
}
.sing .bg {
  height: 1.76rem;
  padding: 0.14rem 0 0.14rem 0.15rem;
  background: rgb(100, 90, 78);
}
.bg .right {
  float: left;
  width: 2.36rem;
  height: 1.48rem;
  margin-left: 0.15rem;
}
.bg .right p:nth-of-type(1) {
  height: 0.24rem;
  font-size: 0.24rem;
  font-weight: 700;
 
}
.bg .right p:nth-of-type(2) {
  overflow: hidden;
  height: 0.24rem;
  font-size: 0.12rem;
  margin-top: 0.18rem;
 
}
.bg .right h3 {
  height: 0.44rem;
  margin: 0.17rem 0;
  font-size: 0.17rem;
}
.bg .left {
  width: 1.07rem;
  height: 1.46rem;
  float: left;
}
.flow {
  width: 100%;
}
.flowitem_wrap{
 white-space: nowrap;
 overflow: auto;
 padding-left: 0.15rem;
 
}
.flow_img{
  width: 100%;
  height: 1.46rem;
}

.flow_img img{
  width: 100%;
  height: 100%;
}
.flow_item {
  width: 1.07rem;
  height: 2.06rem;
  display: inline-block;
   margin-right: 0.13rem;
}
.flow_item h3{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0.14rem 0

}
.bg .left img {
  width: 100%;
  height: 100%;
}
.sing .flow {
  height: 2.21rem;
}


</style>