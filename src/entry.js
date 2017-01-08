// entry.js

import Vue from 'vue/dist/vue.js' // Standalone version of Vue.
import VueRouter from 'vue-router' 
import axios from 'axios'
Vue.use(VueRouter)
Vue.prototype.$http = axios

import App from './components/App.vue'
import Home from './components/Home.vue'


let router = new VueRouter({
  mode: 'history',
  base: '#',
  routes: [
    { path: '/', component: Home },
  ]
})
window.onload = function () {

  new Vue({
    el: 'app',
    router,
    render: (h) => h(App)
  })
}
