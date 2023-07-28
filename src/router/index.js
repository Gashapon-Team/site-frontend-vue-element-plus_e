import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../page/Index.vue'),
    meta:{
      activeMenuName: "Index"
    },
    children:[
    {
      path:'kFCValidation',
      component:() => import('../components/AdminKycValidation.vue'),
      meta:{
        activeMenuName: "kYCValidation"
      }
    },
    {
      path:'infoSetting',
      component: () => import('../components/AdminInfoSetting.vue'),
      meta: {
        activeMenuName: "infoSetting"
      },
    }
  ]
  },
  {
    path:'/validationInfo',
    component:() => import('../components/ValidationPage.vue'),
    meta:{
      activeMenuName: "validationInfo"
    }
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import('../page/ErrorPage.vue'),
  //   meta:{
  //     activeMenuName: "errorPage"
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
