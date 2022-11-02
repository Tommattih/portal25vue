import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/do-bem',
    name: 'dobem',
    //faz mais sentido importar todos em cima e chamar o componente na rota?
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited..
    component: () =>
      import(/* webpackChunkName: "dobem" */ '../views/EnvironmentView.vue')
  },
  {
    path: '/mapas',
    name: 'maps',
    component: () =>
      import(/* webpackChunkName: "mapas" */ '../views/MapsView.vue')
  },
  {
    path: '/historia',
    name: 'history',
    component: () =>
      import(/* webpackChunkName: "historia" */ '../views/HistoryView.vue')
  },
  {
    path: '/servicos',
    name: 'services',
    component: () =>
      import(/* webpackChunkName: "servicos" */ '../views/ServicesView.vue')
  },
  {
    path: '/duvidas',
    name: 'faq',
    component: () =>
      import(/* webpackChunkName: "duvidas" */ '../views/FaqView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
