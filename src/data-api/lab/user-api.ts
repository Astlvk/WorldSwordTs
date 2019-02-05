import request from '../request';
import UserMenu from '@/entity/lab/UserMenu';

export function getMenu(token: string): UserMenu[] {
  const menu: UserMenu[] = [
    new UserMenu('', 'Test', '/lab/test', []),
  ];
  return menu;
}
