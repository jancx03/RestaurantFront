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
import axios from 'axios';

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
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      const restaurants = await axios.get('http://18.218.170.33/restaurants');
      this.restaurants = restaurants.data;
      this.ready = true;
    } catch (err) {
      this.error = err;
    }
  },
};
</script>

<style scoped>

</style>
