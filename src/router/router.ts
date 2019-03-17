import Vue from 'vue';
import Router from 'vue-router';
import mainContainer from '@/views/MainContainer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      name: 'mainContainer',
      component: mainContainer,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ '@/views/MainContainerHome.vue'),
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/MainContainerAbout.vue'),
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/lab/list/List.vue'),
        },
      ],
    },
    {
      path: '/test',
      name: 'RouterTest',
      redirect: '/test/c0',
      component: () => import('@/components/RouterTest.vue'),
      children: [
        {
          path: 'c0',
          name: 'c0',
          component: () => import('@/components/Ctest0.vue'),
        },
      ],
    },
    {
      path: '/test2',
      name: 'RouterTest',
      redirect: '/test2/c1',
      component: () => import('@/components/RouterTest.vue'),
      children: [
        {
          path: 'c1',
          name: 'c1',
          component: () => import('@/components/Ctest.1.vue'),
        },
      ],
    },
    // Lab下的登陆组件
    {
      path: '/lab/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "lab-login" */ '@/views/lab/login/Login.vue'),
    },
  ],
});
