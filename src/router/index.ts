import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/fridges',
    name: 'Fridges',
    component: () => import(
      /* webpackChunkName: "fridges" */ '../views/Fridges.vue'
    ),
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import(
      /* webpackChunkName: "information" */ '../views/Information.vue'
    ),
  },
  {
    path: '/singleview',
    name: 'SingleView',
    component: () => import(
      /* webpackChunkName: "singleview" */ '../views/SingleView.vue'
    ), 
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
