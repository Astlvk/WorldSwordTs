import Vue from 'vue';
import router from './router';
import { Message, Form } from 'element-ui';
import { Route, RawLocation } from 'vue-router';
import LabHandler from './route-branch/lab-handler';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList: string[] = ['/lab/login', '/home', '/about'];

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  // window.console.log(to.path);
  const projectPath = to.path.split('/')[1];
  // window.console.log(projectPath);
  switch (projectPath) {
    case 'lab':
      LabHandler(router, whiteList, to, from, next);
      break;
    default:
      next();
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
