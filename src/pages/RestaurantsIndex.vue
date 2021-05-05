<template>
  <TheSearchBar />
  <!-- <RestaurantList :restaurants="restaurants"/> -->
</template>

<script>
// import Restaurants from 'components/Restaurant.vue';
import TheSearchBar from 'components/TheInputBar.vue';
// import RestaurantList from 'components/RestaurantList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { TheSearchBar },
  // data() {
  //   return {
  //     restaurants: [{
  //       name: 'Nicks Pizza', type: 'Italian', contact: '(212) 987-5700', address: '1814 2nd Ave', accessibility: 'No', cost: '$$', kid_friendly: 'Yes', reserve: 'No', star_rate: 4,
  //     }],
  //   };
  // },
  computed: {
    ...mapGetters('restaurantStore', ['restaurants']),
  },
  methods: {
    ...mapActions('restaurantStore', ['queryRestaurants']),
  },
  async beforeMount() {
    await this.queryRestaurants();
    return 0;
  },
};
</script>
