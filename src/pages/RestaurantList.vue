<template>
  <ul v-if="ready">
    <li v-for="restaurant in restaurants" :key="restaurant.name">
      <RestaurantCard :restaurant="restaurant" :image="image" />
    </li>
  </ul>
  <ul v-else>
    <li v-for="n in 10" :key="n">
      <Skeleton />
    </li>
  </ul>
</template>

<script>
import RestaurantCard from 'components/RestaurantCard.vue';
import Skeleton from 'components/Skeleton.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { RestaurantCard, Skeleton },
  data() {
    return {
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    };
  },
  computed: {
    ...mapGetters('restaurantStore', ['restaurants']),
    ready() {
      return !!this.restaurants.length;
    },
  },
  methods: {
    ...mapActions('restaurantStore', ['queryRestaurants']),
  },
  async mounted() {
    await this.queryRestaurants();
  },
};
</script>
