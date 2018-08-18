import Vue from 'vue'
import Router from 'vue-router'
import NewBalance from '@/components/NewBalance'
import AddExpenditure from '@/components/AddExpenditure'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddExpenditure',
      component: AddExpenditure
    },
    {
      path: '/new',
      name: 'NewBalance',
      component: NewBalance
    }
  ]
})
