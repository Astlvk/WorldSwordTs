import Vue from 'vue';
import store from '@/store';
import router from './router';
import { Message, Form } from 'element-ui';
import { Route, RawLocation } from 'vue-router';
import { getModule } from 'vuex-module-decorators';
import UserState from '@/store/modules/User';
import PermissionState from '@/store/modules/Permission';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList: string[] = ['/login', '/home', '/about'];

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  NProgress.start(); // start progress bar
  window.console.log(to.path);
  const userState = getModule(UserState);
  const permissionState = getModule(PermissionState);
  if (userState.token) {// 存在token表示已登录
    if (to.path === '/login') {
      next('/');
      NProgress.done();
    } else {
      // 这里构建异步路由
      // 判断是否存在已构建的路由表
      const routeMap = permissionState.labAddRoute;
      if (routeMap.length === 0) {
        // 获取服务端存储的路由表
        userState.GetUserRouteMap().then((userRouteMap) => {
          permissionState.GenerateRoutes(userRouteMap!).then((asyncRouteMap) => {
            router.addRoutes(asyncRouteMap);
            next({ ...to, replace: true });
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
