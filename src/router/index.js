import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Mine from './mine'
import Ticket from './ticket'
import Cinema from './cinema'
import Xiangqing from './xiangqing/index.js'
import Yanchu from './yanchu'
Vue.use(Router)

export default new Router({
  routes: [
    Home,
    Mine,
    Ticket,
    Cinema,
    Xiangqing,
    Yanchu,
    
    
  ]
})
