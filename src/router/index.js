import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Mine from './mine'
import Ticket from './ticket'
import Cinema from './cinema'
import Detail from './detail'
Vue.use(Router)

export default new Router({
  routes: [
    Home,
    Mine,
    Ticket,
    Cinema,
    Detail
  ]
})
