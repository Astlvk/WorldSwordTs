import Vue from 'vue';
import router from './router';
import { Message } from 'element-ui';
import { Route, RawLocation } from 'vue-router';

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  if (to.path) {
    window.console.log(to.path);
    next();
  }
});
