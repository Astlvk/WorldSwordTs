import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import user from './store/modules/user';
import test from './store/modules/test';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  user,
  test,
};

export default new Vuex.Store({
  modules,
});
