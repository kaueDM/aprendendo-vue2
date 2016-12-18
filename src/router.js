import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template: '<div>Essa é a home</div>'}
const Dash = {template: '<div>Essa é a dash</div>'}

const routes = [
  {path: '/home', component: Home},
  {path: '/dash', component: Dash}
]
/*
usando ES2015, é possível passar só ROUTES, já que o parâmetro é igual ao valor
Ex. routes:routes
*/
const Router = new VueRouter({routes})
