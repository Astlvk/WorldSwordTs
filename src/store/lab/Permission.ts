import store from '@/store/store';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { RouteConfig } from 'vue-router';
import RouteMap from '@/type/lab/RouteMap';

function asyncRouteMapFilter(data: RouteMap[]): RouteConfig[] {
  const asyncRouteMap: RouteConfig[] = [];
  for (const item of data) {
    const routeMap: RouteConfig = {
      path: item.path,
      name: item.name,
    };
    if (item.redirect !== undefined) {
      routeMap.redirect = item.redirect;
    }
    if (item.component !== null) {
      routeMap.component = () => import(`@/views/lab/${item.component}.vue`);
    }
    if (item.children !== null) {
      routeMap.children = asyncRouteMapFilter(item.children);
    }
    asyncRouteMap.push(routeMap);
  }
  return asyncRouteMap;
}

@Module({ dynamic: true, store, name: 'permissionmState' })
export default class Permission extends VuexModule {
  public labRoute: RouteConfig[] = [];
  public labAddRoute: RouteConfig[] = [];

  @Mutation
  public SET_LAB_ROUTE(labRoute: RouteConfig[]): void {
    this.labRoute = labRoute;
  }

  @Mutation
  public SET_LAB_ADD_ROUTE(labAddRoute: RouteConfig[]): void {
    this.labAddRoute = labAddRoute;
  }

  /**
   * 使用服务端保存的路由表构建前端使用的路由配置对象
   * @param {string} data 服务端保存的路由表数据
   * @return {Promise<RouteConfig[]>} 返回Promise<RouteConfig[]>. 构建后的vue route对象;
   */
  @Action
  public GenerateRoutes(data: RouteMap[]): Promise<RouteConfig[]> {
    return new Promise((resolve, reject) => {
      // 构建异步路由表
      // const routeMap: RouteConfig[] = this.asyncRouteMapfilter(data);
      const asyncRouteMap: RouteConfig[] = asyncRouteMapFilter(data);
      const labRoute: RouteConfig[] = [{
        path: '/lab',
        name: 'Lab',
        redirect: '/lab/list',
        component: () => import('@/views/lab/layout/Lab.vue'),
        children: asyncRouteMap,
      }];
      window.console.log(labRoute);
      this.SET_LAB_ADD_ROUTE(asyncRouteMap);
      this.SET_LAB_ROUTE(labRoute);
      resolve(labRoute);
    });
  }

}
