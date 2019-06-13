import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./modules/user";

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    user
  },
  strict: debug,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    initialize({ dispatch }, module) {
      dispatch(module + "/initialize");
    }
  }
});

export default store;
