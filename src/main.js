import Vue from 'vue'
import { router } from './route/route.js'
import store from './vuex/store'
import App from './App'



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

