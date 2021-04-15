/* eslint-disable no-shadow */
import { createStore } from 'vuex';

const state = () => ({
  items: [],
});

const getters = {
  items: (state) => state.items,
};

const actions = {};

const mutations = {
  addItem: (state, item) => state.items.push(item),
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
