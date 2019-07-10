import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Mine from './mine'
import Ticket from './ticket'
import Cinema from './cinema'
import Xiangqing from './xiangqing/index.js'
import Yanchu from './yanchu'
import search from "./search"
import local from "./local"
import Homebody from "../views/Home"
import Detail from './detail'
Vue.use(Router)

export default new Router({
  routes: [
    Mine,
    Ticket,
    Xiangqing,
    Yanchu,
    Detail,
    Home,
    local,
    search,
    Cinema,
    // Show
  ]
})
