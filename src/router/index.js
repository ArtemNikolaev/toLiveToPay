import Vue from 'vue'
import Router from 'vue-router'
import NewBalance from '@/components/NewBalance'
import AddExpenditure from '@/components/AddExpenditure'

Vue.use(Router);

export default new Router({
  routes: [
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
