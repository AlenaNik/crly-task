import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import CustomerTransactions from '../components/CustomerTransactions'
import UpdateInfo from '../components/UpdateInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/transactions',
      name: 'CustomerTransactions',
      component: CustomerTransactions
    },
    {
      path: '/edit-address/:id',
      name: 'UpdateInfo',
      component: UpdateInfo
    }
  ]
})
