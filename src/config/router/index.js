import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/pages/index'
import Frame from '@/pages/frames/subroute'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Frame,
      children: [{
        path: '/',
        component: indexPage
      }]
    }
  ]
})
