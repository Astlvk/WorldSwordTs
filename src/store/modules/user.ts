import { Store, StoreOptions } from 'vuex';

interface UserStatus {
  token: string | null;
}

const user: StoreOptions<UserStatus> = {
  state: {
    token: '',
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
