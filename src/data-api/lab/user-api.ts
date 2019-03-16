import request from '../request';
import RouteMap from '@/type/lab/RouteMap';
import { AxiosResponse, AxiosPromise } from 'axios';

/**
 * 获取用户路由表接口
 */
export function getRouteMapByHttp(): Promise<RouteMap[]> {
  return new Promise((resolve, reject) => {
    const routeMap: RouteMap[] = [
      {
        title: 'List',
        icon: 'chart',
        name: 'LabList',
        path: 'list',
        alwaysShow: false,
        component: 'list/List',
        children: null,
      },
      {
        title: 'Test',
        icon: 'bug',
        name: 'LabTest',
        path: 'test',
        alwaysShow: false,
        component: 'Test',
        children: null,
      },
      {
        title: 'Menu',
        icon: 'tree',
        name: 'LabMenu',
        path: 'menu',
        redirect: 'menu/controller',
        alwaysShow: false,
        component: 'layout/LabMiddle',
        children: [
          {
            title: 'Menu',
            icon: 'tree',
            name: 'LabMenuController',
            path: 'controller',
            alwaysShow: false,
            component: 'menu/Controller',
            children: null,
          },
        ],
      },
      {
        title: 'Components',
        icon: 'component',
        name: 'LabComponents',
        path: 'components',
        redirect: 'components/drag',
        alwaysShow: false,
        component: 'layout/LabMiddle',
        children: [
          {
            title: 'Drag',
            icon: 'component',
            name: 'LabComponentsDrag',
            path: 'drag',
            alwaysShow: false,
            component: 'components/DragDialog',
            children: null,
          },
        ],
      },
    ];
    resolve(routeMap);
  });
}

/**
 * 登录接口
 * @param param
 */
export function getUserInfo(param: object): AxiosPromise {
  return request.post('lab/login', param);
}

/**
 * 退出接口
 * @param token
 */
export function logout(token: string): AxiosPromise {
  return request.delete('lab/logout');
}


