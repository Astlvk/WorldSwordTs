import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
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
          component: Home,
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
      redirect: 'lab/list',
      name: 'lab',
      component: () => import('./views/lab/Index.vue'),
      children: [
        {
          path: 'list',
          name: 'labList',
          components: {
            default: () => import('./views/lab/list/List.vue'),
            asideMenu: () => import('./views/lab/IndexAsideMenu.vue'),
          },
        },
      ],
    },
  ],
});
