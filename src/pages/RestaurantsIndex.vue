<template>
  <TheSearchBar />
  <RestaurantList :restaurants="restaurants"/>
</template>

<script>
// import Restaurants from 'components/Restaurant.vue';
import TheSearchBar from 'components/TheInputBar.vue';
import RestaurantList from 'components/RestaurantList.vue';

export default {
  components: { TheSearchBar, RestaurantList },
  data() {
    return {
      restaurants: [{
        name: 'Nicks Pizza', type: 'Italian', contact: '(212) 987-5700', address: '1814 2nd Ave', accessibility: 'No', cost: '$$', kid_friendly: 'Yes', reserve: 'No', star_rate: 4,
      }],
    };
  },
};
</script>
