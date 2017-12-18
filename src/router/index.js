import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Company from '@/components/Company'
import JoinUs from '@/components/JoinUs'
import Service from '@/components/Service'
import Newsflash from '@/components/Newsflash'
import NewList from '@/admin/new-list'
import EditAdd from '@/admin/edit-add'
import Login from '@/admin/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: HomePage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/newsflash',
      name: 'Newsflash',
      component: Newsflash
    },
    {
      path: '/joinUs',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/admin',
      name: 'admin',
      component: NewList
    },
    {
      path: '/admin/edit',
      name: 'editAdd',
      component: EditAdd
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    }
  ]
})
