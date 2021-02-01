import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('./pages/case/Case.vue')
    },
    {
      path: '/casedetails/:id',
      name: 'casedetails',
      component: () => import('./pages/case/CaseDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/about/About.vue'),
    },

    {
      path: '/business',
      name: 'business',
      component: () => import('./pages/business/Business')
    },
    {
      path: '/solution',
      name: 'solution',
      component: () => import('./pages/solution/Solution.vue')
    },
    {
      path: '/companyDynamics',
      name: 'companyDynamics',
      component: () => import('./pages/companyDynamics/CompanyDynamics.vue')
    },
    {
      path: '/companyDynamicdetails/:id',
      name: 'companyDynamicdetails',
      component: () => import('./pages/companyDynamics/CompanyDynamicsDetails.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('./pages/contactUs/ContactUs.vue')
    },
    {
      path: '/systemLogin',
      name: 'systemLogin',
      component: () => import('./pages/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: false
      },
      component: () => import('./pages/Admin.vue'),
      children: [{
        path: '/admin/user',
        name: 'user',
        component: () => import('./pages/admin/User.vue')
      },
        {
          path: '/admin/news',
          name: 'new',
          component: () => import('./pages/admin/News.vue')
        },
        {
          path: '/admin/cases',
          name: 'cases',
          component: () => import('./pages/admin/Cases.vue')
        },
        {
          path: '/admin/course',
          name: 'course',
          component: () => import('./pages/admin/Course.vue')
        },
        {
          path: '/admin/enterprise',
          name: 'enterprise',
          component: () => import('./pages/admin/Enterprise.vue')
        },
        {
          path: '/admin/job',
          name: 'job',
          component: () => import('./pages/admin/Job.vue')
        },
        {
          path: '/admin/dictionary',
          name: 'dictionary',
          component: () => import('./pages/admin/Dictionary.vue')
        },
        {
          path: '/admin/imgDictionary',
          name: 'imgDictionary',
          component: () => import('./pages/admin/ImgDictionary.vue')
        },
      ]
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
