<template>
  <div>
    <div id="header">
      <h3>剧院</h3>
    </div>
    <Loading v-if="loadingFlag" />
    <div class="scroll" ref="cinemaBody">
      <BScroll>
      <template>  
        <div class="content">
          <div class="ModuleOne" v-for="(item,index) in list" :key="index">
          <div class="top">
            <img class="Img" :src="item.pic" />
            <div class="main">
              <p>{{item.name}}</p>
              <p>{{item.count}}场在售演出</p>
            </div>
            <router-link tag="a" :to="{name:'recreation'}">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC"
              />
            </router-link>
          </div>
          <div class="bottom">
            <div class="swiper" v-for="(items,index) in item.show_list" :key="index">
              <p>{{items.show_time}}</p>
              <router-link :to="{name:'detail',params:{id:items.id}}">
                <img :src="items.pic" />
              </router-link>
            </div>
          </div>
        </div>
         </div>
        </template>
      </BScroll>
    </div>
    <router-view></router-view>
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
    console.log(this.list);
  }
  // mounted() {
  //   this.scroll = new BScroll(this.$refs.cinemaBody);
  // }

  // methods:{
  //   route(){
  //     this.$router.push("/detail/222")
  //   }
  // }
};
</script>

<style scoped>
.loading{
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading>i{
  font-size: 0.3rem;
}
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
.scroll::-webkit-scrollbar{
    display: none;
}

.content {
  width: 100%;
  background: #fcfcfc;
  /* overflow: auto; */
}

.content .ModuleOne {
  width: 3.45rem;
  height: 2.8rem;
  padding-top: 0.1rem;
  margin-left: 0.14rem;
  overflow: hidden;
  background: #fff;
}

.content .ModuleOne .top {
  width: 3.1rem;
  height: 0.5rem;
  background: #fff;
  margin-left: 0.16rem;
  margin-top: 0.14rem;
}

.content .ModuleOne .top .Img {
  width: 0.5rem;
  height: 0.5rem;
  float: left;
}

.content .ModuleOne .top .main {
  margin-left: 0.13rem;
  width: 1.9rem;
  height: 0.5rem;
  float: left;
  position: relative;
}

.content .ModuleOne .top .main p:nth-of-type(1) {
  font-size: 0.16rem;
  position: absolute;
  top: 0.1rem;
  font-weight: 700;
  left: 0;
}

.content .ModuleOne .top .main p:nth-of-type(2) {
  font-weight: 700;
  font-size: 0.1rem;
  position: absolute;
  top: 0.34rem;
  left: 0;
}

.content .ModuleOne .top a {
  display: block;
  width: 0.24rem;
  height: 0.35rem;
  float: right;
}

.content .ModuleOne .top a img {
  width: 0.14rem;
  height: 0.14rem;
  margin-top: 0.18rem;
}

.content .ModuleOne .bottom {
  width: 3.1rem;
  margin-left: 0.16rem;
  margin-top: 0.1rem;
  overflow-x: auto;
  display: flex;
}

.content .ModuleOne .bottom .swiper {
  width: 1.14rem;
  height: 1.9247rem;
  justify-content: space-around;
  margin-right: 0.1rem;
}

.content .ModuleOne .bottom .swiper p {
  font-size: 0.14rem;
  color: #ccc;
  text-align: center;
}

.content .ModuleOne .bottom .swiper img {
  width: 1.07rem;
  height: 1.46rem;
  margin-top: 0.29rem;
}
</style>
