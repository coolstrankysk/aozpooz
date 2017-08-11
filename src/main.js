/* eslint-disable */

import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate'
import _ from 'lodash'
import router from './router'
import store from './store/store'

Vue.use(VeeValidate)

var app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
