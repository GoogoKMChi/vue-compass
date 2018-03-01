// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import GoogoKMChi from './GoogoKMChi'
import router from './config/router'
import store from './config/store/index'
import axios from 'axios'
import 'normalize.css'
import './asset/style/style.scss'
import '../static/js/common'

Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#GoogoKMChi',
  router,
  store,
  components: { GoogoKMChi },
  template: '<GoogoKMChi/>'
})
