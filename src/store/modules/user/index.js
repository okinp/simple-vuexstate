const state = {
  user: null
};

const getters = {
  user: state => state.user
};

const mutations = {
  initialize: () => {},
  setUser: (state, user) => {
    state.user = user;
  }
};

const actions = {
  initialize({ commit }) {
    commit("initialize");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
