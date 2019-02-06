import request from '../request';
import UserMenu from '@/entity/lab/UserMenu';
import { AxiosResponse } from 'axios';

export function getMenu(): UserMenu[] {
  const menuArr: UserMenu[] = [
    new UserMenu('', 'List', '/lab/list', []),
    new UserMenu('', 'Test', '/lab/test', []),
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
