import store from '@/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component:() => import('../views/admin/Dashboard.vue')
  },
  {
    path: '/admin/blogs',
    name: 'Blogs',
    component:() => import('../views/admin/Blogs.vue')
  },
  {
    path: '/admin/users',
    name: 'Users',
    component:() => import('../views/admin/Users.vue')
  },
  {
    path: '/admin/profile',
    name: 'Admin Profile',
    component:() => import('../views/admin/Profile.vue')
  },
  {
    path: '/blogs-page',
    name: 'Blogs Page',
    component:() => import('../views/user/BlogsPage.vue'),
  },
  {
    path: '/favorite-blogs',
    name: 'Favorite Blogs',
    component:() => import('../views/user/FavoriteBlogs.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component:() => import('../views/user/Profile.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    if(!store.getters.isLoggedIn) {
      next({name: 'Login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
