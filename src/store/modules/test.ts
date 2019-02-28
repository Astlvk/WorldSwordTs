import { Module } from 'vuex';

interface TestStatus {
  str: string;
}

const test: Module<TestStatus, TestStatus> = {
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
