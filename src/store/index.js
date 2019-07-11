import Vue from 'vue'
import Vuex from 'vuex'
import citylocal from "./city/index.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    citylocal
  }
   
})
