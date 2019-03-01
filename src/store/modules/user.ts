import { Store, StoreOptions, Module } from 'vuex';
import UserMenu from '@/entity/lab/UserMenu';

interface UserStatus {
  token: string | null;
  userMenu: UserMenu | null;
}

const user: Module<UserStatus, StoreOptions<any>> = {
  state: {
    token: sessionStorage.getItem('token'),
    userMenu: null,
  },
  mutations: {
    SET_TOKEN(state: UserStatus, token: string | null): void {
      state.token = token;
    },
    SET_USER_MENU(statue: UserStatus, userMenu: UserMenu | null): void {
      statue.userMenu = userMenu;
    },
  },
  actions: {

  },
};

export default user;
