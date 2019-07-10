import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import "./common/index.js"
Vue.config.productionTip = false
Vue.prototype.$observe=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
