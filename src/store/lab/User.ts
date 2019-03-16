import store from '@/store/store';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import RouteMap from '@/type/lab/RouteMap';
import { getRouteMapByHttp } from '@/data-api/lab/user-api';

// @Module
// @Module({ store, name: 'userState'})
@Module({ dynamic: true, store, name: 'userState' })
export default class UserState extends VuexModule {
  public token: string | null = sessionStorage.getItem('lab-token');
  public routeMap: RouteMap[] | null = null;

  @Mutation
  public SET_TOKEN(token: string | null): void {
    this.token = token;
  }

  @Mutation
  public SET_USER_MENUS(routeMap: RouteMap[] | null): void {
    this.routeMap = routeMap;
  }

  @Action
  public async GetUserRouteMap(): Promise<RouteMap[] | null> {
    const res = await getRouteMapByHttp();
    this.SET_USER_MENUS(res);
    return res;
  }
}
