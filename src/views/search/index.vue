<template>
  <div class="search_wrap">
    <div class="search">
      <input type="text" placeholder="搜索热门演出" v-model="inputVal" />
      <span @click="goback">取消</span>
    </div>
    <div class="hot" v-if="showflag">
      <p>热门搜索</p>
      <div class="hot_con">
        <li>猫</li>
        <li>罗密欧与朱丽叶</li>
        <li>摇滚红与黑</li>
        <li>小猪佩奇</li>
        <li>林宥嘉</li>
        <li>西城男孩</li>
      </div>
       
     
    </div>
    <ul  v-if="!showflag">
      <li v-for="(item,index) in list" :key="index">
        <div class="img">
          <img :src="item.pic" alt />
        </div>

        <div class="content">
          <p>{{item.show_time_top}}</p>
          <h3>{{item.name | capitalize}}</h3>
          <p>
            <span>{{item.city_name}}</span>|
            <span>{{item.venue_name}}</span>
          </p>
          <p>{{item.min_price}}起</p>
        </div>
      </li>
     
    </ul>
  </div>
</template>

<script scoped>
import { search } from "../../api/search.js";
import { constants } from "crypto";
export default {
  data() {
    return {
      inputVal: "",
      timer: null,
      list: [],
      showflag:true,
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      return value.replace(/<[^>]+>/g,"");
    }
  },
  methods:{
   goback(){
     this.$router.push("/home")
   }
  },
  watch: {
    inputVal(newVal) {
       
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        let data = await search(newVal);
         this.showflag=false;
        this.list = data.data.list;
      }, 500);
    }
  }
};
</script>

<style scoped>
.search_wrap {
  width: 100%;
  height: 100%;
}
.search {
  width: 100%;
  padding: 0 0.1rem;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
}
.search input {
  width: 3rem;
  height: 0.28rem;
  border-radius: 0.33rem;
  margin: 0;
  padding: 0 0.1rem;
  border: 1px solid #333;
}
.search > span {
  display: inline-block;
  margin: 0 0.1rem;
}
.hot {
   position: absolute;
  top: 0.5rem;
  width: 100%;
  bottom: 0;
  overflow: auto;
  padding: 0 0.2rem; 
}
.hot p{
    font-size: 0.14rem;
    height: 0.22rem;
    line-height: 0.22rem
}
.hot_con{
    margin-top: 0.2rem;
}
.hot_con li{
    float: left;
    margin: 0 0.14rem 0.14rem 0;
    padding: 0 0.27rem;
    background: #f5f5f5;
    color: #232323;
    height: 0.38rem;
    line-height: 0.38rem;
    }

ul {
  position: absolute;
  top: 0.5rem;
  width: 100%;
  bottom: 0;
  overflow: auto;
  padding: 0 0.2rem;
}
ul > li {
  border: 1px solid black;
  min-height: 0.1rem;
  overflow: hidden;
  margin: 0.15rem 0;
}
.list_wrap {
  height: 100%；;
}
.img {
  float: left;
  width: 1.22rem;
}
.img img {
  width: 1.21rem;
  height: 1.65rem;
}
.content {
  float: left;
  padding-left: 0.15rem;
  width: 1.9rem;
}

.content p:nth-of-type(1) {
  font-size: 0.17rem;
  height: 0.26rem;
  line-height: 0.26rem;
}
.content h3 {
  font-size: 0.18rem;
  margin-top: 0.13rem;

  overflow: hidden;
}
.content p:nth-of-type(2) {
  font-size: 0.12rem;
}
</style>

