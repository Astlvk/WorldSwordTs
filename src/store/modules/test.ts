import { Module, StoreOptions } from 'vuex';

interface TestStatus {
  str: string;
}

const test: Module<TestStatus, StoreOptions<any>> = {
  state: {
    str: 'default',
  },
  mutations: {
    SET_STR(state, str: string): void {
      state.str = str;
    },
  },
  actions: {

  },
};

export default test;
