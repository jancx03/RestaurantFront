<template>
  <u v-if="ready">
    <li v-for="restaurant in restaurants" :key="restaurant.restaurant">
      {{restaurant.restaurant}}
    </li>
  </u>
  <h3 v-else>Loading...</h3>
  <h2>Error</h2>
  <h3>{{ error }}</h3>
  <h2>Restaurants</h2>
  <h3>{{ restaurants }}</h3>
</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
      error: '',
      ready: false,
    };
  },
  async mounted() {
    try {
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      const response = await fetch('https://d1o8lt9womy1vs.cloudfront.net/restaurants', {
        Headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      const result = response.json();
      const restaurants = await result;
      this.restaurants = restaurants;
      this.ready = true;
      return 0;
    } catch (err) {
      this.error = err;
      return 1;
    }
  },
};
</script>

<style scoped>

</style>
