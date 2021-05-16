/* Restaurant Store */

const namespaced = true;

const state = () => ({
  restaurants: [],
  restaurant: {},
  error: null,
});

const getters = {
  restaurants: (state) => state.restaurants,
  restaurant: (state) => state.restaurant,
  error: (state) => state.error,
};

const mutations = {
  setRestaurants: (state, values) => state.restaurants = values,
  setRestaurant: (state, value) => state.restaurant = value,
  error: (state, value) => state.error = value,
};

const actions = {
  queryRestaurants: async (context, payload) => new Promise((resolve, reject) => {
    const request = async () => {
      try {
        const { search /* location */ } = payload;
        const response = await fetch(`
      https://d1o8lt9womy1vs.cloudfront.net/restaurants?search=${search}`,
        {
          Headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        const result = response.json();
        const restaurants = await result;
        context.commit('setRestaurants', restaurants);
        return resolve();
      } catch (err) {
        context.commit('error', err);
        return reject(err);
      }
    };
    request();
  }),
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
