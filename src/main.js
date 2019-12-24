/*
js入口
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import '../public/css/reset.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
