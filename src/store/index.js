/* eslint-disable no-shadow */
import { createStore } from 'vuex';
import restaurantStore from './restaurant.js';

const modules = { restaurantStore };

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
  modules,
  state,
  getters,
  actions,
  mutations,
});
