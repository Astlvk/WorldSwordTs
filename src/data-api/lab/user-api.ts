import request from '../request';
import UserMenu from '@/entity/lab/UserMenu';
import { AxiosResponse } from 'axios';

export function getMenu(): UserMenu[] {
  const menuArr: UserMenu[] = [
    new UserMenu('el-icon-news', 'List', '/lab/list', []),
    new UserMenu('el-icon-menu', 'Test', '/lab/test', []),
    new UserMenu('el-icon-location', 'TestChildren', 'TestChildren/lab/ts', [
      new UserMenu('', '测试子节点1', '/lab/ts1', []),
      new UserMenu('', '测试子节点2', '测试子节点2/lab/ts2', [
        new UserMenu('', '测试子节点2-1', '/lab/ts11', []),
        new UserMenu('', '测试子节点2-2', '/lab/ts22', []),
      ]),
    ]),
    new UserMenu('el-icon-location', 'Hello Wind', 'Hello Wind/lab/tss', [
      new UserMenu('', '测试子节点3', '/lab/ts1', []),
      new UserMenu('', '测试子节点4', '测试子节点3/lab/ts2', [
        new UserMenu('', '测试子节点4-1', '/lab/ts11', []),
        new UserMenu('', '测试子节点4-2', '/lab/ts22', []),
      ]),
    ]),
  ];
  return menuArr;
}

export function getMenuByHttp(): Promise<UserMenu[]> {
  return new Promise((resolve, reject) => {
    resolve([
      new UserMenu('', 'Test', '/lab/test', []),
    ]);
  });
}
