import Vue from "vue";
import Tabs from "./Tabs";
import BScroll from "./BScroll";
import Loading from "./loading"
Vue.component("Tabs",Tabs)
Vue.component("BScroll",BScroll)
Vue.component("Loading",Loading)


// Vue.filter("toImg",(url,params)=>{
//     return url.replace(/w\.h/,params);
// })