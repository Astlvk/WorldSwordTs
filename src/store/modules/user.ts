import { Store, StoreOptions, Module } from 'vuex';

interface UserStatus {
  token: string | null;
}

const user: Module<UserStatus, UserStatus> = {
  state: {
    token: sessionStorage.getItem('token'),
  },
  mutations: {
    SET_TOKEN(state: UserStatus, token: string | null): void {
      state.token = token;
    },
  },
  actions: {

  },
};

export default user;
