import Vue from 'vue'
import Router from 'vue-router'

import Locale from '@/views/Locale'
import Step1 from '@/views/Step1'
import Step2 from '@/views/Step2'
import Step3 from '@/views/Step3'

Vue.use(Router)

export default new Router({
  mode: 'hash',

  base: '/step1',

  linkActiveClass: 'open active',

  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/',
      redirect: '/locale',
      name: 'Home',
      component: Step1
    },
    {
      path: '/locale',
      name: 'Locale',
      component: Locale
    },
    {
      path: '/step1',
      name: 'Step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'Step2',
      component: Step2
    },
    {
      path: '/step3',
      name: 'Step3',
      component: Step3
    }
  ]
})
