import Vue from 'vue';
import Router from 'vue-router';
import { Route, RawLocation } from 'vue-router';
import { getModule } from 'vuex-module-decorators';
import UserState from '@/store/modules/User';
import PermissionState from '@/store/modules/Permission';
import NProgress from 'nprogress'; // progress bar

export default function(
  router: Router,
  whiteList: string[],
  to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) {
  NProgress.start(); // start progress bar
  const userState = getModule(UserState);
  const permissionState = getModule(PermissionState);
  userState.SET_TOKEN(sessionStorage.getItem('token'));
  if (userState.token) {// 存在token表示已登录
    if (to.path === '/lab/login') {
      next('/lab');
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
      next(`/lab/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
}
