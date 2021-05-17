import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Login',
      path: '/',
      component: () => import('@/login/Login')
    },
    {
      name: 'Home',
      path: '/home',
      component: () => import('@/view/Home'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((recoder) => recoder.meta.requiresAuth )) {
    if(!sessionStorage.token) {
      console.log('s')
      next({
        name: 'Login',
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router


