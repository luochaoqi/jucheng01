import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import "./common/index.js"
import { Loading } from 'vant'
Vue.config.productionTip = false
Vue.use(Loading)
Vue.prototype.$observe=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
