import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePg.vue'
// import About from '../views/AboutPg.vue'
import Menu from '../views/MenuPg.vue'
import Contact from '../views/ContactPg.vue'
import Location from '../views/LocationPg.vue'
import StoreDetail from '../views/StoreDetail.vue'
import PNF from '../views/PNF.vue'
import Privacy from '../views/PrivacyPg.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PNF
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/location/:storeName',
    name: 'StoreDetail',
    component: StoreDetail,
    props: true
  }
  ,
  {
    path: '/privacy-policy',
    name: 'Privacy-Policy',
    component: Privacy
  }
]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
})


export default router
