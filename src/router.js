import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addressList',
      name: 'addressList',
      meta: {
        show: false
      },
      component: () => import('./views/AddressList.vue')
    },
    {
      path: '/address',
      name: 'address',
      meta: {
        show: false
      },
      component: () => import('./views/Address.vue')
    },
    {
      path: '/landTransportLineList',
      name: 'landTransportLineList',
      meta: {
        show: false
      },
      component: () => import('./views/LandTransportLineList.vue')
    },
    {
      path: '/dedicated',//专线渠道
      name: 'dedicated',
      component: () => import('./views/Dedicated.vue')
    },
    {
      path: '/newbuild',//新建专线渠道
      name: 'newbuild',
      component: () => import('./views/Newbuild.vue')
    },

    {
      path: '/editchannel',//新建专线渠道
      name: 'editchannel',
      component: () => import('./views/Editchannel.vue')
    },
  ]
})
