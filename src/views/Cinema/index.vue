<template>
  <div>
    <div id="header">
      <h3>剧院</h3>
    </div>
    <Loading v-if="loadingFlag" />
     <div class="scroll">
    <BScroll>
      <template>
        <div id="content" @click="toDudetail">
          <div class="ModuleOne" v-for="(item,index) in list" :key="index" >
            <div class="top">
              <img class="Img" :src="item.pic" />
              <div class="main">
                <p>{{item.name}}</p>
                <p>{{item.count}}场在售演出</p>
              </div>
              <a href="#">
                <img src="images/dot.png" />
              </a>
            </div>
            <div class="bottom">
              <div class="swiper" v-for="(item,index) in item.show_list" :key="index">
                <p>{{item.show_time}}</p>
                <img :src="item.pic" />
              </div>
            </div>
          </div>
       
      </div>
      </template>
    </BScroll>
     </div>
  </div>
</template>
<script>
import { TheaterList } from "../../api/home.js";
import BScroll from "better-scroll";
export default {
  name: "cinema",
  data() {
    return {
      list: [],
      loadingFlag: true
    };
  },
  async created() {
    let data = await TheaterList();
    if (data) {
      this.loadingFlag = false;
    } else {
      this.loadingFlag = true;
    }
    this.list = data.data.theatre_list;
  },
  // mounted() {
  //   this.scroll = new BScroll(this.$refs.cinemaBody)
  // }
  
  methods:{
    toDudetail(){
      console.log("aaaaa")
      this.$router.push("/detail")
    }
  }
};
</script>

<style>
#header {
  width: 3.75rem;
  height: 0.43rem;
  background: white;
  border-bottom: 1px solid #dad8d8;
}

#header h3 {
  font-size: 0.25rem;
  color: #000;
  font-weight: 700;
  line-height: 0.43rem;
  text-align: center;
}
.scroll {
  width: 100%;
  position: fixed;
  overflow-y: auto;
  top: 0.43rem;
  bottom: 0.5rem;
}

#content {
  width: 100%;
  background: #fcfcfc;
  overflow: hidden;
}

#content .ModuleOne {
  width: 3.45rem;
  height: 2.8rem;
  margin-top: 0.1rem;
  margin-left: 0.14rem;
  overflow: hidden;
  background: #fff;
}

#content .ModuleOne .top {
  width: 3.1rem;
  height: 0.5rem;
  background: #fff;
  margin-left: 0.16rem;
  margin-top: 0.14rem;
}

#content .ModuleOne .top .Img {
  width: 0.5rem;
  height: 0.5rem;
  float: left;
}

#content .ModuleOne .top .main {
  margin-left: 0.13rem;
  width: 1.9rem;
  height: 0.5rem;
  float: left;
  position: relative;
}

#content .ModuleOne .top .main p:nth-of-type(1) {
  font-size: 0.16rem;
  position: absolute;
  top: 0.1rem;
  font-weight: 700;
  left: 0;
}

#content .ModuleOne .top .main p:nth-of-type(2) {
  font-weight: 700;
  font-size: 0.1rem;
  position: absolute;
  top: 0.34rem;
  left: 0;
}

#content .ModuleOne .top a {
  display: block;
  width: 0.24rem;
  height: 0.35rem;
  float: right;
}

#content .ModuleOne .top a img {
  width: 0.14rem;
  height: 0.14rem;
  margin-top: 0.18rem;
}

#content .ModuleOne .bottom {
  width: 3.1rem;
  height: 2.5rem;
  margin-left: 0.16rem;
  margin-top: 10px;
  overflow-x: auto;
  display: flex;
}

#content .ModuleOne .bottom .swiper {
  width: 1.14rem;
  height: 1.9247rem;
  justify-content: space-around;
  margin-right: 0.1rem;
}

#content .ModuleOne .bottom .swiper p {
  font-size: 0.14rem;
  color: #ccc;
  text-align: center;
}

#content .ModuleOne .bottom .swiper img {
  width: 1.07rem;
  height: 1.46rem;
  margin-top: 0.29rem;
}
</style>
