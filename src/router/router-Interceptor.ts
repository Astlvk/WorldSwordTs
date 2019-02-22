import router from './router';
import { Message } from 'element-ui';
import { Route } from 'vue-router';

router.beforeEach((to: Route, from: Route, next) => {
  if (to.path) {
    next();
  }
});
