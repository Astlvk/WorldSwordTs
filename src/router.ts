import Vue from 'vue';
import Router from 'vue-router';
import mainContainer from './views/MainContainer.vue';

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
          component: () => import(/* webpackChunkName: "home" */ './views/MainContainerHome.vue'),
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/MainContainerAbout.vue'),
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/lab/list/List.vue'),
        },
      ],
    },
    {
      path: '/lab',
      name: 'lab',
      component: () => import('./views/lab/Lab.vue'),
      children: [
        {
          path: '',
          redirect: 'list',
          components: {
            LabContainer: () => import('./views/lab/LabContainer.vue'),
            LabHeader: () => import('./views/lab/LabHeader.vue'),
            LabAsideMenu: () => import('./views/lab/LabAsideMenu.vue'),
          },
          children: [
            {
              path: 'list',
              name: 'labList',
              component: () => import('./views/lab/list/List.vue'),
            },
            {
              path: 'test',
              name: 'test',
              component: () => import('./views/lab/Test.vue'),
            },
          ],
        },
        // {
        //   path: 'list',
        //   name: 'labList',
        //   components: {
        //     default: () => import('./views/lab/list/List.vue'),
        //     LabHeader: () => import('./views/lab/LabHeader.vue'),
        //     LabAsideMenu: () => import('./views/lab/LabAsideMenu.vue'),
        //   },
        // },
        // {
        //   path: 'test',
        //   name: 'test',
        //   component: () => import('./views/lab/Test.vue'),
        // },
      ],
    },
  ],
});
