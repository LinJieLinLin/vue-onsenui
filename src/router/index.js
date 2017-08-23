import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import HomeTab from '../page/HomeTab'
import Login from '../page/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/a',
    name: 'HomeTab',
    component: HomeTab
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})
