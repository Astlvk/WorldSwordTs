import Vue from 'vue';
import store from '@/store';
import router from './router';
import { Message } from 'element-ui';
import { Route, RawLocation } from 'vue-router';

const whiteList: string[] = ['/lab/login', '/home', '/about', '/list'];

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  const token: string | null = store.state.user.token;
  // window.console.log(token);
  if (token) {
    // window.console.log(to.path);
    next();
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next(`/lab/login?redirect=${to.path}`);
    }
  }
});
