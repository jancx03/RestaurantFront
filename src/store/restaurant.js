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
      const { search } = payload;

      const keys = Object.keys(payload);
      let params = '';

      let parameterCount = 0;

      keys.map((key) => {
        if (payload[key] !== undefined) {
          if (parameterCount === 0) {
            params = params.concat(`?${key}=${payload[key]}`);
            parameterCount++;
          } else {
            params = params.concat(`&${key}=${payload[key]}`);
            parameterCount++;
          }
        }
        return 0;
      });

      const apiUrl = `https://d1o8lt9womy1vs.cloudfront.net/restaurants${params}`;

      console.log(apiUrl);

      try {
        const response = await fetch(apiUrl,
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
