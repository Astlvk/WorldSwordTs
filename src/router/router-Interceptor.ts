import Vue from 'vue';
import router from './router';
import { Message, Form } from 'element-ui';
import { Route, RawLocation } from 'vue-router';
import LabHandler from './route-branch/lab-handler';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  window.console.log('route path: ', to.path);
  const projectPath = to.path.split('/')[1];
  window.console.log('route root path: ', projectPath);
  // 存储对应当前组件的path标识, 用于axios在请求拦截器中判断当前请求从属于哪个组件
  sessionStorage.setItem('rootPath', projectPath);
  switch (projectPath) {
    case 'lab':
      const labHandler = new LabHandler();
      labHandler.handler(router, to, from, next);
      // LabHandler(router, whiteList, to, from, next);
      break;
    default:
      next();
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
