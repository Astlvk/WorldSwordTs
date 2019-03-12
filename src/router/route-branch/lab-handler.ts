import Vue from 'vue';
import Router from 'vue-router';
import { Route, RawLocation } from 'vue-router';
import { getModule } from 'vuex-module-decorators';
import UserState from '@/store/lab/User';
import PermissionState from '@/store/lab/Permission';
import NProgress from 'nprogress'; // progress bar

export default class LabHandler {
  private whiteList: string[] = ['/lab/login'];

  public handler(
    router: Router,
    to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void): void {
    NProgress.start();
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
        const routeMap = permissionState.labRoute;
        window.console.log(routeMap);
        if (routeMap.length === 0) {
          // 获取服务端存储的路由表
          userState.GetUserRouteMap().then((userRouteMap) => { // 获取成功后开始构建
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
      if (this.whiteList.indexOf(to.path) > -1) { // 未登录允许访问的路由
        next();
      } else { // 没有权限的访问重定向到lab组件的login页面
        next(`/lab/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  }
}
