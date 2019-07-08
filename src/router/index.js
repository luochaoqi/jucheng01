import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Mine from './mine'
import Ticket from './ticket'
import Cinema from './cinema'
<<<<<<< HEAD
=======
import Xiangqing from './xiangqing/index.js'
import Yanchu from './yanchu'
>>>>>>> chaoqidev
Vue.use(Router)

export default new Router({
  routes: [
    Home,
    Mine,
    Ticket,
<<<<<<< HEAD
    Cinema
=======
    Cinema,
    Xiangqing,
    Yanchu,
    
>>>>>>> chaoqidev
    
  ]
})
