/* eslint-disable */

import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate'
import _ from 'lodash'
import router from './router'
import store from './store/store'
import i18n from './i18n/i18n'

Vue.use(VeeValidate)

var app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
