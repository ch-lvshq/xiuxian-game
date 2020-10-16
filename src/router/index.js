import Vue from 'vue'
import VueRouter from 'vue-router'
import Geren from '../views/Geren.vue'
import Zongmen from '../views/Zongmen.vue'
import Chumo from '../views/Chumo.vue'
import Lilian from '../views/Lilian.vue'
import XlXiulian from '../views/Geren/XlXiulian.vue'
import XlBeibao from '../views/Geren/XlBeibao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Geren',
    component: Geren,
    children: [
      {
        path: '/XlXiulian',
        name: 'XlXiulian',
        component: XlXiulian
      },
      {
        path: '/beibao',
        name: 'XlBeibao',
        component: XlBeibao
      },
      {
        path: '/',
        redirect: '/XlXiulian'
      }
    ]
  },
  {
    path: '/zongmen',
    name: 'Zongmen',
    component: Zongmen
  },
  {
    path: '/lilian',
    name: 'Lilian',
    component: Lilian
  },
  {
    path: '/chumo',
    name: 'Chumo',
    component: Chumo
  }
]

const router = new VueRouter({
  routes
})

export default router
