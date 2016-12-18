import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Filters from './filters.js'

// Vue.use(VueRouter)
//
// const Home = {template: '<div>Essa é a home</div>'}
// const Dash = {template: '<div>Essa é a dash</div>'}
//
// const routes = [
//   {path: '/home', component: Home},
//   {path: '/dash', component: Dash}
// ]
//
// const Router = new VueRouter({
//   routes,
//   mode: 'history' //remove a # da URL
// })

new Vue({
  el: '#app',
  // router: Router,
  render (createElement) {
    return createElement(App)
  }
})
