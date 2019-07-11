<template>
  <div class="loca">
    <div class="header">
      <span> ＜ </span>
      <p>切换城市</p>
    </div>
    <div class="wrap">
      <p>当前城市</p>
      <div class="curent">
      <a href="">
          {{curcity}}
      </a>
      </div>
      <p>定位城市</p>
      <div class="dingwei">
        <a href="">深圳</a>
      </div>
      <p>热门城市</p>
      <div class="area_wrap">
           <a v-for="(itm,inde) in  hotlist" :key="inde" href="javscript:;" @click="chekoutCity(itm)" >
               {{itm}}
           </a>
      </div>
      <div class="all_city">
        <div class="citylist" v-for="(item,index) in citylist" :key="index">
          <h5>{{item.id}}</h5>
          <p v-for="(itm,inde) in  item.lists" :key="inde">{{itm.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { locallist } from "../../api/local.js";
export default {
  data() {
    return {
      citylist: [],
      hotlist:[],
      curcity:"全国"
    };
  },
  async created() {
    let data = await locallist();
   let hot =[]
    this.citylist = data.city_list;
    console.log(this.citylist)
    for(var key in this.citylist){
      
        this.citylist[key].lists.map((data)=>{
           if(data.is_city==0){
              hot.push(data.name)
           }
        })
    }
     hot.unshift("全国")
    this.hotlist=hot;
 
  },
  methods:{
      chekoutCity(city){
          this.curcity=city;
          var a=city
          console.log(a)
          this.$observe.$emit("curcity",a)
          this.$router.push("/home");
          
      }
  }
};
</script>

<style scoped>
.loca {
  width: 100%;
  height: 100%;
}
.header>span{
  display: inline-block;
  position: absolute;
  top: 0.12rem;
}
.header {
  height: 0.44rem;
  padding: 0 0.3rem 0 0.15rem;
  border-bottom: 1px solid #666;
}
.header p {
  width: 100%;
  height: 0.44rem;
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.16rem;
  font-weight: 700;
}
.wrap{
    padding: 0.1rem 0.15rem 0;
    overflow: auto;
    height: 100%;
}
.wrap>p{
    height: 0.32rem;
    color: #999999;
    font-size: 0.12rem;
    padding: 0.15rem 0 0;
}

.citylist h5{
    height: 0.25rem;
    background: #f6f6f6;
    color:#666;
    line-height: 0.25rem;
    font-size: 0.15rem;
}
.citylist p{
    height: 0.45rem;
    line-height: 0.45rem;
    color: #333333;
    border-top: 1px solid #e6e6e6;
    font-size: 0.15rem;
}
 .curent a{
    display: inline-block;
    width: 1.05rem;
    height:0.3rem;
    line-height: 0.3rem;
    background-color: #f5f5f5;
    font-size: 0.13rem;
    color: #212121;
    text-align: center;
    border-radius: 0.05rem;
    margin: 0.12rem 0 0;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.dingwei a{
    display: inline-block;
    width: 1.05rem;
    height:0.3rem;
    line-height: 0.3rem;
    background-color: #f5f5f5;
    font-size: 0.13rem;
    color: #212121;
    text-align: center;
    border-radius: 0.05rem;
    margin: 0.12rem 0 0;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.area_wrap a{
    display: inline-block;
    width: 0.9rem;
    height:0.3rem;
    line-height: 0.3rem;
    background-color: #f5f5f5;
    font-size: 0.13rem;
    color: #212121;
    text-align: center;
    border-radius: 0.05rem;
    margin: 0.12rem 0.12rem;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>






